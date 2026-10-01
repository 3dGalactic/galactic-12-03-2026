import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DEFAULT_ARTICLES } from '../../lib/defaultArticles';
import { scrapeLinkedInArticle } from '../../lib/linkedinScraper';
import { connectToDatabase, getLocalDB, saveLocalDB } from '../../lib/db';

const DATA_DIR = path.join(process.cwd(), '.data');
const ARTICLES_FILE = path.join(DATA_DIR, 'articles.json');

function loadFallbackArticles() {
  try {
    if (fs.existsSync(ARTICLES_FILE)) {
      const raw = fs.readFileSync(ARTICLES_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    // Read-only filesystem on Vercel
  }
  return DEFAULT_ARTICLES;
}

function syncLocalFile(articles) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2), 'utf-8');
    try {
      const db = getLocalDB();
      db.articles = articles;
      saveLocalDB(db);
    } catch (e) {}
  } catch (err) {
    // Read-only filesystem on serverless (Vercel), ignore
  }
}

async function getArticlesCollection() {
  const { isAtlas, db } = await connectToDatabase();
  const articlesColl = db.collection('articles');
  return { isAtlas, articlesColl };
}

export async function GET() {
  try {
    const { isAtlas, articlesColl } = await getArticlesCollection();
    let articles = await articlesColl.find({}).toArray();

    // If MongoDB / local collection is empty, seed with fallback articles
    if (!articles || articles.length === 0) {
      const initial = loadFallbackArticles();
      if (initial && initial.length > 0) {
        try {
          await articlesColl.insertMany(initial);
          articles = initial;
        } catch (e) {
          articles = initial;
        }
      }
    }

    return NextResponse.json({
      success: true,
      articles: articles || [],
      isAtlas
    });
  } catch (error) {
    console.error('GET /api/articles error:', error);
    const fallback = loadFallbackArticles();
    return NextResponse.json({
      success: true,
      articles: fallback
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { linkedinUrl, url, ...customFields } = body;
    const targetUrl = linkedinUrl || url || customFields.link;

    let newArticle;

    if (targetUrl) {
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
      newArticle = {
        id: customFields.id || Date.now(),
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

    const { articlesColl } = await getArticlesCollection();

    // Check if an article with matching URL or Title already exists
    const query = {
      $or: [
        ...(targetUrl ? [{ linkedinUrl: targetUrl }] : []),
        { title: newArticle.title }
      ]
    };

    const existing = await articlesColl.findOne(query);

    if (existing) {
      const matchId = existing._id || existing.id;
      await articlesColl.updateOne(
        { $or: [{ _id: matchId }, { id: matchId }] },
        { $set: newArticle }
      );
    } else {
      await articlesColl.insertOne(newArticle);
    }

    const updatedArticles = await articlesColl.find({}).toArray();
    syncLocalFile(updatedArticles);

    return NextResponse.json({
      success: true,
      message: existing ? 'Article updated with latest LinkedIn data' : 'Article added successfully!',
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

    const { articlesColl } = await getArticlesCollection();

    await articlesColl.deleteOne({
      $or: [
        { id: id },
        { id: Number(id) },
        { _id: id }
      ]
    });

    const updatedArticles = await articlesColl.find({}).toArray();
    syncLocalFile(updatedArticles);

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

    const { articlesColl } = await getArticlesCollection();

    const updateFields = {};
    if (category) updateFields.category = category;
    if (title) updateFields.title = title;
    if (image) updateFields.image = image;
    if (excerpt) updateFields.excerpt = excerpt;
    if (author) updateFields.author = author;
    if (authorRole) updateFields.authorRole = authorRole;

    await articlesColl.updateOne(
      {
        $or: [
          { id: id },
          { id: Number(id) },
          { _id: id }
        ]
      },
      { $set: updateFields }
    );

    const updatedArticles = await articlesColl.find({}).toArray();
    syncLocalFile(updatedArticles);

    return NextResponse.json({
      success: true,
      message: 'Article updated successfully',
      articles: updatedArticles
    });
  } catch (error) {
    console.error('PATCH /api/articles error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update article' },
      { status: 500 }
    );
  }
}
