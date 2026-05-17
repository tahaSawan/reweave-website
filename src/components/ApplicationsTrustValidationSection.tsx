import type { ReactNode } from 'react';
import { home } from '@/lib/homePageStyle';

type TrustCard = {
  eyebrow: string;
  title: string;
  body: ReactNode;
  featured?: boolean;
};

const cards: TrustCard[] = [
  {
    eyebrow: 'Hard Fact',
    title: 'Proven Performance',
    featured: true,
    body: (
      <>
        Our applications are not theoretical; the{' '}
        <span className={home.factGold}>Autonomous Recycling Cluster (ARC)</span> physically closes the
        loop by achieving <span className={home.factGoldBold}>90% fiber purity</span> in material recovery,
        a benchmark for industrial-scale circularity.
      </>
    ),
  },
  {
    eyebrow: 'Global Scaling',
    title: 'Market Implementation',
    body: (
      <>
        We are actively implementing market strategies in{' '}
        <span className={home.factGold}>Gujarat and Telangana, India</span>, to validate these applications
        within the world&apos;s most critical textile manufacturing hubs.
      </>
    ),
  },
  {
    eyebrow: 'Compliance',
    title: 'Industry Standards',
    body: (
      <>
        Built to meet <span className={home.factGoldBold}>ESA & ECSS standards</span>, ensuring that every
        application is secure, scalable, and sovereign.
      </>
    ),
  },
];

const urgentCard =
  'flex flex-col rounded-xl border border-white/10 bg-[#121212] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.14)] transition-all duration-300 hover:border-[#C8A882]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.2)] sm:p-6';

function TrustCardArticle({ eyebrow, title, body, featured }: TrustCard) {
  return (
    <article className={urgentCard}>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A882] sm:text-[11px]">
        {eyebrow}
      </p>
      <h3 className={`mt-2 ${home.imperativeCardTitle} ${featured ? 'sm:text-base' : ''}`}>{title}</h3>
      <p className={`mt-3 flex-1 ${home.imperativeCardBody}`}>{body}</p>
    </article>
  );
}

export default function ApplicationsTrustValidationSection() {
  const [featured, ...rest] = cards;

  return (
    <section className="border-t border-[#ebe6dc] bg-[#f5f2ed] py-14 sm:py-16 lg:py-20">
      <div className={`${home.container} max-w-5xl`}>
        <div className="mb-10 text-center sm:mb-12">
          <h2 className={home.h2}>
            Trust Signals & <span className={home.accentGold}>Global Validation</span>
          </h2>
          <div className={`mx-auto mt-5 w-14 ${home.ruleBar}`} />
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <TrustCardArticle {...featured} />
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {rest.map((card) => (
              <TrustCardArticle key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
