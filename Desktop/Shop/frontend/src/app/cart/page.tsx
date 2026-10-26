'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems } = useCart();

  // Рахуємо загальну суму всіх доданих товарів
  const totalSum = cartItems.reduce((sum: number, item: any) => sum + Number(item.price), 0);

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Мій кошик</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-medium text-gray-500 mb-4">Тут поки що порожньо 🥺</h2>
          <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Повернутися до покупок
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Список товарів */}
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-4 border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                <div className="relative w-24 h-24 bg-gray-100 rounded-md overflow-hidden shrink-0">
                  {item.imageUrl && (
                    <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Артикул: {item.id}</p>
                </div>
                <div className="text-lg font-bold">{item.price} ₴</div>
              </div>
            ))}
          </div>

          {/* Блок з підсумком (чек) */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
            <h2 className="text-xl font-bold mb-4">Ваше замовлення</h2>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Товарів:</span>
              <span>{cartItems.length} шт.</span>
            </div>
            <div className="flex justify-between mb-6 text-xl font-bold border-t border-gray-200 pt-4">
              <span>Разом:</span>
              <span>{totalSum} ₴</span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium">
              Оформити замовлення
            </button>
          </div>
        </div>
      )}
    </main>
  );
}