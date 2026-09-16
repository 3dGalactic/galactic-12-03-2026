import { NextResponse } from "next/server";
import {
  processCentralizedSubmission,
  checkRateLimit,
  checkHourlyRateLimit,
  validateEmail,
  isBlockedEmailDomain,
  isHoneypotTripped,
  isGibberish,
  sanitizeString,
} from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "send_email_ip";

    // LAYER 4: Rate limiting — 2 per minute, 3 per hour per IP
    if (!checkRateLimit(ip, 2, 60 * 1000)) {
      return NextResponse.json(
        { success: false, message: "Too many submission attempts. Please wait a minute." },
        { status: 429 }
      );
    }
    if (!checkHourlyRateLimit(ip, 3)) {
      return NextResponse.json(
        { success: false, message: "You have reached the submission limit. Please try again later." },
        { status: 429 }
      );
    }

    const contentType = req.headers.get("content-[#content-type]") || req.headers.get("content-type") || "";
    
    let body = {};
    let attachments = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        if (key === "resume" && value && typeof value === "object" && value.name) {
          // Keep resume file handled separately below
        } else {
          body[key] = value;
        }
      });

      const resumeFile = formData.get("resume");
      if (resumeFile && typeof resumeFile === "object" && resumeFile.name) {
        const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
        if (fileBuffer.byteLength > 10 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, message: "Resume file size exceeds 10MB limit." },
            { status: 400 }
          );
        }
        attachments.push({
          filename: resumeFile.name,
          content: fileBuffer,
        });
      }
    } else {
      body = await req.json();
    }

    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    // LAYER 1: Block disposable / fake email domains
    if (isBlockedEmailDomain(body.email)) {
      console.warn(`[SPAM BLOCKED] Disposable email domain: ${body.email}`);
      return NextResponse.json(
        { success: false, message: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // LAYER 2: Honeypot check
    if (isHoneypotTripped(body)) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Thank you for contacting Galactic 3D. Your submission has been received successfully. Our team will review your information and get back to you shortly via email, phone, or WhatsApp." },
        { status: 200 }
      );
    }

    // LAYER 3: Gibberish detection on name and message
    const name = sanitizeString(body.name || body.fullName || "");
    const message = sanitizeString(body.message || body.projectDetails || body.about || "");
    if (name && isGibberish(name)) {
      console.warn(`[SPAM BLOCKED] Gibberish name detected: ${name}`);
      return NextResponse.json(
        { success: false, message: "Please enter your real full name." },
        { status: 400 }
      );
    }
    if (message && isGibberish(message)) {
      console.warn(`[SPAM BLOCKED] Gibberish message detected from: ${body.email}`);
      return NextResponse.json(
        { success: false, message: "Your message appears to be invalid. Please describe your enquiry clearly." },
        { status: 400 }
      );
    }

    const result = await processCentralizedSubmission(body, attachments);

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Galactic 3D. Your submission has been received successfully. Our team will review your information and get back to you shortly via email, phone, or WhatsApp.",
      data: result,
    });
  } catch (error) {
    console.error("Unified Send-Email API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
