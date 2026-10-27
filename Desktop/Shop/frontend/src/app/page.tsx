import Link from 'next/link';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export const dynamic = 'force-dynamic';

async function fetchProducts() {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiUrl = rawApiUrl.replace(/\/$/, '');

  try {
    const res = await fetch(`${apiUrl}/products`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error: any) {
    if (error?.digest === 'DYNAMIC_SERVER_USAGE') {
      throw error;
    }
    console.error('Failed to fetch products from backend:', error);
  }
  return [];
}

export default async function Home() {
  const products = await fetchProducts();

  const newArrivals = products.filter((p: any) => p.section === 'new-arrivals');
  const essentials = products.filter((p: any) => p.section === 'essentials');
  const trending = products.filter((p: any) => p.section === 'trending');

  return (
    <div className="w-full bg-white flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Section: New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full border-b border-zinc-200">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              01 / AUTUMN 2026 CAPSULE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/catalog?section=new-arrivals"
            className="text-xs font-bold uppercase tracking-widest text-black hover:text-zinc-500 transition inline-flex items-center gap-2"
          >
            Explore Capsule ➔
          </Link>
        </div>

        {newArrivals.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-200 bg-zinc-50/50">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Loading latest arrivals...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* 3. Editorial Statement Banner */}
      <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
            DESIGN MANIFESTO
          </span>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-8">
            "We reject the fleeting tempo of fashion. We create objects of quiet permanence."
          </blockquote>
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed mb-10">
            Every garment begins with custom yarn weights, precise geometric cuts, and a zero-branding philosophy. Built for those who understand that simplicity is the ultimate expression of luxury.
          </p>
          <Link
            href="/catalog"
            className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition"
          >
            View Complete Collection
          </Link>
        </div>
      </section>

      {/* 4. Section: Core Essentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full border-b border-zinc-200">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              02 / FOUNDATIONAL WARDROBE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Core Essentials
            </h2>
          </div>
          <Link
            href="/catalog?section=essentials"
            className="text-xs font-bold uppercase tracking-widest text-black hover:text-zinc-500 transition inline-flex items-center gap-2"
          >
            View Essentials ➔
          </Link>
        </div>

        {essentials.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-200 bg-zinc-50/50">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Loading core essentials...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {essentials.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* 5. Section: Trending & Outerwear */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              03 / STUDIO FAVORITES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Trending Silhouettes
            </h2>
          </div>
          <Link
            href="/catalog?section=trending"
            className="text-xs font-bold uppercase tracking-widest text-black hover:text-zinc-500 transition inline-flex items-center gap-2"
          >
            Browse Trending ➔
          </Link>
        </div>

        {trending.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-200 bg-zinc-50/50">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Loading trending items...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trending.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
