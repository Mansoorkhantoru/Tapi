'use client';
import React, { useState } from 'react';
import { useCart } from '@/components/CartContext';

const Cart = ({ carpet }: { carpet: any }) => {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(false);

  const handleAdd = () => {
    console.log('clicked', carpet);   
    addToCart(carpet);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="relative justify-center text-center">
      <button
        className="cursor-pointer px-4  py-2 bg-yellow-600 text-white rounded-md w-[90%] "
        onClick={handleAdd}
      >
        Order Free Samples
      </button>
      {toast && (
        <div className="absolute top-full mt-2 left-0 bg-green-600 text-white px-3 py-1 rounded-md text-sm z-50">
          ✓ Added
        </div>
      )}
    </div>
  );
};

export default Cart;