'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { home } from '@/lib/homePageStyle';
import { NDA_TEXT } from '@/lib/ipVaultNda';

const accessSignals = [
  {
    step: '01',
    title: 'Invite-only access',
    body: 'Every viewer enters with a unique access code issued by the RE:WEAVE™ team.',
  },
  {
    step: '02',
    title: 'NDA before entry',
    body: 'Confidentiality is acknowledged before any slide or document is shown.',
  },
  {
    step: '03',
    title: 'Controlled distribution',
    body: 'Materials stay off the public web and are served only inside this vault.',
  },
] as const;

function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function IpPlatformGate() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/ip-platform/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, name, email, ndaAccepted }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || 'Access denied.');
        return;
      }
      router.push('/ip-platform/vault');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[#e6dfd4] bg-white px-4 py-2.5 text-sm text-[#2c2c2c] outline-none transition-colors placeholder:text-[#9a9288] focus:border-[#C8A882]/60 focus:ring-2 focus:ring-[#C8A882]/15';

  return (
    <section className={`bg-[#f5f1ea] ${home.section}`}>
      <div className={home.container}>
        <div className="mb-10 text-center sm:mb-12">
          <p className={home.eyebrow}>Secure entry</p>
          <h2 className={`mx-auto mt-3 max-w-2xl ${home.h2}`}>
            Request <span className={home.accentGold}>vault access</span>
          </h2>
          <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
          <p className={`mx-auto mt-5 max-w-2xl ${home.lead}`}>
            Use the credentials provided to you. Your session is private and intended for authorized review only.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-10">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {accessSignals.map(({ step, title, body }) => (
              <article
                key={step}
                className={`flex h-full flex-col transition-all duration-300 hover:border-[#C8A882]/40 hover:shadow-[0_16px_44px_rgba(0,0,0,0.2)] ${home.ecoCardShellData}`}
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8A882]/15 text-xs font-bold tabular-nums text-[#C8A882]">
                  {step}
                </span>
                <p className={home.ecoCardBodyDark}>
                  <span className={`font-semibold ${home.ecoCardTitleDark}`}>{title}:</span> {body}
                </p>
              </article>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="relative space-y-5 overflow-hidden rounded-xl border border-[#e6dfd4] bg-white p-6 shadow-[0_16px_48px_-20px_rgba(44,44,44,0.18)] ring-1 ring-[#C8A882]/10 sm:p-8"
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A882]/70 to-transparent"
              aria-hidden
            />

            <div className="flex items-center gap-3 border-b border-[#ebe4d9] pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]">
                <LockIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8f7350]">Member access</p>
                <p className="mt-0.5 text-sm font-semibold text-[#2c2c2c]">Enter the vault</p>
              </div>
            </div>

            <div>
              <label htmlFor="code" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">
                Access code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                autoComplete="off"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={inputClass}
                placeholder="Enter your code"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#8f7350]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="rounded-lg border border-[#ebe4d9] bg-[#faf8f5] p-4">
              <p className="text-xs leading-relaxed text-[#4a443c] sm:text-sm">{NDA_TEXT}</p>
              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={ndaAccepted}
                  onChange={(e) => setNdaAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[#d4ccc0] text-[#C8A882] focus:ring-[#C8A882]/30"
                />
                <span className="text-sm text-[#2c2c2c]">I have read and agree to the terms above.</span>
              </label>
            </div>

            {error ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-800" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading || !ndaAccepted}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2c2c2c] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#C8A882] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Verifying…' : 'Enter vault'}
              {!loading ? (
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              ) : null}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
