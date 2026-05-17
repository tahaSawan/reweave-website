import Image from 'next/image';
import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

const gridCells: { title: string; body: ReactNode }[] = [
  {
    title: 'Materials that perform:',
    body: (
      <>
        Engineered for more with less. Designed for the future, built for the real world. From material
        intelligence to <span className={home.accent}>sovereign infrastructure.</span>
      </>
    ),
  },
  {
    title: 'Autonomy that scales impact.',
    body: (
      <>
        Intelligent operations. Adaptive systems.{' '}
        <span className={home.accentGold}>Real-world results.</span>
      </>
    ),
  },
  {
    title: 'Data you can trust. Systems that adapt:',
    body: 'Traceable. Compliant. Secure by design.',
  },
  {
    title: 'Building a resilient future together.',
    body: <span className={home.accentGold}>Secure. Scalable. Sovereign.</span>,
  },
];

const sectors = [
  { label: 'Defense', icon: ShieldIcon },
  { label: 'Aerospace', icon: PlaneIcon },
  { label: 'Energy', icon: EnergyIcon },
  { label: 'Health', icon: HealthIcon },
  { label: 'Cities', icon: CitiesIcon },
  { label: 'Industry', icon: IndustryIcon },
] as const;

const cellTitleClass = `${home.ecoCardTitleLight} text-left`;
const cellBodyClass = `${home.ecoCardBodyLight} text-left text-pretty`;

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

function GridCell({
  title,
  body,
  index,
}: {
  title: string;
  body: ReactNode;
  index: number;
}) {
  const isRightCol = index % 2 === 1;
  const isBottomRow = index >= 2;

  return (
    <article
      className={`flex h-full flex-col items-start justify-start gap-3 bg-white px-4 py-4 text-left sm:px-5 sm:py-5 ${
        isRightCol ? 'border-l border-[#2c2c2c]/12' : ''
      } ${isBottomRow ? 'border-t border-[#2c2c2c]/12' : ''}`}
    >
      <h3 className={cellTitleClass}>{title}</h3>
      <p className={cellBodyClass}>{body}</p>
    </article>
  );
}

function OverviewGrid() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[#2c2c2c]/12">
      <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 sm:auto-rows-fr">
        {gridCells.map((cell, index) => (
          <GridCell key={cell.title} title={cell.title} body={cell.body} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function SystemOverviewSection() {
  return (
    <section className={`bg-white ${home.section}`}>
      <div className={home.container}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
          <LeftColumn />

          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="mx-auto w-full max-w-[min(100%,400px)] lg:mx-0 lg:max-w-[460px]">
              <Image
                src="/system-info.png"
                alt="RE:WEAVE system diagram: Materials, Systems, Robotics, Data and Compliance, and Lifecycle in a closed loop"
                width={640}
                height={640}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 90vw, 460px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeftColumn() {
  return (
    <div className="flex min-w-0 flex-col gap-6 sm:gap-7">
      <header className="text-left">
        <h2 className={`${home.h2} max-w-lg`}>
          Infrastructure for Strategic <span className={home.accentGold}>Sovereignty</span>
        </h2>
        <p className="mt-4 inline-flex rounded-full bg-[#1a1a1a] px-4 py-2 text-[10px] font-medium italic uppercase tracking-[0.14em] text-white sm:text-[11px] sm:tracking-[0.18em]">
          Materials &bull; Systems &bull; Impact
        </p>
      </header>

      <div className="flex w-full flex-col gap-5 sm:gap-6">
        <OverviewGrid />

        <footer className="w-full overflow-hidden rounded-lg border border-[#e6dfd4]">
          <p className="bg-[#c9b89a] px-4 py-3 text-left text-sm italic leading-relaxed text-[#2c2c2c] sm:px-5 sm:py-3.5 sm:text-[0.9375rem]">
            Built for critical infrastructure across sectors for generations.
          </p>
          <div className="grid grid-cols-3 divide-x divide-white/15 bg-[#1a1a1a] sm:grid-cols-6">
            {sectors.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 px-1.5 py-3 sm:min-h-[4.5rem] sm:gap-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#C8A882]/40 text-[#C8A882]">
                  <Icon />
                </span>
                <span className="text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
