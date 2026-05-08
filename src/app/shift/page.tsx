import Link from 'next/link';

export default function ShiftPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f5f2ed] py-16 pt-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-3xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              The Shift — <span className="text-[#C8A882]">Market Context & Urgency</span>
            </h1>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <h2 className="text-lg md:text-xl font-medium text-[#2c2c2c] mb-4">From Linear Models to Strategic Sovereignty</h2>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed">
              The world is transitioning from a system built for abundance to one defined by scarcity, accountability, and geopolitical volatility. The traditional linear textile model—optimized for low cost at the expense of control—is no longer viable under current regulatory and structural pressures.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Market Context Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              1. The Market Context: <span className="text-[#C8A882]">A System in Crisis</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              The legacy textile industry operates on a "take-make-waste" trajectory that is failing both economically and strategically:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Value Leakage */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-semibold text-[#C8A882]">85%</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Value Leakage</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Over 85% of textiles end up in landfills or incineration annually.
              </p>
            </div>

            {/* Material Inefficiency */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-semibold text-[#C8A882]">{'<'}1%</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Material Inefficiency</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Less than 1% of textiles are recycled back into new textiles.
              </p>
            </div>

            {/* Environmental Impact */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-semibold text-[#C8A882]">10%</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Environmental Impact</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                The sector is responsible for 10% of global CO<sub>2</sub> emissions.
              </p>
            </div>

            {/* Strategic Vulnerability */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm text-center">
              <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-semibold text-[#C8A882]">⚠️</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Strategic Vulnerability</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Global dependencies create high volatility and a total lack of control over critical material access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* The Urgency Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              2. The Urgency: <span className="text-[#C8A882]">Why Now?</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              We have reached a tipping point where circularity is moving from a voluntary goal to a mandatory operational requirement.
            </p>
          </div>

          <div className="space-y-8">
            {/* Accelerating Regulatory Pressure */}
            <div className="bg-white rounded-xl p-8 border border-[#e8dcc6] shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-6">Accelerating Regulatory Pressure</h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
                New EU frameworks are redefining the cost of doing business:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">ESPR (Ecodesign for Sustainable Products Regulation):</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Products must now be designed for durability, repairability, and resource efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">DPP (Digital Product Passport):</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Mandatory digital traceability and lifecycle transparency will be enforced starting in 2027.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#C8A882] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2c2c2c] mb-1">EPR (Extended Producer Responsibility):</h4>
                    <p className="text-xs text-[#6b6b6b] leading-relaxed">Producers are now financially and operationally accountable for the entire lifecycle of their products.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf9f7] rounded-lg p-4 border-l-4 border-[#C8A882]">
                <p className="text-sm font-semibold text-[#2c2c2c]">The Cost of Inaction:</p>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">Non-compliance in the EU can lead to fines reaching up to <strong className="text-[#2c2c2c]">10% of annual turnover</strong>.</p>
              </div>
            </div>

            {/* Geopolitical & Economic Imperatives */}
            <div className="bg-white rounded-xl p-8 border border-[#e8dcc6] shadow-sm">
              <h3 className="text-lg font-semibold text-[#2c2c2c] mb-6">Geopolitical & Economic Imperatives</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg">🏛️</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#2c2c2c] mb-2">Strategic Sovereignty</h4>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    In a world of constrained resources, securing independent access to materials is a strategic imperative for nations and industries.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg">📈</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#2c2c2c] mb-2">Rising Costs</h4>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    Compliance and reporting costs are projected to increase by <strong className="text-[#2c2c2c]">30–70%</strong> by 2030.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg">📊</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#2c2c2c] mb-2">Market Expectations</h4>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    <strong className="text-[#2c2c2c]">76%</strong> of brands cite sustainability as a key driver for future growth and market access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* The Solution Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              3. The Solution: <span className="text-[#C8A882]">Infrastructure as Direction</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              RE:WEAVE™ transforms these challenges into a competitive advantage by replacing fragmented supply chains with sovereign material infrastructure.
            </p>
          </div>

          <div className="bg-[#2c2c2c] rounded-xl p-8 text-white mb-8">
            <h3 className="text-lg font-semibold text-[#C8A882] mb-6 text-center">Explore</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] text-lg">→</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">From Disruption to Direction:</h4>
                  <p className="text-xs text-white/90 leading-relaxed">Moving from reacting to risk to building inherent resilience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] text-lg">→</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">From Linear to Sovereign:</h4>
                  <p className="text-xs text-white/90 leading-relaxed">Transitioning from dependent supply chains to autonomous, closed-loop systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] text-lg">→</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">From Waste to Value:</h4>
                  <p className="text-xs text-white/90 leading-relaxed">Turning waste streams into high-performance resources through biological and mechanical intelligence.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <p className="text-sm font-medium text-[#C8A882]">
                The future belongs to systems that are resilient, regenerative, and sovereign by design.
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
            Is your supply chain ready for <span className="text-[#C8A882]">2027?</span>
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
              href="/partner" 
              className="border border-white/40 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              See How to Partner & Engage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}