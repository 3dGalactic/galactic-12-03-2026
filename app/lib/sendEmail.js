import nodemailer from "nodemailer";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@galactic-3d.com";

const rateLimitMap = new Map();

export function checkRateLimit(identifier, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();
  const key = identifier || "anonymous";
  const current = rateLimitMap.get(key) || [];
  const valid = current.filter((ts) => ts > now - windowMs);

  if (valid.length >= limit) {
    return false;
  }

  valid.push(now);
  rateLimitMap.set(key, valid);
  return true;
}

export function sanitizeString(value) {
  return String(value ?? "").replace(/<[^>]*>?/gm, "").trim();
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
}

// Build Admin Email Content
export function buildAdminEmailContent(data = {}) {
  const name = sanitizeString(data.name || data.fullName);
  const email = sanitizeString(data.email);
  const phone = sanitizeString(data.phone || data.phoneNumber);
  const company = sanitizeString(data.company || data.organization || data.institution);
  const message = sanitizeString(data.message || data.projectDetails || data.coverLetter || data.notes || data.about);
  const sourcePage = sanitizeString(data.sourcePage || data.page || "Website");
  const dateTime = data.dateTime || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const position = sanitizeString(data.position || data.role);
  const trainingType = sanitizeString(data.trainingType || data.courseTitle);
  const organizationName = sanitizeString(data.organization || data.institution || data.company);

  let emailSubject = "[Galactic 3D] Production Enquiry";
  const type = (data.type || "").toLowerCase();
  const pageLower = sourcePage.toLowerCase();

  if (type === "career" || type === "careers" || pageLower.includes("career")) {
    const roleStr = position ? `: ${position}` : "";
    const nameStr = name ? ` - ${name}` : "";
    emailSubject = `[Galactic 3D] Career Enquiry${roleStr}${nameStr}`;
  } else if (type === "training" || pageLower.includes("training")) {
    const courseStr = trainingType ? `: ${trainingType}` : data.subject ? `: ${data.subject}` : "";
    const nameStr = name ? ` - ${name}` : "";
    emailSubject = `[Galactic 3D] Training Enquiry${courseStr}${nameStr}`;
  } else {
    // Default to Production Enquiry for Contact, Upload, Marketplace, etc.
    const customSub = data.subject && data.subject !== "Website Inquiry" && data.subject !== "New Website Inquiry" ? `: ${data.subject}` : "";
    const nameStr = name ? ` - ${name}` : "";
    emailSubject = `[Galactic 3D] Production Enquiry${customSub}${nameStr}`;
  }

  const text = `Subject: ${emailSubject}
Name: ${name || "N/A"}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}
Company / Organization: ${company || organizationName || "N/A"}
${position ? `Position Applied For: ${position}\n` : ""}${trainingType ? `Training Type: ${trainingType}\n` : ""}Message: ${message || "N/A"}
Source Page: ${sourcePage}
Date & Time: ${dateTime}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; color: #111111; border-radius: 12px; border: 1px solid #e5e7eb; shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background: #111111; padding: 16px 20px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #D32F2F;">
        <h2 style="margin: 0; font-size: 18px; color: #ffffff;">${emailSubject}</h2>
      </div>
      <div style="padding: 20px;">
        <table cellpadding="8" cellspacing="0" style="width:100%; border-collapse: collapse; color: #111111; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="width: 160px; color: #6b7280; font-weight: bold;">Enquiry Type:</td><td><strong style="color: #D32F2F;">${emailSubject.split("] ")[1] || "Production Enquiry"}</strong></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="width: 160px; color: #6b7280; font-weight: bold;">Name:</td><td><strong>${name || "N/A"}</strong></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Email:</td><td><a href="mailto:${email}" style="color: #D32F2F; text-decoration: none;">${email || "N/A"}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Phone:</td><td>${phone || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Company / Organization:</td><td>${company || organizationName || "N/A"}</td></tr>
          ${position ? `<tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Position Applied For:</td><td><strong>${position}</strong></td></tr>` : ""}
          ${trainingType ? `<tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Training Type:</td><td><strong>${trainingType}</strong></td></tr>` : ""}
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold; vertical-align: top;">Message / Details:</td><td>${(message || "N/A").replace(/\n/g, "<br />")}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Source Page:</td><td><span style="background: #f3f4f6; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${sourcePage}</span></td></tr>
          <tr><td style="color: #6b7280; font-weight: bold;">Date & Time:</td><td>${dateTime}</td></tr>
        </table>
      </div>
    </div>
  `;

  return { subject: emailSubject, text, html };
}

// Build User Auto-Reply Email
export function buildUserAutoReplyEmail(data = {}) {
  const name = sanitizeString(data.name || data.fullName || "Valued Customer");
  const email = sanitizeString(data.email || "");

  const text = `Hello ${name},

Thank You For Contacting Galactic 3D.

We have received your inquiry and our team will contact you shortly.

Best regards,
Galactic 3D Team
admin@galactic-3d.com`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; color: #111111; border-radius: 12px; border: 1px solid #e5e7eb;">
      <div style="background: #111111; padding: 16px 20px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #D32F2F;">
        <h2 style="margin: 0; font-size: 20px; color: #ffffff;">Galactic 3D</h2>
      </div>
      <div style="padding: 24px;">
        <h3 style="margin: 0 0 16px; color: #111111; font-size: 18px;">Hello ${name},</h3>
        <p style="font-size: 15px; line-height: 1.6; color: #374151; font-weight: bold;">Thank You For Contacting Galactic 3D</p>
        <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">We have received your inquiry and our team will contact you shortly.</p>
        <div style="margin: 24px 0; padding: 16px; background: #f9fafb; border-left: 4px solid #D32F2F; border-radius: 4px; font-size: 13px; color: #4b5563;">
          <strong>Official Contact Email:</strong> admin@galactic-3d.com
        </div>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 0;">Best regards,<br /><strong>Galactic 3D Team</strong></p>
      </div>
    </div>
  `;

  return { to: email, subject: "Thank You For Contacting Galactic 3D", text, html };
}

// Direct Nodemailer Transport with Timeout Protection
export async function sendSmtpMail({ to, fromName = "Galactic 3D", subject, text, html, replyTo, attachments = [] }) {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || "admin@galactic-3d.com";
  const smtpPass = process.env.SMTP_PASS || "cmcc spkd lsfo bhji";

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 6000,
    greetingTimeout: 4000,
    socketTimeout: 6000,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const sendPromise = transporter.sendMail({
    from: `"${fromName}" <${smtpUser}>`,
    to,
    replyTo: replyTo || smtpUser,
    subject,
    text,
    html,
    attachments,
  });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("SMTP Connection Timeout")), 7000)
  );

  const info = await Promise.race([sendPromise, timeoutPromise]);
  return { success: true, messageId: info.messageId, accepted: info.accepted || [] };
}

// Centralized Dispatcher
export async function processCentralizedSubmission(payload = {}, attachments = []) {
  const dateTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const data = { ...payload, dateTime };

  const adminEmailContent = buildAdminEmailContent(data);

  // Trigger User Auto-Reply in background asynchronously
  if (payload.email && validateEmail(payload.email)) {
    const userAutoReply = buildUserAutoReplyEmail(data);
    sendSmtpMail({
      to: payload.email,
      fromName: "Galactic 3D",
      subject: userAutoReply.subject,
      text: userAutoReply.text,
      html: userAutoReply.html,
      replyTo: ADMIN_EMAIL,
    }).catch((autoReplyErr) => {
      console.warn("Auto-reply send background notice:", autoReplyErr.message);
    });
  }

  // Send Admin Notification Email
  let adminResult = { success: true };
  try {
    adminResult = await sendSmtpMail({
      to: ADMIN_EMAIL,
      fromName: "Galactic 3D Website Portal",
      subject: adminEmailContent.subject,
      text: adminEmailContent.text,
      html: adminEmailContent.html,
      replyTo: payload.email || ADMIN_EMAIL,
      attachments,
    });
  } catch (adminErr) {
    console.warn("Admin SMTP email notice:", adminErr.message);
    adminResult = { success: false, error: adminErr.message };
  }

  return {
    success: true,
    recipient: ADMIN_EMAIL,
    admin: adminResult,
  };
}
