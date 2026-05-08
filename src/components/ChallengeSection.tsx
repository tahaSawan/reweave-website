export default function ChallengeSection() {
  return (
    <section className="bg-[#f8f6f3] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              The <span className="text-[#d4c7b8]">Challenge</span>
            </h2>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-16 h-px bg-[#2c2c2c] mt-8"></div>
          </div>
          <div className="flex-2 ml-8">
            <p className="text-lg text-[#6b6b6b] font-light leading-relaxed">
              The global textile industry still operates largely on a linear model: This system 
              drives high water and chemical use, short product lifespans, and limited true 
              recycling. Circularity requires more than better products. It requires infrastructure.
            </p>
          </div>
        </div>

        {/* Challenge Points */}
        <div className="bg-[#2c2c2c] rounded-lg p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[#d4c7b8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-[#2c2c2c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Materials are passive and lack the ability to communicate, adapt, or provide real-time insights.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[#d4c7b8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-[#2c2c2c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Lifecycle management is fragmented, leading to inefficiencies, waste, and loss of control across systems.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[#d4c7b8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-[#2c2c2c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Critical industries (space, defence, infrastructure) lack real-time visibility into material performance and condition.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-[#d4c7b8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-3 h-3 text-[#2c2c2c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/90 font-light leading-relaxed">
                Rising regulatory demands (ESPR, DPP, EPR) require full lifecycle traceability, but current systems fail to deliver effectively
              </p>
            </div>
          </div>
        </div>

        {/* Current Landscape vs Paradigm Shift */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-6">Current Landscape</h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-4">
              Existing solutions usually operate in silos. Traditional materials remain passive and disconnected. 
              IoT solutions rely on external sensors rather than embedded intelligence.
            </p>
            <p className="text-[#6b6b6b] font-light leading-relaxed">
              Traceability and compliance systems are applied after production, as reporting layers rather than 
              integrated capabilities. No existing category integrates intelligence directly into the material itself.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-light text-[#2c2c2c] mb-6">Paradigm Shift</h3>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-4">
              Materials are no longer passive assets. They are becoming intelligent, connected, and part of a larger system architecture.
            </p>
            <p className="text-[#6b6b6b] font-light leading-relaxed">
              The shift is from materials as products to materials as infrastructure. Compliance is no longer a reporting exercise 
              it must be embedded into the infrastructure itself.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#2c2c2c] text-white px-6 py-3 rounded-full font-light hover:bg-[#d4c7b8] hover:text-[#2c2c2c] transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}