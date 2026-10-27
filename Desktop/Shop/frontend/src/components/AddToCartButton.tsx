'use client';

import { useCart } from '../context/CartContext';

export default function AddToCartButton({
  product,
  size = 'M',
}: {
  product: any;
  size?: string;
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, size, 1)}
      className="w-full bg-black text-white py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition cursor-pointer"
    >
      Add to Bag
    </button>
  );
}
