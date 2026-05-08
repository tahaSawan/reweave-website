import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-[#f8f6f3] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#d4c7b8] text-4xl md:text-5xl font-light mb-8 tracking-wide">
            About <span className="text-[#2c2c2c]">Transforming Textiles</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6b6b6b] max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Textiles are one of humanity's most intimate infrastructures. They touch skin, protect bodies, 
            operate in hospitals, defense systems, cities and increasingly in space. Transforming Textiles 
            develops advanced textile technologies and circular material platforms that transform fabrics from 
            disposable products into long-life, regenerative infrastructure.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center text-[#2c2c2c] font-light hover:text-[#b8a491] transition-colors bg-[#d4c7b8] px-6 py-3 rounded-full"
          >
            Read More 
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Technology Diagram Placeholder */}
        <div className="bg-white rounded-lg p-12 mb-20 shadow-sm border border-[#e8e4df]">
          <div className="flex flex-col items-center">
            {/* Central Logo Placeholder */}
            <div className="w-24 h-24 bg-[#d4c7b8] rounded-full flex items-center justify-center mb-8">
              <span className="text-[#2c2c2c] font-light text-sm">TT</span>
            </div>
            
            {/* Technology Connections */}
            <div className="flex items-center justify-center space-x-16 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2c2c2c] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-xs">RW</span>
                </div>
                <p className="text-sm text-[#6b6b6b] font-light">IP: Re:Weave ™</p>
              </div>
              
              <div className="w-24 h-px bg-[#d4c7b8]"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2c2c2c] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-xs">ST</span>
                </div>
                <p className="text-sm text-[#6b6b6b] font-light">IP: Sense-Tex®</p>
              </div>
            </div>
            
            {/* Application Areas */}
            <div className="grid grid-cols-3 md:grid-cols-7 gap-4 text-center">
              {['MedTech', 'Armed Forces', 'Fashion Brand', 'Space', 'Innovative', 'Smart Homes', 'Recycle Facilities'].map((area, index) => (
                <div key={index} className="text-xs text-[#6b6b6b] font-light italic">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-[#d4c7b8] text-3xl font-light mb-6">
              Who <span className="text-[#2c2c2c]">We Are?</span>
            </h3>
            <p className="text-[#6b6b6b] mb-6 leading-relaxed font-light">
              Transforming Textiles AB was founded in 2020 by Sara Rosberg, during a moment that revealed both the fragility 
              and potential of the systems we rely on.
            </p>
            <p className="text-[#6b6b6b] mb-6 leading-relaxed font-light">
              What began as an exploration into whether textiles, the most intimate infrastructure 
              humanity lives in, could become responsive systems has evolved into a broader 
              material and systems architecture.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed font-light">
              Today, the company operates at the intersection of advanced materials, circular 
              infrastructure, and intelligent textile systems. Its work bridges material science and systems engineering to 
              transform textiles from passive products into active, long-life infrastructure.
            </p>
          </div>
          
          {/* Placeholder for team image or visual */}
          <div className="bg-gradient-to-br from-[#d4c7b8]/20 to-[#b8a491]/20 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#d4c7b8]/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#2c2c2c] text-2xl font-light">👥</span>
              </div>
              <p className="text-[#6b6b6b] text-sm font-light italic">Team Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}