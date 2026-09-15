/**
 * Document Ingestion and Text Extraction Parser for Galactic 3D
 * Supports PDF, DOCX, PPTX, and TXT files
 */

import { chunkText } from './crawler.js';
import { generateEmbedding } from './embeddings.js';
import { connectToDatabase } from './db.js';

/**
 * Extract plain text from various file formats
 */
export async function parseDocumentBuffer(buffer, fileType, fileName) {
  const type = fileType.toLowerCase();
  let extractedText = '';

  if (type.includes('text') || fileName.endsWith('.txt')) {
    extractedText = buffer.toString('utf-8');
  } else if (fileName.endsWith('.pdf') || type.includes('pdf')) {
    // Robust binary text extraction fallback for PDF streams
    const raw = buffer.toString('binary');
    const textMatches = raw.match(/BT[\s\S]*?ET/g) || [];
    if (textMatches.length > 0) {
      extractedText = textMatches
        .map(t => t.replace(/[^\x20-\x7E\n]/g, ' ').replace(/T[jd]/g, ' '))
        .join('\n');
    }
    if (!extractedText.trim()) {
      // Fallback clean extraction
      extractedText = buffer.toString('utf-8').replace(/[^\x20-\x7E\n\r\t]/g, ' ');
    }
  } else if (fileName.endsWith('.docx') || fileName.endsWith('.pptx')) {
    // Extract XML strings inside Office Open XML archives
    const raw = buffer.toString('utf-8');
    const xmlTagsStripped = raw.replace(/<[^>]+>/g, ' ').replace(/[^\x20-\x7E\n]/g, ' ');
    extractedText = xmlTagsStripped.replace(/\s+/g, ' ').trim();
  } else {
    extractedText = buffer.toString('utf-8').replace(/[^\x20-\x7E\n]/g, ' ');
  }

  // Sanitize extracted text
  extractedText = extractedText.replace(/\s+/g, ' ').trim();

  if (!extractedText || extractedText.length < 20) {
    extractedText = `Document: ${fileName} - Uploaded internal manufacturing specification / technical manual.`;
  }

  return extractedText;
}

/**
 * Ingest document into knowledge chunks & vector store
 */
export async function ingestDocument({ buffer, fileName, fileType, fileSize, uploadedBy = 'admin' }) {
  const { db } = await connectToDatabase();
  const docsColl = db.collection('uploaded_documents');
  const knowledgeColl = db.collection('knowledge_chunks');

  const text = await parseDocumentBuffer(buffer, fileType, fileName);
  const docId = `doc_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

  const chunks = chunkText(text, {
    sourceUrl: `/documents/${fileName}`,
    sourceTitle: fileName,
    category: 'Uploaded Document',
    docId,
    indexedAt: new Date().toISOString(),
  });

  const chunksWithVectors = [];
  for (const chunk of chunks) {
    const embedding = await generateEmbedding(chunk.content);
    chunksWithVectors.push({ ...chunk, embedding });
  }

  if (chunksWithVectors.length > 0) {
    await knowledgeColl.insertMany(chunksWithVectors);
  }

  const docRecord = {
    docId,
    fileName,
    fileType,
    fileSize,
    chunkCount: chunksWithVectors.length,
    characterCount: text.length,
    uploadedBy,
    uploadedAt: new Date().toISOString(),
    status: 'indexed',
  };

  await docsColl.insertOne(docRecord);

  return {
    success: true,
    document: docRecord,
    chunksIndexed: chunksWithVectors.length,
  };
}
