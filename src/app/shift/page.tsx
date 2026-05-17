import Link from 'next/link';
import PageHeroSection from '@/components/PageHeroSection';
import ShiftMarketContextSection from '@/components/shift/ShiftMarketContextSection';
import ModelServiceTiersSection from '@/components/model/ModelServiceTiersSection';
import ShiftSolutionSection from '@/components/shift/ShiftSolutionSection';
import ShiftUrgencySection from '@/components/shift/ShiftUrgencySection';
import { home } from '@/lib/homePageStyle';

const sectionDivider = (
  <div
    className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
    aria-hidden
  />
);

export default function ShiftPage() {
  return (
    <>
      <PageHeroSection
        eyebrow="The Shift"
        title={
          <>
            Market Context & <span className={`font-semibold ${home.accentGold}`}>Urgency</span>
          </>
        }
        subtitle="The Shift: From Linear Models to Strategic Sovereignty"
        lead="The world is transitioning from a system built for abundance to one defined by scarcity, accountability, and geopolitical volatility. The traditional linear textile model—optimized for low cost at the expense of control—is no longer viable under current regulatory and structural pressures."
      />

      {sectionDivider}

      <ShiftMarketContextSection />

      {sectionDivider}

      <ShiftUrgencySection />

      {sectionDivider}

      <ModelServiceTiersSection sectionLabel={null} />

      {sectionDivider}

      <ShiftSolutionSection />

      {sectionDivider}

      <section className={home.ctaBand}>
        <div className={`${home.containerNarrow} text-center`}>
          <h2 className={home.ctaTitle}>
            Is your supply chain ready for <span className="text-[#C8A882]">2027?</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact" className={`inline-flex items-center gap-2 ${home.ctaButton}`}>
              Book a Call with Our Team
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/partner"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              See How to Partner & Engage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
