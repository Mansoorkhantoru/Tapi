"use client"; 

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Section1 = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Jab user dropdown change kare
  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (value === 'default') {
      params.delete('sort'); // Default hai toh URL se hata do
    } else {
      params.set('sort', value); // Warna URL mein set kar do
    }

    router.push(`?${params.toString()}`); // URL update kar do
  };

  return (
    <div className='flex justify-between items-center mx-[10px]'>
      <div className='flex gap-[10px] items-center'>
        <p>Sort by</p>
        {/* onChange event lagaya aur value set ki */}
        <select 
          onChange={handleSortChange} 
          defaultValue={searchParams.get('sort') || 'default'}
          className="border p-2 rounded"
        >
          <option value="default">Popularity</option>
          <option value="relevance">Relevance</option>
          <option value="discount">Price : most discount</option>
          <option value="lowToHigh">Price : low to High</option>
        </select>
      </div>
      <div className='flex gap-[10px] items-center'>
        <p className='text-[12px]'>Showing 197 Products</p>
        <ol>1 2 3 next</ol>
      </div>
    </div>
  );
};

export default Section1;