export default function Home() {
  // Тимчасовий масив з товарами (поки у нас ще не підключений бекенд і база даних)
  const products = [
    { id: 1, name: "Футболка оверсайз", price: "500 ₴" },
    { id: 2, name: "Худі базове", price: "1200 ₴" },
    { id: 3, name: "Штани карго", price: "1500 ₴" },
    { id: 4, name: "Кросівки білі", price: "2500 ₴" },
  ];

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Нові надходження</h1>

      {/* Сітка товарів (адаптивна: від 1 до 4 колонок залежно від екрана) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-xl p-4 flex flex-col hover:shadow-lg transition">
            {/* Сіра заглушка замість картинки */}
            <div className="w-full h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Фото товару
            </div>
            
            <h2 className="text-lg font-medium mb-1">{product.name}</h2>
            <p className="font-bold text-gray-700 mb-4">{product.price}</p>
            
            <button className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Додати в кошик
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}