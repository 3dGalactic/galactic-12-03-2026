/**
 * Production RAG (Retrieval Augmented Generation) Engine for Galactic 3D
 * Strict Knowledge Base Mode - The uploaded documents and database are the single source of truth.
 */

import { generateEmbedding, cosineSimilarity } from './embeddings.js';
import { connectToDatabase } from './db.js';
import { seedKnowledgeBase, GALACTIC_SEED_KNOWLEDGE } from './crawler.js';

const CONTACT_FOOTER = `For more information or custom requirements, please contact:

Email: info@galactic-3d.com
Quotes: quote@galactic-3d.com
Phone: +91 97403 31995`;

const SYSTEM_PROMPT = `You are the official Galactic 3D AI Assistant.

Your ONLY source of truth is:
- Uploaded Galactic 3D PPT files
- Uploaded Galactic 3D documents
- Galactic 3D knowledge base
- Structured Galactic 3D database

DO NOT use internet knowledge.
DO NOT hallucinate.
DO NOT assume.
DO NOT guess.

==================================================
CRITICAL RULE #1 - UNDERSTAND USER INTENT
==================================================

Before answering, classify the question into one of these categories:
1. Verification Question (Yes/No)
2. Information Request
3. Contact / Quote Request

==================================================
TYPE 1: VERIFICATION QUESTION (YES / NO)
==================================================

Examples:
- Does Galactic 3D serve aerospace companies?
- Is aluminum used?
- Is titanium available?
- Do you provide ML Training?
- Do you provide CNC Machining?
- Do you provide Injection Molding?
- Do you serve banking companies?
- Is magnesium supported?

For these questions:
1. Extract the EXACT item being asked.
2. Search ONLY for that exact item.
3. Do NOT use broad category matching.
4. Do NOT use semantic assumptions.

--------------------------------------------------
EXACT ENTITY MATCHING & CRITICAL RULE #2
--------------------------------------------------
NEVER answer YES because a broader category exists.
Example:
User: Do you provide ML Training?
Knowledge Base: Training Programs Exist (DfAM / Additive Manufacturing / 3D Design)
This DOES NOT mean YES. You must verify "Machine Learning Training". If not found -> Answer NO.

--------------------------------------------------
IF FOUND
--------------------------------------------------
Response Format:
Yes. <short answer>

Rules:
- Maximum 2 sentences.
- No bullet lists.
- No company overview.
- No unrelated information.

Examples:
User: Does Galactic 3D serve aerospace companies?
Response: Yes. Galactic 3D serves the aerospace industry.

User: Is aluminum used?
Response: Yes. Aluminum is listed among the materials used by Galactic 3D.

User: Do you provide DfAM training?
Response: Yes. Galactic 3D provides DfAM training.

--------------------------------------------------
IF NOT FOUND
--------------------------------------------------
Response Format:
No. <item> is not listed in the available Galactic 3D knowledge base.

For more information or custom requirements, please contact:

Email: info@galactic-3d.com
Quotes: quote@galactic-3d.com
Phone: +91 97403 31995

Examples:
User: Do you provide ML Training?
Response:
No. Machine Learning (ML) Training is not listed among Galactic 3D's training programs in the available knowledge base.

For more information or custom requirements, please contact:

Email: info@galactic-3d.com
Phone: +91 97403 31995

User: Do you provide CNC Machining?
Response:
No. CNC Machining is not listed as a service provided by Galactic 3D in the available knowledge base.

For more information or custom requirements, please contact:

Email: quote@galactic-3d.com
Phone: +91 97403 31995

==================================================
TYPE 2: INFORMATION REQUEST
==================================================
Examples:
- What services does Galactic 3D provide?
- What industries do you serve?
- What materials are used?
- What products can Galactic manufacture?
- What training programs are available?

For these questions:
Provide the complete answer from the knowledge base.
Lists are allowed. Detailed responses are allowed.

==================================================
SPECIAL RULE: WHAT DOES GALACTIC DO? / OVERVIEW
==================================================
If user asks:
- What does Galactic do?
- What all does Galactic 3D do?
- Tell me about Galactic 3D.
- What services does Galactic provide?
- What are Galactic's capabilities?

DO NOT return:
Address, Certifications, ISO details, Startup recognition, Leadership information, Phone numbers, Emails, NDA policies, Compliance details (unless specifically requested).

Instead return EXACTLY:
Galactic 3D is an advanced manufacturing and engineering company specializing in metal additive manufacturing and industrial engineering solutions.

Key services include:

• Metal 3D Printing (DMLS / LPBF)
• Rapid Prototyping
• Design for Additive Manufacturing (DfAM)
• Product Design & Optimization
• Reverse Engineering
• Contract Manufacturing
• Engineering Consulting
• Research & Development Support
• Training Programs
• Workshops & Internships

Industries served include:

• Aerospace
• Defense
• Automotive
• EV
• Medical
• Semiconductor
• Energy
• Industrial Manufacturing
• Education & Research

==================================================
CRITICAL RULE #3
==================================================
Specific Question -> Specific Answer (Max 2 sentences).
Never dump unrelated company information or full lists when a specific item is asked.`;

/**
 * Retrieve the most relevant knowledge chunks for a user query (Strict top_k = 3)
 */
let chunksMemoryCache = null;
let lastCacheTime = 0;

export async function retrieveRelevantChunks(query, topK = 3) {
  const now = Date.now();
  if (!chunksMemoryCache || now - lastCacheTime > 60000) {
    await seedKnowledgeBase();
    const { db } = await connectToDatabase();
    const knowledgeColl = db.collection('knowledge_chunks');
    chunksMemoryCache = await knowledgeColl.find({}).toArray();
    lastCacheTime = now;
  }

  const allChunks = chunksMemoryCache;
  if (!allChunks || allChunks.length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase();

  // Check if query is explicitly asking for contact, leadership, training, or digital platform
  const asksContact = /contact|email|phone|call|address|location|where is|reach|quote url/i.test(normalizedQuery);
  const asksLeadership = /who is|ceo|founder|director|leadership|owner|who runs|author|prepared by|aditya|sidhant|prethi|aabid|team/i.test(normalizedQuery);
  const asksTraining = /training|course|workshop|bootcamp|school program|institution program|curriculum/i.test(normalizedQuery);
  const asksDigital = /seo|analytics|cms|architecture|google search console|ga4|keyword/i.test(normalizedQuery);

  // Filter out contact, leadership, training, and digital platform chunks unless explicitly requested
  const filteredChunks = allChunks.filter(chunk => {
    const category = (chunk.category || '').toLowerCase();
    if (category === 'contact' && !asksContact) return false;
    if (category === 'leadership' && !asksLeadership) return false;
    if (category === 'training' && !asksTraining && !asksContact) return false;
    if (category === 'digital platform' && !asksDigital && !asksLeadership) return false;
    return true;
  });

  const queryVector = await generateEmbedding(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);

  const scoredChunks = filteredChunks.map((chunk) => {
    let similarity = 0;
    if (chunk.embedding && Array.isArray(chunk.embedding)) {
      similarity = cosineSimilarity(queryVector, chunk.embedding);
    }

    // Keyword relevance boost
    let keywordScore = 0;
    const contentLower = (chunk.content || '').toLowerCase();
    const titleLower = (chunk.sourceTitle || '').toLowerCase();

    for (const word of queryWords) {
      if (contentLower.includes(word)) keywordScore += 0.08;
      if (titleLower.includes(word)) keywordScore += 0.15;
    }

    const totalScore = similarity * 0.7 + Math.min(keywordScore, 0.3);

    return {
      ...chunk,
      score: totalScore,
      similarity,
    };
  });

  // Sort descending by score
  scoredChunks.sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, topK);
}

/**
 * Generate intelligent follow-up suggestions based on context
 */
export function generateFollowUps(query, retrievedChunks) {
  const lower = query.toLowerCase();
  if (lower.includes('material') || lower.includes('titanium') || lower.includes('inconel') || lower.includes('aluminum')) {
    return [
      'What are the mechanical properties of Ti6Al4V vs Inconel 718?',
      'Can you print pure copper for thermal/electrical components?',
      'How do I submit CAD files for a material feasibility review?'
    ];
  }
  if (lower.includes('quote') || lower.includes('cost') || lower.includes('price')) {
    return [
      'What CAD formats are supported for instant quoting?',
      'What is the turnaround time for rapid prototyping?',
      'Do you offer batch volume discounts for serial production?'
    ];
  }
  if (lower.includes('dmls') || lower.includes('metal') || lower.includes('technology') || lower.includes('printer')) {
    return [
      'What layer thickness and tolerances do your DMLS machines achieve?',
      'What post-processing and CNC machining capabilities do you have?',
      'How does Design for Additive Manufacturing (DFAM) reduce weight?'
    ];
  }
  if (lower.includes('training') || lower.includes('workshop') || lower.includes('course')) {
    return [
      'What is covered in the corporate DFAM workshop?',
      'How do colleges and universities partner for 3D printing labs?',
      'Do participants receive an industry-recognized certificate?'
    ];
  }
  return [
    'What materials are available for metal 3D printing?',
    'Which industries does Galactic 3D specialize in?',
    'How do I request an engineering quote for my project?'
  ];
}

/**
 * Strict Knowledge Base Response Engine (Intent-Aware & Zero-Hallucination)
 */
function generateFallbackResponse(query, chunks, language = 'en') {
  const q = query.toLowerCase().trim();

  const cleanQ = query.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

  // Helper to detect if question is a verification question (Type 1)
  const isVerification = /^(does|do|is|are|can|has|have|will|would)\b/i.test(q) ||
                         /^(do you|does galactic|can you|is it|is there|are there|have you)\b/i.test(q);

  const isSpecificTopic =
    /\b(material|materials|metal|titanium|aluminum|inconel|steel|copper|resin|plastic|powder)\b/i.test(cleanQ) ||
    /\b(industry|industries|sector|sectors|aerospace|medical|automotive|energy|defense|semiconductor)\b/i.test(cleanQ) ||
    /\b(machine|machines|printer|printers|equipment|hardware|eos|m290|laser|furnace|cmm)\b/i.test(cleanQ) ||
    /\b(training|course|courses|internship|internships|workshop|workshops)\b/i.test(cleanQ) ||
    /\b(quote|cost|pricing|price|order|rfq)\b/i.test(cleanQ) ||
    /\b(iso|certif|certificate|standards|compliance)\b/i.test(cleanQ) ||
    /\b(contact|email|phone|address|location|founder|ceo|director)\b/i.test(cleanQ);

  const isGeneralOverviewQuery =
    !isSpecificTopic &&
    (
      /what\s+(all\s+)?(does\s+)?galactic(\s+3d)?\s+(do|does|provide|offer|manufacture)/i.test(cleanQ) ||
      /what\s+all\s+(galactic|you)(\s+3d)?\s+(do|does|provide|offer|manufacture)/i.test(cleanQ) ||
      /what\s+(do|does)\s+(you|your company|galactic(\s+3d)?)\s+(do|offer|provide|manufacture)/i.test(cleanQ) ||
      /what\s+(is|about)\s+galactic(\s+3d)?/i.test(cleanQ) ||
      /tell\s+me\s+about\s+(galactic|galactic 3d|your company|the company)/i.test(cleanQ) ||
      /^(about galactic|about galactic 3d|about company|overview|galactic 3d|galactic)$/i.test(cleanQ) ||
      /what\s+are\s+(your|galactic'?s?)\s+(capabilities|services|offerings|solutions)/i.test(cleanQ) ||
      /^(services|capabilities|our services|all services)$/i.test(cleanQ)
    );

  // ==================================================
  // SPECIAL RULE: WHAT DOES GALACTIC DO? / OVERVIEW
  // ==================================================
  if (isGeneralOverviewQuery) {
    return `Galactic 3D is an advanced manufacturing and engineering company specializing in metal additive manufacturing and industrial engineering solutions.

Key services include:

• Metal 3D Printing (DMLS / LPBF)
• Rapid Prototyping
• Design for Additive Manufacturing (DfAM)
• Product Design & Optimization
• Reverse Engineering
• Contract Manufacturing
• Engineering Consulting
• Research & Development Support
• Training Programs
• Workshops & Internships

Industries served include:

• Aerospace
• Defense
• Automotive
• EV
• Medical
• Semiconductor
• Energy
• Industrial Manufacturing
• Education & Research`;
  }

  // ==================================================
  // TYPE 1: VERIFICATION QUESTIONS (FOUND vs NOT FOUND)
  // Exact Entity Matching - Never answer YES because a broader category exists!
  // ==================================================

  // 1. SPECIFIC TRAINING VERIFICATION
  if (q.includes('ml training') || q.includes('machine learning training') || q.includes('ai training') || q.includes('data science')) {
    return `No. Machine Learning (ML) Training is not listed among Galactic 3D's training programs in the available knowledge base.\n\n${CONTACT_FOOTER}`;
  }

  if (q.includes('dfam training') || q.includes('additive manufacturing training') || q.includes('3d printing training')) {
    return `Yes. Galactic 3D provides DfAM and additive manufacturing training programs.`;
  }

  if (q.includes('internship') || q.includes('intern')) {
    if (isVerification) {
      return `Yes. Galactic 3D offers training and internship opportunities for students and engineers.`;
    }
    return `Yes. Galactic 3D offers structured internship and hands-on additive manufacturing programs. You can reach out to **careers@galactic-3d.com** for current opportunities.`;
  }

  // 2. SPECIFIC SERVICE VERIFICATION
  if (q.includes('dfam') || q.includes('design for additive manufacturing')) {
    if (isVerification) {
      return `Yes. Galactic 3D provides Design for Additive Manufacturing (DfAM) services.`;
    }
    return `**Design for Additive Manufacturing (DfAM) at Galactic 3D:**\n\nGalactic 3D provides comprehensive DfAM engineering services including topology optimization, weight reduction (up to 65%), part consolidation, internal lattice structures, conformal cooling channels, and manufacturing optimization for additive manufacturing.`;
  }

  if (q.includes('rapid prototyping')) {
    if (isVerification) {
      return `Yes. Galactic 3D provides rapid prototyping services with functional DMLS metal and plastic prototypes delivered in 24 to 48 hours.`;
    }
    return `**Rapid Prototyping Services at Galactic 3D:**\n\n• Accelerated functional prototyping and design iteration delivered in **24 to 48 hours**.\n• Supported in DMLS metal and engineering composites with confidential DFAM review.`;
  }

  if (q.includes('full-scale production') || q.includes('serial production') || q.includes('volume production')) {
    if (isVerification) {
      return `Yes. Galactic 3D provides full-scale metal additive manufacturing certified for aerospace, defense, and automotive engineering standards.`;
    }
    return `**Full-Scale Production Services at Galactic 3D:**\n\n• High-volume metal additive manufacturing certified for aerospace, defense, and automotive standards.\n• Monitored with strict parameter control, certified powders, and Zeiss CMM quality inspection.`;
  }

  if (q.includes('custom manufacturing')) {
    if (isVerification) {
      return `Yes. Galactic 3D provides custom manufacturing tailored for complex geometries, specialized alloys, and precision finishing.`;
    }
    return `**Custom Manufacturing Services at Galactic 3D:**\n\n• Tailored additive manufacturing solutions optimized for complex geometries, multi-material titanium/inconel, and precision CNC finishing.`;
  }

  if (q.includes('manufacturing partner') || q.includes('contract manufacturing')) {
    if (isVerification) {
      return `Yes. Galactic 3D operates as a collaborative manufacturing partner offering LPBF contract manufacturing and application development.`;
    }
    return `**Manufacturing Partner Services at Galactic 3D:**\n\n• Research-driven collaborative engineering, DMLS/LPBF application development, and India-first contract manufacturing.`;
  }

  if (q.includes('reverse engineering')) {
    if (isVerification) {
      return `Yes. Galactic 3D provides reverse engineering and product design optimization services.`;
    }
    return `**Reverse Engineering at Galactic 3D:**\n\nGalactic 3D provides precision 3D scanning, CAD reconstruction, and reverse engineering for legacy parts and design optimization.`;
  }

  // 3. UNLISTED / NON-EXISTENT SERVICES
  if (
    q.includes('cnc machining') ||
    q.includes('injection molding') ||
    q.includes('sand casting') ||
    q.includes('die casting') ||
    q.includes('sheet metal stamping') ||
    q.includes('blow molding') ||
    q.includes('vacuum casting') ||
    q.includes('wood carving') ||
    q.includes('pottery')
  ) {
    if (q.includes('cnc machining')) {
      return `No. CNC Machining is not listed as a service provided by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
    }
    if (q.includes('injection molding')) {
      return `No. Injection Molding is not listed as a service provided by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
    }
    const serviceNameMatch = query.match(/(?:provide|do you offer|do you do|can you do)\s+([a-zA-Z\s]+?)(?:\?|$|\s+service)/i);
    const item = serviceNameMatch ? serviceNameMatch[1].trim() : 'This service';
    return `No. ${item.charAt(0).toUpperCase() + item.slice(1)} is not listed as a service provided by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
  }

  // 4. SPECIFIC MATERIAL VERIFICATION
  if (q.includes('aluminium') || q.includes('aluminum') || q.includes('alsi10mg') || q.includes('scalmalloy')) {
    return `Yes. Aluminum is listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('titanium') || q.includes('ti6al4v')) {
    return `Yes. Titanium is listed among the materials used by Galactic 3D for high-performance aerospace, defense, and medical applications.`;
  }
  if (q.includes('stainless steel') || q.includes('316l') || q.includes('17-4 ph') || q.includes('17-4ph')) {
    return `Yes. Stainless steel (316L and 17-4 PH) is listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('tool steel') || q.includes('ms1') || q.includes('maraging 300')) {
    return `Yes. Tool steel (MS1 / Maraging 300) is listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('nickel') || q.includes('inconel') || q.includes('inconel 718') || q.includes('inconel 625')) {
    return `Yes. Nickel alloys (Inconel 718 and Inconel 625) are listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('copper') || q.includes('cucrzr')) {
    return `Yes. Pure copper and CuCrZr are listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('carbon fiber') || q.includes('cfr') || q.includes('fiberglass') || q.includes('composite')) {
    return `Yes. Continuous Fiber Reinforcement (CFR) composites (carbon fiber and fiberglass) are listed among the materials used by Galactic 3D.`;
  }
  if (q.includes('resin') || q.includes('msla')) {
    return `Yes. High-resolution mSLA resins are listed among the materials used by Galactic 3D.`;
  }

  // 5. UNLISTED / NON-EXISTENT MATERIALS
  if (
    q.includes('magnesium') ||
    q.includes('gold') ||
    q.includes('silver') ||
    q.includes('platinum') ||
    q.includes('brass') ||
    q.includes('bronze') ||
    q.includes('zinc') ||
    q.includes('lead') ||
    q.includes('wood') ||
    q.includes('clay') ||
    q.includes('glass') ||
    q.includes('rubber') ||
    q.includes('concrete')
  ) {
    if (q.includes('magnesium')) {
      return `No. Magnesium is not listed among the materials used by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
    }
    const matMatch = query.match(/(?:print|use|supported by|materials?)\s+([a-zA-Z\s]+?)(?:\?|$|\s+alloys?|\s+material)/i);
    const item = matMatch ? matMatch[1].trim() : 'This material';
    return `No. ${item.charAt(0).toUpperCase() + item.slice(1)} is not listed among the materials used by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
  }

  // 6. SPECIFIC INDUSTRY VERIFICATION
  if (q.includes('aerospace')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the aerospace industry.`;
    }
    return `**Aerospace Applications at Galactic 3D:**\n\nGalactic 3D manufactures flight-qualified brackets, lattice-optimized structural parts, heat exchangers, UAV airframes, and certified defense hardware.`;
  }

  if (q.includes('defence') || q.includes('defense')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the defense industry.`;
    }
    return `**Defense Applications at Galactic 3D:**\n\nGalactic 3D manufactures specialized mission-critical components, UAV structures, and certified defense hardware.`;
  }

  if (q.includes('automotive') || q.includes('motorsport') || q.includes('ev') || q.includes('vehicle')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the automotive and EV industries.`;
    }
    return `**Automotive & Motorsport Applications at Galactic 3D:**\n\nGalactic 3D provides rapid functional prototyping, intake manifolds, lightweight brake calipers, EV battery cooling plates, and ergonomic assembly jigs.`;
  }

  if (q.includes('medical') || q.includes('healthcare') || q.includes('orthopedic') || q.includes('implant')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the medical and healthcare industry.`;
    }
    return `**Medical & Healthcare Applications at Galactic 3D:**\n\nGalactic 3D manufactures biocompatible titanium orthopedic implants, patient-specific surgical guides, and anatomical planning models.`;
  }

  if (q.includes('semiconductor') || q.includes('electronics')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the semiconductor and electronics industry.`;
    }
    return `**Semiconductor & Electronics Applications at Galactic 3D:**\n\nGalactic 3D provides ESD-safe component trays, custom heat sinks with internal micro-fins, RF shielding housings, and wafer-handling tools.`;
  }

  if (q.includes('energy') || q.includes('power')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves the energy and power industry.`;
    }
    return `**Energy & Power Applications at Galactic 3D:**\n\nGalactic 3D manufactures gas turbine combustion nozzles, heat exchangers, and high-pressure valves.`;
  }

  if (q.includes('education') || q.includes('research') || q.includes('university') || q.includes('institution')) {
    if (isVerification) {
      return `Yes. Galactic 3D serves education and research institutions.`;
    }
    return `**Education & Research Applications at Galactic 3D:**\n\nGalactic 3D provides advanced DfAM research models, mechanical testing specimens, and university additive lab training.`;
  }

  // 7. UNLISTED / NON-EXISTENT INDUSTRIES
  if (
    q.includes('banking') ||
    q.includes('bank') ||
    q.includes('finance') ||
    q.includes('agriculture') ||
    q.includes('farming') ||
    q.includes('textile') ||
    q.includes('fashion') ||
    q.includes('clothing') ||
    q.includes('mining') ||
    q.includes('real estate') ||
    q.includes('construction') ||
    q.includes('furniture') ||
    q.includes('food industry')
  ) {
    if (q.includes('banking') || q.includes('bank')) {
      return `No. Banking companies are not listed among the industries served by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
    }
    const indMatch = query.match(/(?:serve|work with|industry)\s+([a-zA-Z\s]+?)(?:\?|$|\s+companies|\s+manufacturers|\s+industry)/i);
    const item = indMatch ? indMatch[1].trim() : (q.includes('agriculture') ? 'agriculture' : 'requested');
    return `No. The ${item} industry is not listed among the industries served by Galactic 3D in the available knowledge base.\n\n${CONTACT_FOOTER}`;
  }

  // ==================================================
  // TYPE 2: BROAD INFORMATION REQUESTS
  // ==================================================
  // General Services Request
  if (
    q === 'services' ||
    q === 'service' ||
    q === 'our services' ||
    q.includes('what services') ||
    q.includes('which services') ||
    q.includes('list services') ||
    q.includes('manufacturing services') ||
    q.includes('what do you provide') ||
    q.includes('what you provide') ||
    q.includes('tell me about services') ||
    q.includes('show services') ||
    q.includes('capabilities') ||
    q.includes('all services')
  ) {
    return `**Galactic 3D Manufacturing Services:**\n\n` +
      `1. **Rapid Prototyping:**\n` +
      `   • Accelerated functional prototyping, design iteration, and DMLS metal & FDM plastic prototypes delivered in **24 to 48 hours**.\n` +
      `   • *Key Capabilities:* **24-48h Turnaround**, **Functional DMLS**, **DFAM Review**.\n\n` +
      `2. **Full-Scale Production:**\n` +
      `   • High-volume metal additive manufacturing certified for aerospace, defense, and automotive engineering standards.\n` +
      `   • *Key Capabilities:* **Certified Powders**, **Parameter Control**, **CMM Inspection**.\n\n` +
      `3. **Custom Manufacturing:**\n` +
      `   • Tailored additive solutions optimized for complex geometries, multi-material titanium/inconel, and precision CNC finishing.\n` +
      `   • *Key Capabilities:* **Complex Geometries**, **Specialized Alloys**, **CNC Finishing**.\n\n` +
      `4. **Manufacturing Partner:**\n` +
      `   • Research-driven collaborative engineering, DMLS/LPBF application development, and India-first contract manufacturing.\n` +
      `   • *Key Capabilities:* **Collaborative R&D**, **LPBF Contract**, **India First**.\n\n` +
      `5. **Design for Additive Manufacturing (DfAM):**\n` +
      `   • Topology optimization, weight reduction (up to 65%), part consolidation, internal lattice structures, and conformal cooling channels.`;
  }

  // General Industries Request
  if (
    q === 'industries' ||
    q === 'industry' ||
    q === 'industries we serve' ||
    q.includes('what industries') ||
    q.includes('which industries') ||
    q.includes('list industries') ||
    q.includes('industries you serve') ||
    q.includes('industries we serve') ||
    q.includes('tell me about industries') ||
    q.includes('show industries') ||
    q.includes('sectors')
  ) {
    return `**Galactic 3D Industries We Serve:**\n\n` +
      `Delivering advanced manufacturing and 3D printing solutions across multiple industries:\n\n` +
      `1. **Aerospace & Defence (Aerospace):**\n` +
      `   • High-performance lightweight flight components, DMLS titanium brackets, heat exchangers, and certified defense hardware.\n\n` +
      `2. **Automotive & Motorsport (Automotive & EV):**\n` +
      `   • Rapid functional prototyping, intake manifolds, lightweight brake calipers, and ergonomic assembly jigs for agile automotive engineering.\n\n` +
      `3. **Medical & Healthcare (Medical):**\n` +
      `   • Biocompatible titanium orthopedic implants, patient-specific surgical guides, and anatomical planning models.\n\n` +
      `4. **Education & Research (Education):**\n` +
      `   • Advanced DfAM research models, mechanical testing specimens, fluid dynamics test rigs, and university additive lab training.\n\n` +
      `5. **Electronics & Semiconductors (Electronics):**\n` +
      `   • ESD-safe component trays, custom heat sinks with internal micro-fins, RF shielding housings, and wafer-handling tools.\n\n` +
      `6. **Energy & Power (Energy):**\n` +
      `   • Gas turbine combustion nozzles, heat exchangers, wind turbine sensor brackets, and high-pressure oil & gas valves.`;
  }

  // General Materials Request
  if (
    q === 'materials' ||
    q === 'material' ||
    q.includes('what materials') ||
    q.includes('which materials') ||
    q.includes('list materials') ||
    q.includes('materials portfolio') ||
    q.includes('supported materials') ||
    q.includes('powder portfolio')
  ) {
    return `**Galactic 3D Materials Portfolio & EOS Datasheet Specifications:**\n\n` +
      `• **Titanium (Ti6Al4V Grade 5 & 23 ELI):** High strength-to-weight ratio and biocompatibility; used in aerospace brackets, rocket engine injectors, and medical orthopedic implants.\n` +
      `• **Aluminium (AlSi10Mg & Scalmalloy):** Lightweight with high thermal conductivity; ideal for automotive heat exchangers, EV battery cold plates, and UAV structures.\n` +
      `• **Stainless Steel (316L & 17-4 PH):** High corrosion resistance, food/medical grade (316L), and precipitation-hardened high tensile strength (17-4PH).\n` +
      `• **Tool Steel (MS1 / Maraging 300):** Ultra-high hardness and wear resistance for injection mold inserts with conformal cooling channels (reducing cycle times by **30–50%**).\n` +
      `• **Nickel Alloys / Inconel (Inconel 718 & 625):** Exceptional tensile, fatigue, and creep-rupture strength up to **700°C** for gas turbines, rocket combustion chambers, and energy systems.\n` +
      `• **Pure Copper & CuCrZr:** Superior electrical and thermal conductivity for induction coils, microchannel heat sinks, and rocket thrust chambers.\n` +
      `• **CFR Composites:** Continuous Carbon Fiber and Fiberglass reinforcement for industrial high-strength lightweight parts.\n` +
      `• **mSLA Resins:** High-resolution photopolymer resins for detailed medical and visual prototypes.\n\n` +
      `*All materials are backed by official EOS material datasheets with strict version control, quotation linkage, and ISO 9001:2015 audit traceability.*`;
  }

  // Training Programs Request
  if (q.includes('training') || q.includes('course') || q.includes('workshop') || q.includes('program')) {
    return `**Galactic 3D Training Programs:**\n\n` +
      `1. **School Program:** Introductory additive manufacturing awareness and 3D design thinking.\n` +
      `2. **Institution Program:** Structured curriculum-linked training and hands-on lab access for colleges.\n` +
      `3. **Industry Program:** Professional upskilling for working engineers on DFAM and quality inspection.`;
  }

  // Hardware & Machines
  if (q.includes('eos') || q.includes('m290') || q.includes('what printer') || q.includes('what machine') || q.includes('hardware') || q.includes('equipment')) {
    return `Galactic 3D operates the EOS M290 Direct Metal Laser Sintering (DMLS / LPBF) system, capable of 20–40 micron print precision, 400W fiber laser, build envelope of 250 x 250 x 325 mm, and >99.8% metallurgical density. Galactic 3D also operates CFR composite systems, mSLA resin 3D printers, vacuum heat treatment furnaces, wire EDM, and a Zeiss Contura Bridge CMM.`;
  }

  // Certifications (ONLY if requested)
  if (q.includes('iso') || q.includes('certif') || q.includes('dpiit') || q.includes('startup india') || q.includes('greenvio')) {
    return `Galactic 3D holds the following verified certifications:\n• ISO 9001:2015 QMS Certified\n• DPIIT Recognized Startup India\n• Greenvio Eco Sustainability Audit Certified\n• AS9100 Aerospace Compliance Workflows`;
  }

  // Leadership & Authors (ONLY if requested)
  if (q.includes('ceo') || q.includes('founder') || q.includes('director') || q.includes('who is leading') || q.includes('who leads') || q.includes('author') || q.includes('prepared by') || q.includes('who wrote') || q.includes('aditya') || q.includes('sidhant') || q.includes('prethi') || q.includes('aabid')) {
    return `Galactic 3D Leadership & Project Authors:\n• Founder & Director: Aabid Khan (Email: aabid@galactic-3d.com, Phone: +91 97403 31995)\n• Project Report Prepared By: Aditya Kumar Singh, Sidhant Kumar, and Prethi M`;
  }

  // Contact Information (ONLY if requested)
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('number') || q.includes('address') || q.includes('location') || q.includes('where is') || q.includes('where are you')) {
    return `Galactic 3D Contact Information:\n• Facility Address: Cambridge Group of Institutions Campus, KR Puram, Bengaluru, Karnataka 560036, India.\n• Email: info@galactic-3d.com | quote@galactic-3d.com | aabid@galactic-3d.com\n• Phone / WhatsApp: +91 97403 31995\n• Website: https://www.galactic-3d.com/`;
  }

  // Check if chunks contain high-confidence direct match
  if (chunks && chunks.length > 0 && chunks[0].score > 0.35) {
    const primary = chunks[0];
    return `${primary.content}`;
  }

  // Default Strict Fallback for Unverified Information
  return `No. This information is not listed in the available Galactic 3D knowledge base.\n\n${CONTACT_FOOTER}`;
}

/**
 * Main RAG Answering Function
 */
export async function generateRAGAnswer({
  query,
  conversationHistory = [],
  language = 'en',
}) {
  const chunks = await retrieveRelevantChunks(query, 3);

  // Format context
  const contextText = chunks
    .map((c, i) => `[Document ${i + 1}] Source: ${c.sourceTitle} (${c.sourceUrl})\nCategory: ${c.category}\n${c.content}`)
    .join('\n\n---\n\n');

  // Citations
  const citations = chunks.map(c => ({
    title: c.sourceTitle || 'Galactic 3D Knowledge',
    url: c.sourceUrl || 'https://www.galactic-3d.com/',
    category: c.category || 'Documentation',
    relevance: Math.round((c.score || 0.8) * 100)
  }));

  const followUpQuestions = generateFollowUps(query, chunks);

  const cleanQ = query.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

  const isSpecificTopic =
    /\b(material|materials|metal|titanium|aluminum|inconel|steel|copper|resin|plastic|powder)\b/i.test(cleanQ) ||
    /\b(industry|industries|sector|sectors|aerospace|medical|automotive|energy|defense|semiconductor)\b/i.test(cleanQ) ||
    /\b(machine|machines|printer|printers|equipment|hardware|eos|m290|laser|furnace|cmm)\b/i.test(cleanQ) ||
    /\b(training|course|courses|internship|internships|workshop|workshops)\b/i.test(cleanQ) ||
    /\b(quote|cost|pricing|price|order|rfq)\b/i.test(cleanQ) ||
    /\b(iso|certif|certificate|standards|compliance)\b/i.test(cleanQ) ||
    /\b(contact|email|phone|address|location|founder|ceo|director)\b/i.test(cleanQ);

  const isGeneralOverviewQuery =
    !isSpecificTopic &&
    (
      /what\s+(all\s+)?(does\s+)?galactic(\s+3d)?\s+(do|does|provide|offer|manufacture)/i.test(cleanQ) ||
      /what\s+all\s+(galactic|you)(\s+3d)?\s+(do|does|provide|offer|manufacture)/i.test(cleanQ) ||
      /what\s+(do|does)\s+(you|your company|galactic(\s+3d)?)\s+(do|offer|provide|manufacture)/i.test(cleanQ) ||
      /what\s+(is|about)\s+galactic(\s+3d)?/i.test(cleanQ) ||
      /tell\s+me\s+about\s+(galactic|galactic 3d|your company|the company)/i.test(cleanQ) ||
      /^(about galactic|about galactic 3d|about company|overview|galactic 3d|galactic)$/i.test(cleanQ) ||
      /what\s+are\s+(your|galactic'?s?)\s+(capabilities|services|offerings|solutions)/i.test(cleanQ) ||
      /^(services|capabilities|our services|all services)$/i.test(cleanQ)
    );

  // SPECIAL RULE: WHAT DOES GALACTIC DO? / OVERVIEW
  if (isGeneralOverviewQuery) {
    const mandatedOverview = `Galactic 3D is an advanced manufacturing and engineering company specializing in metal additive manufacturing and industrial engineering solutions.

Key services include:

• Metal 3D Printing (DMLS / LPBF)
• Rapid Prototyping
• Design for Additive Manufacturing (DfAM)
• Product Design & Optimization
• Reverse Engineering
• Contract Manufacturing
• Engineering Consulting
• Research & Development Support
• Training Programs
• Workshops & Internships

Industries served include:

• Aerospace
• Defense
• Automotive
• EV
• Medical
• Semiconductor
• Energy
• Industrial Manufacturing
• Education & Research`;

    return {
      answer: mandatedOverview,
      citations: [],
      followUpQuestions,
      retrievedCount: chunks.length,
      modelUsed: 'galactic-mandated-rule',
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    const fallbackAnswer = generateFallbackResponse(query, chunks, language);
    return {
      answer: fallbackAnswer,
      citations: citations.slice(0, 3),
      followUpQuestions,
      retrievedCount: chunks.length,
      modelUsed: 'galactic-domain-engine',
    };
  }

  try {
    const messages = [
      {
        role: 'system',
        content: `${SYSTEM_PROMPT}\n\nTarget Response Language: ${language === 'hi' ? 'Hindi' : language === 'kn' ? 'Kannada' : 'English'}\n\nGALACTIC 3D RETRIEVED KNOWLEDGE BASE CONTEXT (TOP 3 CHUNKS):\n${contextText}`
      },
      ...conversationHistory.slice(-4),
      { role: 'user', content: query },
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages,
        temperature: 0.0,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      console.warn('OpenAI Chat Completion API returned status:', response.status);
      const fallbackAnswer = generateFallbackResponse(query, chunks, language);
      return {
        answer: fallbackAnswer,
        citations: citations.slice(0, 3),
        followUpQuestions,
        retrievedCount: chunks.length,
        modelUsed: 'galactic-domain-fallback',
      };
    }

    const data = await response.json();
    const answer = data.choices[0].message.content;

    return {
      answer,
      citations: citations.slice(0, 3),
      followUpQuestions,
      retrievedCount: chunks.length,
      modelUsed: data.model,
    };
  } catch (error) {
    console.error('Error generating answer from OpenAI:', error);
    const fallbackAnswer = generateFallbackResponse(query, chunks, language);
    return {
      answer: fallbackAnswer,
      citations: citations.slice(0, 3),
      followUpQuestions,
      retrievedCount: chunks.length,
      modelUsed: 'galactic-domain-fallback',
    };
  }
}
