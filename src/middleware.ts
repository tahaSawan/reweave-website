import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { IP_VAULT_COOKIE, verifySessionToken } from '@/lib/ipVaultSession';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(IP_VAULT_COOKIE)?.value;
  const ok = await verifySessionToken(token);

  if (request.nextUrl.pathname.startsWith('/ip-platform/vault')) {
    if (!ok) {
      return NextResponse.redirect(new URL('/ip-platform', request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith('/api/ip-platform/slides')) {
    if (!ok) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/ip-platform/vault/:path*', '/api/ip-platform/slides/:path*'],
};
