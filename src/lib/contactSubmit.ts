import fs from 'fs';
import path from 'path';
import {
  buildContactNotificationHtml,
  buildContactNotificationText,
} from './contactEmailTemplate';
import { SITE_INFO_EMAIL } from './siteContact';

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function validateContactPayload(body: unknown): ContactPayload | { error: string } {
  if (!body || typeof body !== 'object') {
    return { error: 'Invalid request.' };
  }

  const { name, email, company, message } = body as Record<string, unknown>;
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedCompany = typeof company === 'string' ? company.trim() : '';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  if (!trimmedName || trimmedName.length < 2) {
    return { error: 'Please enter your full name.' };
  }

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return { error: 'Please enter a valid email address.' };
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return { error: 'Please enter a message (at least 10 characters).' };
  }

  return {
    name: trimmedName,
    email: trimmedEmail,
    company: trimmedCompany,
    message: trimmedMessage,
  };
}

function submissionsDir() {
  return path.join(process.cwd(), 'private', 'contact-submissions');
}

export function saveContactSubmission(payload: ContactPayload): string {
  const dir = submissionsDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  const filePath = path.join(dir, `${id}.json`);
  fs.writeFileSync(
    filePath,
    JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }, null, 2),
    'utf8',
  );
  return id;
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || SITE_INFO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'RE:WEAVE Website <onboarding@resend.dev>';

  if (!apiKey) {
    return { sent: false };
  }

  const submittedAt = new Date().toISOString();
  const html = buildContactNotificationHtml(payload, submittedAt);
  const text = buildContactNotificationText(payload, submittedAt);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `RE:WEAVE contact — ${payload.name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return { sent: false, error: err };
  }

  return { sent: true };
}

