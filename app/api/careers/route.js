import { NextResponse } from "next/server";
import { processCentralizedSubmission, ADMIN_EMAIL } from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") || formData.get("fullName") || "Applicant";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || formData.get("phoneNumber") || "";
    const position = formData.get("position") || formData.get("role") || "General Application";
    const coverLetter = formData.get("coverLetter") || formData.get("about") || formData.get("message") || "";
    const resumeFile = formData.get("resume") || formData.get("file");

    const attachments = [];
    if (resumeFile && typeof resumeFile === "object" && resumeFile.name) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
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
        sourcePage: "Careers Page",
      },
      attachments
    );

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      recipient: ADMIN_EMAIL,
      smtpStatus: result.admin.success,
    });
  } catch (error) {
    console.error("Careers API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again.", recipient: ADMIN_EMAIL },
      { status: 500 }
    );
  }
}
