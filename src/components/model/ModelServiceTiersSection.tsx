import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const investmentBullets = [
  {
    icon: '/model-service-tiers/icon-compliance.png',
    alt: 'Compliance',
    text: 'Compliance-by-design & regulatory alignment (EU, national, industry standards)',
  },
  {
    icon: '/model-service-tiers/icon-lifecycle.png',
    alt: 'Lifecycle',
    text: 'Lifecycle intelligence & circular recovery strategy',
  },
  {
    icon: '/model-service-tiers/icon-data.png',
    alt: 'Data',
    text: 'Data integration, dashboards & performance reporting',
  },
  {
    icon: '/model-service-tiers/icon-sovereign.png',
    alt: 'Sovereignty',
    text: 'Sovereign infrastructure & sovereign data handling',
  },
  {
    icon: '/model-service-tiers/icon-support.png',
    alt: 'Support',
    text: 'Expert support, training & strategic guidance',
  },
] as const;

const serviceTiers = [
  {
    kicker: 'Foundation',
    title: 'Build the Base',
    image: '/model-service-tiers/foundation.png',
    imageAlt: 'Foundation tier',
    price: '€25K',
    description: 'Establish compliance, assess risk and design your roadmap.',
  },
  {
    kicker: 'Integrate',
    title: 'Connect & Optimize',
    image: '/model-service-tiers/connect.png',
    imageAlt: 'Integrate tier',
    price: '€75K',
    description: 'Integrate systems, enable traceability and optimize operations.',
  },
  {
    kicker: 'Expand',
    title: 'Scale & Innovate',
    image: '/model-service-tiers/expand.png',
    imageAlt: 'Expand tier',
    price: '€150K',
    description: 'Scale capabilities, unlock new markets and drive circular performance.',
  },
  {
    kicker: 'Sovereign Partner',
    title: 'Transform & Lead',
    image: '/model-service-tiers/transfer.png',
    imageAlt: 'Sovereign partner tier',
    price: 'Custom',
    description:
      'Full-service partnership for sovereign infrastructure and long-term leadership.',
  },
] as const;

const footerSignals = [
  { Icon: RoiCoinsIcon, title: 'ROI Focus', body: 'Lower risk. Lower costs. Higher returns.' },
  {
    Icon: ScaleChartIcon,
    title: 'Scalable Engagements',
    body: 'Lower risk. Lower costs. Higher returns.',
  },
  {
    Icon: LongTermValueIcon,
    title: 'Long-Term Value',
    body: 'Sustainable infrastructure. Resilient advantage.',
  },
  {
    Icon: FlexibleGlobeIcon,
    title: 'Flexible Models',
    body: 'Project-based or retainer. Tailored to your needs.',
  },
] as const;

function RoiCoinsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <ellipse cx="8" cy="14" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="8" cy="11.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="14" cy="12.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 8.5a5 2 0 0 1 0 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ScaleChartIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 18V6M8 18V10M12 18V8M16 18V12M20 18V4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M17 6l3-2v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LongTermValueIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M12 11v3M11 14h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function FlexibleGlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4 12h16M12 4a12.5 12.5 0 0 1 0 16M12 4a12.5 12.5 0 0 0 0 16"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function TierCard({
  kicker,
  title,
  image,
  imageAlt,
  price,
  description,
  showDivider,
}: (typeof serviceTiers)[number] & { showDivider?: boolean }) {
  return (
    <article
      className={`flex h-full flex-col px-3 py-1 sm:px-4 ${showDivider ? 'border-r border-[#C8A882]/45' : ''}`}
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-md shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.08]">
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" sizes="240px" />
      </div>

      <div className="mt-3.5 flex flex-1 flex-col text-center">
        <p className="text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-[#8f7350]">
          {kicker}
        </p>
        <h4 className="mt-1 text-[13px] font-bold leading-snug text-[#2c2c2c]">{title}</h4>
        <p className="mt-3 text-[1.75rem] font-semibold leading-none tracking-tight text-[#C8A882] sm:text-[1.9rem]">
          {price}
        </p>
        {price !== 'Custom' ? (
          <p className="mt-1 text-[10px] text-[#6b6358]">per engagement / project</p>
        ) : (
          <p className="mt-1 h-[15px]" aria-hidden />
        )}
        <p className="mx-auto mt-3 max-w-[12rem] flex-1 text-[11px] leading-relaxed text-[#4a443c]">
          {description}
        </p>
      </div>
    </article>
  );
}

function InvestmentSidebar() {
  return (
    <aside className="relative z-10 flex h-full min-h-0 flex-col">
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.25rem] bg-white py-9 shadow-[0_20px_48px_-16px_rgba(0,0,0,0.18)] sm:py-10">
        <div className="shrink-0 px-7 sm:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#b08d57]">
            The investment
          </p>
          <div className="mt-2.5 h-px w-10 bg-[#b08d57]" aria-hidden />

          <h2 className="mt-5 text-[1.45rem] font-bold leading-[1.22] tracking-tight text-[#1a1a1a] sm:text-[1.55rem]">
            <span className="block">Transparent. Scalable.</span>
            <span className="mt-0.5 block text-[#b08d57]">Built for value.</span>
          </h2>

          <p className="mt-4 text-[0.8125rem] font-normal leading-[1.65] text-[#4a4a4a]">
            Re:Weave™ offers modular services designed for flexibility, clarity and long-term impact.
            Choose the level of engagement that fits your mission and scale with confidence.
          </p>

        </div>

        <div className="flex min-h-0 flex-1 flex-col px-7 pt-7 sm:px-8">
          <div className="relative -mx-3 min-h-[12rem] w-[calc(100%+1.5rem)] flex-1 overflow-hidden rounded-2xl sm:-mx-4 sm:w-[calc(100%+2rem)] [&_img]:h-full [&_img]:w-full [&_img]:scale-110 [&_img]:object-cover [&_span]:!block [&_span]:!h-full [&_span]:!w-full">
            <Image
              src="/model-service-tiers/big-thread.png"
              alt="Industrial textile manufacturing"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 92vw, 440px"
            />
          </div>
        </div>

        <ul className="mt-6 shrink-0 space-y-4 px-7 sm:px-8">
          {investmentBullets.map((item) => (
            <li key={item.text} className="flex items-center gap-3">
              <span className="relative h-8 w-8 shrink-0">
                <Image src={item.icon} alt={item.alt} fill className="object-contain" sizes="32px" />
              </span>
              <p className="flex-1 text-[12px] leading-snug text-[#1a1a1a]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function ModelServiceTiersSection() {
  return (
    <section className={`relative overflow-hidden border-t border-[#ebe6dc] ${home.section}`}>
      {/* Section backdrop — cityscape */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/model-service-tiers/cityscape-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.22]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#f3ede6]/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0ea]/95 via-[#f3ede6]/88 to-[#f0ebe3]/90" />
      </div>

      <div className={`relative ${home.container} max-w-[88rem]`}>
        <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#b5a48a]">
          04 — Engagement framework
        </p>

        <div className="lg:grid lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-stretch lg:gap-9 xl:grid-cols-[minmax(0,25rem)_1fr] xl:gap-11">
          <InvestmentSidebar />

          {/* Main panel */}
          <div className="relative mt-8 flex min-h-0 min-w-0 flex-col lg:mt-0 lg:h-full">
            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-[#faf8f5]/90 shadow-[0_16px_48px_-24px_rgba(44,44,44,0.2)] ring-1 ring-[#e6dfd4]/90 backdrop-blur-[2px]">
              <div className="px-5 pb-2 pt-7 sm:px-7 sm:pt-8">
                <header className="text-center">
                  <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#2c2c2c] sm:text-[0.95rem]">
                    Re:Weave Service Tiers
                  </h3>
                </header>

                {/* Desktop tiers */}
                <div className="mt-7 hidden grid-cols-4 lg:grid">
                  {serviceTiers.map((tier, i) => (
                    <TierCard key={tier.kicker} {...tier} showDivider={i < serviceTiers.length - 1} />
                  ))}
                </div>

                {/* Mobile tiers */}
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
                  {serviceTiers.map((tier) => (
                    <div
                      key={tier.kicker}
                      className="rounded-xl border border-[#e6dfd4] bg-white/95 p-2 shadow-sm"
                    >
                      <TierCard {...tier} />
                    </div>
                  ))}
                </div>

                {/* Feature table — Partner engage Table.png */}
                <div className="mt-5 overflow-hidden sm:mt-6">
                  <Image
                    src="/model-service-tiers/feature-table.png"
                    alt="Feature comparison across Foundation, Integrate, Expand, and Sovereign Partner service tiers"
                    width={1200}
                    height={480}
                    className="h-auto w-full"
                    sizes="(max-width: 1280px) 100vw, 900px"
                  />
                </div>
              </div>

              {/* Footer value bar */}
              <div className="mx-3 mb-3 mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[#1a1a1a] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] sm:mx-4 sm:mb-4 lg:grid-cols-4">
                {footerSignals.map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center gap-2 bg-[#2c2c2c] px-3 py-5 text-center sm:px-4 sm:py-6"
                  >
                    <span className="flex h-9 w-9 items-center justify-center text-[#C8A882]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#C8A882]">
                      {title}
                    </p>
                    <p className="max-w-[10.5rem] text-[10px] leading-relaxed text-white/78">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
