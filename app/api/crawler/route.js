import { NextResponse } from 'next/server';
import { crawlWebsite, seedKnowledgeBase } from '../../lib/crawler';
import { connectToDatabase, getLocalDB, saveLocalDB } from '../../lib/db';

export async function GET() {
  try {
    await seedKnowledgeBase();
    const { db } = await connectToDatabase();
    const pagesColl = db.collection('website_pages');
    const knowledgeColl = db.collection('knowledge_chunks');

    const pages = await pagesColl.find({}).toArray();
    const totalChunks = await knowledgeColl.countDocuments({});

    const localDb = getLocalDB();
    const crawlerStatus = localDb.crawler_status || {
      lastCrawl: new Date().toISOString(),
      status: 'idle',
      pagesIndexed: pages.length,
      chunksIndexed: totalChunks,
      failedPages: [],
      crawlFrequency: 'daily',
    };

    return NextResponse.json({
      success: true,
      crawlerStatus: {
        ...crawlerStatus,
        pagesIndexed: pages.length,
        chunksIndexed: totalChunks,
      },
      pages,
    });
  } catch (error) {
    console.error('Error fetching crawler status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch crawler status', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { action = 'reindex', frequency } = body;

    const localDb = getLocalDB();

    if (action === 'set_frequency' && frequency) {
      localDb.crawler_status.crawlFrequency = frequency;
      saveLocalDB(localDb);
      return NextResponse.json({
        success: true,
        message: `Crawl schedule updated to ${frequency}`,
        crawlerStatus: localDb.crawler_status,
      });
    }

    // Trigger full crawl & reindex
    const crawlResult = await crawlWebsite({
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.galactic-3d.com',
    });

    return NextResponse.json({
      success: true,
      message: 'Website reindexed successfully',
      result: crawlResult,
    });
  } catch (error) {
    console.error('Error running crawl:', error);
    return NextResponse.json(
      { error: 'Failed to execute crawler', details: error.message },
      { status: 500 }
    );
  }
}
