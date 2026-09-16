import { NextResponse } from 'next/server';
import { connectToDatabase, getLocalDB, saveLocalDB } from '../../lib/db';
import {
  sendSmtpMail,
  validateEmail,
  sanitizeString,
  isBlockedEmailDomain,
  isHoneypotTripped,
  isGibberish,
  checkRateLimit,
  checkHourlyRateLimit,
  ADMIN_EMAIL,
} from '../../lib/sendEmail';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'leads_ip';

    // Rate limiting
    if (!checkRateLimit(ip, 2, 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute.' },
        { status: 429 }
      );
    }
    if (!checkHourlyRateLimit(ip, 3)) {
      return NextResponse.json(
        { error: 'You have reached the submission limit. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name        = sanitizeString(body.name || '');
    const email       = sanitizeString(body.email || '');
    const phone       = sanitizeString(body.phone || '');
    const company     = sanitizeString(body.company || 'N/A');
    const requirement = sanitizeString(body.requirement || 'General Inquiry / Prototyping');
    const source      = sanitizeString(body.source || 'AI Chatbot Assistant');
    const { sessionId } = body;

    // Basic required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required fields' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    // Honeypot
    if (isHoneypotTripped(body)) {
      console.warn(`[SPAM BLOCKED - leads] Honeypot triggered from: ${ip}`);
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your requirement has been received by our engineering team. We will contact you within 24 hours.',
      });
    }

    // Blocked email domain
    if (isBlockedEmailDomain(email)) {
      console.warn(`[SPAM BLOCKED - leads] Disposable email: ${email}`);
      return NextResponse.json(
        { error: 'Please use a valid business or personal email address.' },
        { status: 400 }
      );
    }

    // Gibberish detection
    if (isGibberish(name)) {
      console.warn(`[SPAM BLOCKED - leads] Gibberish name: ${name}`);
      return NextResponse.json(
        { error: 'Please enter your real full name.' },
        { status: 400 }
      );
    }
    if (company !== 'N/A' && isGibberish(company)) {
      console.warn(`[SPAM BLOCKED - leads] Gibberish company: ${company}`);
      return NextResponse.json(
        { error: 'Please enter a valid company or organization name.' },
        { status: 400 }
      );
    }
    if (requirement && isGibberish(requirement)) {
      console.warn(`[SPAM BLOCKED - leads] Gibberish requirement from: ${email}`);
      return NextResponse.json(
        { error: 'Please describe your requirement clearly.' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const leadsColl = db.collection('leads');

    const leadRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      requirement: requirement.trim(),
      source,
      sessionId: sessionId || null,
      status: 'New',
      createdAt: new Date().toISOString(),
    };

    const insertResult = await leadsColl.insertOne(leadRecord);

    if (sessionId) {
      const sessionsColl = db.collection('chat_sessions');
      await sessionsColl.updateOne(
        { sessionId },
        { $set: { leadCaptured: true, leadEmail: leadRecord.email } }
      );
    }

    const localDb = getLocalDB();
    if (!localDb.analytics) {
      localDb.analytics = { totalConversations: 0, totalLeads: 0, topQuestions: {}, serviceRequests: {} };
    }
    localDb.analytics.totalLeads = (localDb.analytics.totalLeads || 0) + 1;
    saveLocalDB(localDb);

    try {
      await sendSmtpMail({
        to: ADMIN_EMAIL,
        fromName: 'Galactic 3D Website Portal',
        subject: `🚀 New Galactic 3D Lead Captured: ${name} (${company || 'Direct Visitor'})`,
        text: `New Lead captured via Galactic 3D AI Assistant:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company}\nRequirement: ${requirement}\nSource: ${source}\nCaptured At: ${new Date().toLocaleString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #EAEAEA; border-radius: 8px;">
            <div style="background-color: #D32F2F; padding: 16px; border-radius: 6px; text-align: center; color: white;">
              <h2 style="margin: 0;">🚀 New Lead Captured - Galactic 3D AI</h2>
            </div>
            <div style="padding: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Company:</strong> ${company || 'Individual / Not specified'}</p>
              <p><strong>Requirement / Project Description:</strong></p>
              <div style="background: #f8f9fa; padding: 12px; border-left: 4px solid #D32F2F; border-radius: 4px;">
                ${requirement}
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">Source: ${source} | Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.warn('Could not send email alert, lead was still recorded successfully:', emailErr.message);
    }

    return NextResponse.json({
      success: true,
      leadId: insertResult.insertedId,
      message: 'Thank you! Your requirement has been received by our engineering team. We will contact you within 24 hours with feasibility and quote guidance.',
    });
  } catch (error) {
    console.error('Error recording lead:', error);
    return NextResponse.json(
      { error: 'Failed to record lead', details: error.message },
      { status: 500 }
    );
  }
}
