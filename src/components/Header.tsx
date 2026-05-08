'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-black/20 backdrop-blur-xl rounded-full border border-white/10 text-white z-50">
      <nav className="px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-lg hover:bg-white transition-all duration-200">
                <Image
                  src="/reweave-logo.jpg"
                  alt="RE:WEAVE"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-[#C8A882] hover:text-white text-sm font-normal transition-colors">
              Home
            </Link>
            
            <Link href="/system" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              The System
            </Link>
            
            <Link href="/platform" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              The Platform
            </Link>
            
            <Link href="/applications" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              Applications
            </Link>
            
            <Link href="/model" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              The Model
            </Link>
            
            <Link href="/shift" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              The Shift
            </Link>
            
            <Link href="/partner" className="text-white hover:text-[#C8A882] text-sm font-normal transition-colors">
              Partner / Engage
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="bg-white/95 backdrop-blur-sm text-black px-5 py-2 rounded-full text-sm font-normal hover:bg-[#C8A882] hover:text-white transition-all duration-200 flex items-center space-x-2 shadow-lg"
            >
              <span>Book a Call</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#C8A882] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 bg-black/90 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#C8A882] hover:text-white font-medium transition-colors">
                Home
              </Link>
              <Link href="/system" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                The System
              </Link>
              <Link href="/platform" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                The Platform
              </Link>
              <Link href="/applications" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                Applications
              </Link>
              <Link href="/model" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                The Model
              </Link>
              <Link href="/shift" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                The Shift
              </Link>
              <Link href="/partner" className="text-white hover:text-[#C8A882] font-medium transition-colors">
                Partner / Engage
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-[#C8A882] hover:text-white transition-colors text-center mt-4"
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}