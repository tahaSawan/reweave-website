import Link from 'next/link';
import PageHeroSection from '@/components/PageHeroSection';
import ModelRevenueLayersSection from '@/components/model/ModelRevenueLayersSection';
import TheFutureRevenueBand from '@/components/TheFutureRevenueBand';
import ModelPricingSection from '@/components/model/ModelPricingSection';
import ModelValueRoiSection from '@/components/model/ModelValueRoiSection';
import ModelServiceTiersSection from '@/components/model/ModelServiceTiersSection';
import ModelHowToUseSection from '@/components/model/ModelHowToUseSection';
import ModelFinancialModelSection from '@/components/model/ModelFinancialModelSection';
import ModelForecastSection from '@/components/model/ModelForecastSection';
import { home } from '@/lib/homePageStyle';

export default function ModelPage() {
  return (
    <>
      <PageHeroSection
        eyebrow="The Model"
        title={
          <>
            Value Creation & <span className={`font-semibold ${home.accentGold}`}>ROI</span>
          </>
        }
        subtitle="Transforming Textiles into Sovereign Value"
        lead="The RE:WEAVE™ business model moves beyond traditional transactional sales to a recurring value framework. By monetizing the entire material lifecycle—from initial engineering to digital compliance and autonomous recovery—the system generates compounding, long-term value for partners."
      />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelRevenueLayersSection />

      <TheFutureRevenueBand />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelPricingSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelValueRoiSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelServiceTiersSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelHowToUseSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelForecastSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <ModelFinancialModelSection />

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <section className={home.ctaBand}>
        <div className={`${home.containerNarrow} text-center`}>
          <h2 className={home.ctaTitle}>
            Ready to secure your <span className={home.accentGold}>long-term advantage?</span>
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={`${home.ctaButton} inline-flex items-center gap-2`}>
              <span>Book a Call with Our Team</span>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/shift"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
            >
              See &quot;The Shift&quot; – Market Urgency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
