'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform overflow-hidden">
              <img src="/3 Patti Loot.webp" alt="3 Patti Loot Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-gaming font-bold animated-gradient">
                3 Patti Loot
              </h1>
              <p className="text-xs text-gray-400">Play, Win & Enjoy</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 py-3 border-t border-white/10">
          <Link 
            href="/" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            Home
          </Link>
          
          <Link 
            href="/blog" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            Blog
          </Link>

          <Link 
            href="/about" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            Contact Us
          </Link>

          <Link 
            href="/privacy-policy" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            Privacy Policy
          </Link>

          <Link 
            href="/disclaimer" 
            className="px-4 py-2 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
          >
            Disclaimer
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                🏠 Home
              </Link>
              
              <Link 
                href="/blog" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                📝 Blog
              </Link>

              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                ℹ️ About Us
              </Link>

              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                📞 Contact Us
              </Link>

              <Link 
                href="/privacy-policy" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                🔒 Privacy Policy
              </Link>

              <Link 
                href="/disclaimer" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg hover:bg-gaming-accent hover:text-gaming-dark transition-all font-semibold"
              >
                ⚠️ Disclaimer
              </Link>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000"
                  className="block px-4 py-3 bg-gaming-accent text-gaming-dark font-bold rounded-lg text-center hover:bg-gaming-purple hover:text-white transition-all"
                >
                  📱 Download APK Now
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

