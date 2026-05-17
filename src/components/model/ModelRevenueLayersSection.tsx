import Image from 'next/image';
import { home } from '@/lib/homePageStyle';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';

const layers = [
  {
    num: '1',
    eyebrow: 'Layer 01',
    title: 'Material (CAPEX)',
    image: '/pillar-material.png',
    imageAlt: 'Advanced yarn and fiber materials',
    description:
      'Revenue from advanced yarn and fiber sales, fabric and component sales, and custom formulations. This serves as the tangible entry point for procurement and innovation.',
  },
  {
    num: '2',
    eyebrow: 'Layer 02',
    title: 'System License (OPEX)',
    image: '/shift-icon-compliance.png',
    imageAlt: 'Digital product passport and compliance infrastructure',
    iconStyle: true,
    description:
      'Digital infrastructure for compliance, Digital Product Passports (DPP), and ESG reporting. This acts as the compliance engine for the Material Operating System.',
  },
  {
    num: '3',
    eyebrow: 'Layer 03',
    title: 'Lifecycle Recovery (EPR Shield)',
    image: '/pillar-lifecycle.png',
    imageAlt: 'Circular lifecycle recovery and regeneration',
    description:
      'Revenue from take-back programs, recycling services, and material regeneration. This layer removes future regulatory and reputational costs by acting as an EPR cost shield.',
  },
  {
    num: '4',
    eyebrow: 'Layer 04',
    title: 'Data Intelligence (Emerging)',
    image: '/pillar-data.png',
    imageAlt: 'Data intelligence and predictive analytics',
    description:
      'High-margin data products, predictive analytics, and lifecycle optimization insights. Revenue in this layer scales with system usage rather than material volume.',
  },
] as const;

function RevenueLayerCard({
  num,
  eyebrow,
  title,
  image,
  imageAlt,
  description,
  iconStyle = false,
}: (typeof layers)[number] & { iconStyle?: boolean }) {
  return (
    <article
      className={`overflow-hidden transition-shadow duration-300 hover:shadow-md ${home.cardLight}`}
    >
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:gap-6 sm:p-6 lg:p-7">
        <div className="relative mx-auto h-28 w-full max-w-[12rem] shrink-0 overflow-hidden rounded-xl bg-[#faf8f5] ring-1 ring-[#C8A882]/20 sm:mx-0 sm:h-32 sm:w-36 lg:h-36 lg:w-40">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={
              iconStyle ? 'object-contain p-4' : 'object-cover object-center'
            }
            sizes="(max-width: 640px) 80vw, 160px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/12 ring-1 ring-[#C8A882]/25 sm:h-10 sm:w-10">
              <span className="text-sm font-bold text-[#8f7350]">{num}</span>
            </div>
            <div className="min-w-0">
              <p className={home.cardEyebrowLight}>{eyebrow}</p>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-[#2c2c2c] sm:text-lg">
                {title}
              </h3>
            </div>
          </div>

          <div className={`mt-4 w-10 sm:mt-5 ${home.ruleBar}`} aria-hidden />
          <p className={`mt-4 sm:mt-5 ${home.body}`}>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function ModelRevenueLayersSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <ModelSectionIntro
          index="01 — Revenue architecture"
          title={
            <>
              Four Revenue Layers: <span className={home.accentGold}>One Integrated System</span>
            </>
          }
          lead="RE:WEAVE™ monetizes physical materials, digital infrastructure, lifecycle recovery, and data intelligence."
        />

        <div className="space-y-6 sm:space-y-7">
          {layers.map((layer) => (
            <RevenueLayerCard key={layer.num} {...layer} />
          ))}
        </div>
      </div>
    </section>
  );
}
