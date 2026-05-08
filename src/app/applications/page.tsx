import Link from 'next/link';

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5f2ed] py-16 pt-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-3xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              Applications — Built for <span className="text-[#C8A882]">Critical Infrastructure</span>
            </h1>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <h2 className="text-lg md:text-xl font-medium text-[#2c2c2c] mb-4">Transforming Textiles Across Every Domain</h2>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed">
              The RE:WEAVE™ ecosystem transforms textiles from passive products into intelligent, circular infrastructure capable of sensing, adapting, and regenerating. By embedding functionality at the fiber level through Sense-Tex™, we provide mission-critical solutions that prioritize safety, performance, and strategic independence.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Applications Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8">
            {/* Application 1: Space & Aerospace */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Application 1</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Space & Aerospace: Orbital Habitats & ISRU</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Strategic Sovereignty:</strong> Engineered for orbital habitats and long-duration missions where resource autonomy is a non-negotiable requirement.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Extreme Protection:</strong> Utilizes dual-spinning architecture to fuse lunar regolith (moon dust) with sense-capable cores, providing critical radiation shielding and thermal stability.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Resource Independence:</strong> Integrated Bioreactors and ISRU (In-Situ Resource Utilization) modules convert biological waste and local materials into structural skins and life-support components.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Mission Impact:</strong> Directly supports Artemis, Moon Village, and Mars missions by turning waste into resources and enabling long-term autonomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 2: Defense */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Application 2</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Defense & Technical Systems: Operational Resilience</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Adaptive Uniforms:</strong> Next-generation tactical textiles featuring structural sensing for real-time health monitoring and mission-critical reliability.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Ballistic & Chemical Defense:</strong> Advanced PFAS-free coatings provide ballistic solutions and protection against extreme environments and chemical exposure.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Traceable Reliability:</strong> Secure-by-design data protocols and the TEAB protocol ensure full traceability and data integrity for high-security assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 3: Healthcare */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏥</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Application 3</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Healthcare & Human Monitoring: Hygienic Intelligence</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Continuous Biometrics:</strong> Biocompatible yarns with embedded sensor networks provide non-intrusive, real-time monitoring of vital signs and physiological parameters.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Hygiene Resilience:</strong> Fibers engineered with silver and zinc provide permanent antimicrobial and antifungal properties without the use of toxic chemical post-treatments.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Reduced Operational Intensity:</strong> Intelligent textiles reduce the need for aggressive washing and chemical intensity, extending the lifespan of hospital linens and ensuring compliance with healthcare hygiene standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 4: Smart Cities */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏙️</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Application 4</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Smart Cities & Circular Infrastructure</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Intelligent Piping Systems:</strong> Sensing-capable textile conduits acting as continuous monitoring systems for leak detection, stress mapping, and predictive maintenance in urban utilities.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Circular Flow Management:</strong> Digital Product Passports (DPP) link material flows to municipal circular infrastructure, enabling zero-waste city networks.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Self-Healing Materials:</strong> Damage-responsive textiles designed to restore structural integrity, significantly reducing long-term maintenance costs for public infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application 5: Fashion & Culture */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👗</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Application 5</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Fashion & Culture: Ethical Performance</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Premium Storytelling:</strong> Provides brands with full lifecycle transparency and "compliance-by-design" to meet emerging ESG and EPR regulations.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Circular Collections:</strong> Sense-Tex™ materials are designed for mechanical reversibility, allowing high-value garments to be separated and recovered back into pure fiber-to-fiber cycles.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Functional Fashion:</strong> Merges high-spec utility with aesthetic design, creating apparel that protects against environmental toxins while maintaining comfort and breathability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Trust Signals & Global Validation Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              Trust Signals & <span className="text-[#C8A882]">Global Validation</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
            {/* Hard Fact */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Hard Fact</div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Proven Performance</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed mb-4">
                Our applications are not theoretical; the <strong className="text-[#2c2c2c]">Autonomous Recycling Cluster (ARC)</strong> physically closes the loop by achieving <strong className="text-[#2c2c2c]">90% fiber purity</strong> in material recovery, a benchmark for industrial-scale circularity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Global Scaling */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Global Scaling</div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Market Implementation</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                We are actively implementing market strategies in <strong className="text-[#2c2c2c]">Gujarat and Telangana, India</strong>, to validate these applications within the world's most critical textile manufacturing hubs.
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Compliance</div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Industry Standards</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Built to meet <strong className="text-[#2c2c2c]">ESA & ECSS standards</strong>, ensuring that every application is secure, scalable, and sovereign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

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