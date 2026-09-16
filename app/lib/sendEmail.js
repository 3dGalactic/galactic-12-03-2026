import nodemailer from "nodemailer";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "admin@galactic-3d.com";

// ─────────────────────────────────────────────────────────────
// LAYER 5: Blocked / Disposable Email Domains
// Add any domain you want to block here.
// ─────────────────────────────────────────────────────────────
export const BLOCKED_EMAIL_DOMAINS = [
  // Known disposable / temp-mail services
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "guerrillamail.org",
  "guerrillamail.biz", "guerrillamail.de", "guerrillamail.info",
  "tempmail.com", "temp-mail.org", "temp-mail.io", "throwam.com",
  "sharklasers.com", "guerrillamailblock.com", "grr.la", "spam4.me",
  "yopmail.com", "yopmail.fr", "cool.fr.nf", "jetable.fr.nf",
  "nospam.ze.tc", "nomail.xl.cx", "mega.zik.dj", "speed.1s.fr",
  "courriel.fr.nf", "moncourrier.fr.nf", "monemail.fr.nf",
  "monmail.fr.nf", "trashmail.at", "trashmail.com", "trashmail.io",
  "trashmail.me", "trashmail.net", "trashmail.org", "trashmail.xyz",
  "dispostable.com", "maildrop.cc", "mailnull.com", "spamgourmet.com",
  "spamgourmet.net", "spamgourmet.org", "spamex.com", "spamfree24.org",
  "binkmail.com", "bobmail.info", "chammy.info", "devnullmail.com",
  "fudgerub.com", "juggernaut.com", "letthemeatspam.com", "lol.ovpn.to",
  "mailnew.com", "mailscrap.com", "mailshell.com", "mailsiphon.com",
  "mailslapping.com", "mailzilla.org", "makemetheking.com", "mega.zik.dj",
  "meltmail.com", "mezimages.net", "netzidiot.de", "ownmail.net",
  "pecinan.com", "pecinan.net", "pecinan.org", "proxymail.eu",
  "rklips.com", "rmqkr.net", "royal.net", "smellfear.com",
  "snakemail.com", "sofimail.com", "sogetthis.com", "spamfree.eu",
  "thankyou2010.com", "thisisnotmyrealemail.com", "throwam.com",
  "toomail.biz", "uroid.com", "veryrealemail.com", "webemail.me",
  "weg-werf-email.de", "wegwerfmail.de", "wegwerfmail.net",
  "wegwerfmail.org", "wh4f.org", "whyspam.me", "willhackforfood.biz",
  "willselfdestruct.com", "wronghead.com", "wuzupmail.net",
  "xsecurity.org", "yuurok.com", "zehnminuten.de", "zehnminutenmail.de",
  "zippymail.info", "zoemail.org",
  // Specifically block the domain seen in the attack
  "fam-blankenburg.de",
];

// ─────────────────────────────────────────────────────────────
// LAYER 1: Check if email domain is blocked/disposable
// ─────────────────────────────────────────────────────────────
export function isBlockedEmailDomain(email) {
  if (!email || typeof email !== "string") return true;
  const parts = email.toLowerCase().split("@");
  if (parts.length !== 2) return true;
  const domain = parts[1].trim();
  return BLOCKED_EMAIL_DOMAINS.includes(domain);
}

// ─────────────────────────────────────────────────────────────
// LAYER 2: Honeypot check
// Pass the full payload; if the honeypot field is filled → it's a bot.
// ─────────────────────────────────────────────────────────────
export function isHoneypotTripped(payload = {}) {
  // Bots will fill hidden fields. Humans never see them.
  const honeypotFields = ["website", "bot_check", "url", "fax", "hp_email"];
  return honeypotFields.some(
    (field) => payload[field] && String(payload[field]).trim().length > 0
  );
}

// ─────────────────────────────────────────────────────────────
// LAYER 3: Gibberish / Bot Input Detection
// Detects random-character strings typical of spam bots.
// ─────────────────────────────────────────────────────────────

// Common real English / Indian words to whitelist short inputs
const REAL_WORD_PATTERNS = /\b(the|and|for|are|but|not|you|all|any|can|her|was|one|our|out|day|get|has|him|his|how|its|let|may|new|now|old|see|two|way|who|boy|did|big|end|far|few|got|had|has|here|help|just|know|like|make|more|need|over|part|play|put|run|said|same|she|show|side|some|take|than|that|them|then|they|this|time|turn|very|well|went|were|what|when|will|with|work|your|about|above|after|again|along|being|could|every|first|found|given|going|great|group|large|later|learn|left|light|might|never|often|other|place|plant|point|right|small|sound|still|study|their|there|these|thing|think|those|three|through|under|until|using|where|which|while|world|would|write|city|metal|print|india|bangalore|company|project|machine|product|service|training|enquiry|design|material|order|quote|price|cost|need|want|request|information|detail|support|contact|send|help|know|use|make|build|create|provide|offer|tech|steel|titanium|aerospace|medical|automotive|industrial|rapid|prototype|prototype)\b/i;

export function isGibberish(str) {
  if (!str || typeof str !== "string") return false;
  const s = str.trim();
  if (s.length < 4) return false;

  // Allow if it contains real recognizable words
  if (REAL_WORD_PATTERNS.test(s)) return false;

  const letters = (s.match(/[a-zA-Z]/g) || []).length;
  if (letters < 4) return false;

  const vowels = (s.match(/[aeiouAEIOU]/g) || []).length;
  const vowelRatio = vowels / letters;

  // Check 1: Very low vowel ratio — catches "dfvdfg", "fdfdgrgg", "dgrggdf" etc.
  if (vowelRatio < 0.15) return true;

  // Check 2: Any single run of 4+ consecutive consonants → gibberish
  // Catches "dgrggdfera" (starts with 7 consonants: d-g-r-g-g-d-f)
  const longConsonantRun = /[^aeiouAEIOU\s\d\W]{4,}/.test(s);
  if (longConsonantRun) return true;

  // Check 3: Excessive random case alternation (e.g. "adADASwhnxxTXsOnc")
  const alterations = (s.match(/[a-z][A-Z]|[A-Z][a-z][A-Z]|[a-z][A-Z][a-z]/g) || []).length;
  if (alterations >= 3 && letters >= 8) return true;

  // Check 4: No spaces and very long single "word" with no real structure
  const words = s.split(/\s+/);
  if (words.length === 1 && s.length > 18 && letters > 14) return true;

  // Check 5: Repeated same consonant clusters (gg, ff, rr etc. more than once) — bot pattern
  const repeatedClusters = (s.match(/([^aeiouAEIOU\s])\1{1,}/g) || []).length;
  if (repeatedClusters >= 2 && letters <= 12) return true;

  return false;
}

// ─────────────────────────────────────────────────────────────
// LAYER 4: Rate Limiting
// Tighter: 2 per minute per IP, 3 per hour per IP
// ─────────────────────────────────────────────────────────────
const rateLimitMap = new Map();
const hourlyRateLimitMap = new Map();

export function checkRateLimit(identifier, limit = 2, windowMs = 60 * 1000) {
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

export function checkHourlyRateLimit(identifier, limit = 3) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const key = `hourly:${identifier || "anonymous"}`;
  const current = hourlyRateLimitMap.get(key) || [];
  const valid = current.filter((ts) => ts > now - windowMs);

  if (valid.length >= limit) {
    return false;
  }

  valid.push(now);
  hourlyRateLimitMap.set(key, valid);
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

  const userInput = sanitizeString(data.userInput || data.consentInput || "YES I ACCEPT");
  const consentStatus = data.consentStatus || "Accepted";
  const consentMethod = data.consentMethod || "Typed Confirmation";

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
    const customSub = data.subject && data.subject !== "Website Inquiry" && data.subject !== "New Website Inquiry" ? `: ${data.subject}` : "";
    const nameStr = name ? ` - ${name}` : "";
    emailSubject = `[Galactic 3D] Production Enquiry${customSub}${nameStr}`;
  }

  const text = `Subject: ${emailSubject}
Form Type: ${type || "General Inquiry"}
Date & Time: ${dateTime}
Full Name: ${name || "N/A"}
Email: ${email || "N/A"}
Phone Number: ${phone || "N/A"}
Company / Organization: ${company || organizationName || "N/A"}
Subject: ${data.subject || emailSubject}
Message: ${message || "N/A"}
${position ? `Position Applied For: ${position}\n` : ""}${trainingType ? `Training Program: ${trainingType}\n` : ""}Consent Status: ${consentStatus}
Consent Method: ${consentMethod}
User Input: ${userInput}
Consent Timestamp: ${dateTime}
Website Page Submitted From: ${sourcePage}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #ffffff; color: #111111; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background: #111111; padding: 16px 20px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #D32F2F;">
        <h2 style="margin: 0; font-size: 18px; color: #ffffff;">${emailSubject}</h2>
      </div>
      <div style="padding: 20px;">
        <table cellpadding="8" cellspacing="0" style="width:100%; border-collapse: collapse; color: #111111; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="width: 170px; color: #6b7280; font-weight: bold;">Form Type:</td><td><strong style="color: #D32F2F;">${type || "General Inquiry"}</strong></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Date &amp; Time:</td><td>${dateTime}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Full Name:</td><td><strong>${name || "N/A"}</strong></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Email:</td><td><a href="mailto:${email}" style="color: #D32F2F; text-decoration: none;">${email || "N/A"}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Phone Number:</td><td>${phone || "N/A"}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Company / Organization:</td><td>${company || organizationName || "N/A"}</td></tr>
          ${position ? `<tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Position Applied For:</td><td><strong>${position}</strong></td></tr>` : ""}
          ${trainingType ? `<tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Training Program:</td><td><strong>${trainingType}</strong></td></tr>` : ""}
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold; vertical-align: top;">Message / Details:</td><td>${(message || "N/A").replace(/\n/g, "<br />")}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Consent Status:</td><td><span style="background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${consentStatus}</span></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Consent Method:</td><td><strong>${consentMethod}</strong></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">User Input:</td><td><code style="font-weight: bold; color: #111111;">${userInput}</code></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Consent Timestamp:</td><td>${dateTime}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="color: #6b7280; font-weight: bold;">Website Page Submitted From:</td><td><span style="background: #f3f4f6; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${sourcePage}</span></td></tr>
        </table>
      </div>
    </div>
  `;

  return { subject: emailSubject, text, html };
}

// Build User Auto-Reply Email
export function buildUserAutoReplyEmail(data = {}) {
  const name = sanitizeString(data.name || data.fullName || "Valued Contact");
  const email = sanitizeString(data.email || "");

  const text = `Hello ${name},

Thank you for contacting Galactic 3D.

We have successfully received your submission and our team will review your information shortly.

This email confirms that your request has been recorded in our system.

Our team may contact you via email, phone, or WhatsApp regarding your inquiry, quotation request, training application, career application, event registration, consultation request, or other related services.

Thank you for your interest in Galactic 3D.

Regards,
Galactic 3D Team
https://www.galactic-3d.com`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; color: #111111; border-radius: 12px; border: 1px solid #e5e7eb;">
      <div style="background: #111111; padding: 16px 20px; border-radius: 8px 8px 0 0; border-bottom: 3px solid #D32F2F;">
        <h2 style="margin: 0; font-size: 20px; color: #ffffff;">Galactic 3D</h2>
      </div>
      <div style="padding: 24px;">
        <h3 style="margin: 0 0 16px; color: #111111; font-size: 18px;">Hello ${name},</h3>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">Thank you for contacting Galactic 3D.</p>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">We have successfully received your submission and our team will review your information shortly.</p>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">This email confirms that your request has been recorded in our system.</p>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">Our team may contact you via email, phone, or WhatsApp regarding your inquiry, quotation request, training application, career application, event registration, consultation request, or other related services.</p>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">Thank you for your interest in Galactic 3D.</p>
        <div style="margin: 24px 0; padding: 16px; background: #f9fafb; border-left: 4px solid #D32F2F; border-radius: 4px; font-size: 13px; color: #4b5563;">
          <strong>Official Contact Email:</strong> admin@galactic-3d.com
        </div>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 0;">Regards,<br /><strong>Galactic 3D Team</strong><br /><a href="https://www.galactic-3d.com" style="color: #D32F2F; text-decoration: none;">https://www.galactic-3d.com</a></p>
      </div>
    </div>
  `;

  return { to: email, subject: "Thank You for Contacting Galactic 3D", text, html };
}

// Direct Nodemailer Transport with Timeout Protection
export async function sendSmtpMail({ to, fromName = "Galactic 3D", subject, text, html, replyTo, attachments = [] }) {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || "admin@galactic-3d.com";
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || "cmcc spkd lsfo bhji";

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
