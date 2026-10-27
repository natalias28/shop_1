'use client';

import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-black text-white px-5 py-3.5 rounded-none shadow-2xl flex items-center gap-4 text-sm tracking-wide border border-zinc-800">
        <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
        <span>{toastMessage}</span>
        <button
          onClick={dismissToast}
          className="text-zinc-400 hover:text-white transition text-base ml-2 cursor-pointer"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
