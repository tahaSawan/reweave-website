import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';
import SystemPillarImages from '@/components/SystemPillarImages';

type Pillar = {
  num: string;
  label: string;
  title: string;
  points: ReactNode;
  images: string[];
  imageAlt: string;
};

const pillars: Pillar[] = [
  {
    num: '1',
    label: 'Pillar 1',
    title: 'Hybrid Textiles (Sense-Tex™)',
    imageAlt: 'Hybrid textiles and Sense-Tex material systems',
    images: ['/system-pillars/pillar-1.jpg'],
    points: (
      <>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Intelligent Material:</strong> A new generation of textiles
          engineered with functional yarns (silver, zinc) and advanced PFAS-free coatings.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Dual-Spinning Architecture:</strong> A patented process that
          fuses an intelligent core with a bio-based binder and a planetary-grade surface (Regolith or
          Basalt).
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Embedded Sensing:</strong> Integrated fiber batteries and
          thread-thin sensor networks for real-time health monitoring of humans and infrastructure
          (biometrics, strain, temperature).
        </p>
      </>
    ),
  },
  {
    num: '2',
    label: 'Pillar 2',
    title: 'AI Soil Transformation',
    imageAlt: 'AI soil transformation and biological intelligence',
    images: ['/system-pillars/pillar-2.jpg'],
    points: (
      <>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Biological Intelligence:</strong> An AI-driven system that
          transforms inert regolith or degraded soil into a living, self-evolving ecosystem.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Autonomous Life-Support:</strong> Uses reinforcement learning
          and microbial activation to sustain food, fiber (biomass for textiles), and energy loops.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Edge AI Network:</strong> Distributed micro-nodes operating at{' '}
          {'<'}10W to manage the biosphere without cloud dependency.
        </p>
      </>
    ),
  },
  {
    num: '3',
    label: 'Pillar 3',
    title: 'Modular Systems & Energy',
    imageAlt: 'Modular systems and energy harvesting infrastructure',
    images: ['/system-pillars/pillar-3.jpg'],
    points: (
      <>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Resource Autonomy:</strong> Modular units (Keratin Bioreactors)
          that convert local waste—human hair, textile scraps, and food waste—into high-performance
          biopolymers.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Energy Harvesting:</strong> Integrated wave and vibrational
          energy units paired with food-waste bio-batteries to power the ecosystem.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Dual-Use Impact:</strong> Designed for microgravity operation
          (Space) and rapid-deployment mobile recycling platforms (Earth).
        </p>
      </>
    ),
  },
  {
    num: '4',
    label: 'Pillar 4',
    title: 'Circular Robotics (ARC)',
    imageAlt: 'Circular robotics and autonomous recycling cluster',
    images: ['/system-pillars/pillar-4.jpg'],
    points: (
      <>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Autonomous Recycling Cluster (ARC):</strong> A modular,
          AI-assisted robotic system designed to recover, separate, and regenerate hybrid textiles with no
          human dependency.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Technical Evidence:</strong> Achieves {'>'}85% material
          recovery and &ge;90% fiber purity, ensuring high-quality feedstock for new material cycles.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Loop Closure:</strong> Repacks recovered fibers into cartridges
          for immediate reuse in manufacturing, turning circularity into a physical reality.
        </p>
      </>
    ),
  },
  {
    num: '5',
    label: 'Pillar 5',
    title: 'Infrastructure OS (Data & Compliance)',
    imageAlt: 'Infrastructure operating system, data and compliance layer',
    images: ['/system-pillars/pillar-5.jpg', '/system-pillars/pillar-6.jpg'],
    points: (
      <>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Material Operating System:</strong> An AI-orchestrated
          intelligence layer that continuously learns from and manages material flows.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">Compliance by Design:</strong> Automates the Digital Product
          Passport (DPP) and ESG reporting to meet mandatory 2027 regulatory demands.
        </p>
        <p className="text-sm leading-relaxed text-[#4a443c]">
          <strong className="text-[#2c2c2c]">System Integration:</strong> Acts as the &quot;decision
          layer&quot; that balances resources (materials, water, energy) and optimizes autonomous operations
          in remote environments.
        </p>
      </>
    ),
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  const centerText = pillar.num === '5';

  return (
    <article
      className={`group overflow-hidden transition-shadow duration-300 hover:shadow-md ${home.cardLight} !rounded-xl !p-0`}
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-stretch">
        <div
          className={`p-6 sm:p-7 ${centerText ? 'lg:flex lg:flex-col lg:justify-center' : ''}`}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C8A882]/12 ring-1 ring-[#C8A882]/25">
              <span className="text-sm font-bold text-[#8f7350]">{pillar.num}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C8A882] sm:text-[11px]">
                {pillar.label}
              </p>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-[#2c2c2c] sm:text-lg">
                {pillar.title}
              </h3>
            </div>
          </div>

          <div className={`mt-5 w-10 ${home.ruleBar}`} aria-hidden />
          <div className="mt-5 space-y-3.5">{pillar.points}</div>
        </div>

        <SystemPillarImages images={pillar.images} alt={pillar.imageAlt} />
      </div>
    </article>
  );
}

export default function SystemPillarsSection() {
  return (
    <section className={`bg-[#f5f2ed] ${home.section}`}>
      <div className={`${home.container} max-w-7xl`}>
        <div className="mb-10 text-center sm:mb-12">
          <h2 className={home.h2}>
            The 5 Pillars of <span className={home.accentGold}>RE:WEAVE™</span>
          </h2>
          <div className={`mx-auto mt-4 w-14 ${home.ruleBar}`} />
        </div>

        <div className="space-y-7 sm:space-y-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.num} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
