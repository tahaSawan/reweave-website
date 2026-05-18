import { NextResponse } from 'next/server';
import {
  IP_VAULT_COOKIE,
  IP_VAULT_MAX_AGE,
  createSessionToken,
  isValidCode,
} from '@/lib/ipVaultSession';

export async function POST(request: Request) {
  let body: { code?: string; name?: string; email?: string; ndaAccepted?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const code = body.code?.trim() ?? '';
  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';

  if (!code || !name || !email) {
    return NextResponse.json({ error: 'Access code, name, and email are required.' }, { status: 400 });
  }

  if (!body.ndaAccepted) {
    return NextResponse.json({ error: 'You must accept the NDA to continue.' }, { status: 400 });
  }

  if (!isValidCode(code)) {
    return NextResponse.json({ error: 'Invalid access code.' }, { status: 401 });
  }

  const token = await createSessionToken(name, email);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(IP_VAULT_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: IP_VAULT_MAX_AGE,
  });

  return response;
}
