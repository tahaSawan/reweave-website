import Image from 'next/image';
import { home } from '@/lib/homePageStyle';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';

const overheadLabels = [
  {
    num: '1',
    title: 'Start with Your System',
    subtitle: 'Existing Materials, Products or waste Streams',
  },
  {
    num: '2',
    title: 'Choose Your Entry Point',
    subtitle: 'Select a point of entry or combine for a full system',
  },
  {
    num: '3',
    title: 'Continuous Circular Flow',
    subtitle: 'Recovery → Transformation → Reintegration',
  },
] as const;

const flowSteps = [
  {
    title: 'Start with Your System',
    subtitle: 'Existing Materials, Products or waste Streams',
    icon: '/model-how-to-use/icon-system.png',
    iconAlt: 'Start with your existing system',
  },
  {
    title: 'Choose Your Entry Point',
    subtitle: 'Select a point of entry or combine for a full system',
    icon: '/model-how-to-use/icon-entry.png',
    iconAlt: 'Choose your entry point',
  },
  {
    title: 'System Integration',
    subtitle: 'Connect Materials, Recovery and Processing',
    icon: '/model-how-to-use/icon-integration.png',
    iconAlt: 'System integration',
  },
  {
    title: 'Continuous Circular Flow',
    subtitle: 'Recovery → Transformation → Reintegration',
    icon: '/model-how-to-use/icon-circular.png',
    iconAlt: 'Continuous circular flow',
  },
] as const;

function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" fill="none" className={className} aria-hidden>
      <path
        d="M1 8h18m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowConnector() {
  return (
    <div className="relative mx-auto mt-2 hidden h-12 w-full max-w-4xl lg:block" aria-hidden>
      <svg viewBox="0 0 960 48" className="h-full w-full" preserveAspectRatio="none">
        <line x1="120" y1="0" x2="120" y2="18" stroke="#3d3832" strokeWidth="1" />
        <line x1="360" y1="0" x2="360" y2="18" stroke="#3d3832" strokeWidth="1" />
        <line x1="600" y1="0" x2="600" y2="18" stroke="#3d3832" strokeWidth="1" />
        <line x1="840" y1="0" x2="840" y2="18" stroke="#3d3832" strokeWidth="1" />
        <line x1="120" y1="18" x2="840" y2="18" stroke="#3d3832" strokeWidth="1" />
        <line x1="480" y1="18" x2="480" y2="48" stroke="#3d3832" strokeWidth="1" />
      </svg>
    </div>
  );
}

function OverheadLabel({
  num,
  title,
  subtitle,
}: {
  num: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <p className={`${home.cardEyebrowLight} tracking-[0.08em]`}>
        <span>{num}. </span>
        {title}
      </p>
      <p className={`mx-auto mt-2 max-w-[15rem] px-1 ${home.bodyMuted}`}>{subtitle}</p>
    </div>
  );
}

function FlowCard({
  title,
  subtitle,
  icon,
  iconAlt,
}: {
  title: string;
  subtitle: string;
  icon: string;
  iconAlt: string;
}) {
  return (
    <article className="flex h-full min-h-[11.5rem] flex-col bg-[#f3ede6] px-4 py-6 text-center sm:px-5 sm:py-7">
      <div className="relative mx-auto h-14 w-14 shrink-0 rounded-full bg-[#faf8f5] p-2 ring-1 ring-[#C8A882]/20 sm:h-16 sm:w-16 sm:p-2.5">
        <Image src={icon} alt={iconAlt} fill className="object-contain p-1" sizes="64px" />
      </div>
      <h3 className={`mt-4 ${home.h3}`}>{title}</h3>
      <p className={`mx-auto mt-2 max-w-[12.5rem] flex-1 ${home.body}`}>{subtitle}</p>
    </article>
  );
}

export default function ModelHowToUseSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <ModelSectionIntro index="05 — Implementation guide" title="How to Use Re:Weave" />

        <div className="mx-auto mt-2 max-w-4xl sm:mt-4">
          {/* Desktop: three overhead zones above four cards */}
          <div className="mb-6 hidden lg:grid lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            <OverheadLabel {...overheadLabels[0]} />
            <OverheadLabel {...overheadLabels[1]} />
            <OverheadLabel {...overheadLabels[2]} />
          </div>

          {/* Desktop: four cards + arrows */}
          <div className="hidden items-stretch gap-2 lg:flex">
            {flowSteps.map((step, i) => (
              <div key={step.title} className="flex min-w-0 flex-1 items-stretch">
                <div className="min-w-0 flex-1">
                  <FlowCard {...step} />
                </div>
                {i < flowSteps.length - 1 ? (
                  <div className="flex w-7 shrink-0 items-center justify-center self-center text-[#3d3832]">
                    <FlowArrow className="h-3 w-5" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Mobile / tablet */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {flowSteps.map((step) => (
              <FlowCard key={step.title} {...step} />
            ))}
          </div>

          <FlowConnector />

          {/* Detail panel */}
          <div className="mt-6 overflow-hidden rounded-[2rem] bg-[#f0ebe3] px-6 py-10 sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,13.5rem)_1fr] lg:items-center lg:gap-10 lg:px-12 lg:py-14 xl:gap-14">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative h-32 w-32 sm:h-36 sm:w-36">
                <Image
                  src="/model-how-to-use/swirl-logo.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
              <p className={`mt-5 ${home.h3} text-[#5c5348]`}>
                <span className="block">Re:Weave</span>
                <span className="mt-1 block font-semibold">Circular Infrastructure</span>
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className={home.h2}>How to Use Re:Weave</h3>
              <div className={`mt-5 space-y-4 ${home.body}`}>
                <p>
                  Re:Weave is designed to be implemented in different ways depending on the level of
                  integration required.
                </p>
                <p>
                  It can be deployed as a full circular system, where all four pillars operate together
                  to create a closed-loop infrastructure for materials, energy, and biological processes.
                  This approach is relevant for new facilities, advanced environments, and long-term
                  system design where circularity is built in from the beginning. At the same time, each
                  pillar can be used independently.
                </p>
                <p>
                  Hybrid material systems such as Sense-Tex can be licensed and integrated into existing
                  product lines, enabling circular-ready materials without requiring immediate
                  infrastructure change. AI soil transformation units can be deployed to support
                  regenerative systems and biomass production in controlled environments. Modular
                  processing systems, including bioreactors and recovery units, can be integrated into
                  existing factories to improve material recovery and reduce waste. Circular robotics
                  and AI control systems can be introduced to automate sorting, processing, and system
                  optimization.
                </p>
                <p>
                  This modular approach allows companies to transition gradually, starting with specific
                  material streams or system components and expanding over time. Re:Weave therefore
                  functions both as a complete infrastructure system and as a set of interoperable
                  technologies that can be adopted step by step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
