'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', exact: true },
  { href: '/system', label: 'System' },
  { href: '/applications', label: 'Applications' },
  { href: '/model', label: 'Model' },
  { href: '/shift', label: 'Shift' },
  { href: '/partner', label: 'Partner' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const onHero = isHome && !isScrolled;

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-[90rem] -translate-x-1/2 transition-all duration-300 sm:top-6 ${
        onHero
          ? 'border border-white/15 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          : isScrolled
            ? 'border border-white/10 bg-[#1a1a1a]/95 shadow-lg backdrop-blur-xl'
            : 'border border-white/10 bg-black/30 backdrop-blur-xl'
      } rounded-full text-white`}
    >
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between lg:h-16">
          <Link href="/" className="flex shrink-0 items-center">
            {logoError ? (
              <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold tracking-wide text-[#1a1a1a]">
                RE:WEAVE
              </span>
            ) : (
              <div className="rounded-full bg-white/95 px-2.5 py-1 shadow-md transition-colors hover:bg-white">
                <Image
                  src="/reweave-logo.jpg"
                  alt="RE:WEAVE"
                  width={160}
                  height={48}
                  className="h-9 w-auto lg:h-10"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-3">
            {navLinks.map((link) => {
              const isActive =
                'exact' in link && link.exact ? pathname === link.href : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] tracking-wide transition-colors xl:px-4 ${
                    isActive
                      ? 'bg-white/10 text-[#C8A882]'
                      : 'text-white/85 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] shadow-md transition-all hover:bg-[#C8A882] hover:text-white"
            >
              <span>Book a Call</span>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

        {isMenuOpen && (
          <div className="border-t border-white/10 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                'exact' in link && link.exact ? pathname === link.href : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-white/10 text-[#C8A882]' : 'text-white/90 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#1a1a1a] hover:bg-[#C8A882] hover:text-white"
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
