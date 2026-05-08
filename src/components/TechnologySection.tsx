import Link from 'next/link';

export default function TechnologySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-[#2c2c2c] mb-6 tracking-wide">
            Our <span className="text-[#d4c7b8]">Technology</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto font-light leading-relaxed">
            Revolutionary textile technologies designed for circular infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Sense-Tex */}
          <div className="bg-[#f8f6f3] rounded-lg p-8 border border-[#e8e4df] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-4 tracking-wide">Sense-Tex®</h3>
            <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
              A patented hybrid yarn architecture that embeds functional performance directly at the fiber level.
            </p>
            <div className="space-y-3 text-[#6b6b6b] mb-6 font-light">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Hygiene resilience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Reduced washing requirements</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Sensor integration</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Mechanical fiber-to-fiber separation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Chemical-free processing compatibility</span>
              </div>
            </div>
            <p className="text-sm text-[#6b6b6b]/80 mb-6 font-light italic">
              Sense-Tex forms the <strong>material foundation of Re:Weave™</strong>. It is designed not only to perform, but to return.
            </p>
            <Link 
              href="/technology/sense-tex" 
              className="text-[#2c2c2c] font-light hover:text-[#d4c7b8] inline-flex items-center transition-colors"
            >
              Read More 
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Re:Weave */}
          <div className="bg-[#f8f6f3] rounded-lg p-8 border border-[#e8e4df] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-4 tracking-wide">Re:Weave™</h3>
            <p className="text-[#d4c7b8] mb-2 font-medium text-sm tracking-wide uppercase">Circular Textile Infrastructure</p>
            <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
              <strong>Re:Weave</strong> is a dual-use circular textile systems architecture designed to replace linear recycling 
              models with structured material regeneration.
            </p>
            <div className="space-y-3 text-[#6b6b6b] mb-6 font-light">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Material traceability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Fiber separation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Binder regeneration</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mr-3"></div>
                <span>Reintegration into manufacturing</span>
              </div>
            </div>
            <p className="text-sm text-[#6b6b6b]/80 mb-6 font-light">
              Supported by a multi-innovation patent portfolio, <strong>Re:Weave establishes protected pathways for circular textile infrastructure at industrial scale.</strong> Circularity is not added at the end. It is engineered into the lifecycle.
            </p>
            <Link 
              href="/technology/reweave" 
              className="text-[#2c2c2c] font-light hover:text-[#d4c7b8] inline-flex items-center transition-colors"
            >
              Read More 
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Modality */}
          <div className="bg-[#f8f6f3] rounded-lg p-8 border border-[#e8e4df] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-4 tracking-wide">Modality™</h3>
            <p className="text-[#d4c7b8] mb-2 font-medium text-sm tracking-wide uppercase">Applied Circular Design</p>
            <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
              <strong>Modality</strong> is the applied design and product environment where Transforming Textiles technologies meet real-world use.
            </p>
            <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
              Through Modality, Sense-Tex materials and circular design principles are translated into 
              garments and textile products designed for longevity, performance, and future material recovery.
            </p>
            <p className="text-sm text-[#6b6b6b]/80 mb-6 font-light">
              Modality demonstrates how circular textile systems can move from laboratory innovation to everyday environments. 
              Products are available through Modality.store, where research, design, and circular 
              material innovation converge.
            </p>
            <Link 
              href="/technology/modality" 
              className="text-[#2c2c2c] font-light hover:text-[#d4c7b8] inline-flex items-center transition-colors"
            >
              Read More 
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Technology Visual Placeholder */}
        <div className="bg-gradient-to-r from-[#d4c7b8]/10 to-[#b8a491]/10 rounded-lg p-12">
          <div className="text-center">
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-6 tracking-wide">Technology Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4c7b8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#2c2c2c] text-xs font-light">🧬</span>
                </div>
                <p className="text-[#6b6b6b] font-light">Material Science</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4c7b8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#2c2c2c] text-xs font-light">🔄</span>
                </div>
                <p className="text-[#6b6b6b] font-light">Circular Systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4c7b8] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#2c2c2c] text-xs font-light">📡</span>
                </div>
                <p className="text-[#6b6b6b] font-light">Smart Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}