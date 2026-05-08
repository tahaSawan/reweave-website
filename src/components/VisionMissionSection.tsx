export default function VisionMissionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Vision */}
          <div className="bg-[#2c2c2c] rounded-lg p-8 text-white">
            <h2 className="text-3xl font-light text-[#d4c7b8] mb-6 tracking-wide">Vision</h2>
            <p className="text-white/90 leading-relaxed font-light">
              To redefine textiles as intelligent, circular infrastructure, supporting health, 
              inclusion, and sustainability across industries, environments, and planetary boundaries.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#f8f6f3] rounded-lg p-8 border border-[#e8e4df]">
            <h2 className="text-3xl font-light text-[#2c2c2c] mb-6 tracking-wide">Mission</h2>
            <p className="text-[#6b6b6b] mb-6 leading-relaxed font-light">
              To design and develop material systems and circular infrastructure that:
            </p>
            <ul className="space-y-3 text-[#6b6b6b] font-light">
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

          {/* Placeholder for visual/image */}
          <div className="bg-gradient-to-br from-[#d4c7b8]/20 to-[#b8a491]/20 rounded-lg h-full min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#d4c7b8]/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[#2c2c2c] text-2xl font-light">🎯</span>
              </div>
              <p className="text-[#6b6b6b] text-sm font-light italic">Vision/Mission Visual<br/>Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}