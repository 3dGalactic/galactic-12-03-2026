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
        subject: `Job Application: ${position} - ${name}`,
        sourcePage: "Careers Page",
      },
      attachments
    );

    return NextResponse.json({
      success: true,
      message: "Thank you! Your job application and resume have been sent to admin@galactic-3d.com.",
      recipient: ADMIN_EMAIL,
      smtpStatus: result.admin ? result.admin.success : true,
    });
  } catch (error) {
    console.error("Careers API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application. Please try again.", recipient: ADMIN_EMAIL },
      { status: 500 }
    );
  }
}
