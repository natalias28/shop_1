'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="text-2xl font-black tracking-widest uppercase block mb-4">
                CASUAL
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
                A design studio dedicated to reductionist garment design, sculptural proportions, 
                and uncompromising textile craftsmanship.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-3">
                Seasonal Dispatch
              </h3>
              {subscribed ? (
                <p className="text-xs text-zinc-400 tracking-wider">
                  ✓ Thank you. You are now subscribed to private previews.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column: Collections */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">
              Collections
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase">
              <li>
                <Link href="/catalog" className="text-zinc-400 hover:text-white transition">
                  All Garments
                </Link>
              </li>
              <li>
                <Link href="/catalog?section=new-arrivals" className="text-zinc-400 hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/catalog?section=trending" className="text-zinc-400 hover:text-white transition">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/catalog?section=essentials" className="text-zinc-400 hover:text-white transition">
                  Core Essentials
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=hoodies" className="text-zinc-400 hover:text-white transition">
                  Hoodies & Outerwear
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=pants" className="text-zinc-400 hover:text-white transition">
                  Trousers & Pants
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Assistance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">
              Assistance
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase">
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Complimentary Shipping
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  30-Day Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Garment Care Guide
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Order Inquiries
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Store Locator
                </span>
              </li>
            </ul>
          </div>

          {/* Column: Studio */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">
              Studio
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase">
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Design Philosophy
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Mills & Sustainability
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Press & Editorial
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-white transition cursor-pointer">
                  Careers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase text-zinc-500">
          <p>© {new Date().getFullYear()} CASUAL STUDIOS INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-300 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 transition cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
