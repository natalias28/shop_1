'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    currency?: string;
    imageUrl: string;
    category?: string;
    section?: string;
    colors?: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col bg-white border border-zinc-200 hover:border-black transition duration-300">
      {/* Product Image Link */}
      <Link href={`/products/${product.id}`} className="block relative w-full aspect-[4/5] bg-zinc-100 overflow-hidden">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400 uppercase tracking-widest">
            No Imagery
          </div>
        )}

        {/* Section / Category Eyebrow Badge */}
        {product.section && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-black border border-zinc-200">
            {product.section.replace('-', ' ')}
          </div>
        )}
      </Link>

      {/* Details Box */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
            {product.category || 'Apparel'}
          </div>
          <Link href={`/products/${product.id}`} className="hover:underline">
            <h3 className="text-sm font-semibold tracking-wide text-black line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm font-bold text-black mt-1.5">
            {product.currency || '$'}{product.price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
          <Link
            href={`/products/${product.id}`}
            className="w-full py-2.5 text-center text-[11px] font-bold uppercase tracking-widest border border-zinc-300 text-black hover:border-black transition"
          >
            Details
          </Link>
          <button
            onClick={() => addToCart(product, 'M', 1)}
            className="w-full py-2.5 text-center text-[11px] font-bold uppercase tracking-widest bg-black text-white hover:bg-zinc-800 transition cursor-pointer"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
