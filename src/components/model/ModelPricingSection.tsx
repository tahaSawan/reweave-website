import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

type LineItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  price: string;
};

type PricingTier = {
  letter: string;
  badgeClass: string;
  titleClass: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  totalPrice: string;
  priceBarClass: string;
  lineItems: LineItem[];
  footer: string;
  footerClass: string;
};

const tiers: PricingTier[] = [
  {
    letter: 'A',
    badgeClass: 'bg-[#C8A882] text-[#1a1a1a]',
    titleClass: 'text-[#8f7350]',
    title: 'QUALITY A — HIGH PERFORMANCE',
    subtitle: 'High-spec. Critical. Mission-Driven.',
    image: '/sense-tex/quality-a.png',
    imageAlt: 'High-performance industrial textile production',
    totalPrice: '~109 €/kg',
    priceBarClass: 'bg-[#C8A882] text-white',
    lineItems: [
      {
        icon: '/pillar-material.png',
        iconAlt: 'Base material',
        title: '1. BASE MATERIAL (CAPEX)',
        description: 'High-performance yarn (silver, zinc). Entry point for procurement.',
        price: '~55 €',
      },
      {
        icon: '/shift-icon-compliance.png',
        iconAlt: 'System license',
        title: '2. SYSTEM LICENSE (OPEX)',
        description: 'DPP, traceability, ESG reporting. Compliance engine.',
        price: '~32 €',
      },
      {
        icon: '/pillar-lifecycle.png',
        iconAlt: 'Lifecycle recovery',
        title: '3. LIFECYCLE RECOVERY',
        description: 'Take-back, recycling, EPR protection. Regulatory cost shield.',
        price: '~22 €',
      },
    ],
    footer: 'BEST PERFORMANCE | HIGHEST PROTECTION',
    footerClass: 'bg-[#C8A882] text-[#1a1a1a]',
  },
  {
    letter: 'B',
    badgeClass: 'bg-[#2c2c2c] text-white',
    titleClass: 'text-[#8f7350]',
    title: 'QUALITY B — BALANCED',
    subtitle: 'Balanced Performance. Proven Value.',
    image: '/sense-tex/quality-b.png',
    imageAlt: 'Balanced performance data and systems',
    totalPrice: '~85 €/kg',
    priceBarClass: 'bg-[#2c2c2c] text-white',
    lineItems: [
      {
        icon: '/pillar-material.png',
        iconAlt: 'Base material',
        title: '1. BASE MATERIAL (CAPEX)',
        description: 'Competitive procurement price. Entry point for procurement.',
        price: '~40 €',
      },
      {
        icon: '/shift-icon-compliance.png',
        iconAlt: 'System license',
        title: '2. SYSTEM LICENSE (OPEX)',
        description: 'Digital Product Passport, ESG, traceability. Compliance + data layer.',
        price: '~25 €',
      },
      {
        icon: '/pillar-lifecycle.png',
        iconAlt: 'Lifecycle recovery',
        title: '3. LIFECYCLE RECOVERY',
        description: 'Circular handling, cost protection. Future cost shield.',
        price: '~20 €',
      },
    ],
    footer: 'OPTIMAL BALANCE | REFERENCE MODEL',
    footerClass: 'bg-[#2c2c2c] text-white',
  },
  {
    letter: 'C',
    badgeClass: 'bg-[#C8A882] text-[#1a1a1a]',
    titleClass: 'text-[#8f7350]',
    title: 'QUALITY C — SCALABLE',
    subtitle: 'Scalable. Efficient. Accessible.',
    image: '/sense-tex/quality-c.png',
    imageAlt: 'Scalable textile material',
    totalPrice: '~73 €/kg',
    priceBarClass: 'bg-[#b5a48a] text-white',
    lineItems: [
      {
        icon: '/pillar-material.png',
        iconAlt: 'Base material',
        title: '1. BASE MATERIAL (CAPEX)',
        description: 'Cost-efficient material for scaling. Low barrier to entry.',
        price: '~34 €',
      },
      {
        icon: '/shift-icon-compliance.png',
        iconAlt: 'System license',
        title: '2. SYSTEM LICENSE (OPEX)',
        description: 'Essential compliance + traceability. Core system access.',
        price: '~24 €',
      },
      {
        icon: '/pillar-lifecycle.png',
        iconAlt: 'Lifecycle recovery',
        title: '3. LIFECYCLE RECOVERY',
        description: 'Basic EPR coverage and recovery. Regulatory protection.',
        price: '~18 €',
      },
    ],
    footer: 'COST-EFFICIENT | RAPID SCALABILITY',
    footerClass: 'bg-[#C8A882] text-[#1a1a1a]',
  },
];

const bottomFeatures = [
  {
    icon: '/shift-icon-compliance.png',
    alt: 'Regulatory ready',
    title: 'REGULATORY READY',
    subtitle: 'DPP · ESPR · EPR',
  },
  {
    icon: '/future-icon-circular.png',
    alt: 'Circular by design',
    title: 'CIRCULAR BY DESIGN',
    subtitle: 'Recover · Recycle · Reuse',
  },
  {
    icon: '/future-icon-growth.png',
    alt: 'Data-driven compliance',
    title: 'DATA-DRIVEN COMPLIANCE',
    subtitle: 'DPP · ESG · Traceability',
  },
  {
    icon: '/future-icon-globe.png',
    alt: 'Future-proof infrastructure',
    title: 'FUTURE-PROOF INFRASTRUCTURE',
    subtitle: 'Sovereign · Secure · Scalable',
  },
] as const;

const flowSteps = [
  { icon: '/pillar-material.png', alt: 'Material', label: 'MATERIAL', sub: 'Entry Point (CAPEX)' },
  { icon: '/shift-icon-compliance.png', alt: 'License', label: 'LICENSE', sub: 'Compliance + Data (OPEX)' },
  { icon: '/pillar-lifecycle.png', alt: 'Lifecycle', label: 'LIFECYCLE', sub: 'Risk Removal (EPR Shield)' },
] as const;

function PricingTierCard({
  letter,
  badgeClass,
  titleClass,
  title,
  subtitle,
  image,
  imageAlt,
  totalPrice,
  priceBarClass,
  lineItems,
  footer,
  footerClass,
}: PricingTier) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#ddd4c8] bg-white shadow-[0_2px_16px_-6px_rgba(44,44,44,0.12)] transition-shadow duration-300 hover:shadow-[0_8px_28px_-8px_rgba(44,44,44,0.16)]">
      <div className="flex h-[6.25rem] shrink-0 items-center border-b border-[#ebe6dc] bg-[#faf8f5]/60 px-4 sm:px-5">
        <div className="flex w-full items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-11 sm:w-11 ${badgeClass}`}
          >
            {letter}
          </span>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h3
              className={`line-clamp-2 min-h-[2.5rem] text-[10px] font-bold uppercase leading-snug tracking-[0.07em] sm:text-[11px] ${titleClass}`}
            >
              {title}
            </h3>
            <p className="mt-1 line-clamp-1 text-[10px] leading-snug text-[#6b6358] sm:text-[11px]">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="relative h-36 w-full shrink-0 overflow-hidden">
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" sizes="33vw" />
      </div>

      <div
        className={`flex h-[4.5rem] shrink-0 flex-col items-center justify-center px-4 ${priceBarClass}`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-90 sm:text-[11px]">
          Total Price
        </p>
        <p className="mt-0.5 text-xl font-bold tabular-nums tracking-tight sm:text-2xl">{totalPrice}</p>
      </div>

      <ul className="flex shrink-0 flex-col divide-y divide-[#ebe6dc] bg-white">
        {lineItems.map((item) => (
          <li
            key={item.title}
            className="flex h-[5.75rem] shrink-0 items-start gap-3 px-4 py-3.5 sm:px-5"
          >
            <div className="relative mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-[#faf8f5] ring-1 ring-[#C8A882]/25">
              <Image src={item.icon} alt={item.iconAlt} fill className="object-contain p-2" sizes="44px" />
            </div>
            <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center">
              <div className="flex items-start justify-between gap-2">
                <p className="min-h-[2rem] flex-1 text-[10px] font-bold uppercase leading-snug tracking-[0.05em] text-[#2c2c2c] sm:text-[11px]">
                  {item.title}
                </p>
                <p className="w-11 shrink-0 text-right text-sm font-bold tabular-nums text-[#8f7350]">
                  {item.price}
                </p>
              </div>
              <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-[#6b6358] sm:text-[11px]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className={`mt-auto flex h-12 shrink-0 items-center justify-center px-3 ${footerClass}`}>
        <p className="flex items-center justify-center gap-1.5 text-center text-[9px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-[10px]">
          <span className="shrink-0 opacity-80" aria-hidden>
            ★
          </span>
          <span>{footer}</span>
        </p>
      </div>
    </article>
  );
}

export default function ModelPricingSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#ebe6dc] bg-[#faf8f5] py-10 sm:py-12 lg:py-14">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: 'url(/earth-light.png), url(/sense-tex/thread-bg.png)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf8f5]/90 via-[#faf8f5]/96 to-[#faf8f5]"
        aria-hidden
      />

      <div className={`relative z-10 ${home.container} max-w-6xl`}>
        <header className="mb-10 border-b border-[#e6dfd4] pb-8 sm:mb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
              <p className="shrink-0 text-2xl font-bold tracking-tight text-[#2c2c2c] sm:text-[1.65rem]">
                Sense - Tex<sup className="ml-0.5 text-[10px] font-normal">™</sup>
              </p>
              <div className="hidden h-12 w-px shrink-0 bg-[#2c2c2c]/15 sm:block" aria-hidden />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C8A882] sm:text-[11px]">
                  Pillar 5
                </p>
                <h2 className="mt-1.5 text-base font-bold uppercase leading-snug tracking-[0.06em] text-[#8f7350] sm:text-lg">
                  3-Tier Pricing + Licensing Model
                </h2>
              </div>
            </div>
            <p className="shrink-0 text-left text-xs leading-relaxed text-[#4a443c] sm:text-[13px] lg:text-right">
              Material Innovation.
              <br />
              System Intelligence.
              <br />
              Lifecycle Protection.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {tiers.map((tier) => (
            <PricingTierCard key={tier.letter} {...tier} />
          ))}
        </div>

        <div className="mt-8 space-y-6 sm:mt-10">
          <div className="rounded-xl border border-[#e6dfd4] bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A882]/15 text-[#8f7350] ring-1 ring-[#C8A882]/30">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#2c2c2c] sm:text-[11px]">
                  Ultra Simple Material Model
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-10 w-10 overflow-hidden rounded-md bg-[#faf8f5] ring-1 ring-[#C8A882]/25">
                        <Image
                          src={step.icon}
                          alt={step.alt}
                          fill
                          className="object-contain p-1.5"
                          sizes="40px"
                        />
                      </div>
                      <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8f7350]">
                        {step.label}
                      </p>
                      <p className="text-[8px] text-[#6b6358]">{step.sub}</p>
                    </div>
                    {i < flowSteps.length - 1 ? (
                      <span className="text-[#C8A882]" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {bottomFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-lg border border-[#e6dfd4] bg-white/90 px-3 py-4 text-center shadow-sm"
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#2c2c2c] sm:text-[10px]">
                  {feature.title}
                </p>
                <p className="mt-1 text-[8px] text-[#6b6358] sm:text-[9px]">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-6">
            <div className="flex gap-4 rounded-xl bg-[#121212] p-5 text-white shadow-md sm:p-6">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/yellow-logo.png"
                  alt="RE:WEAVE"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8A882]">
                  The Model in One Line
                </p>
                <p className={`mt-2 ${home.imperativeCardBody}`}>
                  The material is the entry point, the license delivers compliance and traceability, and the
                  lifecycle layer removes future regulatory cost.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[#e6dfd4] bg-white/95 p-5 shadow-sm sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f7350]">
                Why This Model Works
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  'Transparent and scalable pricing',
                  'Aligns cost with value and risk reduction',
                  'Built for compliance, circularity and sovereignty',
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm text-[#4a443c]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8A882]/15 text-xs font-bold text-[#8f7350]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
