import { home } from '@/lib/homePageStyle';

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
    <section className={`bg-white ${home.section}`}>
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

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
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
