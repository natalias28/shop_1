'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../context/CartContext';
import ProductCard from '../../../components/ProductCard';

interface ProductDetailClientProps {
  product: {
    id: number;
    name: string;
    price: number;
    currency?: string;
    category: string;
    section: string;
    imageUrl: string;
    description: string;
    details: string[];
    sizes: string[];
    colors: string[];
    inStock: boolean;
  };
  relatedProducts: any[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || 'Black');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'details' | 'sizing' | 'shipping'>('details');

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 mb-10">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-black transition">
          Catalog
        </Link>
        <span>/</span>
        <Link href={`/catalog?category=${product.category}`} className="hover:text-black transition">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-black font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Product Main Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Product Visual */}
        <div className="relative w-full aspect-[4/5] bg-zinc-100 border border-zinc-200 overflow-hidden">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs uppercase tracking-widest">
              No Image Available
            </div>
          )}

          {product.section && (
            <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              {product.section.replace('-', ' ')}
            </div>
          )}
        </div>

        {/* Right: Product Narrative & Actions */}
        <div className="flex flex-col">
          <div className="border-b border-zinc-200 pb-8 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
              CASUAL STUDIOS / {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-black tracking-tight">
              {product.currency || '$'}{product.price}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8 font-normal">
            {product.description}
          </p>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-black">
                  Color: <span className="text-zinc-500 font-normal">{selectedColor}</span>
                </span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition cursor-pointer ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-zinc-300 bg-white text-zinc-800 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-black">
                  Select Size
                </span>
                <span className="text-xs text-zinc-400 hover:text-black transition cursor-pointer uppercase tracking-wider">
                  Size Guide
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-bold uppercase tracking-widest border transition cursor-pointer text-center ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-zinc-200 bg-white text-zinc-900 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Quantity */}
            <div className="flex items-center border border-zinc-300 w-fit shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3.5 text-sm font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition cursor-pointer"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="px-4 py-3.5 text-xs font-bold text-black min-w-10 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3.5 text-sm font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Submit CTA */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-4 px-8 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 active:scale-[0.99] transition cursor-pointer shadow-md text-center"
            >
              Add to Bag • {product.currency || '$'}{product.price * quantity}
            </button>
          </div>

          {/* Specifications Accordion / Tabs */}
          <div className="border-t border-zinc-200 pt-6">
            <div className="flex gap-6 border-b border-zinc-200 pb-3 mb-6 text-xs font-bold uppercase tracking-widest">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 border-b-2 transition cursor-pointer ${
                  activeTab === 'details'
                    ? 'border-black text-black'
                    : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                Composition & Care
              </button>
              <button
                onClick={() => setActiveTab('sizing')}
                className={`pb-2 border-b-2 transition cursor-pointer ${
                  activeTab === 'sizing'
                    ? 'border-black text-black'
                    : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                Fit & Proportions
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`pb-2 border-b-2 transition cursor-pointer ${
                  activeTab === 'shipping'
                    ? 'border-black text-black'
                    : 'border-transparent text-zinc-400 hover:text-black'
                }`}
              >
                Shipping & Returns
              </button>
            </div>

            <div className="text-xs text-zinc-600 leading-relaxed min-h-24">
              {activeTab === 'details' && (
                <ul className="space-y-2 list-disc list-inside">
                  {product.details?.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                  <li>Wash cold inside-out, lay flat to dry to preserve silhouette.</li>
                </ul>
              )}

              {activeTab === 'sizing' && (
                <p>
                  Cut with a relaxed, modern unisex drape. Designed for a slightly loose architectural fit. 
                  If you prefer a closer, more tailored silhouette, consider sizing down one size.
                </p>
              )}

              {activeTab === 'shipping' && (
                <p>
                  Complimentary worldwide express shipping on orders over $150. All shipments are 100% 
                  carbon-neutral. Returns accepted within 30 days of delivery with original packaging.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 pt-16 border-t border-zinc-200">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                Curated Suggestions
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black">
                You May Also Like
              </h2>
            </div>
            <Link
              href="/catalog"
              className="text-xs font-bold uppercase tracking-widest text-black hover:text-zinc-500 transition"
            >
              View Full Catalog ➔
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
