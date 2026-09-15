import { NextResponse } from 'next/server';
import { generateRAGAnswer } from '../../lib/ragEngine';
import { detectIntent } from '../../lib/leadDetector';
import { connectToDatabase, getLocalDB, saveLocalDB } from '../../lib/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      message,
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      conversationHistory = [],
      language = 'en',
    } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Message content is required' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();

    // 1. Detect Intent & Buying Signals
    const intentResult = detectIntent(trimmedMessage);

    // 2. Generate RAG Grounded Answer
    const ragResult = await generateRAGAnswer({
      query: trimmedMessage,
      conversationHistory,
      language,
    });

    // 3. Connect to Database & Record Session/Analytics
    const { db } = await connectToDatabase();
    const sessionsColl = db.collection('chat_sessions');
    const messagesColl = db.collection('chat_messages');

    const now = new Date().toISOString();

    // Store messages
    await messagesColl.insertOne({
      sessionId,
      role: 'user',
      content: trimmedMessage,
      timestamp: now,
    });

    await messagesColl.insertOne({
      sessionId,
      role: 'assistant',
      content: ragResult.answer,
      citations: ragResult.citations,
      intent: intentResult.primaryIntent,
      timestamp: new Date().toISOString(),
    });

    // Update or create session
    await sessionsColl.updateOne(
      { sessionId },
      {
        $set: {
          sessionId,
          language,
          lastActive: now,
          hasBuyingIntent: intentResult.hasBuyingIntent,
          primaryIntent: intentResult.primaryIntent,
        },
      }
    );

    // Update aggregated analytics in local DB
    const localDb = getLocalDB();
    if (!localDb.analytics) {
      localDb.analytics = {
        totalConversations: 0,
        totalLeads: 0,
        satisfactionSum: 0,
        satisfactionCount: 0,
        topQuestions: {},
        serviceRequests: {},
        dailyStats: {},
      };
    }

    localDb.analytics.totalConversations = (localDb.analytics.totalConversations || 0) + 1;
    
    // Track top questions keywords
    const questionCategory = intentResult.primaryIntent || 'GENERAL';
    localDb.analytics.topQuestions[questionCategory] = (localDb.analytics.topQuestions[questionCategory] || 0) + 1;

    saveLocalDB(localDb);

    return NextResponse.json({
      success: true,
      sessionId,
      answer: ragResult.answer,
      citations: ragResult.citations,
      followUpQuestions: ragResult.followUpQuestions,
      intent: intentResult,
      suggestLeadForm: intentResult.hasBuyingIntent && intentResult.suggestForm,
      modelUsed: ragResult.modelUsed,
    });
  } catch (error) {
    console.error('Error in /api/chat route:', error);
    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
