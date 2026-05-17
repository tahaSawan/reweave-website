import Image from 'next/image';
import { home } from '@/lib/homePageStyle';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';

const steps = [
  {
    num: '1',
    title: 'Enter',
    image: '/revenue-4threads.png',
    imageAlt: 'Sense-Tex material supply entry point',
    description:
      'Start with Sense-Tex™ material supply to meet immediate performance and compliance needs.',
  },
  {
    num: '2',
    title: 'Connect',
    image: '/passport.png',
    imageAlt: 'Digital product passport and traceability',
    description: 'Activate the System License for DPP, traceability, and ESG reporting.',
  },
  {
    num: '3',
    title: 'Close the Loop',
    image: '/recycle-book.png',
    imageAlt: 'Lifecycle recovery and circular flows',
    description:
      'Enable Lifecycle Recovery for EPR protection and circular material flows through the ARC, achieving 90% fiber purity.',
  },
  {
    num: '4',
    title: 'Scale',
    image: '/future-icon-globe.png',
    imageAlt: 'Global infrastructure scale',
    description:
      'Leverage the full RE:WEAVE™ infrastructure across multiple sectors and global markets, including our validated strategies in Gujarat & Telangana, India.',
  },
] as const;

export default function ModelScalabilitySection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-[#f5f2ed] ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <ModelSectionIntro
          index="07 — Deployment path"
          title={
            <>
              Scalability: <span className={home.accentGold}>Enter Simple. Scale Strategic.</span>
            </>
          }
          lead="The model is engineered for rapid global deployment by focusing on tangible, high-impact entry points."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.num}
              className={`flex h-full flex-col text-center transition-shadow duration-300 hover:shadow-md ${home.cardLight}`}
            >
              <div className="relative mx-auto h-24 w-full max-w-[10rem] overflow-hidden rounded-lg bg-[#faf8f5] ring-1 ring-[#C8A882]/20">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className={
                    step.image.includes('future-icon')
                      ? 'object-contain p-3'
                      : 'object-cover object-center'
                  }
                  sizes="160px"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8A882]/12 ring-1 ring-[#C8A882]/25">
                  <span className="text-sm font-bold text-[#8f7350]">{step.num}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#2c2c2c] sm:text-base">{step.title}</h3>
                <div className={`mx-auto mt-3 w-8 ${home.ruleBar}`} aria-hidden />
                <p className={`mt-3 flex-1 ${home.body}`}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
