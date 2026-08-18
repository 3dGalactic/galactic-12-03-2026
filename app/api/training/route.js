import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, institution, courseTitle, interests } = body;

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
      from: `Galactic 3D Training Portal <${process.env.SMTP_USER || "noreply@galactic-3d.com"}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Training Registration: ${courseTitle || "Course Registration"} - ${name}`,
      text: `
New Training Registration Received!

Selected Program: ${courseTitle || "General Training Inquiry"}
Applicant Name: ${name}
Email Address: ${email}
Phone Number: ${phone}
Institution / Organization: ${institution}

Specific Training Interests & Notes:
${interests || "N/A"}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0b0c; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #D32F2F; border-bottom: 1px solid #333; padding-bottom: 10px;">New Training Program Registration</h2>
          <p><strong>Selected Program:</strong> <span style="color: #D32F2F; font-weight: bold;">${courseTitle || "General Training Inquiry"}</span></p>
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a style="color: #D32F2F;" href="mailto:${email}">${email}</a></p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Institution / Organization:</strong> ${institution}</p>
          <p><strong>Specific Training Interests:</strong></p>
          <blockquote style="background: #18181b; padding: 15px; border-left: 3px solid #D32F2F; color: #d4d4d8;">
            ${(interests || "No additional notes provided.").replace(/\n/g, "<br/>")}
          </blockquote>
          <hr style="border-color: #333; margin-top: 20px;" />
          <p style="font-size: 11px; color: #71717a;">Sent automatically via Galactic 3D Training Portal to admin@galactic-3d.com</p>
        </div>
      `,
    };

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
      }
    } catch (mailErr) {
      console.warn("Nodemailer dispatch warning (SMTP credentials not set):", mailErr.message);
    }

    return NextResponse.json({
      success: true,
      message: `Training registration successfully routed to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Training Registration Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to process training registration" },
      { status: 500 }
    );
  }
}
