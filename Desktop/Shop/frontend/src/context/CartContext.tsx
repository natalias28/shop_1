'use client'; // Це важливо, бо кошик працює на стороні клієнта (в браузері)

import { createContext, useContext, useState } from 'react';

// Створюємо сам контекст
const CartContext = createContext<any>(null);

// Створюємо провайдер, який буде обгортати наш додаток
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, product]);
    alert(`Товар "${product.name}" додано в кошик!`); // Тимчасове сповіщення для перевірки
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Спеціальний хук, щоб зручно діставати дані кошика з будь-якого компонента
export function useCart() {
  return useContext(CartContext);
}