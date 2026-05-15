import Image from 'next/image';
import type { ReactNode } from 'react';

function GoldRule({ className = '' }: { className?: string }) {
  return <div className={`mt-3 h-px w-10 bg-[#C8A882] ${className}`} aria-hidden />;
}

function CompactPanel({
  children,
  className = '',
  imageSrc,
  imagePosition = 'object-center',
  variant = 'dark',
}: {
  children: ReactNode;
  className?: string;
  imageSrc?: string;
  imagePosition?: string;
  variant?: 'light' | 'dark' | 'image';
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <article
      className={`relative min-h-[200px] overflow-hidden rounded-2xl border sm:min-h-[220px] ${
        variant === 'light'
          ? 'border-[#e8dcc6] bg-white'
          : hasImage
            ? 'border-[#2c2c2c]/30'
            : 'border-[#2c2c2c]/40 bg-[#1e1b18]'
      } ${className}`}
    >
      {hasImage ? (
        <Image src={imageSrc!} alt="" fill className={`object-cover ${imagePosition}`} sizes="(max-width:768px) 100vw, 50vw" />
      ) : null}
      {hasImage ? (
        <>
          <div className="absolute inset-0 bg-[#1a1612]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/90 via-[#1a1612]/55 to-[#1a1612]/20" />
        </>
      ) : null}
      <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-center px-5 py-8 sm:min-h-[220px] sm:px-6 sm:py-9">
        {children}
      </div>
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
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
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
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
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
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 7 9 13h4l-1 6 5-7h-4l1-5Z" fill="currentColor" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
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
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="4" y="10" width="5" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="6" width="5" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="12" width="4" height="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20V9l4-2v13M12 20V6l6-3v17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 6V4M14 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DataTrustCard() {
  const traits = ['Traceable', 'Compliant', 'Secure by design'] as const;

  return (
    <article className="relative flex min-h-[280px] overflow-hidden rounded-2xl border border-[#C8A882]/20 bg-[#141210] sm:min-h-[300px]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 85% 50%, rgba(200,168,130,0.14) 0%, transparent 45%),
            radial-gradient(circle at 10% 90%, rgba(200,168,130,0.06) 0%, transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#C8A882]/15 bg-[#C8A882]/5"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between gap-8 p-6 sm:gap-10 sm:p-7 sm:py-8">
        <div className="max-w-sm">
          <p className="text-xl font-semibold uppercase leading-[1.2] tracking-[0.06em] text-white sm:text-2xl">
            Data you can trust.
            <br />
            Systems that adapt.
          </p>
          <div className="mt-5 h-px w-14 bg-[#C8A882]" aria-hidden />
        </div>

        <div className="flex items-end justify-between gap-5">
          <ul className="space-y-3 text-base font-medium leading-snug text-white/90 sm:space-y-3.5 sm:text-lg">
            {traits.map((trait) => (
              <li key={trait} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A882]" aria-hidden />
                {trait}
              </li>
            ))}
          </ul>

          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#C8A882]/35 bg-[#C8A882]/10 shadow-[0_0_32px_rgba(200,168,130,0.12)] sm:h-[5.5rem] sm:w-[5.5rem]"
            aria-hidden
          >
            <Image
              src="/pillar-data.png"
              alt=""
              width={52}
              height={52}
              className="h-12 w-12 object-contain mix-blend-screen sm:h-[3.25rem] sm:w-[3.25rem]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EcosystemSection() {
  return (
    <section className="bg-[#f5f2ed]">
      {/* Headline — full width, robot bg highlighted on the right */}
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[400px]">
        <Image
          src="/ecosystem-headline-bg.png"
          alt=""
          fill
          className="object-cover object-[72%_center] brightness-[1.02] contrast-[1.05]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2ed]/97 via-[#f5f2ed]/72 to-[#f5f2ed]/10" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f5f2ed]/5" />

        <div className="relative z-10 mx-auto flex h-full min-h-[280px] max-w-6xl items-center px-6 py-14 sm:min-h-[340px] sm:px-8 lg:min-h-[400px] lg:px-12">
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.15] tracking-tight text-[#2c2c2c] sm:text-4xl lg:text-[2.75rem]">
            From material intelligence
            <br />
            to{' '}
            <span className="font-semibold text-[#8f7350]">sovereign infrastructure.</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-4 px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        {/* Row 1: Materials + Autonomy */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <CompactPanel variant="light">
            <p className="text-lg font-semibold uppercase leading-tight tracking-[0.06em] text-[#2c2c2c] sm:text-xl">
              Materials that perform.
            </p>
            <GoldRule />
            <p className="mt-3 text-sm leading-relaxed text-[#4a443c]">
              Engineered for more with less. Designed for the future, built for the real world.
            </p>
          </CompactPanel>

          <CompactPanel
            imageSrc="/ecosystem-materials-bg.png"
            imagePosition="object-[65%_center]"
            variant="image"
          >
            <p className="text-lg font-semibold uppercase leading-tight tracking-[0.06em] text-white sm:text-xl">
              Autonomy that scales impact.
            </p>
            <GoldRule />
            <ul className="mt-3 space-y-1 text-sm text-white/90">
              <li>Intelligent operations.</li>
              <li>Adaptive systems.</li>
              <li>Real-world results.</li>
            </ul>
          </CompactPanel>
        </div>

        {/* Row 2: Sectors + Data */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
          <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#2c2c2c]/40 bg-[#1e1b18] sm:min-h-[300px]">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              aria-hidden
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(200,168,130,0.18) 0%, transparent 55%)`,
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-center px-5 py-8 sm:px-6 sm:py-9">
              <p className="text-base font-semibold uppercase leading-snug tracking-[0.07em] text-white sm:text-lg">
                Built for critical infrastructure.
                <br />
                Across sectors. For generations.
              </p>
              <GoldRule className="mt-4" />
              <div className="mt-5 grid grid-cols-2 gap-2">
                {sectors.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-lg border border-[#C8A882]/25 bg-[#1e1b18]/85 px-3 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#C8A882]/30 text-[#C8A882]">
                      <Icon />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <DataTrustCard />
        </div>
      </div>
    </section>
  );
}
