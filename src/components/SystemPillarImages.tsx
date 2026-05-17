'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type LightboxState = { src: string; alt: string } | null;

function Lightbox({ state, onClose }: { state: LightboxState; onClose: () => void }) {
  useEffect(() => {
    if (!state) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [state, onClose]);

  if (!state) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged pillar infographic"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/88 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close enlarged view"
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition hover:bg-[#C8A882] hover:text-[#1a1a1a] sm:-right-12 sm:top-1/2 sm:-translate-y-1/2"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>

        <div className="max-h-[min(88vh,900px)] w-full overflow-auto rounded-xl bg-[#f5f1ea] p-2 shadow-2xl sm:p-4">
          <Image
            src={state.src}
            alt={state.alt}
            width={1600}
            height={1200}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <p className="mt-3 text-center text-[11px] text-white/65 sm:text-xs">
          Press Esc or click outside to close
        </p>
      </div>
    </div>
  );
}

export default function SystemPillarImages({ images, alt }: { images: string[]; alt: string }) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const close = useCallback(() => setLightbox(null), []);

  return (
    <>
      <div className="flex h-full flex-col justify-center gap-4 bg-white p-4 sm:gap-5 sm:p-5 lg:p-6">
        {images.map((src, i) => {
          const imageAlt = images.length > 1 ? `${alt} — visual ${i + 1}` : alt;

          return (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox({ src, alt: imageAlt })}
              className="group relative flex w-full cursor-zoom-in items-center justify-center rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A882] focus-visible:ring-offset-2"
            >
              <Image
                src={src}
                alt={imageAlt}
                width={1200}
                height={900}
                className="h-auto w-full max-w-full object-contain transition duration-200 group-hover:opacity-[0.92]"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-transparent transition group-hover:ring-[#C8A882]/35" />
              <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-[#1a1a1a]/75 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                Click to enlarge
              </span>
            </button>
          );
        })}
      </div>

      <Lightbox state={lightbox} onClose={close} />
    </>
  );
}
