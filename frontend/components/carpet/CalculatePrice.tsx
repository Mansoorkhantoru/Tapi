// components/carpet/PriceCalculator.tsx
"use client";

import React, { useState } from "react";

interface CalculatePriceProps {
  price: number; // change to string if your API returns a string
}
export default function CalculatePrice({price}:CalculatePriceProps) {
  const [priceCalculation, setPriceCalculation] = useState(false);
  const [width , setwidth] = useState("")
  const [length ,setlength] = useState("")
  const total = Number(width) * Number(length) * price ;
  
  return (
    <div className="relative">
      <button 
        onClick={() => setPriceCalculation(true)}
        className="px-4 py-5 bg-blue-600 text-white rounded-md "
      >
        Calculate Price
      </button>

      {priceCalculation && (
        <div className="mt-2 p-3 bg-gray-200 rounded-md absolute mt-[50px]  ">
          <p>{price}</p>
          <p>Width<span>*</span></p>
          <input type="text" placeholder="Enter width" value={width} onChange={(e)=>setwidth(e.target.value)} />
          <p>length<span>*</span></p>
          <input type="text" placeholder="Enter Length" value={length} onChange={(e)=>setlength(e.target.value)}/>
        </div>
      )}
      {width && length && (
            <div className="mt-2 p-2 bg-white rounded border absolute right-50 top-31 w-35">
              <p className="text-sm text-gray-600">
                {width} m × {length} m = {Number(width) * Number(length)} m²
              </p>
              <p className="text-lg font-bold">
                Total Rs: {total.toLocaleString("en-IN")}
              </p>
            </div>
          )}
    </div>
  );
}
