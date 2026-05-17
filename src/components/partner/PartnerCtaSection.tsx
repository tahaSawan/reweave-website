import Link from 'next/link';
import ModelSectionIntro from '@/components/model/ModelSectionIntro';
import { home } from '@/lib/homePageStyle';
import { LeafIcon, LockIcon, ScaleIcon } from '@/components/partner/partnerIcons';

const commitments = [
  { title: 'Secure', body: 'Strengthen sovereignty and control critical value chains.', Icon: LockIcon },
  { title: 'Sustainable', body: 'Regenerate resources and reduce environmental impact.', Icon: LeafIcon },
  { title: 'Scalable', body: 'Build infrastructure that grows with demand and scale.', Icon: ScaleIcon },
] as const;

const signals = [
  'Built to deliver now',
  'Built to adapt',
  'Built to last',
  'Built for sovereignty',
] as const;

export default function PartnerCtaSection() {
  return (
    <>
      <section className={`bg-white ${home.section}`}>
        <div className={home.container}>
          <ModelSectionIntro
            index="4."
            title={<span className={home.accentGold}>Call to Action</span>}
            lead="The future isn't waiting. Neither are we."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {commitments.map(({ title, body, Icon }) => (
              <article
                key={title}
                className={`flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[#C8A882]/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.18)] ${home.cardImperative}`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8A882]/15 text-[#C8A882]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className={home.imperativeCardBody}>
                  <span className={`font-semibold ${home.imperativeCardTitle}`}>{title}:</span> {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className={`inline-flex items-center gap-2 ${home.ctaButton}`}>
              Book a Call with Our Team
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className={`mt-6 ${home.body}`}>
              Contact:{' '}
              <a
                href="mailto:info@transformingtextiles.com"
                className={`font-semibold ${home.accentGold} transition-colors hover:text-[#8f7350]`}
              >
                info@transformingtextiles.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className={home.ctaBand}>
        <div className={`${home.containerNarrow} text-center`}>
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {signals.map((label) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-[#C8A882]" aria-hidden />
                <p className={home.ctaBullet}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
