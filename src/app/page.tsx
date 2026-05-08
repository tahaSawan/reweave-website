import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Section 1: The Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/homepage-hero.png)' }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
            {/* Welcome Text */}
            <p className="text-[#C8A882] text-sm font-medium mb-6 tracking-widest uppercase">
              Welcome to RE:WEAVE
            </p>
            
            {/* Main Headline - Smaller, professional sizing */}
            <h1 className="text-xl md:text-3xl lg:text-4xl font-normal text-white mb-4 leading-tight">
              From Material Intelligence<br/>
              to <span className="text-[#C8A882]">Strategic Sovereignty</span>
            </h1>
            
            {/* Subheadline - Much smaller, refined */}
            <p className="text-sm md:text-base text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming textiles into a resilient, closed-loop infrastructure for Earth and Space.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/system" 
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#C8A882] hover:text-white transition-all duration-300 shadow-lg"
              >
                Explore the Infrastructure
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/40 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Book a Call with Our Team
              </Link>
            </div>
            
            {/* Trust Signal Row - Cleaner design */}
            <div className="bg-black/20 backdrop-blur-md rounded-lg border border-white/10 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-sm">
                <div className="text-center">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 tracking-wide uppercase">Featured Partner</div>
                  <div className="text-white font-medium">Thales</div>
                </div>
                <div className="text-center border-x-0 md:border-x border-white/20 px-0 md:px-6">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 tracking-wide uppercase">MoonFibre Research Lineage</div>
                  <div className="text-white font-medium">ESA & RWTH Aachen</div>
                </div>
                <div className="text-center">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 tracking-wide uppercase">Validated By</div>
                  <div className="text-white font-medium">Transforming Textiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Section 2: The Imperative (The Shift) */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              A System Built for <span className="text-[#C8A882]">Abundance</span> Can No Longer Meet<br/>
              a World Defined by <span className="text-[#C8A882]">Scarcity</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>
          
          {/* Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hard Fact 1 */}
            <div className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center mb-3">
                  <div className="w-4 h-4 bg-[#C8A882] rounded-sm"></div>
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">The Cost of Inaction</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Financial Imperative</h3>
              </div>
              <p className="text-[#6b6b6b] leading-relaxed text-xs">
                The linear textile model is no longer a financial option. Regulatory enforcement of ESPR, DPP, and EPR 
                carries <strong className="text-[#2c2c2c]">fines of up to 10% of annual turnover</strong>.
              </p>
            </div>
            
            {/* Hard Fact 2 */}
            <div className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center mb-3">
                  <div className="w-4 h-4 bg-[#C8A882] rounded-full"></div>
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">The Resource Gap</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Circular Deficit</h3>
              </div>
              <p className="text-[#6b6b6b] leading-relaxed text-xs">
                Currently, <strong className="text-[#2c2c2c]">less than 1% of textiles are recycled</strong> into new textiles, 
                while <strong className="text-[#2c2c2c]">over 85% end up in landfills</strong>.
              </p>
            </div>
            
            {/* Hard Fact 3 */}
            <div className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-8 h-8 bg-[#C8A882]/10 rounded-md flex items-center justify-center mb-3">
                  <div className="w-2 h-4 bg-[#C8A882] rounded-sm transform rotate-12"></div>
                  <div className="w-2 h-4 bg-[#C8A882]/60 rounded-sm transform -rotate-12 -ml-1"></div>
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Geopolitical Risk</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Supply Vulnerability</h3>
              </div>
              <p className="text-[#6b6b6b] leading-relaxed text-xs">
                <strong className="text-[#2c2c2c]">Fragmented supply chains</strong> and global volatility expose 
                critical vulnerabilities in material access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Section 3: The RE:WEAVE™ Ecosystem (The Five Pillars Overview) */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              One System. Five Layers.<br/>
              <span className="text-[#C8A882]">Infinite Infrastructure.</span>
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>
          
          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pillar 1 */}
            <div className="group bg-[#faf9f7] rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md p-2 mb-3 group-hover:bg-[#C8A882]/20 transition-colors">
                  <Image src="/icon-1.png" alt="Sense-Tex" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 1</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Sense-Tex™</h3>
              </div>
              <p className="text-[#6b6b6b] text-xs leading-relaxed">
                Intelligent yarns with embedded sensing for extreme environments.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="group bg-[#faf9f7] rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md p-2 mb-3 group-hover:bg-[#C8A882]/20 transition-colors">
                  <Image src="/icon-2.png" alt="AI Soil" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 2</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">AI Soil Transformation</h3>
              </div>
              <p className="text-[#6b6b6b] text-xs leading-relaxed">
                Transforming waste and regolith into self-evolving, living soil ecosystems.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="group bg-[#faf9f7] rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md p-2 mb-3 group-hover:bg-[#C8A882]/20 transition-colors">
                  <Image src="/icon-3.png" alt="Modular Systems" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 3</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Modular Systems & Energy</h3>
              </div>
              <p className="text-[#6b6b6b] text-xs leading-relaxed">
                Deployable units converting local waste into biopolymers and clean energy.
              </p>
            </div>
            
            {/* Pillar 4 - Spans 2 columns on large screens */}
            <div className="group bg-[#faf9f7] rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#e8dcc6] lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md p-2 group-hover:bg-[#C8A882]/20 transition-colors flex-shrink-0">
                  <div className="w-full h-full bg-[#C8A882]/60 rounded-sm"></div>
                </div>
                <div className="flex-1">
                  <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 4</div>
                  <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Circular Robotics (ARC)</h3>
                  <p className="text-[#6b6b6b] text-xs leading-relaxed">
                    Autonomous mechanical intelligence achieving <strong className="text-[#2c2c2c]">90% fiber purity</strong> in material regeneration.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pillar 5 */}
            <div className="group bg-[#faf9f7] rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-[#e8dcc6]">
              <div className="mb-4">
                <div className="w-10 h-10 bg-[#C8A882]/10 rounded-md flex items-center justify-center mb-3 group-hover:bg-[#C8A882]/20 transition-colors">
                  <div className="grid grid-cols-2 gap-px">
                    <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#C8A882]/60 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#C8A882]/60 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-[#C8A882] rounded-sm"></div>
                  </div>
                </div>
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Pillar 5</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-2">Infrastructure OS</h3>
              </div>
              <p className="text-[#6b6b6b] text-xs leading-relaxed">
                The system-wide orchestration layer for autonomous, real-world operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

      {/* Section 4: Global Validation & Trust */}
      <section className="bg-[#f5f2ed] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-medium text-[#2c2c2c] mb-4 leading-tight">
              Validated on <span className="text-[#C8A882]">Earth</span>.<br/>
              Engineered for <span className="text-[#C8A882]">Space</span>.
            </h2>
            <div className="w-12 h-px bg-[#C8A882] mx-auto"></div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Strategic Market Presence */}
            <div className="bg-white rounded-xl p-6 border border-[#e8dcc6] shadow-sm">
              <div className="mb-4">
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Strategic Market Presence</div>
                <h3 className="text-sm font-semibold text-[#2c2c2c] mb-3">Market Resilience Strategy</h3>
              </div>
              <p className="text-[#6b6b6b] text-xs leading-relaxed mb-4">
                Developing resilient market strategies in <strong className="text-[#2c2c2c]">India (Gujarat & Telangana)</strong> to secure 
                high-volume circular material flows.
              </p>
              <div className="pt-4 border-t border-[#e8dcc6]">
                <p className="text-xs text-[#6b6b6b] italic">Stefan's Feedback Integration</p>
              </div>
            </div>
            
            {/* Technical Evidence */}
            <div className="bg-[#2c2c2c] rounded-lg p-6 text-white">
              <div className="mb-4">
                <div className="text-[#C8A882] text-xs font-medium mb-1 uppercase tracking-wider">Technical Evidence</div>
                <h3 className="text-sm font-semibold text-white mb-3">Autonomous Recovery</h3>
              </div>
              <p className="text-white/90 text-xs leading-relaxed mb-6">
                Our <strong className="text-[#C8A882]">Autonomous Recycling Cluster (ARC)</strong> is specifically engineered for 
                high-recovery output, closing the physical loop with <strong className="text-[#C8A882]">zero human dependency</strong>.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-md">
                  <div className="text-lg font-light text-[#C8A882] mb-1">90%</div>
                  <p className="text-xs text-white/80 uppercase tracking-wide">Fiber Purity</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-md">
                  <div className="text-lg font-light text-[#C8A882] mb-1">0</div>
                  <p className="text-xs text-white/80 uppercase tracking-wide">Human Dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A882]/20 to-transparent"></div>

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
