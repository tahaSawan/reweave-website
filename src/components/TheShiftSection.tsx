import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const shiftFactorCards = [
  {
    title: 'FRAGMENTED SUPPLY CHAINS',
    body: 'Global dependencies create risk, volatility and lack of control.',
    src: '/shift-thread.png',
    alt: 'Tangled natural textile fibers',
    imageScale: 'scale-[1.38]' as const,
    tone: 'gold' as const,
  },
  {
    title: 'RISING REGULATORY PRESSURE',
    body: 'ESPR, DPP, EPR and ESG rules are redefining the cost of doing business.',
    src: '/shift-8.png',
    alt: 'Stack of regulatory documents and folders',
    imageScale: 'scale-[1.38]' as const,
    tone: 'cream' as const,
  },
  {
    title: 'GEOPOLITICAL UNCERTAINTY',
    body: 'Material access and security are now a strategic imperative.',
    src: '/earth-light.png',
    alt: 'Earth at night with connected global network lines',
    imageScale: 'scale-100' as const,
    tone: 'gold' as const,
  },
  {
    title: 'LINEAR MODELS LEAD TO LOSS',
    body: 'Global dependencies create risk, volatility and lack of control.',
    src: '/shift-factories.png',
    alt: 'Industrial factory smokestacks emitting smoke at dusk',
    imageScale: 'scale-100' as const,
    tone: 'cream' as const,
  },
] as const;

function SovereignSystemsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 28c0-7.2 5.4-12.8 12-13.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 28c0-7.2-5.4-12.8-12-13.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M10 28h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M24 12v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17 22h14l-2 6H19l-2-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShiftQuoteBanner() {
  return (
    <div className="flex items-center gap-3.5 rounded-2xl bg-[#1a1a1a] px-4 py-4 text-white sm:gap-4 sm:px-5 sm:py-4">
      <SovereignSystemsIcon className="h-9 w-9 shrink-0 text-white sm:h-10 sm:w-10" />
      <div className="h-9 w-px shrink-0 bg-white/25 sm:h-10" aria-hidden />
      <p className="text-left text-sm font-normal leading-relaxed text-white/95 sm:text-[0.9375rem]">
        The future belongs to systems that are resilient, regenerative and sovereign by design.
      </p>
    </div>
  );
}

function ShiftFactorCard({
  title,
  body,
  src,
  alt,
  imageScale,
  tone,
}: (typeof shiftFactorCards)[number]) {
  const panelBg = tone === 'gold' ? 'bg-[#C8A882]' : 'bg-[#f5f1ea]';

  return (
    <article
      className={`flex h-[14.5rem] flex-col overflow-hidden rounded-2xl sm:h-[16.25rem] lg:h-[17rem] ${panelBg}`}
    >
      <div className={`relative min-h-0 flex-[3] overflow-hidden ${panelBg}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover object-center ${imageScale}`}
          sizes="(max-width: 768px) 44vw, 280px"
        />
      </div>
      <div className={`flex min-h-0 flex-[2] flex-col ${panelBg} px-4 py-3.5 sm:px-4 sm:py-4`}>
        <h3 className="text-[11px] font-bold uppercase leading-snug tracking-[0.05em] text-[#2c2c2c] sm:text-xs">
          {title}
        </h3>
        <div className="mt-2.5 h-px w-[88%] max-w-[12rem] shrink-0 bg-[#2c2c2c]/25" aria-hidden />
        <p className="mt-2.5 text-xs font-normal leading-snug text-[#2c2c2c] sm:text-[0.8125rem] sm:leading-relaxed">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function TheShiftSection() {
  return (
    <section className={`bg-white ${home.section}`}>
      <div className={home.container}>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="flex flex-col gap-7 md:max-w-none md:gap-8">
            <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-none md:text-left">
              <p className="inline-flex rounded-full bg-[#1a1a1a] px-3.5 py-1.5 text-[10px] font-medium italic uppercase tracking-[0.16em] text-white sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]">
                THE SHIFT
              </p>

              <h2 className="mt-5 text-balance text-xl font-normal leading-[1.25] tracking-tight text-[#2c2c2c] sm:mt-6 sm:text-2xl sm:leading-[1.2] lg:text-[1.65rem] lg:leading-[1.18] xl:text-3xl">
                <span className="font-bold">The world</span> is moving
                <br />
                from linear supply chains
                <br />
                <span className={home.accent}>to sovereign material</span>
                <br />
                <span className={home.accent}>infrastructure.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-3.5 md:gap-4 [&>article]:w-full">
              {shiftFactorCards.map((card) => (
                <ShiftFactorCard key={card.title} {...card} />
              ))}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-md md:mx-0 md:max-w-none md:gap-3.5 lg:gap-4">
            <Image
              src="/info-shift.png"
              alt="Shift from linear supply chains to sovereign material infrastructure"
              width={720}
              height={720}
              className="h-auto w-full"
              sizes="(max-width: 768px) 88vw, (max-width: 1024px) 42vw, 360px"
            />
            <Image
              src="/info-shift2.png"
              alt="Linear model versus sovereign material infrastructure"
              width={720}
              height={480}
              className="h-auto w-full"
              sizes="(max-width: 768px) 88vw, (max-width: 1024px) 42vw, 360px"
            />
            <ShiftQuoteBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
