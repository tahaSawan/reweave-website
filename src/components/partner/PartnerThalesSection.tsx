import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';

const thalesPillars = [
  {
    step: '01',
    title: 'Joint Pilot Project',
    body: 'Focused on material validation for orbital habitats.',
  },
  {
    step: '02',
    title: 'Shared Innovation',
    body: "Leverage Thales' facility as a hub to validate next-generation textile solutions and establish a shared IP framework.",
  },
  {
    step: '03',
    title: 'Global Standard',
    body: 'Together, we set the new standard for European leadership in space infrastructure and sovereign materials.',
  },
] as const;

export default function PartnerThalesSection() {
  return (
    <section className={`bg-[#ebe6dc] ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="2."
          title={
            <>
              The Strategic Ask: <span className={home.accentGold}>Thales + RE:WEAVE™</span>
            </>
          }
          lead="We are specifically inviting Thales to join a co-development partnership within the new Space Joint Lab in Rome."
        />

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {thalesPillars.map(({ step, title, body }) => (
            <article
              key={title}
              className={`flex h-full flex-col transition-all duration-300 hover:border-[#C8A882]/40 hover:shadow-[0_16px_44px_rgba(0,0,0,0.2)] ${home.ecoCardShellData}`}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8A882]/15 text-xs font-bold tabular-nums text-[#C8A882]">
                {step}
              </div>
              <p className={`mt-1 flex-1 ${home.ecoCardBodyDark}`}>
                <span className={`font-semibold ${home.ecoCardTitleDark}`}>{title}:</span> {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
