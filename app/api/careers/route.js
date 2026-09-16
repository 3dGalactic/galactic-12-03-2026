import { NextResponse } from "next/server";
import {
  processCentralizedSubmission,
  ADMIN_EMAIL,
  validateEmail,
  sanitizeString,
  isBlockedEmailDomain,
  isHoneypotTripped,
  isGibberish,
  checkRateLimit,
  checkHourlyRateLimit,
} from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "careers_ip";

    // Rate limiting
    if (!checkRateLimit(ip, 2, 60 * 1000)) {
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

    const formData = await req.formData();
    const name       = sanitizeString(formData.get("name") || formData.get("fullName") || "");
    const email      = sanitizeString(formData.get("email") || "");
    const phone      = sanitizeString(formData.get("phone") || formData.get("phoneNumber") || "");
    const position   = sanitizeString(formData.get("position") || formData.get("role") || "General Application");
    const coverLetter = sanitizeString(formData.get("coverLetter") || formData.get("about") || formData.get("message") || "");
    const userInput  = sanitizeString(formData.get("userInput") || formData.get("consentInput") || "YES I ACCEPT");

    // Basic required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    // Honeypot
    const rawPayload = Object.fromEntries(formData.entries());
    if (isHoneypotTripped(rawPayload)) {
      console.warn(`[SPAM BLOCKED - careers] Honeypot triggered from: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Thank you for contacting Galactic 3D. Your submission has been received." },
        { status: 200 }
      );
    }

    // Blocked email domain
    if (isBlockedEmailDomain(email)) {
      console.warn(`[SPAM BLOCKED - careers] Disposable email: ${email}`);
      return NextResponse.json(
        { success: false, message: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Gibberish detection
    if (isGibberish(name)) {
      console.warn(`[SPAM BLOCKED - careers] Gibberish name: ${name}`);
      return NextResponse.json(
        { success: false, message: "Please enter your real full name." },
        { status: 400 }
      );
    }
    if (isGibberish(position)) {
      console.warn(`[SPAM BLOCKED - careers] Gibberish position: ${position}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid position / role." },
        { status: 400 }
      );
    }
    if (coverLetter && isGibberish(coverLetter)) {
      console.warn(`[SPAM BLOCKED - careers] Gibberish cover letter from: ${email}`);
      return NextResponse.json(
        { success: false, message: "Your cover letter appears to be invalid. Please write a genuine message." },
        { status: 400 }
      );
    }

    const resumeFile = formData.get("resume") || formData.get("file");
    const attachments = [];
    if (resumeFile && typeof resumeFile === "object" && resumeFile.name) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      if (buffer.byteLength > 10 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, message: "Resume file size exceeds 10MB limit." },
          { status: 400 }
        );
      }
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type || "application/pdf",
      });
    }

    const result = await processCentralizedSubmission(
      {
        type: "career",
        name,
        email,
        phone,
        position,
        coverLetter,
        message: coverLetter,
        userInput,
        consentStatus: "Accepted",
        subject: `Career Enquiry: ${position} - ${name}`,
        sourcePage: "Careers Page",
      },
      attachments
    );

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Galactic 3D.\n\nYour submission has been received successfully.\n\nOur team will review your information and get back to you shortly via email, phone, or WhatsApp.",
      recipient: ADMIN_EMAIL,
      data: result,
    });
  } catch (error) {
    console.error("Careers API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again.", recipient: ADMIN_EMAIL },
      { status: 500 }
    );
  }
}
