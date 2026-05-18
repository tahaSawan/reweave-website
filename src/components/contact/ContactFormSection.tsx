'use client';

import Link from 'next/link';
import { useState } from 'react';
import { home } from '@/lib/homePageStyle';
import { SITE_INFO_EMAIL } from '@/lib/siteContact';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || SITE_INFO_EMAIL;

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 6h16v12H4V6zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailNotified, setEmailNotified] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await res.json()) as { error?: string; emailSent?: boolean };
      if (!res.ok) {
        setError(data.error || 'Could not send your message. Please try again.');
        return;
      }
      setEmailNotified(Boolean(data.emailSent));
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[#e6dfd4] bg-white px-4 py-2.5 text-sm text-[#2c2c2c] outline-none transition-colors placeholder:text-[#9a9288] focus:border-[#C8A882]/60 focus:ring-2 focus:ring-[#C8A882]/15';

  return (
    <section className={`bg-[#f8f6f3] ${home.section}`}>
      <div className={home.container}>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <form
            onSubmit={handleSubmit}
            className="relative space-y-5 overflow-hidden rounded-xl border border-[#e6dfd4] bg-white p-6 shadow-[0_12px_36px_-16px_rgba(44,44,44,0.12)] sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A882]/70 to-transparent" aria-hidden />

            <div>
              <h2 className={`${home.h3} text-lg sm:text-xl`}>Send us a message</h2>
              <p className={`mt-2 ${home.bodyMuted}`}>We typically respond within one business day.</p>
            </div>

            {success ? (
              <div
                className="rounded-lg border border-[#C8A882]/35 bg-[#faf8f5] p-5 ring-1 ring-[#C8A882]/20"
                role="status"
              >
                <p className="text-base font-semibold text-[#2c2c2c]">Thank you — your message was received.</p>
                {emailNotified ? (
                  <p className="mt-2 text-sm text-[#4a443c]">
                    A notification was sent to our team at {CONTACT_EMAIL}. We&apos;ll get back to you shortly.
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-[#4a443c]">
                    Your message was saved successfully. Email notifications are not enabled on this server
                    yet — for local testing, check the file in{' '}
                    <code className="text-[#8f7350]">private/contact-submissions/</code>.
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setEmailNotified(false);
                  }}
                  className="mt-4 text-sm font-medium text-[#8f7350] underline-offset-2 hover:text-[#C8A882] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">Full name *</label>
                  <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">Email address *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">Company / organization</label>
                  <input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">Message *</label>
                  <textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleChange} className={inputClass} placeholder="Tell us about your project, partnership, or how we can help…" />
                </div>
                {error ? <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-800" role="alert">{error}</p> : null}
                <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2c2c2c] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#C8A882] disabled:cursor-not-allowed disabled:opacity-50">
                  {loading ? 'Sending…' : 'Send message'}
                  {!loading ? (
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  ) : null}
                </button>
              </>
            )}
          </form>

          <div>
            <h2 className={`${home.h3} text-lg sm:text-xl`}>Contact information</h2>
            <p className={`mt-2 ${home.bodyMuted}`}>Prefer email? Reach us directly for partnerships, pilots, and programs.</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]"><MailIcon className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-[#2c2c2c]">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={`mt-1 inline-block text-sm font-medium ${home.accentGold} hover:text-[#8f7350]`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]"><PinIcon className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-[#2c2c2c]">Location</p>
                  <p className={`mt-1 text-sm ${home.body}`}>Global operations<br />Remote-first company</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]"><ClockIcon className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-[#2c2c2c]">Response time</p>
                  <p className={`mt-1 text-sm ${home.body}`}>Within 24 hours<br />on business days</p>
                </div>
              </div>
            </div>
            <div className={`mt-8 rounded-xl border border-[#e6dfd4] bg-white p-6 ${home.cardLight}`}>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#8f7350]">Have a project in mind?</h3>
              <p className={`mt-2 ${home.body}`}>For scoped engagements and pricing, request a quote.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/quote" className="inline-flex items-center gap-2 rounded-full border border-[#e6dfd4] bg-white px-5 py-2.5 text-sm font-semibold text-[#2c2c2c] transition-colors hover:border-[#C8A882]/40 hover:text-[#8f7350]">
                  Request a quote
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
