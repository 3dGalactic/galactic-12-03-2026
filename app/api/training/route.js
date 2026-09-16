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
    const ip = req.headers.get("x-forwarded-for") || "training_ip";

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

    const body = await req.json();
    const name         = sanitizeString(body.name || body.fullName || "");
    const email        = sanitizeString(body.email || "");
    const phone        = sanitizeString(body.phone || "");
    const organization = sanitizeString(body.organization || body.institution || "");
    const trainingType = sanitizeString(body.trainingType || body.courseTitle || "");
    const message      = sanitizeString(body.message || body.interests || "");

    // Basic required fields
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    // Honeypot
    if (isHoneypotTripped(body)) {
      console.warn(`[SPAM BLOCKED - training] Honeypot triggered from: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    // Blocked email domain
    if (isBlockedEmailDomain(email)) {
      console.warn(`[SPAM BLOCKED - training] Disposable email: ${email}`);
      return NextResponse.json(
        { success: false, message: "Please use a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Gibberish detection
    if (name && isGibberish(name)) {
      console.warn(`[SPAM BLOCKED - training] Gibberish name: ${name}`);
      return NextResponse.json(
        { success: false, message: "Please enter your real full name." },
        { status: 400 }
      );
    }
    if (organization && isGibberish(organization)) {
      console.warn(`[SPAM BLOCKED - training] Gibberish organization: ${organization}`);
      return NextResponse.json(
        { success: false, message: "Please enter a valid organization or institution name." },
        { status: 400 }
      );
    }
    if (message && isGibberish(message)) {
      console.warn(`[SPAM BLOCKED - training] Gibberish message from: ${email}`);
      return NextResponse.json(
        { success: false, message: "Your message appears to be invalid. Please describe your training interest clearly." },
        { status: 400 }
      );
    }

    const result = await processCentralizedSubmission({
      type: "training",
      name,
      email,
      phone,
      organization,
      trainingType,
      message,
      sourcePage: "Training Page",
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      recipient: ADMIN_EMAIL,
      smtpStatus: result.admin.success,
    });
  } catch (error) {
    console.error("Training API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again.", recipient: ADMIN_EMAIL },
      { status: 500 }
    );
  }
}
