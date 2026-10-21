import { NextResponse } from 'next/server';
import {
  validateAdminCredentials,
  createAdminToken,
  checkLoginRateLimit,
} from '../../../lib/auth';
import { getClientIp } from '../../../lib/sendEmail';

export async function POST(req) {
  try {
    const ip = getClientIp(req);

    // Rate limiting: max 5 failed attempts per 15 min per IP
    if (!checkLoginRateLimit(ip, 5, 15 * 60 * 1000)) {
      console.warn(`[SECURITY ALERT] Admin login brute-force throttled for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many login attempts. Please wait 15 minutes before trying again.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(email, password);

    if (isValid) {
      const token = createAdminToken({
        email: email.trim().toLowerCase(),
        role: 'Super Admin',
      });

      console.info(`[SECURITY AUDIT] Admin login successful for ${email} from ${ip}`);

      return NextResponse.json({
        success: true,
        user: {
          email: email.trim().toLowerCase(),
          role: 'Super Admin',
          name: 'Galactic 3D Engineering Lead',
        },
        token,
      });
    }

    console.warn(`[SECURITY ALERT] Failed admin login attempt for ${email} from ${ip}`);
    return NextResponse.json(
      { error: 'Invalid admin credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error in admin auth handler:', error);
    return NextResponse.json(
      { error: 'Authentication service error' },
      { status: 500 }
    );
  }
}
