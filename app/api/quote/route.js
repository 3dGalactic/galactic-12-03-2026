import { NextResponse } from "next/server";
import { processCentralizedSubmission, checkRateLimit, validateEmail } from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "quote_ip";
    if (!checkRateLimit(ip, 5, 60 * 1000)) {
      return NextResponse.json(
        { success: false, message: "Too many quote requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

    const result = await processCentralizedSubmission({
      ...body,
      type: "production",
      subject: body.subject || "Get Quote Request",
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
