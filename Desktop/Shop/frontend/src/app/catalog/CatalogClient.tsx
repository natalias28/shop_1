'use client';

import { useState, useMemo } from 'react';
import ProductCard from '../../components/ProductCard';

interface CatalogClientProps {
  initialProducts: any[];
  categories: string[];
}

export default function CatalogClient({
  initialProducts,
  categories,
}: CatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    // Category Filter
    if (selectedCategory !== 'all') {
      list = list.filter(
        (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    // Section Filter
    if (selectedSection !== 'all') {
      list = list.filter(
        (p) => p.section?.toLowerCase() === selectedSection.toLowerCase(),
      );
    }

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q),
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [initialProducts, selectedCategory, selectedSection, searchQuery, sortBy]);

  const sections = ['all', 'new-arrivals', 'trending', 'essentials'];

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSection('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page Header */}
      <div className="border-b border-zinc-200 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
          COLLECTION ARCHIVE / FULL CATALOG
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            ALL GARMENTS
          </h1>
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Showing {filteredProducts.length} of {initialProducts.length} pieces
          </p>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col gap-6 mb-12">
        {/* Top controls: Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments..."
              className="w-full bg-white border border-zinc-300 px-4 py-2.5 text-xs text-black placeholder-zinc-400 focus:outline-none focus:border-black transition uppercase tracking-wider"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs uppercase font-bold tracking-widest text-zinc-400 shrink-0">
              Sort By:
            </label>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-white border border-zinc-300 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-black focus:outline-none focus:border-black transition cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Section Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-400 mr-2 shrink-0">
            Section:
          </span>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition cursor-pointer ${
                selectedSection === section
                  ? 'bg-black text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {section === 'all' ? 'All Sections' : section.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-bold tracking-widest text-zinc-400 mr-2 shrink-0">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider border transition cursor-pointer ${
                selectedCategory === cat
                  ? 'border-black bg-zinc-900 text-white'
                  : 'border-zinc-300 bg-white text-zinc-700 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-zinc-200 bg-zinc-50/50">
          <h3 className="text-lg font-bold uppercase tracking-wider text-black mb-2">
            No Garments Found
          </h3>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6 max-w-sm mx-auto">
            We couldn't find any items matching your selected criteria.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
