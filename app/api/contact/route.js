import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";
import {
  ADMIN_EMAIL,
  checkRateLimit,
  checkHourlyRateLimit,
  validateEmail,
  sanitizeString,
  isBlockedEmailDomain,
  isHoneypotTripped,
  isGibberish,
  processCentralizedSubmission,
} from "../../lib/sendEmail";

export async function POST(req) {
  try {
    let payload = {};
    const attachments = [];
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof File && value.name) {
          const bytes = await value.arrayBuffer();
          const buffer = Buffer.from(bytes);

          // Save copy locally in public/uploads if applicable
          try {
            const uploadDir = path.join(process.cwd(), "public", "uploads");
            await mkdir(uploadDir, { recursive: true });
            const savedFilePath = path.join(uploadDir, `${Date.now()}_${value.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`);
            await writeFile(savedFilePath, buffer);
          } catch (fileSaveErr) {
            console.warn("Local file save note:", fileSaveErr.message);
          }

          attachments.push({
            filename: value.name,
            content: buffer,
            contentType: value.type,
          });
        } else {
          payload[key] = value;
        }
      }
    } else {
      payload = await req.json();
    }

    const name = sanitizeString(payload.name || payload.fullName || "");
    const email = sanitizeString(payload.email || "");
    const phone = sanitizeString(payload.phone || payload.phoneNumber || "");
    const company = sanitizeString(payload.company || payload.institution || payload.organization || "");
    const subject = sanitizeString(payload.subject || payload.courseTitle || payload.role || "Website Inquiry");
    const message = sanitizeString(payload.message || payload.about || payload.description || payload.interests || payload.projectDetails || "");
    const sourcePage = sanitizeString(payload.sourcePage || payload.page || "Website");

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // LAYER 1: Block disposable / fake email domains
    if (isBlockedEmailDomain(email)) {
      console.warn(`[SPAM BLOCKED] Disposable email domain: ${email}`);
      return NextResponse.json(
        { success: false, message: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // LAYER 2: Honeypot — if hidden field is filled, it's a bot
    if (isHoneypotTripped(payload)) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from: ${req.headers.get("x-forwarded-for")}`);
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    // LAYER 3: Gibberish detection on all text fields
    if (isGibberish(name)) {
      console.warn(`[SPAM BLOCKED] Gibberish name: ${name}`);
      return NextResponse.json(
        { success: false, message: "Please enter your real full name." },
        { status: 400 }
      );
    }
    if (isGibberish(subject)) {
      console.warn(`[SPAM BLOCKED] Gibberish subject: ${subject}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid subject for your enquiry." },
        { status: 400 }
      );
    }
    if (isGibberish(company)) {
      console.warn(`[SPAM BLOCKED] Gibberish company: ${company}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid company or organization name." },
        { status: 400 }
      );
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a meaningful message (at least 10 characters)." },
        { status: 400 }
      );
    }
    if (isGibberish(message)) {
      console.warn(`[SPAM BLOCKED] Gibberish message from: ${email}`);
      return NextResponse.json(
        { success: false, message: "Your message appears to be invalid. Please describe your enquiry clearly." },
        { status: 400 }
      );
    }

    // LAYER 4: Rate limiting — 2 per minute, 3 per hour per IP
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const rateLimitKey = `${ip}:${sourcePage}`;
    if (!checkRateLimit(rateLimitKey, 2, 60 * 1000)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again in a minute." },
        { status: 429 }
      );
    }
    if (!checkHourlyRateLimit(ip, 3)) {
      return NextResponse.json(
        { success: false, message: "You have reached the submission limit. Please try again later." },
        { status: 429 }
      );
    }

    // Record submission locally for admin audit
    const newSubmission = {
      id: `sub_${Date.now()}`,
      timestamp: new Date().toISOString(),
      recipient: ADMIN_EMAIL,
      name,
      email,
      company: company || "N/A",
      phone: phone || "N/A",
      subject,
      message,
      sourcePage,
      attachmentsCount: attachments.length,
    };

    try {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });
      const storeFile = path.join(uploadDir, "contact_submissions.json");

      let existing = [];
      try {
        const raw = await readFile(storeFile, "utf-8");
        existing = JSON.parse(raw);
      } catch (e) {
        existing = [];
      }

      existing.unshift(newSubmission);
      await writeFile(storeFile, JSON.stringify(existing, null, 2), "utf-8");
    } catch (saveErr) {
      console.warn("Could not save submission log:", saveErr.message);
    }

    // Process & send Nodemailer email to admin@galactic-3d.com
    const result = await processCentralizedSubmission(
      {
        type: "production",
        ...payload,
        name,
        email,
        phone,
        company,
        subject,
        message,
        sourcePage,
      },
      attachments
    );

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      recipient: ADMIN_EMAIL,
      admin: result.admin,
      autoReply: result.autoReply,
    });
  } catch (error) {
    console.error("Centralized Contact Form API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again.",
        error: error.message,
        recipient: ADMIN_EMAIL,
      },
      { status: 500 }
    );
  }
}
