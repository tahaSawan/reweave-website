export default function PressPage() {
  return (
    <div className="bg-[#f8f6f3] min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-[#2c2c2c] mb-8 tracking-wide">
            <span className="text-[#C8A882]">Press</span> / Updates
          </h1>
          <h2 className="text-2xl font-light text-[#6b6b6b] mb-12">
            Market News, Technical Breakthroughs, and Partnership Announcements
          </h2>
          
          <div className="bg-white rounded-lg p-12 border border-[#e8e4df] mb-16">
            <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-8">
              Content for Press / Updates page will be provided by the client.
            </p>
            
            {/* Press Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">Market News</h3>
                <p className="text-sm text-[#6b6b6b]">Industry developments and market insights</p>
              </div>
              
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">Technical Breakthroughs</h3>
                <p className="text-sm text-[#6b6b6b]">Innovation and technology advancements</p>
              </div>
              
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">Partnership Announcements</h3>
                <p className="text-sm text-[#6b6b6b]">Strategic collaborations and alliances</p>
              </div>
            </div>
            
            {/* Media Resources */}
            <div className="bg-[#2c2c2c] rounded-lg p-8 text-white mb-8">
              <h3 className="text-xl font-light text-[#C8A882] mb-4">Media Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Press Kit</h4>
                  <p className="text-sm text-white/80 mb-2">Comprehensive media resources and company information</p>
                  <a href="#" className="text-[#C8A882] hover:text-white text-sm">Download Press Kit →</a>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Media Contact</h4>
                  <p className="text-sm text-white/80 mb-2">For media inquiries and interview requests</p>
                  <a href="mailto:press@transformingtextiles.com" className="text-[#C8A882] hover:text-white text-sm">press@transformingtextiles.com</a>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="/contact"
                className="bg-[#2c2c2c] text-white px-8 py-3 rounded-full font-light hover:bg-[#C8A882] transition-colors inline-flex items-center space-x-2"
              >
                <span>Book a Call with Our Team</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}