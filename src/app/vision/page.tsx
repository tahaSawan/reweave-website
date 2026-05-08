export default function VisionPage() {
  return (
    <div className="bg-[#f8f6f3] min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-[#2c2c2c] mb-8 tracking-wide">
            <span className="text-[#C8A882]">Vision</span>
          </h1>
          <h2 className="text-2xl font-light text-[#6b6b6b] mb-12">
            Future Roadmap Through 2028 and Beyond
          </h2>
          
          <div className="bg-white rounded-lg p-12 border border-[#e8e4df] mb-16">
            <p className="text-lg text-[#6b6b6b] font-light leading-relaxed mb-8">
              Content for Vision page will be provided by the client.
            </p>
            
            {/* Timeline */}
            <div className="space-y-8 mb-8">
              <div className="border-l-4 border-[#C8A882] pl-8">
                <h3 className="text-xl font-medium text-[#2c2c2c] mb-2">2024-2025</h3>
                <p className="text-[#6b6b6b] mb-4">Foundation and Market Entry</p>
                <ul className="space-y-2 text-sm text-[#6b6b6b]">
                  <li>• Platform development and testing</li>
                  <li>• Strategic partnerships establishment</li>
                  <li>• Regulatory compliance framework</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-[#C8A882] pl-8">
                <h3 className="text-xl font-medium text-[#2c2c2c] mb-2">2026-2027</h3>
                <p className="text-[#6b6b6b] mb-4">Scale and Expansion</p>
                <ul className="space-y-2 text-sm text-[#6b6b6b]">
                  <li>• Global market penetration</li>
                  <li>• Supply chain integration</li>
                  <li>• Technology advancement</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-[#C8A882] pl-8">
                <h3 className="text-xl font-medium text-[#2c2c2c] mb-2">2028+</h3>
                <p className="text-[#6b6b6b] mb-4">Market Leadership</p>
                <ul className="space-y-2 text-sm text-[#6b6b6b]">
                  <li>• Industry standard establishment</li>
                  <li>• Next-generation technologies</li>
                  <li>• Circular economy leadership</li>
                </ul>
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