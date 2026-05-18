import { NextResponse } from 'next/server';
import { saveContactSubmission, sendContactEmail, validateContactPayload } from '@/lib/contactSubmit';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const validated = validateContactPayload(body);
  if ('error' in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const id = saveContactSubmission(validated);
  const emailResult = await sendContactEmail(validated);

  return NextResponse.json({
    ok: true,
    id,
    emailSent: emailResult.sent,
  });
}
