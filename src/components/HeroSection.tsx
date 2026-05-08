import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#2c2c2c] via-[#3a3a3a] to-[#2c2c2c] overflow-hidden">
      {/* Background Image Placeholder - Space for cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c2c2c]/80 via-transparent to-[#2c2c2c]/80"></div>
      
      {/* Placeholder for planets/space elements - using theme colors */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[#d4c7b8]/30 to-[#b8a491]/30 rounded-full blur-sm opacity-60"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-[#C8A882]/40 to-[#b8a491]/40 rounded-full blur-sm opacity-50"></div>
      <div className="absolute bottom-40 right-32 w-32 h-32 bg-gradient-to-br from-[#d4c7b8]/20 to-[#C8A882]/20 rounded-full blur-md opacity-70"></div>
      
      {/* Additional cosmic elements with theme colors */}
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-[#f8f6f3]/20 to-[#d4c7b8]/20 rounded-full blur-lg opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-[#b8a491]/25 to-[#8B7355]/25 rounded-full blur-xl opacity-50"></div>
      
      {/* Placeholder for city skyline - using theme colors */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#2c2c2c]/90 via-[#2c2c2c]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div className="flex justify-center items-end h-full space-x-2 opacity-30">
          <div className="bg-[#d4c7b8] w-4 h-16"></div>
          <div className="bg-[#C8A882] w-3 h-20"></div>
          <div className="bg-[#b8a491] w-5 h-12"></div>
          <div className="bg-[#d4c7b8] w-4 h-24"></div>
          <div className="bg-[#C8A882] w-6 h-18"></div>
          <div className="bg-[#b8a491] w-3 h-14"></div>
          <div className="bg-[#d4c7b8] w-4 h-22"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#C8A882] text-sm tracking-[0.2em] font-light mb-8 uppercase">
            Welcome to Transforming Textiles
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
            Textiles. Reimagined as<br/>
            <span className="text-[#C8A882]">Infrastructure.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Circular material systems for resilient industries and future habitats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/quote" 
              className="bg-white/95 backdrop-blur-sm text-[#2c2c2c] px-8 py-3 rounded-full font-light tracking-wide hover:bg-[#C8A882] hover:text-white transition-all duration-300 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle stars/particles effect placeholder - using theme colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#C8A882]/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 left-1/2 w-1 h-1 bg-[#d4c7b8]/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-[#b8a491]/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#C8A882]/40 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>
    </section>
  );
}