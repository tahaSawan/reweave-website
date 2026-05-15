import Image from 'next/image';
import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

/** Main block below the gold rule — vertically centered in the card for even visual weight */
const cardMainSlot = 'mt-2 flex min-h-0 flex-1 flex-col justify-center py-0.5';

function GoldRule({ className = '' }: { className?: string }) {
  return <div className={`mt-1.5 h-px w-7 bg-[#C8A882] ${className}`} aria-hidden />;
}

function CompactPanel({
  children,
  className = '',
  variant = 'dark',
}: {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const isLight = variant === 'light';
  return (
    <article
      className={`flex h-full min-h-0 flex-col ${isLight ? home.ecoCardShellLight : home.ecoCardShellDark} ${className}`}
    >
      {children}
    </article>
  );
}

const sectors = [
  { label: 'Defense', icon: ShieldIcon },
  { label: 'Aerospace', icon: PlaneIcon },
  { label: 'Energy', icon: EnergyIcon },
  { label: 'Health', icon: HealthIcon },
  { label: 'Cities', icon: CitiesIcon },
  { label: 'Industry', icon: IndustryIcon },
] as const;

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.2 2.9 8.1 7 9 4.1-.9 7-4.8 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 3 4 11h4l-1 8 5-4 5 4-1-8h4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 7 9 13h4l-1 6 5-7h-4l1-5Z" fill="currentColor" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 20s-6-4.2-6-9.5a4.5 4.5 0 0 1 8.2-2.6A4.5 4.5 0 0 1 18 10.5C18 15.8 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CitiesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <rect x="4" y="10" width="5" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="6" width="5" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="12" width="4" height="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20V9l4-2v13M12 20V6l6-3v17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 6V4M14 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SectorsCard({ variant }: { variant: 'light' | 'dark' }) {
  const isLight = variant === 'light';
  const titleClass = isLight ? home.ecoCardTitleLight : home.ecoCardTitleDark;
  const pillBorder = isLight ? 'border-[#C8A882]/30 bg-[#faf8f5]' : 'border-[#C8A882]/25 bg-[#252220]';
  const iconWrap =
    'flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#C8A882]/35 text-[#C8A882]';
  const labelClass = isLight
    ? 'text-[0.5rem] font-semibold uppercase leading-tight tracking-[0.04em] text-[#2c2c2c] sm:text-[0.5625rem]'
    : 'text-[0.5rem] font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:text-[0.5625rem]';

  return (
    <article className={`flex h-full min-h-0 flex-col ${isLight ? home.ecoCardShellLight : home.ecoCardShellDark}`}>
      <div className="shrink-0">
        <p className={titleClass}>
          Built for critical infrastructure.
          <br />
          Across sectors. For generations.
        </p>
        <GoldRule />
      </div>
      <div className={cardMainSlot}>
        <div className="grid w-full min-h-0 grid-cols-3 gap-1 sm:gap-1.5">
          {sectors.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={`flex min-h-0 flex-col items-center justify-center gap-0.5 rounded border px-1 py-1.5 text-center sm:py-2 ${pillBorder}`}
            >
              <span className={iconWrap}>
                <Icon />
              </span>
              <span className={`${labelClass} line-clamp-2 w-full break-words px-0.5`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function DataTrustCard({ variant }: { variant: 'light' | 'dark' }) {
  const traits = ['Traceable', 'Compliant', 'Secure by design'] as const;
  const isLight = variant === 'light';
  const shell = isLight ? home.ecoCardShellLight : home.ecoCardShellData;
  const titleClass = isLight ? home.ecoCardTitleLight : home.ecoCardTitleDark;
  const listClass = isLight ? home.ecoCardBodyLight : home.ecoCardBodyDark;
  const bullet = 'mt-0.5 h-1 w-1 shrink-0 rounded-full bg-[#C8A882]';
  const iconTile = isLight
    ? 'border-[#C8A882]/35 bg-[#faf8f5]'
    : 'border-[#C8A882]/30 bg-[#C8A882]/10';

  return (
    <article className={`flex h-full min-h-0 flex-col ${shell}`}>
      <div className="shrink-0">
        <p className={titleClass}>
          Data you can trust.
          <br />
          Systems that adapt.
        </p>
        <GoldRule />
      </div>

      <div className={cardMainSlot}>
        <div className="flex w-full items-center justify-center gap-3 sm:gap-3.5">
          <ul className={`min-w-0 flex-1 space-y-1.5 ${listClass}`}>
            {traits.map((trait) => (
              <li key={trait} className="flex gap-2">
                <span className={bullet} aria-hidden />
                <span>{trait}</span>
              </li>
            ))}
          </ul>

          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${iconTile}`}
            aria-hidden
          >
            <Image
              src="/pillar-data.png"
              alt=""
              width={32}
              height={32}
              className={`h-6 w-6 object-contain ${isLight ? '' : 'mix-blend-screen'}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EcosystemSection() {
  return (
    <section className={`bg-[#f5f2ed] ${home.section}`}>
      <div className={`${home.container} max-w-5xl lg:max-w-6xl`}>
        <div className="mx-auto max-w-xl text-center sm:max-w-2xl lg:max-w-3xl">
          <h2 className={`${home.h2}`}>
            From material intelligence
            <br />
            to <span className={home.accent}>sovereign infrastructure.</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:mt-9 lg:grid-cols-4 lg:gap-4">
          <CompactPanel variant="light">
            <div className="shrink-0">
              <p className={home.ecoCardTitleLight}>Materials that perform.</p>
              <GoldRule />
            </div>
            <div className={cardMainSlot}>
              <p className={home.ecoCardBodyLight}>
                Engineered for more with less. Designed for the future, built for the real world.
              </p>
            </div>
          </CompactPanel>

          <CompactPanel variant="dark">
            <div className="shrink-0">
              <p className={home.ecoCardTitleDark}>Autonomy that scales impact.</p>
              <GoldRule />
            </div>
            <div className={cardMainSlot}>
              <ul className={`space-y-1 ${home.ecoCardBodyDark}`}>
                <li>Intelligent operations.</li>
                <li>Adaptive systems.</li>
                <li>Real-world results.</li>
              </ul>
            </div>
          </CompactPanel>

          <SectorsCard variant="light" />

          <DataTrustCard variant="dark" />
        </div>
      </div>
    </section>
  );
}
