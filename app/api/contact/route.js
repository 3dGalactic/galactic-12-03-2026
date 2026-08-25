import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";
import {
  ADMIN_EMAIL,
  checkRateLimit,
  validateEmail,
  sanitizeString,
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

    const rateLimitKey = `${req.headers.get("x-forwarded-for") || "anonymous"}:${sourcePage}`;
    if (!checkRateLimit(rateLimitKey, 5, 60 * 1000)) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again in a minute." },
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
