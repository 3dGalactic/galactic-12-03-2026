import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

import {
  isBlockedEmailDomain,
  isHoneypotTripped,
  isGibberish,
  validateEmail,
  sanitizeString,
  checkRateLimit,
  checkHourlyRateLimit,
  checkDestinationRateLimit,
  checkOutboundVolumeLimit,
  sendSmtpMail,
  getClientIp,
} from '../app/lib/sendEmail.js';

import {
  createAdminToken,
  verifyAdminToken,
  validateAdminCredentials,
  checkLoginRateLimit,
} from '../app/lib/auth.js';

test('Security Audit: No Hardcoded Passwords in Codebase', () => {
  const sendEmailContent = fs.readFileSync(
    path.join(process.cwd(), 'app/lib/sendEmail.js'),
    'utf-8'
  );
  // Verify leaked password fragment is never present
  assert.ok(!sendEmailContent.includes('cmcc spkd lsfo bhji'), 'Leaked App Password must not be hardcoded');
  assert.ok(!sendEmailContent.includes('galactic2026'), 'Default admin password must not be hardcoded');
  assert.ok(!sendEmailContent.includes('admin123'), 'Default admin123 must not be hardcoded');

  const adminAuthContent = fs.readFileSync(
    path.join(process.cwd(), 'app/api/admin/auth/route.js'),
    'utf-8'
  );
  assert.ok(!adminAuthContent.includes('galactic2026'), 'Admin auth route must not contain hardcoded passwords');
  assert.ok(!adminAuthContent.includes('admin123'), 'Admin auth route must not contain admin123 fallback');
});

test('Security Audit: Sensitive Submission Files Excluded from Public Directory', () => {
  const publicUploads = path.join(process.cwd(), 'public/uploads');
  const publicContactLog = path.join(publicUploads, 'contact_submissions.json');
  const publicCareersLog = path.join(publicUploads, 'careers_submissions.json');

  assert.ok(!fs.existsSync(publicContactLog), 'Public contact submissions must not be statically exposed');
  assert.ok(!fs.existsSync(publicCareersLog), 'Public careers submissions must not be statically exposed');
});

test('Anti-Abuse: Blocked & Disposable Email Domains', () => {
  assert.equal(isBlockedEmailDomain('bot@mailinator.com'), true);
  assert.equal(isBlockedEmailDomain('spammer@tempmail.com'), true);
  assert.equal(isBlockedEmailDomain('attacker@guerrillamail.com'), true);
  assert.equal(isBlockedEmailDomain('attacker@fam-blankenburg.de'), true);
  assert.equal(isBlockedEmailDomain('engineer@galactic-3d.com'), false);
  assert.equal(isBlockedEmailDomain('client@company.com'), false);
});

test('Anti-Abuse: Honeypot Trigger Detection', () => {
  assert.equal(isHoneypotTripped({ website: 'http://spam-link.ru' }), true);
  assert.equal(isHoneypotTripped({ bot_check: 'filled_by_bot' }), true);
  assert.equal(isHoneypotTripped({ hp_email: 'bot@spam.com' }), true);
  assert.equal(isHoneypotTripped({ name: 'Valid User', email: 'valid@example.com' }), false);
});

test('Anti-Abuse: Gibberish & Bot String Detection', () => {
  assert.equal(isGibberish('dfvdfg'), true);
  assert.equal(isGibberish('fdfdgrgg'), true);
  assert.equal(isGibberish('dgrggdfera'), true);
  assert.equal(isGibberish('We need titanium 3D printing quotation for aerospace prototype'), false);
  assert.equal(isGibberish('Metal additive manufacturing service inquiry'), false);
});

test('Anti-Abuse: Input Sanitization & Validation', () => {
  assert.equal(sanitizeString('<script>alert("xss")</script>Hello World'), 'Hello World');
  assert.equal(validateEmail('admin@galactic-3d.com'), true);
  assert.equal(validateEmail('invalid-email-string'), false);
  assert.equal(validateEmail(''), false);
});

test('Rate Limiting: IP Level Rate Limiting', () => {
  const testIp = 'test_ip_' + Date.now();
  assert.equal(checkRateLimit(testIp, 2, 60000), true);
  assert.equal(checkRateLimit(testIp, 2, 60000), true);
  // Third request exceeds limit
  assert.equal(checkRateLimit(testIp, 2, 60000), false);
});

test('Rate Limiting: Destination Email Rate Limiting (Reflector Prevention)', () => {
  const victimEmail = 'victim_' + Date.now() + '@example.com';
  assert.equal(checkDestinationRateLimit(victimEmail, 1, 60000), true);
  // Second request to same victim email within window must be blocked
  assert.equal(checkDestinationRateLimit(victimEmail, 1, 60000), false);
});

test('Rate Limiting: Outbound Volume Circuit Breaker', () => {
  // Should allow legitimate volume
  assert.equal(checkOutboundVolumeLimit(), true);
});

test('Robust IP Extraction: Header spoofing resistance', () => {
  const mockReq1 = {
    headers: new Headers({
      'x-forwarded-for': '203.0.113.195, 70.41.3.18, 150.172.238.178',
    }),
  };
  assert.equal(getClientIp(mockReq1), '203.0.113.195');

  const mockReq2 = {
    headers: new Headers({
      'cf-connecting-ip': '198.51.100.42',
    }),
  };
  assert.equal(getClientIp(mockReq2), '198.51.100.42');
});

test('Authentication: HMAC Admin Token Generation & Verification', () => {
  const token = createAdminToken({ email: 'admin@galactic-3d.com', role: 'Super Admin' });
  assert.ok(token && typeof token === 'string');

  const verified = verifyAdminToken(token);
  assert.equal(verified.valid, true);
  assert.equal(verified.payload.email, 'admin@galactic-3d.com');

  // Tampered token must fail
  const tamperedToken = token.slice(0, -4) + 'abcd';
  const tamperedResult = verifyAdminToken(tamperedToken);
  assert.equal(tamperedResult.valid, false);

  // Random string must fail
  assert.equal(verifyAdminToken('invalid.token.structure').valid, false);
});

test('Authentication: Admin Login Rate Limiting', () => {
  const testIp = 'login_test_ip_' + Date.now();
  for (let i = 0; i < 5; i++) {
    assert.equal(checkLoginRateLimit(testIp, 5, 60000), true);
  }
  // 6th attempt must be blocked
  assert.equal(checkLoginRateLimit(testIp, 5, 60000), false);
});

test('SMTP Transport: Safe Failure When Unconfigured', async () => {
  // Without SMTP_PASS env set, sendSmtpMail must safely skip without crashing
  const originalPass = process.env.SMTP_PASS;
  delete process.env.SMTP_PASS;
  delete process.env.EMAIL_PASSWORD;

  const result = await sendSmtpMail({
    to: 'test@galactic-3d.com',
    subject: 'Test Subject',
    text: 'Test Body',
  });

  assert.equal(result.success, false);
  assert.equal(result.skipped, true);

  if (originalPass) process.env.SMTP_PASS = originalPass;
});
