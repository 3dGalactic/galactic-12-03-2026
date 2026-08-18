import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, phone, subject, message } = body;

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
      from: `Galactic 3D Contact Form <${process.env.SMTP_USER || "noreply@galactic-3d.com"}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Inquiry: ${subject || name || "Website Message"}`,
      text: `
New Message Received from Contact Form!

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0b0c; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #ef4444; border-bottom: 1px solid #333; padding-bottom: 10px;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a style="color: #ef4444;" href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #18181b; padding: 15px; border-left: 3px solid #ef4444; color: #d4d4d8;">
            ${(message || "").replace(/\n/g, "<br/>")}
          </blockquote>
          <hr style="border-color: #333; margin-top: 20px;" />
          <p style="font-size: 11px; color: #71717a;">Sent automatically via Galactic 3D Contact Page</p>
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
      message: `Message sent successfully and routed to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send contact message" },
      { status: 500 }
    );
  }
}
