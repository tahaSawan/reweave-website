import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const futurePillars = [
  {
    title: 'STRATEGIC SOVEREIGNTY',
    body: 'Control critical materials, data and infrastructure.',
    icon: '/future-icon-shield.png',
    alt: 'Strategic sovereignty',
  },
  {
    title: 'CIRCULAR PROSPERITY',
    body: 'Regenerate resources and create long-term value.',
    icon: '/future-icon-circular.png',
    alt: 'Circular prosperity',
  },
  {
    title: 'COMPETITIVE EDGE',
    body: 'Lower costs, reduce risk and unlock new markets.',
    icon: '/future-icon-growth.png',
    alt: 'Competitive edge',
  },
  {
    title: 'A RESILIENT FUTURE',
    body: 'Design infrastructure that endures and adapts.',
    icon: '/future-icon-globe.png',
    alt: 'A resilient future',
  },
] as const;

const advantageValues = [
  { label: 'SECURE', icon: '/future-icon-secure.png', alt: 'Secure' },
  { label: 'CIRCULAR', icon: '/future-icon-circular.png', alt: 'Circular' },
  { label: 'SOVEREIGN', icon: '/future-icon-globe.png', alt: 'Sovereign' },
  { label: 'SCALABLE', icon: '/future-icon-growth.png', alt: 'Scalable' },
] as const;

/** White card shell — top “Future” card in the revenue band. */
const splitCardShell =
  'overflow-hidden rounded-[1.75rem] border border-[#e6dfd4] bg-white shadow-[0_2px_8px_rgba(44,44,44,0.05)]';

/** Cream sovereign card — logo + copy on top, four pillars below (reference layout). */
const sovereignCardShell =
  'overflow-hidden rounded-3xl border border-[#ddd4c8] bg-[#f9f6f1] shadow-[0_2px_10px_rgba(44,44,44,0.06)]';

const sovereignDivider = 'bg-[#a89578]/55';

function PillarIcon({ src, alt, compact }: { src: string; alt: string; compact?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${
        compact
          ? 'h-9 w-9'
          : 'h-11 w-11 rounded-full border border-[#ebe4d9] bg-[#faf8f5] p-2 sm:h-12 sm:w-12'
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className={compact ? 'h-5 w-5 object-contain' : 'h-7 w-7 object-contain sm:h-8 sm:w-8'}
      />
    </span>
  );
}

function FeatureArrow({ compact }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 12"
      fill="none"
      className={`shrink-0 text-[#b5a48a]/80 ${compact ? 'mt-2 h-2.5 w-5' : 'mt-3 h-3 w-5'}`}
      aria-hidden
    >
      <path d="M1 6h18M14 2l5 4-5 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

type TheFutureSectionProps = {
  variant?: 'default' | 'split';
};

export default function TheFutureSection({ variant = 'default' }: TheFutureSectionProps) {
  const isSplit = variant === 'split';

  if (isSplit) {
    return (
      <div className="flex h-full min-h-0 w-full flex-col gap-2.5 sm:gap-3">
        <article className={`flex min-h-0 flex-1 flex-col ${splitCardShell} px-5 py-4 sm:px-6 sm:py-5`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5a48a]">THE FUTURE</p>

          <h2 className="mt-2.5 text-[15px] font-semibold leading-snug tracking-tight text-[#2c2c2c] sm:text-base">
            <span className="block font-semibold text-[#2c2c2c]">From disruption to direction.</span>
            <span className={`mt-0.5 block ${home.accent}`}>From risk to resilience.</span>
          </h2>

          <p className="mt-2.5 text-[12px] leading-relaxed text-[#4a443c]">
            Re:Weave™ enables a new era of sovereign infrastructure — where materials, data and
            intelligence work together to create lasting economic, environmental and strategic value.
          </p>

          <ul className="mt-3 flex flex-1 flex-col gap-2.5 sm:mt-3.5 sm:gap-3">
            {futurePillars.map(({ title, body, icon, alt }) => (
              <li key={title} className="flex items-start gap-2 sm:gap-2.5">
                <PillarIcon src={icon} alt={alt} compact />
                <FeatureArrow compact />
                <div className="min-w-0 pt-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8f7350] sm:text-[11px]">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[#4a443c] sm:text-[12px]">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className={`shrink-0 ${sovereignCardShell}`}>
          <div className="flex items-stretch border-b border-[#d5cbbf]">
            <div className="flex w-[5.25rem] shrink-0 items-center justify-center py-4 pl-4 pr-2 sm:w-[5.75rem] sm:py-4 sm:pl-5">
              <Image
                src="/yellow-logo.png"
                alt="RE:WEAVE"
                width={88}
                height={88}
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              />
            </div>
            <div className={`my-4 w-px shrink-0 self-center sm:my-5 ${sovereignDivider}`} aria-hidden />
            <div className="flex min-w-0 flex-1 flex-col justify-center py-4 pr-4 pl-3 sm:py-4 sm:pr-5 sm:pl-4">
              <p className="text-[10px] font-bold uppercase leading-snug tracking-[0.04em] text-[#2c2c2c] sm:text-[11px]">
                THE NEXT ADVANTAGE IS SOVEREIGN.
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-[#4a443c] sm:text-[12px]">
                Re:Weave™ transforms today&apos;s challenges into tomorrow&apos;s infrastructure.
                Let&apos;s build what lasts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 divide-x divide-[#d5cbbf]">
            {advantageValues.map(({ label, icon, alt }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 px-1.5 py-3.5 sm:gap-2.5 sm:px-2 sm:py-4"
              >
                <Image
                  src={icon}
                  alt={alt}
                  width={28}
                  height={28}
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />
                <p className="text-center text-[8px] font-bold uppercase leading-none tracking-[0.1em] text-[#2c2c2c] sm:text-[9px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    );
  }

  const content = (
    <>
      <article className={`${home.cardLight} sm:p-7 lg:p-8`}>
        <p className={home.eyebrow}>THE FUTURE</p>
        <div className={`mt-4 w-14 ${home.ruleBar}`} aria-hidden />

        <h2 className={`mt-5 ${home.h2}`}>
          From disruption to direction.{' '}
          <span className={home.accent}>From risk to resilience.</span>
        </h2>

        <p className={`mt-4 max-w-2xl ${home.lead}`}>
          Re:Weave™ enables a new era of sovereign infrastructure — where materials, data and
          intelligence work together to create lasting economic, environmental and strategic value.
        </p>

        <ul className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
          {futurePillars.map(({ title, body, icon, alt }) => (
            <li key={title} className="flex items-start gap-3 sm:gap-4">
              <PillarIcon src={icon} alt={alt} />
              <FeatureArrow />
              <div className="min-w-0 pt-0.5">
                <p className={home.cardEyebrowLight}>{title}</p>
                <p className={`mt-2 ${home.cardBody}`}>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className={`mt-4 overflow-hidden sm:mt-5 ${home.cardLight}`}>
        <div className="flex flex-col gap-5 border-b border-[#ebe4d9] px-5 py-6 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-7">
          <div className="flex shrink-0 items-center justify-center sm:w-24">
            <Image
              src="/yellow-logo.png"
              alt="RE:WEAVE"
              width={88}
              height={88}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </div>
          <div className="hidden h-12 w-px shrink-0 bg-[#ebe4d9] sm:block" aria-hidden />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className={`${home.h3} uppercase tracking-[0.06em]`}>THE NEXT ADVANTAGE IS SOVEREIGN.</p>
            <p className={`mt-2 ${home.body}`}>
              Re:Weave™ transforms today&apos;s challenges into tomorrow&apos;s infrastructure.
              Let&apos;s build what lasts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-[#ebe4d9] sm:grid-cols-4 sm:divide-y-0">
          {advantageValues.map(({ label, icon, alt }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2.5 px-3 py-5 sm:py-6"
            >
              <Image src={icon} alt={alt} width={28} height={28} className="h-6 w-6 object-contain" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2c2c2c] sm:text-[11px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </article>
    </>
  );

  return (
    <section className="border-t border-[#ebe6dc] bg-white py-12 sm:py-14 lg:py-16">
      <div className={`${home.container} max-w-[52rem]`}>{content}</div>
    </section>
  );
}
