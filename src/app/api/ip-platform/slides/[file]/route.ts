import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { resolveVaultFile } from '@/lib/ipVaultStorage';

const MIME: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> },
) {
  const { file } = await context.params;
  const decoded = decodeURIComponent(file);
  const full = resolveVaultFile(decoded);
  if (!full) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const ext = path.extname(full).toLowerCase();
  const data = fs.readFileSync(full);

  return new NextResponse(data, {
    headers: {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'private, no-store',
    },
  });
}
