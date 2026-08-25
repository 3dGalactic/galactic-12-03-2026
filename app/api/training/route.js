import { NextResponse } from "next/server";
import { processCentralizedSubmission, ADMIN_EMAIL } from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, institution, trainingType, courseTitle, message, interests } = body;

    const result = await processCentralizedSubmission({
      type: "training",
      name,
      email,
      phone,
      organization: organization || institution,
      trainingType: trainingType || courseTitle,
      message: message || interests,
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
