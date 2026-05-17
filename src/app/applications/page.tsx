import Link from 'next/link';
import { home } from '@/lib/homePageStyle';
import SystemOverviewSection from '@/components/SystemOverviewSection';
import ApplicationsFrameworkSection from '@/components/ApplicationsFrameworkSection';
import ApplicationsTrustValidationSection from '@/components/ApplicationsTrustValidationSection';
import ApplicationsDetailSection from '@/components/ApplicationsDetailSection';

export default function ApplicationsPage() {
  return (
    <>
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
          <p className={`mx-auto mb-3 max-w-2xl ${home.heroEyebrow}`}>Applications</p>
          <h1 className={`mx-auto max-w-3xl ${home.heroTitle}`}>
            Built for{' '}
            <span className={`font-semibold ${home.accentGold}`}>Critical Infrastructure</span>
          </h1>
          <div className={`mx-auto mt-5 h-px w-14 ${home.ruleBar}`} />
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white/90 sm:text-lg">
            Transforming Textiles Across Every Domain
          </p>
          <p className={`mx-auto mt-5 max-w-3xl text-pretty ${home.heroLead}`}>
            The RE:WEAVE™ ecosystem transforms textiles from passive products into intelligent, circular
            infrastructure capable of sensing, adapting, and regenerating. By embedding functionality at the
            fiber level through Sense-Tex™, we provide mission-critical solutions that prioritize safety,
            performance, and strategic independence.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-sm font-medium tracking-wide text-[#C8A882] sm:text-base">
            Proven technology – limitless reach.{' '}
            <span className="text-white/95">Earth and space in harmony.</span>
          </p>
        </div>
      </section>

      <div
        className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"
        aria-hidden
      />

      <SystemOverviewSection showSectorsBar={false} spaciousBottom />

      <ApplicationsFrameworkSection />

      <ApplicationsTrustValidationSection />

      <ApplicationsDetailSection />

      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent" aria-hidden />

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-lg md:text-2xl font-medium mb-6 leading-tight">
            Ready to secure your <span className="text-[#C8A882]">sector's future?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#1a1a1a] px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#C8A882] hover:text-white transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>Book a Call with Our Team</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/model" 
              className="border border-white/40 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              View The Model & ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
