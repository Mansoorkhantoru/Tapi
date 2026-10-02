'use client';

import { useCart } from '@/components/CartContext';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function BasketPage() {
  const { items, addToCart, removeFromCart, clearCart } = useCart();

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Basket</h1>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" strokeWidth={1.2} />
          <p className="text-xl text-gray-600 mb-2">Your basket is empty</p>
          <p className="text-sm text-gray-400 mb-6">
            Add some free carpet samples to get started
          </p>
          <Link
            href="/"
            className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Your Basket <span className="text-gray-400 text-xl">({totalItems})</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:underline"
        >
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Items list */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex gap-4 border border-gray-200 rounded-lg p-4 bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-md object-cover w-[120px] h-[120px]"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600 text-sm">₹{item.price} / m²</p>
                  <p className="text-xs text-green-600 mt-1">Free Sample</p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Qty controls */}
                  <div className="flex items-center gap-3 border rounded-md px-2 py-1">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="p-1 hover:bg-gray-100 rounded"
                      aria-label="Decrease"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-medium">{item.qty}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1 hover:bg-gray-100 rounded"
                      aria-label="Increase"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Samples</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sample Cost</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>₹0</span>
            </div>

            <button className="w-full px-4 py-3 bg-yellow-600 text-white rounded-md font-medium hover:bg-yellow-700 transition">
              Place Order
            </button>

            <Link
              href="/"
              className="block text-center text-sm text-gray-600 hover:underline mt-4"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}