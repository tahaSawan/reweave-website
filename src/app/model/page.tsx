import Link from 'next/link';
import PageHeroSection from '@/components/PageHeroSection';
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

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Four Revenue Layers Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              1. Four Revenue Layers: <span className="text-[#C8A882]">One Integrated System</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              RE:WEAVE™ monetizes physical materials, digital infrastructure, lifecycle recovery, and data intelligence.
            </p>
          </div>

          <div className="space-y-4">
            {/* Layer 1 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Material (CAPEX)</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    Revenue from advanced yarn and fiber sales, fabric and component sales, and custom formulations. This serves as the tangible entry point for procurement and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">System License (OPEX)</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    Digital infrastructure for compliance, Digital Product Passports (DPP), and ESG reporting. This acts as the "compliance engine" for the Material Operating System.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Lifecycle Recovery (EPR Shield)</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    Revenue from take-back programs, recycling services, and material regeneration. This layer removes future regulatory and reputational costs by acting as an EPR cost shield.
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A882] font-semibold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Data Intelligence (Emerging)</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed">
                    High-margin data products, predictive analytics, and lifecycle optimization insights. Revenue in this layer scales with system usage rather than material volume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* 3-Tier Pricing Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              2. 3-Tier Pricing & <span className="text-[#C8A882]">Licensing Model</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              Pricing is tiered to align cost with performance, value, and risk reduction.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl border border-[#e8dcc6] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#faf9f7]">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#2c2c2c] uppercase tracking-wider border-b border-[#e8dcc6]">
                      Tier
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#2c2c2c] uppercase tracking-wider border-b border-[#e8dcc6]">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#2c2c2c] uppercase tracking-wider border-b border-[#e8dcc6]">
                      Indicative Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e8dcc6]">
                    <td className="px-6 py-4 text-sm font-semibold text-[#2c2c2c]">
                      Quality A: High Performance
                    </td>
                    <td className="px-6 py-4 text-xs text-[#6b6b6b] leading-relaxed">
                      High-spec, critical, mission-driven for Defense and Space.
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#C8A882]">
                      ~109 €/kg
                    </td>
                  </tr>
                  <tr className="border-b border-[#e8dcc6]">
                    <td className="px-6 py-4 text-sm font-semibold text-[#2c2c2c]">
                      Quality B: Balanced
                    </td>
                    <td className="px-6 py-4 text-xs text-[#6b6b6b] leading-relaxed">
                      Optimal balance of performance and proven value.
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#C8A882]">
                      ~85 €/kg
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-semibold text-[#2c2c2c]">
                      Quality C: Scalable
                    </td>
                    <td className="px-6 py-4 text-xs text-[#6b6b6b] leading-relaxed">
                      Cost-efficient material for rapid scalability in Fashion and Retail.
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#C8A882]">
                      ~73 €/kg
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Value Creation & Strategic ROI Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              3. Value Creation & <span className="text-[#C8A882]">Strategic ROI</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              Sovereign infrastructure creates recurring value across the entire material lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Sovereign Control</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  Partners gain control over critical materials, data, and infrastructure.
                </p>
              </div>

              <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Regulatory Ready</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  Built for total compliance with EU regulations like ESPR, DPP, and EPR.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">The Cost of Inaction</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  Our model directly mitigates the risk of non-compliance, which can lead to fines reaching up to <strong className="text-[#2c2c2c]">10% of annual turnover</strong>.
                </p>
              </div>

              <div className="bg-[#faf9f7] rounded-xl p-6 border border-[#e8dcc6]">
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Risk Removal</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">
                  The integrated system lowers long-term operational costs and reduces strategic vulnerability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Scalability Section */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              4. Scalability: <span className="text-[#C8A882]">Enter Simple. Scale Strategic.</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              The model is engineered for rapid global deployment by focusing on tangible, high-impact entry points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] text-center shadow-sm">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">1</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Enter</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Start with Sense-Tex™ material supply to meet immediate performance and compliance needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] text-center shadow-sm">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">2</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Connect</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Activate the System License for DPP, traceability, and ESG reporting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] text-center shadow-sm">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">3</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Close the Loop</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Enable Lifecycle Recovery for EPR protection and circular material flows through the ARC, achieving 90% fiber purity.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] text-center shadow-sm">
              <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C8A882] font-semibold text-sm">4</span>
              </div>
              <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Scale</h3>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Leverage the full RE:WEAVE™ infrastructure across multiple sectors and global markets, including our validated strategies in Gujarat & Telangana, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* 5-Year Revenue Forecast Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4">
              5. 5-Year <span className="text-[#C8A882]">Revenue Forecast</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
              The financial model projects a compounding trajectory as regulation turns circularity into an operational requirement.
            </p>
          </div>

          <div className="bg-[#2c2c2c] rounded-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Year 1 */}
              <div className="text-center">
                <div className="text-lg font-light text-[#C8A882] mb-2">Year 1</div>
                <div className="text-2xl font-semibold text-white mb-2">€0.8M</div>
                <p className="text-xs text-white/80 leading-relaxed">Pilot contracts, demonstrators, and system validation.</p>
              </div>

              {/* Year 2 */}
              <div className="text-center">
                <div className="text-lg font-light text-[#C8A882] mb-2">Year 2</div>
                <div className="text-2xl font-semibold text-white mb-2">€2.9M</div>
                <p className="text-xs text-white/80 leading-relaxed">Technical validation and protective textiles deployment.</p>
              </div>

              {/* Year 3 */}
              <div className="text-center">
                <div className="text-lg font-light text-[#C8A882] mb-2">Year 3</div>
                <div className="text-2xl font-semibold text-white mb-2">€9M</div>
                <p className="text-xs text-white/80 leading-relaxed">Expansion into Healthcare and Smart City circular infrastructure.</p>
              </div>

              {/* Year 4 */}
              <div className="text-center">
                <div className="text-lg font-light text-[#C8A882] mb-2">Year 4</div>
                <div className="text-2xl font-semibold text-white mb-2">€23M</div>
                <p className="text-xs text-white/80 leading-relaxed">Global network deployment and advanced robotics integration.</p>
              </div>

              {/* Year 5 */}
              <div className="text-center">
                <div className="text-lg font-light text-[#C8A882] mb-2">Year 5</div>
                <div className="text-2xl font-semibold text-white mb-2">€50M</div>
                <p className="text-xs text-white/80 leading-relaxed">Fully autonomous, sovereign infrastructure as a global standard.</p>
              </div>
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
            Ready to secure your <span className="text-[#C8A882]">long-term advantage?</span>
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
              href="/shift" 
              className="border border-white/40 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              See "The Shift" – Market Urgency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}