'use client';

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="w-full border-b border-gray-200 p-4 flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="text-2xl font-black tracking-tighter">
        SHOP.
      </Link>
      
      <nav className="hidden md:flex gap-6 font-medium">
        <Link href="/" className="hover:text-gray-500">Каталог</Link>
        <Link href="#" className="hover:text-gray-500">Про нас</Link>
      </nav>

      {/* Тепер це посилання, яке веде на сторінку /cart */}
      <Link href="/cart" className="bg-black text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition">
        Кошик <span className="bg-white text-black px-2 py-0.5 rounded-full text-sm">{cartItems.length}</span>
      </Link>
    </header>
  );
}