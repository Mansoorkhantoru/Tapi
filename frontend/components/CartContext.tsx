'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Carpet = {
  _id: string;
  name: string;
  image: string;
  price: number;
};

type CartItem = Carpet & { qty: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (carpet: Carpet) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (carpet: Carpet) => {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === carpet._id);
      if (existing) {
        return prev.map((i) =>
          i._id === carpet._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...carpet, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) =>
    setItems((prev) => prev.filter((i) => i._id !== id));

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};