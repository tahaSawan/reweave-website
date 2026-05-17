import Image from 'next/image';
import { home } from '@/lib/homePageStyle';

const imperativeImages = [
  {
    src: '/thread-s.png',
    alt: 'Bundle of natural textile fibers',
  },
  {
    src: '/garbage.png',
    alt: 'Landfill with waste and machinery',
  },
  {
    src: '/chimney.png',
    alt: 'Industrial chimneys emitting smoke',
  },
  {
    src: '/dry-land.png',
    alt: 'Cracked dry earth with a lone tree',
  },
] as const;

const facts = [
  {
    label: 'The Cost of Inaction',
    body: (
      <>
        The linear textile model is no longer a financial option. Regulatory enforcement of{' '}
        <span className={home.factGold}>ESPR, DPP, and EPR</span> carries fines of up to{' '}
        <span className={home.factGoldBold}>10% of annual turnover.</span>
      </>
    ),
  },
  {
    label: 'The Resource Gap',
    body: (
      <>
        Currently, <span className={home.factGoldBold}>less than 1%</span> of textiles are recycled into new
        textiles, while <span className={home.factGoldBold}>over 85%</span> end up in landfills.
      </>
    ),
  },
  {
    label: 'Geopolitical Risk',
    body: (
      <>
        <span className={home.factGold}>Fragmented supply chains</span> and{' '}
        <span className={home.factGold}>global volatility</span> expose critical vulnerabilities in
        material access.
      </>
    ),
  },
] as const;

export default function ImperativeSection() {
  return (
    <section className={`bg-[#ebe6dc] ${home.section}`}>
      <div className={`relative z-10 ${home.container}`}>
        <div className="mx-auto max-w-4xl text-center">
          <p className={home.eyebrow}>The Imperative</p>
          <h2 className={`mt-3 ${home.h2}`}>
            The first autonomous infrastructure platform for Earth and Space.
          </h2>
          <p className={`mt-3 ${home.lead}`}>
            We achieve <span className={home.accent}>technological sovereignty</span> through{' '}
            <span className={home.accent}>closed-loop systems.</span>
          </p>
          <div className="mx-auto mt-6 h-px w-14 bg-[#b5a48a]/55" aria-hidden />
        </div>

        <div className="mx-auto mt-8 max-w-3xl md:mt-10 lg:max-w-4xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5 md:gap-3">
            {imperativeImages.map((image) => (
              <div
                key={image.src}
                className="relative h-24 overflow-hidden rounded-lg bg-[#ebe6dc] sm:h-28 sm:rounded-xl md:h-32"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, 220px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 md:grid-cols-3 md:gap-5">
          {facts.map((fact) => (
            <article
              key={fact.label}
              className={`flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#C8A882]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.18)] ${home.cardImperative}`}
            >
              <h3 className={home.imperativeCardTitle}>{fact.label}</h3>
              <p className={home.imperativeCardBody}>{fact.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
