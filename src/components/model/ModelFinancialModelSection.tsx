import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const revenueStreams = [
  {
    label: 'Material Sales',
    image: '/model-financial-model/material-sales.png',
    alt: 'Material sales and Sense-Tex supply',
  },
  {
    label: 'System Licensing',
    image: '/model-financial-model/system-licensing.png',
    alt: 'System licensing and digital compliance',
  },
  {
    label: 'Lifecycle Recovery',
    image: '/model-financial-model/lifecycle-recovery.png',
    alt: 'Lifecycle recovery and circular flows',
  },
  {
    label: 'Data Intelligence',
    image: '/model-financial-model/data-intelligence.png',
    alt: 'Data intelligence and performance reporting',
  },
] as const;

const industryFocus = [
  {
    title: 'Space / Defense',
    subtitle: 'License + data heavy',
    icon: '/future-icon-shield.png',
    alt: 'Space and defense',
  },
  {
    title: 'Healthcare',
    subtitle: 'Lifecycle + compliance heavy',
    icon: '/pillar-lifecycle.png',
    alt: 'Healthcare',
  },
  {
    title: 'Smart Cities',
    subtitle: 'Infrastructure + data heavy',
    icon: '/future-icon-globe.png',
    alt: 'Smart cities',
  },
  {
    title: 'Fashion',
    subtitle: 'Material entry → DPP expansion',
    icon: '/pillar-material.png',
    alt: 'Fashion',
  },
] as const;

function RevenueStreamCard({
  label,
  image,
  alt,
}: {
  label: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-[#1e1b18] shadow-[0_6px_20px_-6px_rgba(0,0,0,0.3)]">
      <div className="p-2 pb-0 sm:p-2.5 sm:pb-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 42vw, 200px"
          />
        </div>
      </div>
      <p className="px-2 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:py-3 sm:text-[11px]">
        {label}
      </p>
    </article>
  );
}

function IndustrySegment({
  title,
  subtitle,
  icon,
  alt,
}: {
  title: string;
  subtitle: string;
  icon: string;
  alt: string;
}) {
  return (
    <div className="flex min-h-[6.75rem] flex-col items-center justify-center px-2.5 py-3.5 text-center sm:min-h-[7.25rem] sm:px-3">
      <div className="relative h-8 w-8 shrink-0 sm:h-9 sm:w-9">
        <Image
          src={icon}
          alt={alt}
          fill
          className="object-contain brightness-0 invert"
          sizes="36px"
        />
      </div>
      <p className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.05em] text-white sm:text-[11px]">
        {title}
      </p>
      <p className="mt-0.5 text-[9px] leading-snug text-white/75 sm:text-[10px]">{subtitle}</p>
    </div>
  );
}

export default function ModelFinancialModelSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#ebe6dc]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/model-financial-model/skyline-bg.png"
          alt=""
          fill
          className="object-cover object-[center_70%] sm:object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#f3ede6]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ea]/90 via-[#f3ede6]/82 to-[#e8e0d6]/88" />
      </div>

      <div className={`relative ${home.container} max-w-[72rem] py-10 sm:py-12 lg:py-14`}>
        <p className="mb-7 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#b5a48a] lg:mb-9">
          07 — The financial model
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:items-stretch lg:gap-9 xl:gap-11">
          {/* Left column — header top, grid + pill bottom */}
          <div className="flex flex-col lg:min-h-[30rem] lg:justify-between xl:min-h-[32rem]">
            <div>
              <p className={home.cardEyebrowLight}>The financial model</p>
              <h2 className={`mt-2.5 ${home.h2}`}>
                A five-year path to{' '}
                <span className={home.accentGold}>€50M revenue.</span>
              </h2>
              <p className={`mt-2.5 max-w-[22rem] ${home.bodyMuted}`}>
                Indicative scenario based on system architecture, supplier inputs and regulatory
                cost pressure.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {revenueStreams.map((stream) => (
                  <RevenueStreamCard key={stream.label} {...stream} />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3.5 rounded-full border border-[#e6dfd4]/90 bg-white px-4 py-3.5 shadow-sm sm:mt-5 sm:gap-4 sm:px-5 sm:py-4">
                <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                  <Image src="/yellow-logo.png" alt="" fill className="object-contain" sizes="44px" />
                </div>
                <p className={`min-w-0 flex-1 text-[13px] leading-snug text-[#4a443c] sm:text-sm`}>
                  Revenue grows as regulation turns circularity, traceability and recovery into
                  operational requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — chart card + industry bar */}
          <div className="flex min-w-0 flex-col gap-3 lg:min-h-[30rem] lg:gap-4 xl:min-h-[32rem]">
            <div className="flex min-h-[17rem] flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-8px_rgba(44,44,44,0.12)] sm:min-h-[19rem] sm:rounded-[1.35rem] lg:min-h-0">
              <div className="relative w-full flex-1 lg:min-h-[18rem] xl:min-h-[20rem]">
                <Image
                  src="/model-financial-model/revenue-forecast-chart-trimmed.png"
                  alt="5-year revenue forecast chart showing growth from €0.8M to €50M"
                  fill
                  className="object-contain object-center p-1.5 sm:p-2.5"
                  sizes="(max-width: 1024px) 92vw, 720px"
                  priority={false}
                />
              </div>
            </div>

            <div className="shrink-0 overflow-hidden rounded-xl bg-[#1e1b18] shadow-[0_10px_32px_-10px_rgba(0,0,0,0.4)] sm:rounded-2xl">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
                {industryFocus.map((item) => (
                  <IndustrySegment key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
