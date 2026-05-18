import { NextResponse } from 'next/server';
import { listVaultSlides } from '@/lib/ipVaultStorage';

export async function GET() {
  const files = listVaultSlides();
  return NextResponse.json({ files });
}
