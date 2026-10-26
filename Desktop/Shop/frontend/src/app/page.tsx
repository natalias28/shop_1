export default async function Home() {
  // Робимо запит до нашого бекенду на NestJS
  const res = await fetch("http://localhost:5000/products", { cache: "no-store" });
  const products = await res.json();

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Нові надходження</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition">
            <div className="w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Фото товару
            </div>
            
            <h2 className="text-lg font-medium mb-1">{product.name}</h2>
            <p className="font-bold text-gray-700 mb-4">{product.price} ₴</p>
            
            <button className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Додати в кошик
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
