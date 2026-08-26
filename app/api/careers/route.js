import { NextResponse } from "next/server";
import { processCentralizedSubmission, ADMIN_EMAIL, validateEmail } from "../../lib/sendEmail";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") || formData.get("fullName") || "Applicant";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || formData.get("phoneNumber") || "";
    const position = formData.get("position") || formData.get("role") || "General Application";
    const coverLetter = formData.get("coverLetter") || formData.get("about") || formData.get("message") || "";
    const resumeFile = formData.get("resume") || formData.get("file");
    const userInput = formData.get("userInput") || formData.get("consentInput") || "YES I ACCEPT";

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email address is required." },
        { status: 400 }
      );
    }

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
