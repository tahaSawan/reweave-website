import Image from 'next/image';
import type { ReactNode } from 'react';

const revenueColumns = [
  {
    num: 1,
    title: 'REGULATIONS ARE TIGHTENING',
    image: '/revenue-4threads.png',
    alt: 'Industrial thread spools',
    stat: '100+',
    description: 'EPR policies active or in development worldwide by 2030',
  },
  {
    num: 2,
    title: 'COSTS ARE RISING',
    image: '/revenue-laptop.png',
    alt: 'Laptop with data visualizations',
    stat: '+30-70%',
    description: 'EPR policies active or in development worldwide by 2030',
  },
  {
    num: 3,
    title: 'RESOURCES ARE CONSTRAINED',
    image: '/revenue-dummy.png',
    alt: 'Raw textile fibers',
    stat: '<1%',
    description: 'of textile materials are recycled back into new textiles³',
  },
  {
    num: 4,
    title: 'STAKEHOLDERS EXPECT MORE',
    image: '/revenue-people.png',
    alt: 'Business professionals walking forward',
    stat: '76%',
    description: 'of brands cite sustainability as a key driver of future growth⁴',
  },
] as const;

const roadmapStages = [
  {
    num: 1,
    title: 'REGULATIONS ARE TIGHTENING',
    icon: '/yellow-logo.png',
    alt: 'RE:WEAVE',
    items: [
      'Build core infrastructure',
      'Deploy material passports',
      'Establish data & compliance layer',
      'Early recovery and circular integrations',
    ],
  },
  {
    num: 2,
    title: 'COSTS ARE RISING',
    icon: '/future-icon-growth.png',
    alt: 'System intelligence',
    items: [
      'Expand system connectivity',
      'Integrate AI + data intelligence',
      'Scale circular recovery & reuse',
      'Strengthen supply chain traceability',
    ],
  },
  {
    num: 3,
    title: 'RESOURCES ARE CONSTRAINED',
    icon: '/future-icon-globe.png',
    alt: 'Global network',
    items: [
      'Global network deployment',
      'Advanced robotics & automation',
      'New material innovation and partnerships',
      'Market and sector expansion',
    ],
  },
  {
    num: 4,
    title: 'STAKEHOLDERS EXPECT MORE',
    icon: '/future-icon-shield.png',
    alt: 'Sovereign infrastructure',
    items: [
      'Fully autonomous infrastructure',
      'Regenerative impact at scale',
      'Resilient, adaptive and future proof',
      'Sovereign infrastructure as standard',
    ],
  },
] as const;

/** Fixed row heights so headers, images, and stats align across all four columns. */
const REVENUE_HEADER_HEIGHT = 'h-[3.25rem] sm:h-[3.5rem]';
const REVENUE_IMAGE_BOX =
  'relative mt-3 h-[7.25rem] min-h-[7.25rem] max-h-[7.25rem] w-full shrink-0 overflow-hidden rounded-md bg-[#ebe6dc] sm:mt-3 sm:h-[8.25rem] sm:min-h-[8.25rem] sm:max-h-[8.25rem]';
const REVENUE_STAT_HEIGHT = 'mt-3 flex h-8 shrink-0 items-end sm:mt-3.5';

function LayerNumber({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold leading-none ${
        dark ? 'bg-white text-[#2c2c2c]' : 'bg-[#2c2c2c] text-white'
      }`}
    >
      {n}
    </span>
  );
}

function ColumnHeader({ num, title, dark = false }: { num: number; title: string; dark?: boolean }) {
  return (
    <div className={`flex shrink-0 items-start gap-2 overflow-hidden ${REVENUE_HEADER_HEIGHT}`}>
      <LayerNumber n={num} dark={dark} />
      <p
        className={`min-w-0 text-[9px] font-bold uppercase leading-tight tracking-[0.04em] sm:text-[10px] ${
          dark ? 'text-white' : 'text-[#2c2c2c]'
        }`}
      >
        {title}
      </p>
    </div>
  );
}

function RevenueColumn({
  num,
  title,
  image,
  alt,
  stat,
  description,
  isSplit,
}: (typeof revenueColumns)[number] & { isSplit: boolean }) {
  return (
    <article
      className={`flex h-full min-h-0 flex-col px-3 pt-3.5 pb-3 sm:px-3.5 sm:pt-4 sm:pb-3.5 ${isSplit ? 'bg-white' : 'bg-white/40'}`}
    >
      <ColumnHeader num={num} title={title} />
      <div className={REVENUE_IMAGE_BOX}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes={isSplit ? '(max-width: 1280px) 22vw, 18vw' : '(max-width: 1024px) 50vw, 24vw'}
        />
      </div>
      <p
        className={`${REVENUE_STAT_HEIGHT} text-xl font-bold tabular-nums leading-none text-[#2c2c2c] sm:text-2xl`}
      >
        {stat}
      </p>
      <p className="mt-2 min-h-[2.5rem] flex-1 text-[10px] leading-snug text-[#4a443c] sm:text-[11px] sm:leading-relaxed">
        {description}
      </p>
    </article>
  );
}

function ChevronPanel({
  children,
  isFirst,
  isLast,
}: {
  children: ReactNode;
  isFirst: boolean;
  isLast: boolean;
}) {
  const clipPath = isFirst
    ? 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)'
    : isLast
      ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 14px 50%)'
      : 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)';

  return (
    <div
      className={`relative flex min-h-[12.5rem] min-w-0 flex-1 flex-col bg-[#2c2c2c] px-3 py-4 sm:min-h-0 sm:px-3.5 sm:py-4 lg:min-h-[13.75rem] ${!isFirst ? '-ml-2 sm:-ml-2.5' : ''}`}
      style={{ clipPath }}
    >
      {children}
    </div>
  );
}

type FourRevenueLayersSectionProps = {
  variant?: 'default' | 'split';
};

export default function FourRevenueLayersSection({ variant = 'default' }: FourRevenueLayersSectionProps) {
  const isSplit = variant === 'split';

  const content = (
    <div className={`relative min-w-0 ${isSplit ? 'flex h-full min-h-0 flex-col' : ''}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'url(/revenue-world-map.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />

      <div className={`relative flex min-h-0 flex-col ${isSplit ? 'h-full' : 'px-4 py-8 sm:px-5 sm:py-10 lg:px-6 lg:py-12'}`}>
        <div className={isSplit ? 'shrink-0' : ''}>
          <h2 className="text-center text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-[#2c2c2c] sm:text-xs lg:text-[13px]">
            FOUR REVENUE LAYERS. ONE INTEGRATED SYSTEM.
          </h2>
          <div className="mx-auto mt-2 h-px w-full bg-[#d4cdc3]" aria-hidden />
        </div>

        <div className={`flex min-h-0 flex-col ${isSplit ? 'mt-4 flex-1 sm:mt-5' : 'mt-5 sm:mt-6'}`}>
        {/* Top row — four equal columns, uniform image boxes */}
        <div className={`min-h-0 overflow-hidden rounded-lg border border-[#d4cdc3] bg-white ${isSplit ? 'flex-1' : 'bg-white/50'}`}>
          <div
            className={`grid h-full items-stretch divide-[#d4cdc3] ${
              isSplit
                ? 'grid-cols-4 divide-x'
                : 'grid-cols-2 divide-x divide-y lg:grid-cols-4 lg:divide-y-0'
            }`}
          >
            {revenueColumns.map((column) => (
              <RevenueColumn key={column.num} {...column} isSplit={isSplit} />
            ))}
          </div>
        </div>

        {/* Bottom row — chevron roadmap aligned to columns above */}
        <div className={`shrink-0 overflow-hidden rounded-xl ${isSplit ? 'mt-3 sm:mt-4' : 'mt-4 sm:mt-5'}`}>
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {roadmapStages.map(({ num, title, icon, alt, items }, index) => (
              <ChevronPanel
                key={num}
                isFirst={index === 0}
                isLast={index === roadmapStages.length - 1}
              >
                <ColumnHeader num={num} title={title} dark />
                <div className="mt-3 flex shrink-0 justify-center">
                  <Image
                    src={icon}
                    alt={alt}
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain brightness-0 invert"
                  />
                </div>
                <ol className="mt-3 flex-1 space-y-1.5">
                  {items.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-1.5 text-[9px] leading-snug text-white/90 sm:text-[10px]"
                    >
                      <span className="shrink-0 font-semibold tabular-nums text-white/70">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </ChevronPanel>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );

  if (isSplit) {
    return <div className="flex h-full min-h-0 w-full flex-col">{content}</div>;
  }

  return (
    <section className="border-t border-[#ebe6dc] bg-[#f5f1ea]">
      <div className="mx-auto w-full max-w-6xl">{content}</div>
    </section>
  );
}
