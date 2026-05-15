import Link from 'next/link';
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

      {/* Section 5: Footer CTA */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Main CTA Headline */}
          <h2 className="text-lg md:text-2xl font-medium mb-6 leading-tight">
            The Future Isn't Waiting.<br/>
            <span className="text-[#C8A882]">Neither Are We.</span>
          </h2>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-full mx-auto mb-2"></div>
              <p className="text-white/80 font-light text-xs">Built to deliver now</p>
            </div>
            <div className="text-center">
              <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-full mx-auto mb-2"></div>
              <p className="text-white/80 font-light text-xs">Built to adapt</p>
            </div>
            <div className="text-center">
              <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-full mx-auto mb-2"></div>
              <p className="text-white/80 font-light text-xs">Built to last</p>
            </div>
            <div className="text-center">
              <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-full mx-auto mb-2"></div>
              <p className="text-white/80 font-light text-xs">Built for sovereignty</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="/partner" 
            className="bg-white text-[#1a1a1a] px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#C8A882] hover:text-white transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Become a Sovereign Partner</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
