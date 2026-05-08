import Link from 'next/link';

export default function SystemPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5f2ed] py-16 pt-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-3xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              The System: Infrastructure for <span className="text-[#C8A882]">Strategic Sovereignty</span>
            </h1>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed">
              RE:WEAVE™ is not merely a collection of products; it is a sovereign material infrastructure. It operates as a closed-loop system that integrates advanced materials, biological regeneration, energy systems, and autonomous AI control to create long-term value and industrial resilience. By moving away from fragmented, dependent supply chains, we build a self-sufficient physical infrastructure designed for the most demanding environments on Earth and in space.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Core Logic Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">The Core Logic</h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] text-center">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">1</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Enter Simple</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Start with intelligent materials that perform in extreme conditions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] text-center">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">2</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Scale Strategic</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Utilize data orchestration to ensure transparency and absolute compliance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] text-center">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">3</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Build Sovereign</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Achieve strategic independence through autonomous, closed-loop systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* The 5 Pillars Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              The 5 Pillars of <span className="text-[#C8A882]">RE:WEAVE™</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 1</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Hybrid Textiles (Sense-Tex™)</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Intelligent Material:</strong> A new generation of textiles engineered with functional yarns (silver, zinc) and advanced PFAS-free coatings.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Dual-Spinning Architecture:</strong> A patented process that fuses an intelligent core with a bio-based binder and a planetary-grade surface (Regolith or Basalt).
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Embedded Sensing:</strong> Integrated fiber batteries and thread-thin sensor networks for real-time health monitoring of humans and infrastructure (biometrics, strain, temperature).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 2</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">AI Soil Transformation</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Biological Intelligence:</strong> An AI-driven system that transforms inert regolith or degraded soil into a living, self-evolving ecosystem.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Autonomous Life-Support:</strong> Uses reinforcement learning and microbial activation to sustain food, fiber (biomass for textiles), and energy loops.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Edge AI Network:</strong> Distributed micro-nodes operating at {'<'}10W to manage the biosphere without cloud dependency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 3</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Modular Systems & Energy</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Resource Autonomy:</strong> Modular units (Keratin Bioreactors) that convert local waste—human hair, textile scraps, and food waste—into high-performance biopolymers.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Energy Harvesting:</strong> Integrated wave and vibrational energy units paired with food-waste bio-batteries to power the ecosystem.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Dual-Use Impact:</strong> Designed for microgravity operation (Space) and rapid-deployment mobile recycling platforms (Earth).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 4</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Circular Robotics (ARC)</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Autonomous Recycling Cluster (ARC):</strong> A modular, AI-assisted robotic system designed to recover, separate, and regenerate hybrid textiles with no human dependency.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Technical Evidence:</strong> Achieves {'>'}85% material recovery and &ge;90% fiber purity, ensuring high-quality feedstock for new material cycles.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Loop Closure:</strong> Repacks recovered fibers into cartridges for immediate reuse in manufacturing, turning circularity into a physical reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">5</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 5</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Infrastructure OS (Data & Compliance)</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Material Operating System:</strong> An AI-orchestrated intelligence layer that continuously learns from and manages material flows.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">Compliance by Design:</strong> Automates the Digital Product Passport (DPP) and ESG reporting to meet mandatory 2027 regulatory demands.
                    </p>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">
                      <strong className="text-[#2c2c2c]">System Integration:</strong> Acts as the "decision layer" that balances resources (materials, water, energy) and optimizes autonomous operations in remote environments.
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

      {/* Strategic Validation Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">Strategic Validation</h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Global Scalability */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
              <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Trust Signal</div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Global Scalability</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Currently establishing market strategies in <strong className="text-[#2c2c2c]">Gujarat & Telangana, India</strong>, to validate high-volume circular material flows within global textile hubs.
              </p>
            </div>

            {/* Sovereign Standards */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
              <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Trust Signal</div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Sovereign Standards</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                All systems are designed to be compliant with <strong className="text-[#2c2c2c]">ESA & ECSS standards</strong>, ensuring the highest level of data integrity and physical reliability.
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
            Ready to integrate <span className="text-[#C8A882]">the system?</span>
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
              href="/applications" 
              className="border border-white/40 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              Explore Application Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}