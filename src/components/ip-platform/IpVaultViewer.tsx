'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { home } from '@/lib/homePageStyle';

export default function IpVaultViewer() {
  const router = useRouter();
  const [files, setFiles] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ip-platform/slides')
      .then((r) => r.json())
      .then((data: { files?: string[] }) => {
        setFiles(data.files ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const current = files[index];
  const isPdf = current?.toLowerCase().endsWith('.pdf');

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(files.length - 1, i + 1));
  }, [files.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  async function logout() {
    await fetch('/api/ip-platform/logout', { method: 'POST' });
    router.push('/ip-platform');
    router.refresh();
  }

  if (loading) {
    return <p className={`text-center ${home.body}`}>Loading vault…</p>;
  }

  if (files.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-[#e6dfd4] bg-white p-8 text-center shadow-sm">
        <p className={home.h3}>No slides uploaded yet</p>
        <p className={`mt-3 ${home.body}`}>
          Add images or a PDF to <code className="text-[#8f7350]">private/ip-vault/</code> on the server, then
          refresh this page.
        </p>
      </div>
    );
  }

  const src = `/api/ip-platform/slides/${encodeURIComponent(current)}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-[#6b6358]">
          Slide {index + 1} of {files.length}
          <span className="mx-2 text-[#d4ccc0]">·</span>
          <span className="text-[#4a443c]">{current}</span>
        </p>
        <button
          type="button"
          onClick={logout}
          className="text-sm font-medium text-[#8f7350] underline-offset-2 hover:text-[#C8A882] hover:underline"
        >
          Sign out
        </button>
      </div>

      <div className="rounded-xl border border-[#e6dfd4] bg-[#1a1a1a] p-3 sm:p-4">
        {isPdf ? (
          <iframe title="IP deck" src={src} className="h-[min(72vh,720px)] w-full rounded-lg bg-white" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="mx-auto max-h-[min(72vh,720px)] w-auto max-w-full rounded-lg object-contain"
          />
        )}
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="rounded-full border border-[#e6dfd4] bg-white px-5 py-2 text-sm font-medium text-[#2c2c2c] transition-colors hover:border-[#C8A882]/40 disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index >= files.length - 1}
          className="rounded-full bg-[#2c2c2c] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C8A882] disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
