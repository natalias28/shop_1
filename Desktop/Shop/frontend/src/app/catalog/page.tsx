import CatalogClient from './CatalogClient';

export const dynamic = 'force-dynamic';

async function fetchInitialProducts() {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiUrl = rawApiUrl.replace(/\/$/, '');

  try {
    const res = await fetch(`${apiUrl}/products`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch catalog products from backend:', error);
  }
  return [];
}

async function fetchCategories() {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiUrl = rawApiUrl.replace(/\/$/, '');

  try {
    const res = await fetch(`${apiUrl}/products/categories`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
  return ['all', 'hoodies', 'pants', 't-shirts', 'tanks', 'knitwear'];
}

export default async function CatalogPage() {
  const [products, categories] = await Promise.all([
    fetchInitialProducts(),
    fetchCategories(),
  ]);

  return (
    <main className="flex-1 w-full bg-white">
      <CatalogClient initialProducts={products} categories={categories} />
    </main>
  );
}
