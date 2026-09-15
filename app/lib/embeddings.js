/**
 * Vector Embedding & Similarity Utility for Galactic 3D AI Assistant
 */

// Cosine similarity between two numerical vectors
export function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Generate deterministic local semantic vector for zero-config offline fallback (128 dims)
export function generateLocalEmbedding(text) {
  const normalized = (text || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = normalized.split(/\s+/).filter(Boolean);
  const dims = 128;
  const vector = new Array(dims).fill(0);

  for (let i = 0; i < tokens.length; i++) {
    const word = tokens[i];
    let hash = 0;
    for (let c = 0; c < word.length; c++) {
      hash = (hash * 31 + word.charCodeAt(c)) & 0xffffffff;
    }
    const idx = Math.abs(hash) % dims;
    vector[idx] += 1;
    // N-gram spread
    const idx2 = Math.abs((hash >> 3) ^ word.length) % dims;
    vector[idx2] += 0.5;
  }

  // Normalize
  let norm = 0;
  for (let i = 0; i < dims; i++) norm += vector[i] * vector[i];
  norm = Math.sqrt(norm);
  if (norm > 0) {
    for (let i = 0; i < dims; i++) vector[i] = vector[i] / norm;
  }

  return vector;
}

/**
 * Generate embedding using OpenAI API (text-embedding-3-small) with graceful local fallback
 */
export async function generateEmbedding(text) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return generateLocalEmbedding(text);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-3-small',
        input: text.slice(0, 8000),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.warn('OpenAI Embedding API error, using fallback:', err);
      return generateLocalEmbedding(text);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    console.warn('Failed to call OpenAI embedding endpoint, using local vector:', error.message);
    return generateLocalEmbedding(text);
  }
}
