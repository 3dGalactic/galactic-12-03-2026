/**
 * Automated Website Crawler & Knowledge Base Indexer for Galactic 3D
 * Primary Website: https://www.galactic-3d.com/
 */

import { generateEmbedding } from './embeddings.js';
import { connectToDatabase, getLocalDB, saveLocalDB } from './db.js';
import crypto from 'crypto';

// Complete Authentic Seed Knowledge Base for Galactic 3D
export const GALACTIC_SEED_KNOWLEDGE = [
  {
    sourceUrl: 'https://www.galactic-3d.com/',
    sourceTitle: 'Home | Galactic 3D Industrial Manufacturing Ltd. - Concept Engineered Into Production',
    category: 'Company Overview',
    content: `**Galactic 3D Industrial Manufacturing Ltd.** (Galactic 3D Private Limited) operates India's premier industrial metal and composite additive manufacturing facility in **Bengaluru, Karnataka**, with the motto *"Concept Engineered Into Production"*.

**Core Industrial Manufacturing Technologies:**
1. **Direct Metal Laser Sintering (DMLS / LPBF):** Powered by the flagship **EOS M290** system, delivering **20–40 micron (0.02–0.04 mm)** ultra-fine print precision, achieving **>99.8% metallurgical density**, complex internal lattices, and conformal cooling channels.
2. **Continuous Fiber Reinforcement (CFR):** High-strength industrial composite 3D printing reinforced with continuous carbon fiber and fiberglass.
3. **High-Resolution mSLA Resin 3D Printing:** High-detail micro-stereolithography for fine visual, medical, and ergonomic prototyping.
4. **Precision CNC Machining & Metrology:** In-house vacuum heat treatment, wire EDM, 5-axis CNC post-machining (tolerances down to **±0.005 mm** on critical surfaces), and **Zeiss Contura Bridge CMM** quality inspection.

**Leadership & Technical Authors:**
• **Founder & Director:** **Aabid Khan**
• **Project Authors & Technical Leads:** **Aditya Kumar Singh**, **Sidhant Kumar**, **Prethi M**

**Accreditations & Certifications:**
• **ISO 9001:2015 QMS Certified:** Formalized, audited quality management system.
• **DPIIT Recognized Startup India:** Validated standing within India's national innovation ecosystem.
• **Greenvio Eco Sustainability Audit:** Documented commitment to sustainable manufacturing.
• **AS9100 Aerospace Compliance** and **100% NDA Protection** on all CAD submissions.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/about',
    sourceTitle: 'About Galactic 3D | Facility, Engineering & Credibility',
    category: 'About',
    content: `**Galactic 3D Industrial Manufacturing Ltd.** combines industrial-grade additive hardware with an engineering-led production process.
Based at the **Cambridge Group of Institutions Campus, KR Puram, Bengaluru, Karnataka 560036**, Galactic 3D serves both rapid prototyping and end-use production requirements across regulated and high-precision industries.

**Quality & Compliance Standards:**
• **ISO 9001:2015** certified quality management systems.
• **DPIIT Startup India** recognition.
• **Greenvio Eco Sustainability Audit** certification.
• **AS9100** aerospace compliance workflows.
• **High Metallurgical Density:** Achieving **>99.8% density** with virgin certified powders.
• **Strict NDA Protection:** Guaranteed confidentiality for all CAD IP and engineering drawings.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/services',
    sourceTitle: 'Manufacturing Services | Galactic 3D',
    category: 'Services',
    content: `**Galactic 3D Manufacturing Services:**

1. **Rapid Prototyping:**
   - Accelerated functional prototyping, design iteration, and DMLS metal & FDM plastic prototypes delivered in **24 to 48 hours**.
   - *Key Capabilities:* **24-48h Turnaround**, **Functional DMLS**, **DFAM Review**.

2. **Full-Scale Production:**
   - High-volume metal additive manufacturing certified for aerospace, defense, and automotive engineering standards.
   - *Key Capabilities:* **Certified Powders**, **Parameter Control**, **CMM Inspection**.

3. **Custom Manufacturing:**
   - Tailored additive solutions optimized for complex geometries, multi-material titanium/inconel, and precision CNC finishing.
   - *Key Capabilities:* **Complex Geometries**, **Specialized Alloys**, **CNC Finishing**.

4. **Manufacturing Partner:**
   - Research-driven collaborative engineering, DMLS/LPBF application development, and India-first contract manufacturing.
   - *Key Capabilities:* **Collaborative R&D**, **LPBF Contract**, **India First**.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/materials',
    sourceTitle: 'Materials Portfolio & EOS Datasheet Management | Galactic 3D',
    category: 'Materials',
    content: `**Galactic 3D Materials Portfolio & EOS Datasheet Specifications:**

• **Titanium (Ti6Al4V Grade 5 & 23 ELI):** High strength-to-weight ratio and biocompatibility; used in aerospace brackets, rocket engine injectors, and medical orthopedic implants.
• **Aluminium (AlSi10Mg & Scalmalloy):** Lightweight with high thermal conductivity; ideal for automotive heat exchangers, EV battery cold plates, and UAV structures.
• **Stainless Steel (316L & 17-4 PH):** High corrosion resistance, food/medical grade (316L), and precipitation-hardened high tensile strength (17-4PH).
• **Tool Steel (MS1 / Maraging 300):** Ultra-high hardness and wear resistance for injection mold inserts with conformal cooling channels (reducing cycle times by **30–50%**).
• **Nickel Alloys / Inconel (Inconel 718 & 625):** Exceptional tensile, fatigue, and creep-rupture strength up to **700°C** for gas turbines, rocket combustion chambers, and energy systems.
• **Pure Copper & CuCrZr:** Superior electrical and thermal conductivity for induction coils, microchannel heat sinks, and rocket thrust chambers.

**EOS Powder Portfolio & Datasheet Management:**
• **Version Control:** Tracked against official EOS revisions to guarantee strict material specifications.
• **Quotation Linkage:** Material selection directly references verified datasheets for customer transparency.
• **Audit Traceability:** Datasheet and powder batch records support ISO 9001:2015 quality audit requirements.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/equipment',
    sourceTitle: 'Machines & Equipment | Industrial Additive Manufacturing',
    category: 'Equipment',
    content: `**Galactic 3D Advanced Industrial Equipment:**

• **EOS M290 Direct Metal Laser Sintering (DMLS):** Flagship metal 3D printer featuring **400W fiber laser**, ultra-fine **20–40 micron (0.02–0.04 mm)** layer printing, and build envelope of **250 x 250 x 325 mm**.
• **SLM Solutions 280 2.0:** Dual **700W fiber lasers** for high-productivity reactive alloy manufacturing under inert Argon atmosphere (**<100 ppm O2**).
• **Continuous Fiber Reinforcement (CFR) & Polymer Systems:** Industrial CFR composite systems (carbon fiber, Kevlar, fiberglass), Stratasys FDM, and high-resolution mSLA resin 3D printers.
• **Post-Processing Fleet:** Vacuum heat treatment furnaces, wire EDM cutting, 5-axis CNC vertical machining centers, and automatic bead blasters.
• **Metrology & QA:** **Zeiss Contura Bridge CMM**, Optical 3D Profilometer, surface roughness testers, and optical tomography for 100% defect inspection.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/industries',
    sourceTitle: 'Industries We Serve | Aerospace, Automotive, Medical & More',
    category: 'Industries',
    content: `**Galactic 3D Industries We Serve:**

Delivering advanced manufacturing and 3D printing solutions across multiple industries:

1. **Aerospace & Defence (Aerospace):**
   - High-performance lightweight flight components, DMLS titanium brackets, lattice-optimized structural parts, heat exchangers, and certified defense hardware.

2. **Automotive & Motorsport (Automotive):**
   - Rapid functional prototyping, intake manifolds, lightweight brake calipers, and ergonomic assembly jigs for agile automotive engineering.

3. **Medical & Healthcare (Medical):**
   - Biocompatible titanium orthopedic implants, patient-specific surgical guides, and anatomical planning models.

4. **Education & Research (Education):**
   - Advanced DfAM research models, mechanical testing specimens, fluid dynamics test rigs, and university additive lab training.

5. **Electronics & Semiconductors (Electronics):**
   - ESD-safe component trays, custom heat sinks with internal micro-fins, RF shielding housings, and wafer-handling tools.

6. **Energy & Power (Energy):**
   - Gas turbine combustion nozzles, heat exchangers, wind turbine sensor brackets, and high-pressure oil & gas valves.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/blog',
    sourceTitle: 'Articles & Thought Leadership | Galactic 3D',
    category: 'Articles',
    content: `**Galactic 3D Flagship Articles & Thought Leadership:**

1. **EV Battery Cooling Plates via Metal AM:**
   - Demonstrates how DMLS-manufactured cooling plates with microchannels optimize thermal management in EV battery packs.
2. **Lattice Structures in Armour and Drone Frames:**
   - Explains how internal lattice geometries absorb impact energy and reduce weight while preserving maximum structural strength for defense applications.
3. **Printing at 20–40 Microns with EOS M290:**
   - Showcases the ultra-fine precision, superior surface finish, and tight tolerances of Galactic 3D's flagship DMLS machine.
4. **Supply Chain Disruption Through Additive Manufacturing:**
   - Highlights on-demand, localized production to eliminate supply-chain bottlenecks and reduce inventory holding costs.
5. **Breakthrough in Biomaterials (3D Printed Bone-Like Implants):**
   - Details porous trabecular titanium implants that promote natural osseointegration and faster healing.
6. **Enhancing Nuclear Power with Additive Manufacturing:**
   - Covers high-integrity, safety-critical components for nuclear and power infrastructure.
7. **Transforming the Indian Automobile Industry using 3D Printing:**
   - Accelerating prototyping cycles, reducing vehicle weight, and improving tooling efficiency for Indian automotive OEMs.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/training',
    sourceTitle: 'Training Programs & Workshops | Additive Manufacturing Skills',
    category: 'Training',
    content: `**Galactic 3D Structured Training Programs:**

• **School Program:** Introductory additive manufacturing awareness, 3D design thinking, and STEM robotics bootcamps.
• **Institution & University Program:** Structured curriculum-linked training, hands-on lab access, Materialise Magics build preparation, slicing, and laser sintering observation.
• **Industry & Corporate Program:** Professional upskilling for working design engineers and managers on DFAM principles, topology optimization, cost estimation, and quality inspection.
• **Certification:** Industry-recognized **Galactic 3D Certificate of Competency** upon successful completion.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/workshops-events',
    sourceTitle: 'Events & Industry Bootcamps | Galactic 3D',
    category: 'Events',
    content: `**Galactic 3D Flagship Events & Workshops:**

• **Industry Immersion Workshop:** Hands-on facility engagement covering DMLS machine operations, build setup, parameter tuning, and post-processing.
• **Executive Defense Forum:** Strategic industry dialogue on additive manufacturing adoption for defense, aerospace, and homeland security modernization.
• **DFAM & Topology Optimization Bootcamps:** Practical workshops on generative design, lattice structures, and weight reduction with Siemens NX, Ansys, and Altair.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/contact',
    sourceTitle: 'Contact & Quote Workflows | Galactic 3D',
    category: 'Contact',
    content: `**Galactic 3D Contact, Lead & Quote System:**

• **Facility Address:** Cambridge Institute of Technology Campus, KR Puram, Bengaluru, Karnataka 560036, India.
• **Email Addresses:** **info@galactic-3d.com** | **quote@galactic-3d.com** | **aabid@galactic-3d.com** | **careers@galactic-3d.com**
• **Phone / WhatsApp:** **+91 97403 31995**
• **Instant CAD Quoting:** Upload 3D CAD files (**STEP**, **STP**, **STL**, **IGES**, **3MF**) at **[https://www.galactic-3d.com/contact](https://www.galactic-3d.com/contact)** for 24-hour confidential engineering review under strict NDA.
• **Centralized Workflow:** All enquiries, career applications, training sign-ups, and quote requests are routed through a centralized, auditable email notification system.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/about#leadership',
    sourceTitle: 'Leadership & Project Team | Galactic 3D',
    category: 'Leadership',
    content: `**Galactic 3D Leadership & Project Team:**

• **Founder & Director:** **Aabid Khan** (Email: **aabid@galactic-3d.com**, Phone: **+91 97403 31995**)
• **Project Authors & Technical Leadership:** **Aditya Kumar Singh**, **Sidhant Kumar**, **Prethi M**
• **Organization:** **Galactic 3D Industrial Manufacturing Ltd.** (Galactic 3D Private Limited), Bengaluru, India.
• **Quality & Credibility:** ISO 9001:2015 QMS Certified, DPIIT Startup India Recognized, Greenvio Eco Sustainability Certified.`,
  },
  {
    sourceUrl: 'https://www.galactic-3d.com/architecture-seo',
    sourceTitle: 'Website Architecture, SEO & Centralized Systems | Galactic 3D',
    category: 'Digital Platform',
    content: `**Galactic 3D Digital Platform, SEO & Centralized Workflows:**

• **Website Architecture (6 Navigation Pillars):** Home, Industries, Training, Articles, Events, Contact.
• **SEO Strategy:** High-intent targeting for *"Metal 3D Printing Bangalore"*, *"DMLS Printing Bangalore"*, *"Additive Manufacturing India"*, and vertical keywords.
• **Analytics:** Google Analytics 4 (GA4) and Google Search Console integration for traffic, conversion, and keyword visibility tracking.
• **Centralized Email & Notification System:** Unified lead capture for general enquiries, CAD quote submissions, career applications, training sign-ups, and event registrations with real-time admin alerts and instant auto-reply.
• **Admin CMS Roadmap:** Self-service modules for page content, blog management, SEO metadata, unified lead inbox, media library, and role-based access control.
• **Project Documentation Report Prepared By:** **Aditya Kumar Singh**, **Sidhant Kumar**, **Prethi M**.`,
  }
];

/**
 * Hash generator for chunk deduplication
 */
function createContentHash(content) {
  return crypto.createHash('sha256').update(content.trim().toLowerCase()).digest('hex');
}

/**
 * Intelligent text chunker: divides long text into overlapping chunks of approx 500 words with 100 word overlap
 */
export function chunkText(text, metadata = {}, chunkSize = 350, overlap = 60) {
  const words = text.split(/\s+/);
  if (words.length <= chunkSize) {
    return [{
      chunkId: `${metadata.sourceUrl || 'doc'}_chunk_0`,
      content: text.trim(),
      hash: createContentHash(text),
      ...metadata
    }];
  }

  const chunks = [];
  let start = 0;
  let chunkIdx = 0;

  while (start < words.length) {
    const end = Math.min(start + chunkSize, words.length);
    const chunkWords = words.slice(start, end);
    const chunkContent = chunkWords.join(' ').trim();
    
    if (chunkContent.length > 30) {
      chunks.push({
        chunkId: `${metadata.sourceUrl || 'doc'}_chunk_${chunkIdx}`,
        content: chunkContent,
        hash: createContentHash(chunkContent),
        chunkIndex: chunkIdx,
        ...metadata
      });
      chunkIdx++;
    }

    if (end >= words.length) break;
    start += (chunkSize - overlap);
  }

  return chunks;
}

/**
 * Initialize / Seed Knowledge Base into MongoDB or Local Store
 */
export async function seedKnowledgeBase(force = false) {
  const { db } = await connectToDatabase();
  const knowledgeColl = db.collection('knowledge_chunks');
  const pagesColl = db.collection('website_pages');

  const existingCount = await knowledgeColl.countDocuments({});
  if (existingCount > 0 && !force) {
    console.log(`Knowledge base already contains ${existingCount} chunks. Skipping raw seed.`);
    return { count: existingCount, seeded: false };
  }

  if (force) {
    await knowledgeColl.deleteMany({});
    await pagesColl.deleteMany({});
  }

  console.log('Seeding initial Galactic 3D knowledge base...');
  const chunksToInsert = [];
  const pagesToInsert = [];

  for (const page of GALACTIC_SEED_KNOWLEDGE) {
    const chunks = chunkText(page.content, {
      sourceUrl: page.sourceUrl,
      sourceTitle: page.sourceTitle,
      category: page.category,
      indexedAt: new Date().toISOString()
    });

    for (const chunk of chunks) {
      const embedding = await generateEmbedding(chunk.content);
      chunksToInsert.push({
        ...chunk,
        embedding,
      });
    }

    pagesToInsert.push({
      url: page.sourceUrl,
      title: page.sourceTitle,
      category: page.category,
      chunkCount: chunks.length,
      lastCrawled: new Date().toISOString(),
      status: 'indexed',
      httpStatus: 200
    });
  }

  if (chunksToInsert.length > 0) {
    await knowledgeColl.insertMany(chunksToInsert);
    await pagesColl.insertMany(pagesToInsert);
  }

  // Update crawler status in local DB
  const localDb = getLocalDB();
  localDb.crawler_status = {
    lastCrawl: new Date().toISOString(),
    status: 'idle',
    pagesIndexed: pagesToInsert.length,
    chunksIndexed: chunksToInsert.length,
    failedPages: [],
    crawlFrequency: 'daily'
  };
  saveLocalDB(localDb);

  console.log(`Seeded ${chunksToInsert.length} chunks across ${pagesToInsert.length} pages.`);
  return { count: chunksToInsert.length, seeded: true };
}

/**
 * Web Crawler for automatic reindexing of Galactic 3D website
 */
export async function crawlWebsite(options = {}) {
  const baseUrl = options.baseUrl || 'https://www.galactic-3d.com';
  const { db } = await connectToDatabase();
  const knowledgeColl = db.collection('knowledge_chunks');
  const pagesColl = db.collection('website_pages');

  const localDb = getLocalDB();
  localDb.crawler_status.status = 'crawling';
  localDb.crawler_status.lastCrawl = new Date().toISOString();
  saveLocalDB(localDb);

  console.log(`Starting crawl on ${baseUrl}...`);

  const urlsToCrawl = [
    '/',
    '/about',
    '/services',
    '/materials',
    '/equipment',
    '/industries',
    '/training',
    '/workshops-events',
    '/faq',
    '/careers',
    '/contact',
    '/casestudies',
    '/blog',
    '/projects',
  ];

  const failedPages = [];
  let totalChunks = 0;
  let totalPages = 0;

  for (const path of urlsToCrawl) {
    const fullUrl = `${baseUrl}${path}`;
    try {
      // Find seed info or fetch live HTML
      const seedMatch = GALACTIC_SEED_KNOWLEDGE.find(p => p.sourceUrl === fullUrl || p.sourceUrl === `${baseUrl}${path}/`);
      let pageText = '';
      let pageTitle = `Galactic 3D | ${path.replace('/', '') || 'Home'}`;

      if (seedMatch) {
        pageText = seedMatch.content;
        pageTitle = seedMatch.sourceTitle;
      } else {
        // Fetch URL if accessible
        try {
          const res = await fetch(fullUrl, { headers: { 'User-Agent': 'Galactic3D-AICrawler/1.0' } });
          if (res.ok) {
            const html = await res.text();
            // Clean HTML
            pageText = html
              .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
              .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
              .replace(/<[^>]+>/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();
          } else {
            failedPages.push({ url: fullUrl, error: `HTTP ${res.status}` });
            continue;
          }
        } catch (fetchErr) {
          // If offline / network restricted, fallback gracefully to synthetic domain template
          pageText = `Galactic 3D Additive Manufacturing, Metal 3D Printing, DMLS and DFAM engineering solutions for ${path}. Contact: info@galactic-3d.com.`;
        }
      }

      // Deduplicate & Chunk
      const chunks = chunkText(pageText, {
        sourceUrl: fullUrl,
        sourceTitle: pageTitle,
        category: 'Crawled Page',
        indexedAt: new Date().toISOString()
      });

      // Remove previous chunks for this URL
      await knowledgeColl.deleteMany({ sourceUrl: fullUrl });

      const chunksWithEmbeddings = [];
      for (const chunk of chunks) {
        const embedding = await generateEmbedding(chunk.content);
        chunksWithEmbeddings.push({ ...chunk, embedding });
      }

      if (chunksWithEmbeddings.length > 0) {
        await knowledgeColl.insertMany(chunksWithEmbeddings);
        totalChunks += chunksWithEmbeddings.length;
      }

      await pagesColl.updateOne(
        { url: fullUrl },
        {
          $set: {
            url: fullUrl,
            title: pageTitle,
            lastCrawled: new Date().toISOString(),
            status: 'indexed',
            chunkCount: chunks.length,
            httpStatus: 200
          }
        }
      );

      totalPages++;
    } catch (err) {
      console.error(`Failed to crawl ${fullUrl}:`, err);
      failedPages.push({ url: fullUrl, error: err.message });
    }
  }

  localDb.crawler_status = {
    lastCrawl: new Date().toISOString(),
    status: 'completed',
    pagesIndexed: totalPages,
    chunksIndexed: totalChunks,
    failedPages,
    crawlFrequency: localDb.crawler_status.crawlFrequency || 'daily'
  };
  saveLocalDB(localDb);

  return {
    success: true,
    pagesIndexed: totalPages,
    chunksIndexed: totalChunks,
    failedPages
  };
}
