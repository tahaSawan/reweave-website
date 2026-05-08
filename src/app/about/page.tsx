export default function AboutPage() {
  return (
    <div className="bg-[#f8f6f3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-[#2c2c2c] mb-8 tracking-wide">
            About <span className="text-[#d4c7b8]">Transforming Textiles</span>
          </h1>
          
          <div className="space-y-12">
            <p className="text-xl text-[#6b6b6b] mb-8 leading-relaxed font-light">
              Textiles are one of humanity's most intimate infrastructures. They touch skin, protect bodies, 
              operate in hospitals, defense systems, cities and increasingly in space.
            </p>
            
            {/* Image Placeholder */}
            <div className="bg-gradient-to-r from-[#d4c7b8]/20 to-[#b8a491]/20 rounded-lg h-64 flex items-center justify-center mb-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#d4c7b8]/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#2c2c2c] text-2xl font-light">🏢</span>
                </div>
                <p className="text-[#6b6b6b] text-sm font-light italic">Company Image Placeholder</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-light text-[#2c2c2c] mb-6 tracking-wide">Our Story</h2>
            <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed font-light">
              Transforming Textiles AB was founded in 2020 by Sara Rosberg, during a moment that revealed both the fragility and potential 
              of the systems we rely on. What began as an exploration into whether textiles, the most 
              intimate infrastructure humanity lives in, could become responsive systems has evolved into 
              a broader material and systems architecture.
            </p>
            
            <p className="text-lg text-[#6b6b6b] mb-8 leading-relaxed font-light">
              Today, the company operates at the intersection of advanced materials, circular infrastructure, 
              and intelligent textile systems. Its work bridges material science and systems engineering to 
              transform textiles from passive products into active, long-life infrastructure.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#2c2c2c] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-light text-[#d4c7b8] mb-4 tracking-wide">Vision</h3>
                <p className="text-white/90 leading-relaxed font-light">
                  To redefine textiles as intelligent, circular infrastructure, supporting health, inclusion, 
                  and sustainability across industries, environments, and planetary boundaries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 border border-[#e8e4df]">
                <h3 className="text-2xl font-light text-[#2c2c2c] mb-4 tracking-wide">Mission</h3>
                <p className="text-[#6b6b6b] mb-4 leading-relaxed font-light">
                  To design and develop material systems and circular infrastructure that:
                </p>
                <ul className="space-y-2 text-[#6b6b6b] font-light">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Integrate Functionality directly into the fiber architecture
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Reduce reliance on chemical treatments and disposable systems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Enable traceability, recovery, and long-term material value
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#d4c7b8] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Support both terrestrial and space-based applications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}