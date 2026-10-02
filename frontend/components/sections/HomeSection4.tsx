"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const options: string[] = [
  "I want to...",
  "Book a free measure and quote",
  "Track my order",
  "Find my nearest store",
  "Get in touch with customer service",
];

// ----------------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------------

export default function ActionSelectCard() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm px-6 sm:px-10 py-8 sm:py-10 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#2e3a4b] text-center mb-6">
          What did you come here to do today?
        </h2>

        {/* Select dropdown */}
        <div className="relative w-full sm:w-[90%] mb-6">
          <select
            defaultValue={options[0]}
            className="w-full appearance-none bg-[#f2f4f5] text-[#2e3a4b] font-medium rounded-md px-4 py-3 sm:py-4 pr-10 text-sm sm:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2e3a4b]/30"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="w-5 h-5 text-[#2e3a4b] absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Link */}
        <a
          href="#"
          className="text-sm sm:text-base text-[#2e3a4b] font-semibold underline hover:text-[#1c2530]"
        >
          Browse our Help Centre
        </a>
      </div>
    </section>
  );
}