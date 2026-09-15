import fs from 'fs';
import path from 'path';

// Singleton in-memory & file-backed fallback store for resilient operation
const LOCAL_STORAGE_DIR = path.join(process.cwd(), '.data');
const LOCAL_DB_FILE = path.join(LOCAL_STORAGE_DIR, 'galactic_ai_db.json');

function ensureLocalStorage() {
  try {
    if (!fs.existsSync(LOCAL_STORAGE_DIR)) {
      fs.mkdirSync(LOCAL_STORAGE_DIR, { recursive: true });
    }
    if (!fs.existsSync(LOCAL_DB_FILE)) {
      const initialData = {
        users: [],
        chat_sessions: [],
        chat_messages: [],
        knowledge_chunks: [],
        website_pages: [],
        website_embeddings: [],
        leads: [],
        analytics: {
          totalConversations: 0,
          totalLeads: 0,
          satisfactionSum: 0,
          satisfactionCount: 0,
          topQuestions: {},
          serviceRequests: {},
          dailyStats: {}
        },
        uploaded_documents: [],
        crawler_status: {
          lastCrawl: null,
          status: 'idle',
          pagesIndexed: 0,
          chunksIndexed: 0,
          failedPages: [],
          crawlFrequency: 'daily'
        }
      };
      fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error initializing local database file:', err);
  }
}

// In-memory cache
let localCache = null;

export function getLocalDB() {
  ensureLocalStorage();
  try {
    if (!localCache) {
      if (fs.existsSync(LOCAL_DB_FILE)) {
        const raw = fs.readFileSync(LOCAL_DB_FILE, 'utf-8');
        localCache = JSON.parse(raw);
      } else {
        localCache = {};
      }
    }
    return localCache;
  } catch (err) {
    console.error('Error reading local DB:', err);
    return localCache || {};
  }
}

export function saveLocalDB(data) {
  try {
    localCache = data;
    ensureLocalStorage();
    fs.writeFileSync(LOCAL_DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving local DB:', err);
    return false;
  }
}

/**
 * MongoDB Atlas Connection Layer with graceful fallback
 */
let mongoClient = null;
let mongoDb = null;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'galactic3d_ai';

  if (!uri) {
    // Return interface wrapping local store
    return {
      isAtlas: false,
      db: getLocalDBWrapper(),
    };
  }

  try {
    if (mongoDb) {
      return { isAtlas: true, db: mongoDb };
    }

    const { MongoClient } = await import('mongodb');
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();
    mongoDb = mongoClient.db(dbName);
    console.log('Successfully connected to MongoDB Atlas');
    return { isAtlas: true, db: mongoDb };
  } catch (error) {
    console.warn('MongoDB Atlas connection failed, falling back to persistent local storage:', error.message);
    return {
      isAtlas: false,
      db: getLocalDBWrapper(),
    };
  }
}

/**
 * High-level collection helpers compatible with both MongoDB and Local store
 */
function getLocalDBWrapper() {
  return {
    collection: (name) => ({
      find: (query = {}) => ({
        toArray: async () => {
          const db = getLocalDB();
          const items = db[name] || [];
          return items.filter((item) => matchQuery(item, query));
        },
        sort: (sortSpec) => ({
          toArray: async () => {
            const db = getLocalDB();
            let items = (db[name] || []).filter((item) => matchQuery(item, query));
            const sortKey = Object.keys(sortSpec)[0];
            const sortDir = sortSpec[sortKey];
            items.sort((a, b) => {
              if (a[sortKey] < b[sortKey]) return sortDir === 1 ? -1 : 1;
              if (a[sortKey] > b[sortKey]) return sortDir === 1 ? 1 : -1;
              return 0;
            });
            return items;
          },
          limit: (n) => ({
            toArray: async () => {
              const db = getLocalDB();
              let items = (db[name] || []).filter((item) => matchQuery(item, query));
              return items.slice(0, n);
            }
          })
        }),
        limit: (n) => ({
          toArray: async () => {
            const db = getLocalDB();
            const items = (db[name] || []).filter((item) => matchQuery(item, query));
            return items.slice(0, n);
          }
        })
      }),
      findOne: async (query = {}) => {
        const db = getLocalDB();
        const items = db[name] || [];
        return items.find((item) => matchQuery(item, query)) || null;
      },
      insertOne: async (doc) => {
        const db = getLocalDB();
        if (!db[name]) db[name] = [];
        const newDoc = { _id: Date.now().toString() + Math.random().toString(36).substring(2, 7), ...doc };
        db[name].push(newDoc);
        saveLocalDB(db);
        return { insertedId: newDoc._id };
      },
      insertMany: async (docs) => {
        const db = getLocalDB();
        if (!db[name]) db[name] = [];
        const inserted = docs.map(d => ({ _id: Date.now().toString() + Math.random().toString(36).substring(2, 7), ...d }));
        db[name].push(...inserted);
        saveLocalDB(db);
        return { insertedCount: inserted.length };
      },
      updateOne: async (query, update) => {
        const db = getLocalDB();
        const items = db[name] || [];
        const idx = items.findIndex((item) => matchQuery(item, query));
        if (idx !== -1) {
          if (update.$set) {
            items[idx] = { ...items[idx], ...update.$set };
          }
          saveLocalDB(db);
          return { modifiedCount: 1 };
        }
        return { modifiedCount: 0 };
      },
      deleteOne: async (query) => {
        const db = getLocalDB();
        const items = db[name] || [];
        const idx = items.findIndex((item) => matchQuery(item, query));
        if (idx !== -1) {
          items.splice(idx, 1);
          saveLocalDB(db);
          return { deletedCount: 1 };
        }
        return { deletedCount: 0 };
      },
      deleteMany: async (query = {}) => {
        const db = getLocalDB();
        const initial = (db[name] || []).length;
        db[name] = (db[name] || []).filter((item) => !matchQuery(item, query));
        saveLocalDB(db);
        return { deletedCount: initial - db[name].length };
      },
      countDocuments: async (query = {}) => {
        const db = getLocalDB();
        const items = (db[name] || []).filter((item) => matchQuery(item, query));
        return items.length;
      }
    })
  };
}

function matchQuery(item, query) {
  if (!query || Object.keys(query).length === 0) return true;
  for (const [key, val] of Object.entries(query)) {
    if (typeof val === 'object' && val !== null) {
      if (val.$in && Array.isArray(val.$in)) {
        if (!val.$in.includes(item[key])) return false;
      } else if (val.$regex) {
        const reg = new RegExp(val.$regex, val.$options || '');
        if (!reg.test(item[key] || '')) return false;
      }
    } else if (item[key] !== val) {
      return false;
    }
  }
  return true;
}
