import Link from 'next/link';

export default function VerticalsSection() {
  const verticals = [
    {
      title: "Space & Aviation Technology",
      description: "Advanced textile solutions for aerospace and space exploration applications.",
      link: "/verticals/space",
      icon: "🚀"
    },
    {
      title: "Defense & Operational Resilience Technology", 
      description: "Mission-critical textile infrastructure for defense and security operations.",
      link: "/verticals/defense",
      icon: "🛡️"
    },
    {
      title: "Healthcare & Human Monitoring",
      description: "Smart textiles for medical applications and continuous health monitoring.",
      link: "/verticals/healthcare",
      icon: "🏥"
    },
    {
      title: "Smart City Infrastructure",
      description: "Intelligent textile systems for urban environments and smart city initiatives.",
      link: "/verticals/urban",
      icon: "🏙️"
    },
    {
      title: "Fashion & Cultural Demonstration Technology",
      description: "Sustainable fashion solutions that demonstrate circular textile principles.",
      link: "/verticals/fashion",
      icon: "👗"
    }
  ];

  return (
    <section className="bg-[#f8f6f3] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-[#2c2c2c] mb-6 tracking-wide">
            Verticals
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-3xl mx-auto font-light leading-relaxed">
            Our innovative textile solutions serve diverse industries and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {verticals.map((vertical, index) => (
            <Link 
              key={index}
              href={vertical.link}
              className="group bg-white rounded-lg p-8 hover:shadow-lg transition-all border border-[#e8e4df] hover:border-[#d4c7b8]"
            >
              <div className="w-16 h-16 bg-[#d4c7b8]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">{vertical.icon}</span>
              </div>
              <h3 className="text-xl font-light text-[#2c2c2c] mb-4 group-hover:text-[#b8a491] tracking-wide">
                {vertical.title}
              </h3>
              <p className="text-[#6b6b6b] mb-6 font-light leading-relaxed">
                {vertical.description}
              </p>
              <span className="text-[#2c2c2c] font-light group-hover:text-[#d4c7b8] inline-flex items-center transition-colors">
                Learn More 
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Verticals Overview Visual */}
        <div className="bg-white rounded-lg p-12 border border-[#e8e4df]">
          <h3 className="text-2xl font-light text-[#2c2c2c] mb-8 text-center tracking-wide">Application Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {verticals.map((vertical, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#d4c7b8]/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg">{vertical.icon}</span>
                </div>
                <h4 className="text-sm text-[#6b6b6b] font-light">{vertical.title.split(' ')[0]}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}