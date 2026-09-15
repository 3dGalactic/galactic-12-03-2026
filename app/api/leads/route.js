import { NextResponse } from 'next/server';
import { connectToDatabase, getLocalDB, saveLocalDB } from '../../lib/db';
import { sendEmail } from '../../lib/sendEmail';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company = 'N/A',
      requirement = 'General Inquiry / Prototyping',
      source = 'AI Chatbot Assistant',
      sessionId,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required fields' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const leadsColl = db.collection('leads');

    const leadRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      company: company.trim(),
      requirement: requirement.trim(),
      source,
      sessionId: sessionId || null,
      status: 'New', // New | Contacted | Qualified | Closed
      createdAt: new Date().toISOString(),
    };

    const insertResult = await leadsColl.insertOne(leadRecord);

    // Update session if sessionId present
    if (sessionId) {
      const sessionsColl = db.collection('chat_sessions');
      await sessionsColl.updateOne(
        { sessionId },
        { $set: { leadCaptured: true, leadEmail: leadRecord.email } }
      );
    }

    // Update analytics
    const localDb = getLocalDB();
    if (!localDb.analytics) {
      localDb.analytics = { totalConversations: 0, totalLeads: 0, topQuestions: {}, serviceRequests: {} };
    }
    localDb.analytics.totalLeads = (localDb.analytics.totalLeads || 0) + 1;
    saveLocalDB(localDb);

    // Trigger email notification to Galactic 3D Sales & Engineering Team
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'info@galactic-3d.com',
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
