import PageHeroSection from '@/components/PageHeroSection';
import PartnerCtaSection from '@/components/partner/PartnerCtaSection';
import PartnerEcosystemSection from '@/components/partner/PartnerEcosystemSection';
import PartnerServiceTiersSection from '@/components/partner/PartnerServiceTiersSection';
import PartnerThalesSection from '@/components/partner/PartnerThalesSection';
import { home } from '@/lib/homePageStyle';

const sectionDivider = (
  <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent" aria-hidden />
);

export default function PartnerPage() {
  return (
    <>
      <PageHeroSection
        eyebrow="Partner / Engage"
        title={
          <>
            Build Sovereign <span className={`font-semibold ${home.accentGold}`}>Value Together</span>
          </>
        }
        subtitle="The Infrastructure Advantage is Here"
        lead="RE:WEAVE™ offers a modular engagement framework designed to bridge the gap between today's textile challenges and tomorrow's sovereign infrastructure. We invite governments, industry leaders, and investors to choose a level of engagement that fits their mission and scales with confidence."
      />

      {sectionDivider}

      <PartnerServiceTiersSection />

      {sectionDivider}

      <PartnerThalesSection />

      {sectionDivider}

      <PartnerEcosystemSection />

      {sectionDivider}

      <PartnerCtaSection />
    </>
  );
}
