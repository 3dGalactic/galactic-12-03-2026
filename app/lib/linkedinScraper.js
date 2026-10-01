import fs from 'fs';
import path from 'path';

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .trim();
}

function cleanTitle(title) {
  if (!title) return 'Galactic 3D Engineering Article';
  return title
    .replace(/\s*\|\s*LinkedIn.*$/i, '')
    .replace(/\s*-\s*LinkedIn.*$/i, '')
    .trim();
}

function classifyCategory(title = '', excerpt = '', text = '') {
  const combined = `${title} ${excerpt} ${text}`.toLowerCase();
  const lowerTitle = title.toLowerCase();

  // Robust domain-specific AM rules with word-boundary regex patterns
  const rules = [
    {
      category: 'Precision Engineering & Technology',
      score: 0,
      regexes: [
        /\btopology(?:\s+optimization)?\b/i,
        /\bgenerative\s+design\b/i,
        /\bdfam\b/i,
        /\bdata\s+centers?\b/i,
        /\bdigital\s+infrastructure\b/i,
        /\bthermal\s+management\b/i,
        /\bheat\s+(?:sink|exchanger|dissipation)\b/i,
        /\bmicron(?:s)?\b/i,
        /\beos\s+m290\b/i,
        /\bdmls\b/i,
        /\bslm\b/i,
        /\blaser\s+powder\s+bed\b/i,
        /\bsurface\s+finish\b/i,
        /\blayer\s+thickness\b/i,
        /\bdimensional\s+accuracy\b/i,
        /\btooling\b/i,
        /\bcad\b/i,
        /\bfinite\s+element\b/i,
        /\bfea\b/i,
        /\blightweighting\b/i,
        /\blattice\b/i
      ]
    },
    {
      category: 'Automotive & EV Innovation',
      score: 0,
      regexes: [
        /\bev\b/i,
        /\belectric\s+vehicles?\b/i,
        /\bbattery\s+(?:pack|cooling|thermal)?\b/i,
        /\bcooling\s+plates?\b/i,
        /\bautomotive\b/i,
        /\bautomobile\b/i,
        /\bpowertrain\b/i,
        /\bchassis\b/i,
        /\belectric\s+mobility\b/i,
        /\bmotor\s+cooling\b/i
      ]
    },
    {
      category: 'Healthcare & Biomaterials',
      score: 0,
      regexes: [
        /\bbone(?:\s+implants?)?\b/i,
        /\bimplants?\b/i,
        /\bbiomaterials?\b/i,
        /\bmedical\b/i,
        /\bhealthcare\b/i,
        /\borthopedic\b/i,
        /\bdental\b/i,
        /\bprosthesis\b/i,
        /\bpatient\b/i,
        /\bsurgical\b/i,
        /\bosseointegration\b/i,
        /\bbiocompatible\b/i
      ]
    },
    {
      category: 'Nuclear Energy & AM',
      score: 0,
      regexes: [
        /\bnuclear\b/i,
        /\breactor(?:s)?\b/i,
        /\bradiation\b/i,
        /\buranium\b/i,
        /\bpower\s+plant\b/i,
        /\bfission\b/i,
        /\bnuclear\s+infrastructure\b/i,
        /\bclean\s+energy\b/i
      ]
    },
    {
      category: 'Supply Chain & Manufacturing',
      score: 0,
      regexes: [
        /\bsupply\s+chain\b/i,
        /\bwarehouses?\b/i,
        /\binventory\b/i,
        /\bdisruptions?\b/i,
        /\blogistics\b/i,
        /\bon-demand\b/i,
        /\bprocurement\b/i,
        /\bdigital\s+spare\s+parts\b/i,
        /\bholding\s+costs\b/i,
        /\blead\s+times?\b/i
      ]
    },
    {
      category: 'Space Technology',
      score: 0,
      regexes: [
        /\bspace\s+(?:industry|sector|tech|exploration|mission|technology|companies|flight|craft|program)\b/i,
        /\bspacetech\b/i,
        /\bspacecraft\b/i,
        /\bsatellites?\b/i,
        /\borbit(?:al)?\b/i,
        /\bastronaut(?:s)?\b/i,
        /\brocket(?:s|ry)?\b/i,
        /\brocket\s+nozzles?\b/i,
        /\bisro\b/i,
        /\blaunch\s+vehicles?\b/i,
        /\bagnikul\b/i,
        /\bdeep\s+space\b/i,
        /\bouter\s+space\b/i,
        /(?<!aero)\bspace\b(?!\s+(?:center|space|market|sector\s+market|office|area|gap))/i
      ]
    },
    {
      category: 'Aerospace & Defense',
      score: 0,
      regexes: [
        /\baerospace\b/i,
        /\bdefen[sc]e\b/i,
        /\barmou?r\b/i,
        /\bdrones?\b/i,
        /\buavs?\b/i,
        /\baircraft\b/i,
        /\bfuselages?\b/i,
        /\bturbines?\b/i,
        /\bmissiles?\b/i,
        /\bmilitary\b/i,
        /\baviation\b/i
      ]
    }
  ];

  for (const rule of rules) {
    for (const rx of rule.regexes) {
      if (rx.test(combined)) {
        rule.score += 1;
        if (rx.test(lowerTitle)) {
          rule.score += 3; // Title matches carry much higher priority
        }
      }
    }
  }

  rules.sort((a, b) => b.score - a.score);

  if (rules[0].score > 0) {
    return rules[0].category;
  }

  return 'Aerospace & Defense';
}

function getAuthorRole(category, author) {
  if (!author || author.includes('Galactic')) {
    switch (category) {
      case 'Space Technology':
        return 'Space Technology Team';
      case 'Automotive & EV Innovation':
        return 'Automotive & EV Thermal Team';
      case 'Healthcare & Biomaterials':
        return 'Healthcare & Biomaterials Team';
      case 'Nuclear Energy & AM':
        return 'Nuclear Energy AM Team';
      case 'Precision Engineering & Technology':
        return 'Precision Engineering Team';
      case 'Supply Chain & Manufacturing':
        return 'Supply Chain & Operations Team';
      default:
        return 'Aerospace & Defense Team';
    }
  }
  return 'Galactic 3D Engineering Contributor';
}

async function downloadCoverImage(imageUrl, slug) {
  try {
    if (!imageUrl || !imageUrl.startsWith('http')) return null;

    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.html)'
      }
    });

    if (!res.ok) return null;

    const buffer = Buffer.from(await res.arrayBuffer());
    const articlesDir = path.join(process.cwd(), 'public', 'articles');
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }

    const safeSlug = (slug || 'article')
      .replace(/[^a-z0-9]/gi, '-')
      .substring(0, 30)
      .toLowerCase();

    const fileName = `linkedin-${safeSlug}-${Date.now()}.png`;
    const targetPath = path.join(articlesDir, fileName);

    fs.writeFileSync(targetPath, buffer);
    return `/articles/${fileName}`;
  } catch (err) {
    console.warn('Failed to download image locally, will fallback to original URL or placeholder:', err.message);
    return null;
  }
}

export async function scrapeLinkedInArticle(url, overrideCategory = null) {
  if (!url || typeof url !== 'string') {
    throw new Error('Please provide a valid LinkedIn URL');
  }

  const trimmedUrl = url.trim();
  if (!trimmedUrl.includes('linkedin.com')) {
    throw new Error('The URL must be from linkedin.com');
  }

  const userAgents = [
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.html)',
    'LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  ];

  let html = '';
  let fetchError = null;

  for (const ua of userAgents) {
    try {
      const res = await fetch(trimmedUrl, {
        headers: {
          'User-Agent': ua,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9'
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(8000)
      });

      if (res.ok) {
        html = await res.text();
        if (html && html.length > 500) break;
      }
    } catch (e) {
      fetchError = e;
    }
  }

  if (!html) {
    // If blocked or offline, attempt URL slug fallback
    return buildFallbackFromUrl(trimmedUrl);
  }

  // Meta extractors
  const getMeta = (prop) => {
    const m = html.match(new RegExp(`<meta[^>]+(?:property|name)=["']${prop}["'][^>]+content=["']([^"']+)["']`, 'i'))
           || html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${prop}["']`, 'i'));
    return m ? decodeHtmlEntities(m[1].trim()) : null;
  };

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  let title = getMeta('og:title') || (titleMatch ? cleanTitle(titleMatch[1]) : '');
  title = cleanTitle(title);

  let excerpt = getMeta('og:description') || getMeta('description') || '';
  let rawImage = getMeta('og:image') || getMeta('twitter:image') || '';
  if (rawImage) rawImage = decodeHtmlEntities(rawImage);

  let author = getMeta('twitter:data1') || 'Galactic 3D Team';
  let readTime = getMeta('twitter:data2');

  // JSON-LD Schema detection
  let jsonLd = null;
  const jsonLdMatch = html.match(/<script type=["']application\/ld\+json["']>([^<]+)<\/script>/i)
                   || html.match(/\{"@context":"http:\/\/schema.org","@type":"Article"[^\n]+\}/i);
  if (jsonLdMatch) {
    try {
      jsonLd = JSON.parse(jsonLdMatch[0].startsWith('<script') ? jsonLdMatch[1] : jsonLdMatch[0]);
    } catch (e) {}
  }

  let datePublished = null;
  if (jsonLd) {
    if (!title && jsonLd.name) title = cleanTitle(jsonLd.name);
    if (!excerpt && jsonLd.headline) excerpt = jsonLd.headline;
    if (!rawImage && jsonLd.image) {
      rawImage = typeof jsonLd.image === 'string' ? jsonLd.image : jsonLd.image.url;
    }
    if (jsonLd.author && jsonLd.author.name) author = jsonLd.author.name;
    if (jsonLd.datePublished) {
      try {
        const d = new Date(jsonLd.datePublished);
        datePublished = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      } catch (e) {}
    }
  }

  // Extract paragraphs
  const paragraphs = [];
  const textBlocks = [...html.matchAll(/class=["']article-main__content["'][^>]*>([\s\S]*?)<\/div>/gi)];
  for (const block of textBlocks) {
    const cleanP = block[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanP && cleanP.length > 25 && !paragraphs.includes(cleanP)) {
      paragraphs.push(decodeHtmlEntities(cleanP));
    }
  }

  // If no article-main__content blocks, extract <p> tags with substantive length
  if (paragraphs.length === 0) {
    const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    for (const pm of pMatches) {
      const text = pm[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (text.length > 60 && !text.includes('cookie') && !text.includes('sign in') && !paragraphs.includes(text)) {
        paragraphs.push(decodeHtmlEntities(text));
      }
    }
  }

  // If still empty or minimal, build cohesive paragraphs from excerpt
  if (paragraphs.length === 0 && excerpt) {
    paragraphs.push(excerpt);
    paragraphs.push(
      "Galactic 3D's advanced metal additive manufacturing technologies help high-reliability industrial organizations accelerate production with reduced lead times, lighter structures, and exceptional quality standards."
    );
    paragraphs.push(
      "Read the full article and join the technical discussion on LinkedIn by clicking the reference link below."
    );
  }

  // Reading time calculation if missing
  if (!readTime) {
    const totalWords = paragraphs.join(' ').split(/\s+/).length + excerpt.split(/\s+/).length;
    const minutes = Math.max(3, Math.ceil(totalWords / 160));
    readTime = `${minutes} min read`;
  }

  // Classification
  const category = (overrideCategory && overrideCategory !== 'auto' && overrideCategory !== 'All Posts')
    ? overrideCategory
    : classifyCategory(title, excerpt, paragraphs.join(' '));
  const authorRole = getAuthorRole(category, author);

  // Download image locally for lifetime persistence
  let localImage = null;
  if (rawImage) {
    localImage = await downloadCoverImage(rawImage, title);
  }

  const finalImage = localImage || rawImage || getCategoryFallbackImage(category);

  const formattedDate = datePublished || new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    id: Date.now(),
    title: title || 'New Technical AM Article',
    excerpt: excerpt || (paragraphs[0] ? paragraphs[0].substring(0, 180) + '...' : 'Technical insight from Galactic 3D.'),
    linkedinUrl: trimmedUrl,
    image: finalImage,
    author: author || 'Galactic 3D Team',
    authorRole: authorRole,
    date: formattedDate,
    category: category,
    readTime: readTime,
    paragraphs: paragraphs.length > 0 ? paragraphs : [excerpt]
  };
}

function getCategoryFallbackImage(category) {
  switch (category) {
    case 'Space Technology':
      return '/articles/space-industry.png';
    case 'Automotive & EV Innovation':
      return '/articles/ev-battery-cooling.png';
    case 'Healthcare & Biomaterials':
      return '/articles/bone-implants.png';
    case 'Nuclear Energy & AM':
      return '/articles/nuclear-power.png';
    case 'Precision Engineering & Technology':
      return '/articles/eos-m290-microns.png';
    case 'Supply Chain & Manufacturing':
      return '/articles/supply-chain-disruption.png';
    default:
      return '/articles/aerospace-future.png';
  }
}

function buildFallbackFromUrl(url) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    const slug = parts[parts.length - 1] || 'engineering-article';
    const words = slug
      .replace(/-[a-z0-9]{4,8}$/i, '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    const category = classifyCategory(words, words, words);
    return {
      id: Date.now(),
      title: words,
      excerpt: `Technical exploration and additive manufacturing capabilities overview on ${words}.`,
      linkedinUrl: url,
      image: getCategoryFallbackImage(category),
      author: 'Galactic 3D Team',
      authorRole: getAuthorRole(category, 'Galactic 3D'),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category: category,
      readTime: '3 min read',
      paragraphs: [
        `This technical article covers key breakthroughs in ${words}. Additive manufacturing enables unprecedented geometric freedom, lightweighting, and localized production cycles.`,
        "Read the full article and explore discussion on the official Galactic 3D LinkedIn page."
      ]
    };
  } catch (e) {
    return {
      id: Date.now(),
      title: 'Galactic 3D Additive Manufacturing Article',
      excerpt: 'Read our latest update on industrial metal 3D printing and engineering manufacturing on LinkedIn.',
      linkedinUrl: url,
      image: '/articles/aerospace-future.png',
      author: 'Galactic 3D Team',
      authorRole: 'Engineering Team',
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      category: 'Aerospace & Defense',
      readTime: '3 min read',
      paragraphs: ['Explore technical insights and case studies published by Galactic 3D on LinkedIn.']
    };
  }
}
