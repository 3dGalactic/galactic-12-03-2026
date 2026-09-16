import { NextResponse } from "next/server";
import {
  processCentralizedSubmission,
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
    const ip = req.headers.get("x-forwarded-for") || "quote_ip";

    // Rate limiting
    if (!checkRateLimit(ip, 2, 60 * 1000)) {
      return NextResponse.json(
        { success: false, message: "Too many quote requests. Please wait a minute." },
        { status: 429 }
      );
    }
    if (!checkHourlyRateLimit(ip, 3)) {
      return NextResponse.json(
        { success: false, message: "You have reached the submission limit. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const email   = sanitizeString(body.email || "");
    const name    = sanitizeString(body.name || body.fullName || "");
    const company = sanitizeString(body.company || body.organization || "");
    const message = sanitizeString(body.message || body.projectDetails || body.description || "");
    const subject = sanitizeString(body.subject || "Get Quote Request");

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    // Honeypot
    if (isHoneypotTripped(body)) {
      console.warn(`[SPAM BLOCKED - quote] Honeypot triggered from: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Thank you for contacting Galactic 3D. Your submission has been received successfully. Our team will review your information and get back to you shortly via email, phone, or WhatsApp." },
        { status: 200 }
      );
    }

    // Blocked email domain
    if (isBlockedEmailDomain(email)) {
      console.warn(`[SPAM BLOCKED - quote] Disposable email: ${email}`);
      return NextResponse.json(
        { success: false, message: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Gibberish detection
    if (name && isGibberish(name)) {
      console.warn(`[SPAM BLOCKED - quote] Gibberish name: ${name}`);
      return NextResponse.json(
        { success: false, message: "Please enter your real full name." },
        { status: 400 }
      );
    }
    if (company && isGibberish(company)) {
      console.warn(`[SPAM BLOCKED - quote] Gibberish company: ${company}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid company or organization name." },
        { status: 400 }
      );
    }
    if (subject && isGibberish(subject)) {
      console.warn(`[SPAM BLOCKED - quote] Gibberish subject: ${subject}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid subject for your quote request." },
        { status: 400 }
      );
    }
    if (message && isGibberish(message)) {
      console.warn(`[SPAM BLOCKED - quote] Gibberish message from: ${email}`);
      return NextResponse.json(
        { success: false, message: "Your message appears to be invalid. Please describe your project requirements clearly." },
        { status: 400 }
      );
    }

    const result = await processCentralizedSubmission({
      ...body,
      type: "production",
      subject: subject,
      sourcePage: body.sourcePage || "Get Quote Form",
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Galactic 3D. Your submission has been received successfully. Our team will review your information and get back to you shortly via email, phone, or WhatsApp.",
      data: result,
    });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
