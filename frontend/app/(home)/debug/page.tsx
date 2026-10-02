'use client';
import { useCart } from '@/components/CartContext';

export default function DebugPage() {
  const { items, addToCart, clearCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart Debug</h1>
      <button
        onClick={() =>
          addToCart({
            _id: 'test-1',
            name: 'Test Carpet',
            image: '/images/logo_tapi_aubergine.svg',
            price: 999,
          })
        }
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Add Test Carpet
      </button>
      <button onClick={clearCart} className="px-4 py-2 bg-red-600 text-white rounded mb-4 ml-2">
        Clear
      </button>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}