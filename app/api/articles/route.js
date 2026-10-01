import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DEFAULT_ARTICLES } from '../../lib/defaultArticles';
import { scrapeLinkedInArticle } from '../../lib/linkedinScraper';
import { getLocalDB, saveLocalDB } from '../../lib/db';

const DATA_DIR = path.join(process.cwd(), '.data');
const ARTICLES_FILE = path.join(DATA_DIR, 'articles.json');

function ensureArticlesFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ARTICLES_FILE)) {
      fs.writeFileSync(ARTICLES_FILE, JSON.stringify(DEFAULT_ARTICLES, null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error ensuring articles file:', err);
  }
}

function loadArticles() {
  ensureArticlesFile();
  try {
    const raw = fs.readFileSync(ARTICLES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return DEFAULT_ARTICLES;
  } catch (err) {
    console.error('Error reading articles file:', err);
    return DEFAULT_ARTICLES;
  }
}

function saveArticles(articles) {
  ensureArticlesFile();
  try {
    fs.writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2), 'utf-8');
    // Also sync to main galactic_ai_db.json
    try {
      const db = getLocalDB();
      db.articles = articles;
      saveLocalDB(db);
    } catch (e) {}
    return true;
  } catch (err) {
    console.error('Error saving articles file:', err);
    return false;
  }
}

export async function GET() {
  try {
    const articles = loadArticles();
    return NextResponse.json({
      success: true,
      articles
    });
  } catch (error) {
    console.error('GET /api/articles error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load articles', articles: DEFAULT_ARTICLES },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { linkedinUrl, url, ...customFields } = body;

    const targetUrl = linkedinUrl || url || customFields.link;

    let newArticle;

    if (targetUrl) {
      // Scrape from LinkedIn with optional category override
      const overrideCat = customFields.category && customFields.category !== 'auto' && customFields.category !== 'All Posts'
        ? customFields.category
        : null;
      const scraped = await scrapeLinkedInArticle(targetUrl, overrideCat);
      newArticle = {
        ...scraped,
        ...customFields,
        ...(overrideCat ? { category: overrideCat } : {}),
        id: customFields.id || Date.now()
      };
    } else if (customFields.title) {
      // Manual article addition
      newArticle = {
        id: Date.now(),
        title: customFields.title,
        excerpt: customFields.excerpt || customFields.title,
        linkedinUrl: customFields.linkedinUrl || 'https://www.linkedin.com/company/galactic-3d/',
        image: customFields.image || '/articles/aerospace-future.png',
        author: customFields.author || 'Galactic 3D Team',
        authorRole: customFields.authorRole || 'Engineering Team',
        date: customFields.date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        category: customFields.category || 'Aerospace & Defense',
        readTime: customFields.readTime || '3 min read',
        paragraphs: Array.isArray(customFields.paragraphs) ? customFields.paragraphs : [customFields.excerpt || customFields.title]
      };
    } else {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid LinkedIn article URL or article details' },
        { status: 400 }
      );
    }

    const currentArticles = loadArticles();

    // Check if an article with this exact linkedinUrl or title already exists
    const existingIndex = currentArticles.findIndex(
      a => (targetUrl && a.linkedinUrl === targetUrl) || (a.title && a.title.toLowerCase() === newArticle.title.toLowerCase())
    );

    let updatedArticles;
    if (existingIndex !== -1) {
      // Update existing
      updatedArticles = [...currentArticles];
      updatedArticles[existingIndex] = { ...updatedArticles[existingIndex], ...newArticle };
    } else {
      // Prepend newly added article to the top of the list!
      updatedArticles = [newArticle, ...currentArticles];
    }

    saveArticles(updatedArticles);

    return NextResponse.json({
      success: true,
      message: existingIndex !== -1 ? 'Article updated with latest LinkedIn data' : 'Article added successfully!',
      article: newArticle,
      articles: updatedArticles
    });
  } catch (error) {
    console.error('POST /api/articles error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to add article' },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get('id');

    if (!id) {
      const body = await req.json().catch(() => ({}));
      id = body.id;
    }

    if (!id) {
      return NextResponse.json({ success: false, error: 'Article ID is required' }, { status: 400 });
    }

    const currentArticles = loadArticles();
    const numericId = Number(id);
    const updatedArticles = currentArticles.filter(a => a.id !== id && a.id !== numericId);

    if (updatedArticles.length === currentArticles.length) {
      return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 });
    }

    saveArticles(updatedArticles);

    return NextResponse.json({
      success: true,
      message: 'Article removed successfully',
      articles: updatedArticles
    });
  } catch (error) {
    console.error('DELETE /api/articles error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete article' },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { id, category, title, image, excerpt, author, authorRole } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Article ID is required' }, { status: 400 });
    }

    const currentArticles = loadArticles();
    const index = currentArticles.findIndex(a => String(a.id) === String(id));

    if (index === -1) {
      return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 });
    }

    const updated = { ...currentArticles[index] };
    if (category) updated.category = category;
    if (title) updated.title = title;
    if (image) updated.image = image;
    if (excerpt) updated.excerpt = excerpt;
    if (author) updated.author = author;
    if (authorRole) updated.authorRole = authorRole;

    currentArticles[index] = updated;
    saveArticles(currentArticles);

    return NextResponse.json({
      success: true,
      message: 'Article updated successfully',
      article: updated,
      articles: currentArticles
    });
  } catch (error) {
    console.error('PATCH /api/articles error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update article' },
      { status: 500 }
    );
  }
}
