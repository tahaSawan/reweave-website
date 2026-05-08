import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4">
                <Image 
                  src="/f33-logo.png" 
                  alt="RE:WEAVE" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-light text-white tracking-wide">
                RE:WEAVE
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md font-light leading-relaxed">
              Transforming textiles into a resilient, closed-loop infrastructure for Earth and Space. Circular material systems for resilient industries and future habitats.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-white/60 font-light">Follow us:</span>
              <a href="#" className="text-[#C8A882] hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-[#C8A882] hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Supporting Pages */}
          <div>
            <h3 className="text-white font-light mb-6 text-lg tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">About</Link></li>
              <li><Link href="/vision" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">Vision</Link></li>
              <li><Link href="/press" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">Press / Updates</Link></li>
              <li><Link href="/legal" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">Legal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-light mb-6 text-lg tracking-wide">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@reweave.com" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">
                  info@reweave.com
                </a>
              </li>
              <li><Link href="/contact" className="text-white/70 hover:text-[#C8A882] font-light transition-colors">Contact Us</Link></li>
              <li>
                <Link href="/contact" className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-light hover:bg-[#C8A882] hover:text-white transition-colors inline-block">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-light">
            @RE:WEAVE 2026
          </p>
          <p className="text-white/60 text-sm font-light mt-4 md:mt-0">
            All copyright reserved @2026
          </p>
        </div>
      </div>
    </footer>
  );
}