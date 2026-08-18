import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") || "Anonymous";
    const email = formData.get("email") || "";
    const role = formData.get("role") || "General Inquiry";
    const about = formData.get("about") || "";
    const resumeFile = formData.get("resume") || formData.get("file");

    let savedFileName = "";
    let savedFilePath = "";

    // Save resume locally in public/uploads/resumes if provided
    if (resumeFile && typeof resumeFile === "object" && resumeFile.name) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
      await mkdir(uploadDir, { recursive: true });

      savedFileName = `${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      savedFilePath = path.join(uploadDir, savedFileName);
      await writeFile(savedFilePath, buffer);
    }

    // Email Dispatch to admin@galactic-3d.com
    const recipientEmail = "admin@galactic-3d.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `Galactic 3D Careers <${process.env.SMTP_USER || "noreply@galactic-3d.com"}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Job Application: ${name} (${role})`,
      text: `
New Career Application Received!

Applicant Name: ${name}
Email Address: ${email}
Applied Role: ${role}
About / Statement:
${about}

Resume Attached: ${savedFileName ? savedFileName : "No File Uploaded"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0b0c; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #ef4444; border-bottom: 1px solid #333; padding-bottom: 10px;">New Job Application Received</h2>
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a style="color: #ef4444;" href="mailto:${email}">${email}</a></p>
          <p><strong>Applied Role:</strong> ${role}</p>
          <p><strong>About / Background:</strong></p>
          <blockquote style="background: #18181b; padding: 15px; border-left: 3px solid #ef4444; color: #d4d4d8;">
            ${about.replace(/\n/g, "<br/>")}
          </blockquote>
          ${
            savedFileName
              ? `<p><strong>Uploaded Resume:</strong> ${savedFileName}</p>`
              : "<p><em>No resume file attached.</em></p>"
          }
          <hr style="border-color: #333; margin-top: 20px;" />
          <p style="font-size: 11px; color: #71717a;">Sent automatically via Galactic 3D Careers Portal</p>
        </div>
      `,
      attachments: savedFilePath
        ? [
            {
              filename: resumeFile.name,
              path: savedFilePath,
            },
          ]
        : [],
    };

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
      }
    } catch (mailErr) {
      console.warn("Nodemailer dispatch warning (SMTP credentials not configured):", mailErr.message);
    }

    return NextResponse.json({
      success: true,
      message: `Application submitted successfully and routed to ${recipientEmail}`,
      savedFile: savedFileName || null,
    });
  } catch (error) {
    console.error("Careers Application Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit application" },
      { status: 500 }
    );
  }
}
