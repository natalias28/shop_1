import Image from 'next/image';
import AddToCartButton from '../components/AddToCartButton'; // <-- Імпортуємо нову кнопку

export default async function Home() {
  const res = await fetch("http://localhost:5000/products", { cache: "no-store" });
  const products = await res.json();

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Нові надходження</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition">
            
            <div className="w-full h-64 relative bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Немає фото
                </div>
              )}
            </div>
            
            <h2 className="text-lg font-medium mb-1">{product.name}</h2>
            <p className="font-bold text-gray-700 mb-4">{product.price} ₴</p>
            
            {/* Використовуємо нашу нову інтерактивну кнопку */}
            <AddToCartButton product={product} />
            
          </div>
        ))}
      </div>
    </main>
  );
}
