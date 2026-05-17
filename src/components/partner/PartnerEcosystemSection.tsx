import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';
import {
  AcademiaIcon,
  GovernmentIcon,
  IndustryIcon,
  InvestorsIcon,
} from '@/components/partner/partnerIcons';

const partners = [
  {
    title: 'Governments',
    body: 'Co-create policy, standards, and strategic programs for national resilience.',
    Icon: GovernmentIcon,
  },
  {
    title: 'Industry',
    body: 'Collaborate across sectors to scale and commercialize infrastructure solutions.',
    Icon: IndustryIcon,
  },
  {
    title: 'Investors',
    body: 'Deploy capital into resilient, circular, and future-ready infrastructure enterprises.',
    Icon: InvestorsIcon,
  },
  {
    title: 'Academia',
    body: "Advance research and talent to power tomorrow's breakthroughs.",
    Icon: AcademiaIcon,
  },
] as const;

export default function PartnerEcosystemSection() {
  return (
    <section className={`bg-[#ebe6dc] ${home.section}`}>
      <div className={home.container}>
        <ModelSectionIntro
          index="3."
          title={
            <>
              Our <span className={home.accentGold}>Ecosystem Commitment</span>
            </>
          }
          lead='The infrastructure advantage is achieved through a "system-of-systems" approach:'
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {partners.map(({ title, body, Icon }) => (
            <article
              key={title}
              className={`flex h-full flex-col transition-all duration-300 hover:border-[#C8A882]/40 hover:shadow-[0_16px_44px_rgba(0,0,0,0.2)] ${home.ecoCardShellData}`}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]">
                <Icon className="h-5 w-5" />
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
