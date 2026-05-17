import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';

const crisisStats = [
  {
    value: '85%',
    label: 'Value Leakage',
    body: 'Over 85% of textiles end up in landfills or incineration annually.',
    featured: true,
  },
  {
    value: '<1%',
    label: 'Material Inefficiency',
    body: 'Less than 1% of textiles are recycled back into new textiles.',
  },
  {
    value: '10%',
    label: 'Environmental Impact',
    body: 'The sector is responsible for 10% of global CO₂ emissions.',
  },
  {
    value: '!',
    label: 'Strategic Vulnerability',
    body: 'Global dependencies create high volatility and a total lack of control over critical material access.',
  },
] as const;

export default function ShiftMarketContextSection() {
  return (
    <section className={`bg-[#ebe6dc] ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="1."
          title={
            <>
              The Market Context:{' '}
              <span className={home.accentGold}>A System in Crisis</span>
            </>
          }
          lead='The legacy textile industry operates on a "take-make-waste" trajectory that is failing both economically and strategically:'
        />

        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {crisisStats.map((stat) => (
            <article
              key={stat.label}
              className={`flex h-full flex-col transition-all duration-300 hover:border-[#C8A882]/40 hover:shadow-[0_16px_44px_rgba(0,0,0,0.2)] ${
                'featured' in stat && stat.featured
                  ? 'border-[#C8A882]/35 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-[#C8A882]/25'
                  : ''
              } ${home.ecoCardShellData}`}
            >
              <div className="flex h-12 shrink-0 items-end sm:h-14">
                <p
                  className={`leading-none tabular-nums ${home.statValueOnDark} text-2xl sm:text-3xl`}
                >
                  {stat.value}
                </p>
              </div>
              <h3
                className={`mt-4 min-h-[2.5rem] ${home.ecoCardTitleDark} sm:min-h-[2.75rem]`}
              >
                {stat.label}
              </h3>
              <p className={`mt-2 flex-1 ${home.ecoCardBodyDark}`}>{stat.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
