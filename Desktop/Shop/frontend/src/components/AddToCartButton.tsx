'use client'; // Ця кнопка теж інтерактивна

import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Додати в кошик
    </button>
  );
}