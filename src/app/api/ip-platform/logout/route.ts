import { NextResponse } from 'next/server';
import { IP_VAULT_COOKIE } from '@/lib/ipVaultSession';

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(IP_VAULT_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}
