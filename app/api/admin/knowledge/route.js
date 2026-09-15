import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import { generateEmbedding } from '../../../lib/embeddings';
import { seedKnowledgeBase } from '../../../lib/crawler';

export async function GET(req) {
  try {
    await seedKnowledgeBase();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const { db } = await connectToDatabase();
    const knowledgeColl = db.collection('knowledge_chunks');

    const query = {};
    if (category) {
      query.category = category;
    }
    if (search) {
      query.content = { $regex: search, $options: 'i' };
    }

    const chunks = await knowledgeColl.find(query).toArray();

    return NextResponse.json({
      success: true,
      count: chunks.length,
      chunks,
    });
  } catch (error) {
    console.error('Error fetching knowledge chunks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch knowledge chunks', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      sourceTitle,
      sourceUrl = 'https://www.galactic-3d.com/custom-knowledge',
      category = 'Custom Knowledge',
      content,
    } = body;

    if (!content || !sourceTitle) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const knowledgeColl = db.collection('knowledge_chunks');

    const embedding = await generateEmbedding(content);
    const chunkId = `custom_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

    const newChunk = {
      chunkId,
      sourceTitle,
      sourceUrl,
      category,
      content: content.trim(),
      embedding,
      indexedAt: new Date().toISOString(),
      isCustom: true,
    };

    await knowledgeColl.insertOne(newChunk);

    return NextResponse.json({
      success: true,
      message: 'Knowledge chunk added and vectorized successfully',
      chunk: newChunk,
    });
  } catch (error) {
    console.error('Error adding knowledge chunk:', error);
    return NextResponse.json(
      { error: 'Failed to add knowledge chunk', details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { _id, chunkId, sourceTitle, category, content } = body;

    if (!_id && !chunkId) {
      return NextResponse.json(
        { error: 'Chunk identifier is required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const knowledgeColl = db.collection('knowledge_chunks');

    const updateFields = {
      sourceTitle,
      category,
      content,
      updatedAt: new Date().toISOString(),
    };

    if (content) {
      updateFields.embedding = await generateEmbedding(content);
    }

    const query = _id ? { _id } : { chunkId };
    await knowledgeColl.updateOne(query, { $set: updateFields });

    return NextResponse.json({
      success: true,
      message: 'Knowledge chunk updated and re-vectorized successfully',
    });
  } catch (error) {
    console.error('Error updating knowledge chunk:', error);
    return NextResponse.json(
      { error: 'Failed to update knowledge chunk', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const chunkId = searchParams.get('chunkId');

    if (!id && !chunkId) {
      return NextResponse.json(
        { error: 'id or chunkId is required to delete' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const knowledgeColl = db.collection('knowledge_chunks');

    const query = id ? { _id: id } : { chunkId };
    await knowledgeColl.deleteOne(query);

    return NextResponse.json({
      success: true,
      message: 'Knowledge chunk deleted from vector store',
    });
  } catch (error) {
    console.error('Error deleting knowledge chunk:', error);
    return NextResponse.json(
      { error: 'Failed to delete knowledge chunk', details: error.message },
      { status: 500 }
    );
  }
}
