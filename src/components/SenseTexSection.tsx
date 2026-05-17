import Image from 'next/image';
import type { ComponentType } from 'react';
import { home } from '@/lib/homePageStyle';

const numberedFeatures = [
  {
    num: '01',
    title: 'Regulatory Ready',
    body: 'DPP-ready, ESG-aligned and built for ESPR, EPR and future regulations.',
    variant: 'light' as const,
  },
  {
    num: '02',
    title: 'Circular by Design',
    body: 'Designed for durability, reuse, recycling and EPR compliance.',
    variant: 'dark' as const,
  },
  {
    num: '03',
    title: 'Sovereign Supply',
    body: 'Enables local production, resilient supply chains and strategic independence.',
    variant: 'light' as const,
  },
  {
    num: '04',
    title: 'Cost & Risk Reduction',
    body: 'Reduces total life cycle cost and future regulatory risk.',
    variant: 'dark' as const,
  },
  {
    num: '05',
    title: 'Extreme Performance',
    body: 'Built for the most demanding environments on Earth and in space.',
    variant: 'light' as const,
  },
];

const qualityTiers = [
  {
    image: '/sense-tex/quality-a.png',
    label: 'Quality A',
    materials: [
      { name: 'Soybean', pct: '40%' },
      { name: 'SeaCell', pct: '20%' },
      { name: 'Zinc', pct: '20%' },
      { name: 'Silver', pct: '10%' },
      { name: 'Ramie', pct: '10%' },
    ],
    bodyTone: 'bg-[#f5f1ea]',
    featured: false,
  },
  {
    image: '/sense-tex/quality-b.png',
    label: 'Quality B',
    materials: [
      { name: 'Soybean', pct: '50%' },
      { name: 'SeaCell', pct: '25%' },
      { name: 'Zinc', pct: '15%' },
      { name: 'Silver', pct: '5%' },
      { name: 'Ramie', pct: '5%' },
    ],
    bodyTone: 'bg-white',
    featured: true,
  },
  {
    image: '/sense-tex/quality-c.png',
    label: 'Quality C',
    materials: [
      { name: 'Soybean', pct: '50%' },
      { name: 'SeaCell', pct: '20%' },
      { name: 'Zinc', pct: '10%' },
      { name: 'Silver', pct: '3%' },
      { name: 'Ramie', pct: '17%' },
    ],
    bodyTone: 'bg-[#f5f1ea]',
    featured: false,
  },
] as const;

const introHighlights = [
  'Functional yarns with integrated sensing',
  'Advanced coatings for extreme environments',
  'Built for circularity & regulatory compliance',
] as const;

const materialPillars: {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  { title: 'Perform', body: 'Engineered for extreme conditions', icon: PerformIcon },
  { title: 'Protect', body: 'People, assets and the environment.', icon: ProtectIcon },
  { title: 'Connect', body: 'To data, systems and the future.', icon: ConnectIcon },
  { title: 'Circle', body: 'Designed for a closed-loop future.', icon: CircleIcon },
];

const applications = [
  {
    image: '/sense-tex/defense.png',
    title: 'Defense / Technical',
    body: 'Circular infrastructure textiles, waste reduction, DPP-linked material flows.',
  },
  {
    image: '/sense-tex/space.png',
    title: 'Space / ISRU / Habitat',
    body: 'Protective textiles, ballistic solutions, chemical resistance, mission-critical reliability.',
  },
  {
    image: '/sense-tex/smart-city.png',
    title: 'Smart Cities',
    body: 'Radiation protection, extreme temperature resistance, lightweight, closed-loop compatible.',
  },
  {
    image: '/sense-tex/fashion.png',
    title: 'Fashion & Culture',
    body: 'Radiation protection, extreme temperature resistance, lightweight, closed-loop compatible.',
  },
  {
    image: '/sense-tex/healthcare.png',
    title: 'Healthcare',
    body: 'Hygienic, antimicrobial, solutions, reduced washing and chemical intensity.',
  },
] as const;

function PerformIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m14.7 6.3-1.4 1.4M9.3 17.7l-1.4 1.4M17.7 9.3l1.4-1.4M6.3 14.7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6l4 4M6 14l4 4M18 10l-4 4M10 18l-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProtectIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.2 2.9 8.1 7 9 4.1-.9 7-4.8 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ConnectIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 6h8M7 8l4 8M17 8l-4 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CircleIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M17 7A7 7 0 1 0 7 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 7h-4v4M7 17h4v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NumberedRow({
  num,
  title,
  body,
  variant,
}: {
  num: string;
  title: string;
  body: string;
  variant: 'light' | 'dark';
}) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`flex flex-1 min-h-0 ${
        isDark ? 'bg-[#141210] text-white' : 'bg-white'
      }`}
    >
      <div
        className={`flex w-12 shrink-0 items-center justify-center border-r text-xs font-bold tabular-nums sm:w-14 sm:text-sm ${
          isDark ? 'border-white/12 text-white' : 'border-[#2c2c2c]/10 text-[#2c2c2c]'
        }`}
      >
        {num}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-3.5 py-3 text-left sm:px-4 sm:py-3.5">
        <p
          className={`text-[10px] font-bold uppercase tracking-[0.1em] sm:text-[11px] ${
            isDark ? 'text-white' : 'text-[#2c2c2c]'
          }`}
        >
          {title}
        </p>
        <p
          className={`mt-1 text-[11px] leading-snug sm:text-xs ${
            isDark ? 'text-white/85' : 'text-[#4a443c]'
          }`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

function QualityCard({
  image,
  label,
  materials,
  bodyTone,
  featured,
}: {
  image: string;
  label: string;
  materials: readonly { name: string; pct: string }[];
  bodyTone: string;
  featured: boolean;
}) {
  return (
    <article
      className={`group flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-[#ddd4c8] bg-white shadow-[0_2px_12px_-4px_rgba(44,44,44,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(44,44,44,0.16)] ${
        featured ? 'ring-1 ring-[#C8A882]/45' : ''
      }`}
    >
      <div className="relative min-h-[10.5rem] w-full flex-1 overflow-hidden sm:min-h-[11.5rem]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center scale-[1.65] transition-transform duration-500 ease-out group-hover:scale-[1.72]"
          sizes="(max-width: 1024px) 33vw, 240px"
        />
      </div>

      <div className="shrink-0 bg-[#c4b5a6] px-2 py-2.5 text-center sm:py-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2c2c2c] sm:text-[10px]">
          {label}
        </p>
      </div>

      <ul className={`flex shrink-0 flex-col justify-center px-3 py-2.5 sm:px-3.5 sm:py-3 ${bodyTone}`}>
        {materials.map(({ name, pct }, i) => (
          <li
            key={name}
            className={`flex items-center justify-between gap-2 py-1.5 text-[9px] sm:text-[10px] ${
              i < materials.length - 1 ? 'border-b border-[#e6dfd4]/90' : ''
            }`}
          >
            <span className="font-medium text-[#3d3832]">{name}</span>
            <span className="shrink-0 font-bold tabular-nums text-[#9a7d5c]">{pct}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ApplicationCard({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e0d9cf] bg-white shadow-sm transition-all duration-300 hover:border-[#C8A882]/60 hover:shadow-[0_8px_24px_-8px_rgba(44,44,44,0.12)]">
      <div className="flex items-start gap-3 border-b border-[#ebe4d9] bg-[#faf8f5] p-3 sm:p-3.5">
        <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg ring-1 ring-[#2c2c2c]/8 sm:h-20 sm:w-20">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="80px"
          />
        </div>
        <h4 className="pt-0.5 text-[10px] font-bold uppercase leading-snug tracking-[0.07em] text-[#2c2c2c] sm:text-[11px]">
          {title}
        </h4>
      </div>
      <p className="flex-1 p-3 text-left text-[10px] leading-relaxed text-[#4a443c] sm:p-3.5 sm:text-[11px] sm:leading-snug">
        {body}
      </p>
    </article>
  );
}

function PillarCell({
  title,
  body,
  icon: Icon,
}: {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-3.5 text-center sm:px-2.5 sm:py-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#C8A882]/15 text-[#C8A882] ring-1 ring-[#C8A882]/30">
        <Icon />
      </span>
      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.1em] text-white sm:text-[10px]">
        {title}
      </p>
      <p className="mt-1 text-[8px] leading-snug text-white/72 sm:text-[9px]">{body}</p>
    </div>
  );
}

export default function SenseTexSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-8 sm:py-10 lg:py-11">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.22]"
        style={{ backgroundImage: 'url(/sense-tex/thread-bg.png)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf8f5]/88 via-[#faf8f5]/94 to-[#faf8f5]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(200,168,130,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,168,130,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-5 lg:grid-cols-12 lg:gap-4 xl:gap-5">
          <div className="self-start text-left lg:col-span-4">
            <span className="inline-flex w-fit rounded-md bg-[#1a1a1a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px]">
                Sense-Tex<sup className="ml-0.5 text-[8px]">®</sup>
              </span>
              <h2 className={`mt-3.5 ${home.h2}`}>
                What is <span className={home.accentGold}>Sense-Tex?</span>
              </h2>
              <div className={`mt-3.5 space-y-2.5 ${home.body}`}>
                <p>
                  Sense-Tex™ is a new generation of intelligent textile material engineered with functional
                  yarns, advanced coatings and integrated sensing.
                </p>
                <p>
                  It delivers superior protection, durability &amp; circularity meeting today&apos;s and
                  tomorrow&apos;s regulatory demands.
                </p>
              </div>

            <ul className="mt-5 space-y-2.5 rounded-lg border border-[#e6dfd4] bg-white/80 px-4 py-3.5 shadow-sm backdrop-blur-sm">
              {introHighlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-left text-xs leading-relaxed text-[#4a443c] sm:text-[0.8125rem]"
                >
                  <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A882]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-[#C8A882]/40 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f7350]">
                Intelligent material layer
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#6b6358]">
                First layer of Re:Weave sovereign infrastructure.
              </p>
            </div>
          </div>

          <div className="flex lg:col-span-4">
            <div className="flex h-full w-full flex-col divide-y divide-[#2c2c2c]/10 overflow-hidden rounded-xl border border-[#2c2c2c]/10 shadow-sm">
              {numberedFeatures.map((item) => (
                <NumberedRow key={item.num} {...item} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4 lg:gap-3.5">
            <div className="grid min-h-[17rem] flex-1 grid-cols-3 gap-3 sm:min-h-[19rem] sm:gap-4 lg:min-h-[20rem]">
              {qualityTiers.map((tier) => (
                <QualityCard key={tier.label} {...tier} />
              ))}
            </div>

            <div className="overflow-hidden rounded-xl bg-[#141210] shadow-md ring-1 ring-[#2c2c2c]/20">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_1.2fr]">
                <div className="flex flex-col justify-center border-b border-white/10 px-4 py-4 text-left sm:px-5 sm:py-5 lg:border-b-0 lg:border-r lg:py-6">
                  <p className="text-balance text-xs font-bold uppercase leading-snug tracking-[0.06em] text-white sm:text-sm">
                    Sense-Tex™ is more than a material.
                  </p>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-[#C8A882]/90 sm:text-xs">
                    It is the first layer of Re:Weave Infrastructure
                  </p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10 [&>*:nth-child(3)]:border-t [&>*:nth-child(4)]:border-t">
                  {materialPillars.map(({ title, body, icon }) => (
                    <PillarCell key={title} title={title} body={body} icon={icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#C8A882]/45 pt-7 lg:mt-9 lg:pt-8">
          <div className="text-left">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2c2c2c] sm:text-xs">
              Designed for Critical Applications
            </h3>
            <div className={`mt-2 w-14 ${home.ruleBar}`} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:mt-5 lg:grid-cols-5 lg:gap-3">
            {applications.map((app) => (
              <ApplicationCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
