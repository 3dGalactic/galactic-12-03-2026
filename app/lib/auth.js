import crypto from 'crypto';

// Strong fallback secret that produces deterministic valid signatures per server process if env is unset
const DEFAULT_AUTH_SECRET = 'g3d_sec_ad82f91b4c9e830f0239485712cba8';
const AUTH_SECRET = process.env.ADMIN_JWT_SECRET || process.env.ADMIN_PASSWORD || DEFAULT_AUTH_SECRET;
const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

const loginAttemptsMap = new Map();

/**
 * Robust IP rate limiter for admin authentication
 */
export function checkLoginRateLimit(ip, maxAttempts = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const key = ip || 'unknown_ip';
  const attempts = loginAttemptsMap.get(key) || [];
  const recent = attempts.filter((ts) => ts > now - windowMs);

  if (recent.length >= maxAttempts) {
    return false;
  }

  recent.push(now);
  loginAttemptsMap.set(key, recent);
  return true;
}

/**
 * Validates admin credentials using timing-safe comparison
 */
export function validateAdminCredentials(email, password) {
  const configuredEmail = (process.env.ADMIN_EMAIL || 'admin@galactic-3d.com').trim().toLowerCase();
  const configuredPassword = process.env.ADMIN_PASSWORD;

  if (!email || !password || typeof password !== 'string') {
    return false;
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  if (normalizedEmail !== configuredEmail) {
    return false;
  }

  // If no environment password is set, deny login in production or alert
  if (!configuredPassword) {
    console.warn('[SECURITY WARNING] ADMIN_PASSWORD environment variable is not configured. Access is locked down.');
    return false;
  }

  // Constant-time comparison to prevent timing attacks
  const passBuf = Buffer.from(password);
  const confBuf = Buffer.from(configuredPassword);
  if (passBuf.length !== confBuf.length) {
    return false;
  }

  return crypto.timingSafeEqual(passBuf, confBuf);
}

/**
 * Generates an HMAC-signed JWT token
 */
export function createAdminToken(payload = {}) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(
    JSON.stringify({
      ...payload,
      iat: Date.now(),
      exp: Date.now() + TOKEN_EXPIRY_MS,
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(`${header}.${body}`)
    .digest('base64url');

  return `${header}.${body}.${signature}`;
}

/**
 * Verifies an HMAC-signed JWT token
 */
export function verifyAdminToken(token) {
  if (!token || typeof token !== 'string') {
    return { valid: false, error: 'Authentication token is required' };
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return { valid: false, error: 'Malformed authentication token' };
  }

  const [header, body, signature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(`${header}.${body}`)
    .digest('base64url');

  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expectedSignature);

  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return { valid: false, error: 'Invalid token signature' };
  }

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf-8'));
    if (payload.exp && Date.now() > payload.exp) {
      return { valid: false, error: 'Token expired' };
    }
    return { valid: true, payload };
  } catch (parseErr) {
    return { valid: false, error: 'Invalid token payload' };
  }
}

/**
 * Extracts Bearer token from Request headers, cookies, or query parameters
 */
export function extractTokenFromRequest(req) {
  if (!req) return null;

  // 1. Authorization header: "Bearer <token>"
  const authHeader = req.headers?.get?.('authorization') || '';
  if (authHeader.toLowerCase().startsWith('bearer ')) {
    const token = authHeader.substring(7).trim();
    if (token) return token;
  }

  // 2. Query param "?token=<token>" (e.g. for direct CSV downloads)
  try {
    if (req.url) {
      const url = new URL(req.url);
      const queryToken = url.searchParams.get('token');
      if (queryToken) return queryToken.trim();
    }
  } catch (e) {}

  return null;
}
