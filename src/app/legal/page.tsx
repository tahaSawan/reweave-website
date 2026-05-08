export default function LegalPage() {
  return (
    <div className="bg-[#f8f6f3] min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-[#2c2c2c] mb-8 tracking-wide">
            <span className="text-[#C8A882]">Legal</span>
          </h1>
          <h2 className="text-2xl font-light text-[#6b6b6b] mb-12">
            IP Declarations, Compliance Certifications & Privacy
          </h2>
          
          <div className="bg-white rounded-lg p-12 border border-[#e8e4df] mb-16">
            <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-8">
              Content for Legal page will be provided by the client.
            </p>
            
            {/* Legal Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">IP Declarations</h3>
                <p className="text-sm text-[#6b6b6b]">Patent portfolio and intellectual property rights</p>
              </div>
              
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">Compliance Certifications</h3>
                <p className="text-sm text-[#6b6b6b]">ESA/ECSS standards and regulatory compliance</p>
              </div>
              
              <div className="bg-[#f8f6f3] rounded-lg p-6">
                <div className="w-16 h-16 bg-[#C8A882]/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-medium text-[#2c2c2c] mb-2">Privacy & Security</h3>
                <p className="text-sm text-[#6b6b6b]">Data protection and privacy policies</p>
              </div>
            </div>
            
            {/* Compliance Standards */}
            <div className="bg-[#2c2c2c] rounded-lg p-8 text-white mb-8">
              <h3 className="text-xl font-light text-[#C8A882] mb-6">Compliance Standards</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">ESA</span>
                  </div>
                  <p className="text-xs text-white/80">European Space Agency</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">ISO</span>
                  </div>
                  <p className="text-xs text-white/80">ISO Standards</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">EU</span>
                  </div>
                  <p className="text-xs text-white/80">EU Regulations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#C8A882]/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">GDPR</span>
                  </div>
                  <p className="text-xs text-white/80">Data Protection</p>
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