import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const heroFeatureBoxes = [
  {
    title: 'Autonomous Recovery',
    description: 'AI-driven textile reclamation and circular material processing.',
    iconRing: false,
    icon: (
      <Image
        src="/hero-box-1.png"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    title: 'Material Intelligence',
    description: 'Adaptive fibres, sensing systems and regenerative outputs.',
    iconRing: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Earth ↔ Space Systems',
    description: 'Closed-loop infrastructure designed for resilient environments.',
    iconRing: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.35" />
        <ellipse cx="12" cy="12" rx="9" ry="3.25" stroke="currentColor" strokeWidth="1.15" />
        <ellipse cx="12" cy="12" rx="3.25" ry="9" stroke="currentColor" strokeWidth="1.15" />
      </svg>
    ),
  },
] as const;

function HeroFeatureBox({
  title,
  description,
  icon,
  iconRing,
  showDivider,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  iconRing?: boolean;
  showDivider?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 ${
        showDivider ? 'border-t border-white/12 lg:border-t-0 lg:border-l' : ''
      }`}
    >
      <div
        className={
          iconRing
            ? 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C8A882]/90 text-[#C8A882]'
            : 'flex h-8 w-8 shrink-0 items-center justify-center'
        }
      >
        {icon}
      </div>
      <div className="min-w-0 text-left">
        <h3 className={home.heroFeatureTitle}>
          {title}
        </h3>
        <p className={home.heroFeatureDesc}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/homepage-hero.png)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col justify-between pt-28 pb-10 sm:pt-32 lg:pb-12">
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 text-center sm:px-8 lg:max-w-5xl">
          <p className={`mb-3 sm:mb-4 ${home.heroEyebrow}`}>
            Welcome to RE:WEAVE
          </p>

          <h1 className={`${home.heroTitle}`}>
            One architecture. Many worlds.
            <br />
            <span className="mt-1 inline-block">
              The infrastructure of the{' '}
              <span className={`font-semibold ${home.accentGold}`}>future</span>
            </span>
          </h1>

          <p className={`mx-auto mt-4 max-w-xl md:max-w-2xl ${home.heroLead}`}>
            Transforming textiles into a resilient, closed-loop infrastructure for Earth and Space.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link
              href="/system"
              className="min-w-[200px] rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#C8A882] hover:text-white"
            >
              Explore the Infrastructure
            </Link>
            <Link
              href="/contact"
              className="min-w-[200px] rounded-full border border-white/50 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15"
            >
              Book a Call with Our Team
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-5xl px-6 sm:px-8 lg:mt-6">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-black/55 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {heroFeatureBoxes.map((box, index) => (
                <HeroFeatureBox
                  key={box.title}
                  title={box.title}
                  description={box.description}
                  icon={box.icon}
                  iconRing={box.iconRing}
                  showDivider={index > 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
