import Image from 'next/image';
import type { ComponentType, ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';

type ValueCard = {
  eyebrow: string;
  title: string;
  image?: string;
  imageAlt?: string;
  Icon?: ComponentType<{ className?: string }>;
  body: ReactNode;
};

function MoneyBagIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2.5c-3 1.7-5.5 3.2-5.5 6.2 0 1.5.7 2.8 1.8 3.8V19a1.25 1.25 0 0 0 1.25 1.25h5.1A1.25 1.25 0 0 0 15.7 19v-6.5c1.1-1 1.8-2.3 1.8-3.8 0-3-2.5-4.5-5.5-6.2Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 12.25h6.5M12 9.25v6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="16.25"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        $
      </text>
    </svg>
  );
}

const valueCards: ValueCard[] = [
  {
    eyebrow: 'Sovereignty',
    title: 'Sovereign Control',
    image: '/shift-icon-sovereignty.png',
    imageAlt: 'Strategic sovereignty and control',
    body: 'Partners gain control over critical materials, data, and infrastructure.',
  },
  {
    eyebrow: 'Compliance',
    title: 'Regulatory Ready',
    image: '/shift-icon-compliance.png',
    imageAlt: 'Regulatory compliance and DPP readiness',
    body: 'Built for total compliance with EU regulations like ESPR, DPP, and EPR.',
  },
  {
    eyebrow: 'Risk exposure',
    title: 'The Cost of Inaction',
    Icon: MoneyBagIcon,
    body: (
      <>
        Our model mitigates non-compliance risk, with fines reaching up to{' '}
        <strong className="font-semibold text-[#8f7350]">10% of annual turnover</strong>.
      </>
    ),
  },
  {
    eyebrow: 'Resilience',
    title: 'Risk Removal',
    image: '/future-icon-circular.png',
    imageAlt: 'Circular resilience and long-term risk reduction',
    body: 'The integrated system lowers long-term operational costs and reduces strategic vulnerability.',
  },
];

const cardShell =
  'group flex h-full flex-col overflow-hidden rounded-xl border border-[#e6dfd4] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#C8A882]/40 hover:shadow-[0_12px_32px_-10px_rgba(44,44,44,0.14)] sm:p-6';

function ValueCard({ eyebrow, title, image, imageAlt, Icon, body }: ValueCard) {
  return (
    <article className={cardShell}>
      <p className={home.cardEyebrowLight}>{eyebrow}</p>

      <div className="relative mx-auto mt-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-xl bg-[#faf8f5] ring-1 ring-[#C8A882]/25 sm:mt-5">
        {Icon ? (
          <Icon className="h-9 w-9 text-[#C8A882]" />
        ) : image ? (
          <Image src={image} alt={imageAlt ?? ''} fill className="object-contain p-2.5" sizes="80px" />
        ) : null}
      </div>

      <h3 className="mt-4 text-center text-base font-semibold leading-snug text-[#2c2c2c] sm:mt-5">
        {title}
      </h3>
      <div className={`mx-auto mt-3 w-10 ${home.ruleBar}`} aria-hidden />

      <p className={`mt-3 flex-1 text-center ${home.body}`}>{body}</p>
    </article>
  );
}

export default function ModelValueRoiSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-[#f5f2ed] ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <ModelSectionIntro
          index="03 — Strategic return"
          title={
            <>
              Value Creation & <span className={home.accentGold}>Strategic ROI</span>
            </>
          }
          lead="Sovereign infrastructure creates recurring value across the entire material lifecycle."
        />

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-6">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
