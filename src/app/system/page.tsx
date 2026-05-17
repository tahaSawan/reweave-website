import Link from 'next/link';
import { home } from '@/lib/homePageStyle';
import SystemOverviewSection from '@/components/SystemOverviewSection';
import SenseTexSection from '@/components/SenseTexSection';
import SovereignInfrastructureSection from '@/components/SovereignInfrastructureSection';
import CoreLogicSection from '@/components/CoreLogicSection';
import SystemPillarsSection from '@/components/SystemPillarsSection';
import StrategicValidationSection from '@/components/StrategicValidationSection';

export default function SystemPage() {
  return (
    <>
      {/* Hero — full-width art from The systems / System-Hero (served as /system-hero.png) */}
      <section className="relative isolate min-h-[min(68vh,640px)] overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-[position:center_35%]"
          style={{ backgroundImage: 'url(/system-hero.png)' }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,transparent_20%,rgba(0,0,0,0.5)_85%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[min(68vh,640px)] max-w-5xl flex-col justify-center px-6 py-14 text-center sm:px-8 lg:px-12">
          <p className={`mx-auto mb-3 max-w-2xl ${home.heroEyebrow}`}>The System</p>
          <h1 className={`mx-auto max-w-3xl ${home.heroTitle}`}>
            Infrastructure for{' '}
            <span className={`font-semibold ${home.accentGold}`}>Strategic Sovereignty</span>
          </h1>
          <div className={`mx-auto mt-5 h-px w-14 ${home.ruleBar}`} />
          <p className={`mx-auto mt-6 max-w-3xl text-pretty ${home.heroLead}`}>
            RE:WEAVE™ is not merely a collection of products; it is a sovereign material infrastructure.
            It operates as a closed-loop system that integrates advanced materials, biological regeneration,
            energy systems, and autonomous AI control to create long-term value and industrial resilience.
            By moving away from fragmented, dependent supply chains, we build a self-sufficient physical
            infrastructure designed for the most demanding environments on Earth and in space.
          </p>
        </div>
      </section>

      <SystemOverviewSection />

      <SenseTexSection />

      <SovereignInfrastructureSection />

      <CoreLogicSection />

      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent" />

      <SystemPillarsSection />

      <StrategicValidationSection />

      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent" />

      <section className={home.ctaBand}>
        <div className={`${home.containerNarrow} text-center`}>
          <h2 className={`${home.ctaTitle} mb-6`}>
            Ready to integrate <span className={home.accentGold}>the system?</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={`${home.ctaButton} inline-flex items-center gap-2 shadow-lg`}
            >
              <span>Book a Call with Our Team</span>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/applications"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Explore Application Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
