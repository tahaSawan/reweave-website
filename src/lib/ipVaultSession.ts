export const IP_VAULT_COOKIE = 'ip_vault_session';
export const IP_VAULT_MAX_AGE = 60 * 60 * 24 * 30;

function secret() {
  return process.env.IP_VAULT_SECRET || 'change-me-in-production';
}

export function validAccessCodes(): string[] {
  const raw = process.env.IP_PLATFORM_CODES || 'REWEAVE-IP';
  return raw
    .split(',')
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);
}

export function isValidCode(code: string): boolean {
  return validAccessCodes().includes(code.trim().toUpperCase());
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return Buffer.from(sig).toString('base64url');
}

export async function createSessionToken(name: string, email: string): Promise<string> {
  const exp = Date.now() + IP_VAULT_MAX_AGE * 1000;
  const payload = Buffer.from(JSON.stringify({ exp, name, email }), 'utf8').toString('base64url');
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;

  const expected = await sign(payload);
  if (sig.length !== expected.length) return false;

  let match = 0;
  for (let i = 0; i < sig.length; i++) {
    match |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  if (match !== 0) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      exp?: number;
    };
    return typeof data.exp === 'number' && data.exp > Date.now();
  } catch {
    return false;
  }
}
