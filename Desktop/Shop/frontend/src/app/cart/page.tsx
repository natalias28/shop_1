'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems, totalSum, updateQuantity, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const shippingCost = totalSum > 150 || cartItems.length === 0 ? 0 : 15;
  const discount = promoApplied ? Math.round(totalSum * 0.1) : 0;
  const finalTotal = Math.max(0, totalSum - discount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'CASUAL10' || promoCode.trim().toUpperCase() === 'MINIMAL') {
      setPromoApplied(true);
    }
  };

  const handleSimulatedCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1200);
  };

  if (checkoutSuccess) {
    return (
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          ✓
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
          Order Confirmed
        </span>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black mb-4">
          Thank you for your order
        </h1>
        <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed mb-8">
          A confirmation dispatch has been sent. Your garments are being prepared with plastic-free packaging in our studio.
        </p>
        <Link
          href="/catalog"
          className="inline-block bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition"
        >
          Continue Browsing
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page Title */}
      <div className="border-b border-zinc-200 pb-8 mb-10 flex justify-between items-end">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">
            Shopping Bag
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
            Your Cart
          </h1>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs uppercase tracking-widest text-zinc-400 hover:text-black transition cursor-pointer"
          >
            Clear Bag
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-zinc-200 bg-zinc-50/50">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2">
            Bag Empty
          </span>
          <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">
            There are no items in your bag
          </h2>
          <p className="text-sm text-zinc-500 max-w-md mx-auto mb-8">
            Explore our curated catalog to discover architectural silhouettes and heavyweight essentials.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition"
          >
            Explore Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.size || index}`} className="py-6 flex gap-6 items-center">
                {/* Thumbnail */}
                <Link
                  href={`/products/${item.id}`}
                  className="relative w-24 sm:w-32 aspect-[4/5] bg-zinc-100 shrink-0 border border-zinc-200 overflow-hidden block"
                >
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-400">
                      No Image
                    </div>
                  )}
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between self-stretch py-1">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <Link
                        href={`/products/${item.id}`}
                        className="text-sm sm:text-base font-bold text-black uppercase tracking-wide hover:underline line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm sm:text-base font-bold text-black shrink-0">
                        ${item.price * item.quantity}
                      </span>
                    </div>

                    <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                      Size: <span className="text-black font-semibold">{item.size || 'M'}</span>
                    </p>
                    <p className="text-xs text-zinc-400">
                      Unit Price: ${item.price}
                    </p>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center border border-zinc-300">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, -1)}
                        className="px-3 py-1 text-xs font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-xs font-bold text-black min-w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, 1)}
                        className="px-3 py-1 text-xs font-bold text-zinc-600 hover:text-black hover:bg-zinc-100 transition cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-xs uppercase tracking-widest text-zinc-400 hover:text-black transition cursor-pointer underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Checkout Card */}
          <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200 p-6 sm:p-8">
            <h2 className="text-base font-bold uppercase tracking-widest text-black mb-6 pb-4 border-b border-zinc-200">
              Summary
            </h2>

            <div className="space-y-4 text-xs uppercase tracking-wider text-zinc-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-black">${totalSum}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Shipping:</span>
                <span className="font-bold text-black">
                  {shippingCost === 0 ? 'Complimentary' : `$${shippingCost}`}
                </span>
              </div>

              {promoApplied && (
                <div className="flex justify-between text-black font-bold">
                  <span>Promo (CASUAL10):</span>
                  <span>-${discount}</span>
                </div>
              )}

              <div className="border-t border-zinc-200 pt-4 flex justify-between text-sm font-black text-black">
                <span>Total:</span>
                <span>${finalTotal}</span>
              </div>
            </div>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="PROMO CODE (TRY: CASUAL10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
                className="flex-1 bg-white border border-zinc-300 px-3 py-2 text-xs uppercase tracking-wider text-black placeholder-zinc-400 focus:outline-none focus:border-black transition"
              />
              <button
                type="submit"
                disabled={promoApplied}
                className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 disabled:opacity-50 transition shrink-0"
              >
                {promoApplied ? 'Applied' : 'Apply'}
              </button>
            </form>

            {/* Checkout CTA */}
            <button
              onClick={handleSimulatedCheckout}
              disabled={isCheckingOut}
              className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 disabled:opacity-60 transition cursor-pointer shadow-sm text-center mb-4"
            >
              {isCheckingOut ? 'Processing Order...' : `Checkout • $${finalTotal}`}
            </button>

            <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
              Complimentary carbon-neutral shipping on orders over $150. Tax calculated at dispatch.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
