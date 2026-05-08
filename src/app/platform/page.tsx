export default function PlatformPage() {
  return (
    <div className="bg-[#f8f6f3] min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-[#2c2c2c] mb-8 tracking-wide">
            The <span className="text-[#C8A882]">Platform</span>
          </h1>
          <h2 className="text-2xl font-light text-[#6b6b6b] mb-12">
            Deep Tech & Supply Chain
          </h2>
          
          <div className="bg-white rounded-lg p-12 border border-[#e8e4df] mb-16">
            <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-8">
              Content for The Platform page will be provided by the client.
            </p>
            
            {/* Trust Signals */}
            <div className="bg-[#f8f6f3] rounded-lg p-8 mb-8">
              <h3 className="text-xl font-light text-[#2c2c2c] mb-4">Platform Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C8A882]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h4 className="font-medium text-[#2c2c2c] mb-2">Deep Tech</h4>
                  <p className="text-sm text-[#6b6b6b]">Advanced material science and engineering</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C8A882]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h4 className="font-medium text-[#2c2c2c] mb-2">Supply Chain</h4>
                  <p className="text-sm text-[#6b6b6b]">Integrated circular material flows</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#C8A882]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📡</span>
                  </div>
                  <h4 className="font-medium text-[#2c2c2c] mb-2">Smart Infrastructure</h4>
                  <p className="text-sm text-[#6b6b6b]">Connected textile systems</p>
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