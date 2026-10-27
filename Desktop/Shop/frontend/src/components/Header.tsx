'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-2xl font-black tracking-widest text-black hover:opacity-80 transition"
        >
          CASUAL
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-zinc-700">
          <Link href="/catalog" className="hover:text-black transition">
            Catalog
          </Link>
          <Link href="/catalog?section=new-arrivals" className="hover:text-black transition">
            New Arrivals
          </Link>
          <Link href="/catalog?section=trending" className="hover:text-black transition">
            Trending
          </Link>
          <Link href="/catalog?section=essentials" className="hover:text-black transition">
            Essentials
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="group flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider bg-black text-white px-4 py-2.5 hover:bg-zinc-800 transition"
          >
            <span>Bag</span>
            <span className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-zinc-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-6 flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
          <Link 
            href="/catalog" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-zinc-500 transition"
          >
            Catalog (All Garments)
          </Link>
          <Link 
            href="/catalog?section=new-arrivals" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-zinc-500 transition"
          >
            New Arrivals
          </Link>
          <Link 
            href="/catalog?section=trending" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-zinc-500 transition"
          >
            Trending
          </Link>
          <Link 
            href="/catalog?section=essentials" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-zinc-500 transition"
          >
            Essentials
          </Link>
          <Link 
            href="/cart" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-zinc-500 transition"
          >
            Shopping Bag ({cartCount})
          </Link>
        </div>
      )}
    </header>
  );
}
