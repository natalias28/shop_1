import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiUrl = rawApiUrl.replace(/\/$/, '');

  try {
    const res = await fetch(`${apiUrl}/products/${id}`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(`Failed to fetch product ${id} from ${apiUrl}:`, error);
  }
  return null;
}

async function getAllProducts() {
  const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:5000';
  const apiUrl = rawApiUrl.replace(/\/$/, '');

  try {
    const res = await fetch(`${apiUrl}/products`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch related products:', error);
  }
  return [];
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    // If backend returned 404 or is offline, check fallback
    notFound();
  }

  const allProducts = await getAllProducts();
  const relatedProducts = allProducts
    .filter((p: any) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="flex-1 w-full bg-white">
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
