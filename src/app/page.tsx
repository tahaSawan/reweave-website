import Link from 'next/link';
import { home } from '@/lib/homePageStyle';
import HeroSection from '@/components/HeroSection';
import SystemShiftSection from '@/components/SystemShiftSection';
import InfrastructurePillarsBar from '@/components/InfrastructurePillarsBar';
import ImperativeSection from '@/components/ImperativeSection';
import ValidationTrustSection from '@/components/ValidationTrustSection';
import EcosystemSection from '@/components/EcosystemSection';
import ReweaveIntroSection from '@/components/ReweaveIntroSection';
import WhyItMattersSection from '@/components/WhyItMattersSection';
import ResourceSovereigntySection from '@/components/ResourceSovereigntySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SystemShiftSection />
      <InfrastructurePillarsBar />

      <ImperativeSection />

      <EcosystemSection />

      <ReweaveIntroSection />

      <WhyItMattersSection />

      <ResourceSovereigntySection />

      <ValidationTrustSection />

      <section className={home.ctaBand}>
        <div className={`${home.containerNarrow} text-center`}>
          <h2 className={`${home.ctaTitle} mb-6`}>
            The Future Isn&apos;t Waiting.
            <br />
            <span className={home.accentGold}>Neither Are We.</span>
          </h2>

          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {(
              [
                'Built to deliver now',
                'Built to adapt',
                'Built to last',
                'Built for sovereignty',
              ] as const
            ).map((label) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-[#C8A882]" />
                <p className={home.ctaBullet}>{label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/partner"
            className={`${home.ctaButton} inline-flex items-center gap-2 shadow-lg`}
          >
            <span>Become a Sovereign Partner</span>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
