import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full border-b border-zinc-200 bg-white overflow-hidden">
      {/* Editorial Grid Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-start justify-center max-w-4xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-zinc-100 text-xs font-semibold tracking-widest uppercase text-zinc-800 mb-6 border border-zinc-200">
            <span className="w-1.5 h-1.5 bg-black" />
            Autumn / Winter 2026 Collection
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black uppercase leading-[1.05] mb-8">
            ARCHITECTURAL <br />
            <span className="text-zinc-400">MONOCHROME</span> ESSENTIALS.
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed mb-10 font-normal">
            Precision-cut silhouettes tailored with heavyweight organic textiles. 
            Stripped of excessive branding to highlight proportion, form, and texture.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/catalog"
              className="inline-flex justify-center items-center px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition shadow-sm"
            >
              Explore Catalog
            </Link>
            <Link
              href="/catalog?section=new-arrivals"
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-black border border-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition"
            >
              New Arrivals
            </Link>
          </div>
        </div>

        {/* Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-zinc-200">
          <div>
            <span className="text-xs font-bold text-zinc-400 tracking-widest block mb-2">01 / TEXTILE INTEGRITY</span>
            <h2 className="text-base font-bold uppercase tracking-wider text-black mb-1">Custom-Milled Weights</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              280 to 480 GSM dense organic cottons engineered for structure and lifetime durability.
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-zinc-400 tracking-widest block mb-2">02 / PROPORTION & DRAPE</span>
            <h2 className="text-base font-bold uppercase tracking-wider text-black mb-1">Architectural Fit</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Boxy drops, wide hems, and clean necklines constructed without loud external logos.
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-zinc-400 tracking-widest block mb-2">03 / SUSTAINABLE CRAFT</span>
            <h2 className="text-base font-bold uppercase tracking-wider text-black mb-1">Conscious Assembly</h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Ethically produced in family-owned mills across Portugal and Peru with zero carbon footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
