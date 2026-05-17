import { home } from '@/lib/homePageStyle';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';

const forecast = [
  {
    year: 'Year 1',
    value: '€0.8M',
    description: 'Pilot contracts, demonstrators, and system validation.',
  },
  {
    year: 'Year 2',
    value: '€2.9M',
    description: 'Technical validation and protective textiles deployment.',
  },
  {
    year: 'Year 3',
    value: '€9M',
    description: 'Expansion into Healthcare and Smart City circular infrastructure.',
  },
  {
    year: 'Year 4',
    value: '€23M',
    description: 'Global network deployment and advanced robotics integration.',
  },
  {
    year: 'Year 5',
    value: '€50M',
    description: 'Fully autonomous, sovereign infrastructure as a global standard.',
  },
] as const;

export default function ModelForecastSection() {
  return (
    <section className={`border-t border-[#ebe6dc] bg-white ${home.section}`}>
      <div className={`${home.container} max-w-5xl`}>
        <ModelSectionIntro
          index="06 — Financial outlook"
          title={
            <>
              5-Year <span className={home.accentGold}>Revenue Forecast</span>
            </>
          }
          lead="The financial model projects a compounding trajectory as regulation turns circularity into an operational requirement."
        />

        <div className="overflow-hidden rounded-xl border border-[#2c2c2c]/40 bg-[#121212] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {forecast.map((item, index) => (
              <article
                key={item.year}
                className={`text-center ${
                  index < forecast.length - 1
                    ? 'lg:border-r lg:border-white/10 lg:pr-4'
                    : ''
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C8A882] sm:text-[11px]">
                  {item.year}
                </p>
                <p className={`mt-2 ${home.statValueOnDark}`}>{item.value}</p>
                <p className={`mt-3 ${home.statLabelOnDark}`}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
