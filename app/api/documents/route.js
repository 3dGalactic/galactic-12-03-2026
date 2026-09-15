import { NextResponse } from 'next/server';
import { ingestDocument } from '../../lib/documentParser';
import { connectToDatabase } from '../../lib/db';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const docsColl = db.collection('uploaded_documents');
    const documents = await docsColl.find({}).toArray();

    return NextResponse.json({
      success: true,
      documents,
    });
  } catch (error) {
    console.error('Error fetching uploaded documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const fileName = file.name;
    const fileType = file.type || 'application/octet-stream';
    const fileSize = file.size;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const ingestResult = await ingestDocument({
      buffer,
      fileName,
      fileType,
      fileSize,
      uploadedBy: 'Admin User',
    });

    return NextResponse.json({
      success: true,
      message: `File "${fileName}" parsed, vectorized, and added to knowledge base.`,
      result: ingestResult,
    });
  } catch (error) {
    console.error('Error ingesting document:', error);
    return NextResponse.json(
      { error: 'Failed to ingest file', details: error.message },
      { status: 500 }
    );
  }
}
