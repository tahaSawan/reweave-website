import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';

const regulations = [
  {
    code: 'ESPR',
    fullName: 'Ecodesign for Sustainable Products Regulation',
    body: 'Products must now be designed for durability, repairability, and resource efficiency.',
  },
  {
    code: 'DPP',
    fullName: 'Digital Product Passport',
    body: 'Mandatory digital traceability and lifecycle transparency will be enforced starting in 2027.',
  },
  {
    code: 'EPR',
    fullName: 'Extended Producer Responsibility',
    body: 'Producers are now financially and operationally accountable for the entire lifecycle of their products.',
  },
] as const;

const imperatives = [
  {
    title: 'Strategic Sovereignty',
    body: 'In a world of constrained resources, securing independent access to materials is a strategic imperative for nations and industries.',
  },
  {
    title: 'Rising Costs',
    body: 'Compliance and reporting costs are projected to increase by 30–70% by 2030.',
  },
  {
    title: 'Market Expectations',
    body: '76% of brands cite sustainability as a key driver for future growth and market access.',
  },
] as const;

function BuildingIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function TrendIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 18h16M6 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 19V5M10 19V11M15 19V8M20 19V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const imperativeIcons = [BuildingIcon, TrendIcon, ChartIcon] as const;

export default function ShiftUrgencySection() {
  return (
    <section className={`bg-white ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="2."
          title={
            <>
              The Urgency: <span className={home.accentGold}>Why Now?</span>
            </>
          }
          lead="We have reached a tipping point where circularity is moving from a voluntary goal to a mandatory operational requirement."
        />

        <div className="mb-8 sm:mb-10">
          <h3 className={home.h3}>Accelerating Regulatory Pressure</h3>
          <p className={`mt-3 ${home.body}`}>
            New EU frameworks are redefining the cost of doing business:
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {regulations.map((item) => (
              <article key={item.code} className={`flex flex-col ${home.cardLight}`}>
                <h4 className={`text-sm font-semibold leading-snug text-[#2c2c2c] sm:text-base`}>
                  {item.code} ({item.fullName}):
                </h4>
                <p className={home.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-lg border-l-4 border-[#C8A882] bg-[#faf9f7] p-4 sm:p-5">
            <p className={`${home.body} font-semibold text-[#2c2c2c]`}>
              The Cost of Inaction:{' '}
              <span className="font-normal">
                Non-compliance in the EU can lead to fines reaching up to{' '}
                <strong className="font-semibold text-[#2c2c2c]">10% of annual turnover</strong>.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className={home.h3}>Geopolitical & Economic Imperatives</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {imperatives.map((item, index) => {
              const Icon = imperativeIcons[index];
              return (
                <article
                  key={item.title}
                  className={`flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#C8A882]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.18)] ${home.cardImperative}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className={home.imperativeCardTitle}>{item.title}</h4>
                  <p className={home.imperativeCardBody}>{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
