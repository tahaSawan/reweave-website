import Link from 'next/link';
import PageHeroSection from '@/components/PageHeroSection';
import { home } from '@/lib/homePageStyle';

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

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Modular Service Tiers Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              1. Modular <span className="text-[#C8A882]">Service Tiers</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              Our services are engineered for flexibility and long-term impact, delivering ROI through risk mitigation and reduced operational costs.
            </p>
          </div>

          <div className="space-y-6">
            {/* Foundation Tier */}
            <div className="bg-[#faf9f7] rounded-xl p-8 border border-[#e8dcc6] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Foundation: Build the Base</h3>
                  <div className="text-2xl font-bold text-[#C8A882]">€25K per engagement</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">Readiness Assessment:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Establish compliance baselines and design your strategic roadmap.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">Regulatory Support:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Navigate ESPR, DPP, and EPR requirements with expert guidance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrate Tier */}
            <div className="bg-[#faf9f7] rounded-xl p-8 border border-[#e8dcc6] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Integrate: Connect & Optimize</h3>
                  <div className="text-2xl font-bold text-[#C8A882]">€75K per engagement</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">System Activation:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Deploy data platforms and traceability dashboards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">Operational Optimization:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Integrate materials into existing supply chains with digital twinning and circular strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expand Tier */}
            <div className="bg-[#faf9f7] rounded-xl p-8 border border-[#e8dcc6] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2c2c2c] mb-2">Expand: Scale & Innovate</h3>
                  <div className="text-2xl font-bold text-[#C8A882]">€150K per engagement</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">Market Access:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Unlock new sectors and drive circular performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">Advanced Analytics:</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Leverage AI insights to lead in sustainability and performance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sovereign Partner Tier */}
            <div className="bg-[#2c2c2c] rounded-xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sovereign Partner: Transform & Lead</h3>
                  <div className="text-2xl font-bold text-[#C8A882]">Custom Partnership</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Strategic Alliance:</h4>
                  <p className="text-xs text-white/90 leading-relaxed">A full-service partnership for building sovereign infrastructure and long-term industry leadership.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Strategic Ask: Thales Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              2. The Strategic Ask: <span className="text-[#C8A882]">Thales + RE:WEAVE™</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              We are specifically inviting Thales to join a co-development partnership within the new Space Joint Lab in Rome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Joint Pilot Project */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Joint Pilot Project</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Focused on material validation for orbital habitats.
              </p>
            </div>

            {/* Shared Innovation */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🔬</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Shared Innovation</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Leverage Thales' facility as a hub to validate next-generation textile solutions and establish a shared IP framework.
              </p>
            </div>

            {/* Global Standard */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🏆</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Global Standard</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Together, we set the new standard for European leadership in space infrastructure and sovereign materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Ecosystem Commitment Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              3. Our <span className="text-[#C8A882]">Ecosystem Commitment</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              The infrastructure advantage is achieved through a "system-of-systems" approach:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Governments */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🏛️</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Governments</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Co-create policy, standards, and strategic programs for national resilience.
              </p>
            </div>

            {/* Industry */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🏭</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Industry</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Collaborate across sectors to scale and commercialize infrastructure solutions.
              </p>
            </div>

            {/* Investors */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">💰</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Investors</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Deploy capital into resilient, circular, and future-ready infrastructure enterprises.
              </p>
            </div>

            {/* Academia */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🎓</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Academia</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Advance research and talent to power tomorrow's breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Call to Action Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              4. <span className="text-[#C8A882]">Call to Action</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-medium text-[#2c2c2c] mb-8">
              The future isn't waiting. Neither are we.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Secure */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🔒</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Secure</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Strengthen sovereignty and control critical value chains.
              </p>
            </div>

            {/* Sustainable */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🌱</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Sustainable</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Regenerate resources and reduce environmental impact.
              </p>
            </div>

            {/* Scalable */}
            <div className="text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">📈</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Scalable</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Build infrastructure that grows with demand and scale.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link 
              href="/contact" 
              className="bg-[#2c2c2c] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-[#C8A882] transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>Book a Call with Our Team</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <div className="pt-4">
              <p className="text-sm text-[#6b6b6b]">
                Contact: <a href="mailto:info@reweave.com" className="text-[#C8A882] hover:underline">info@reweave.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Footer Signal Section */}
      <section className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>
      </section>
    </>
  );
}