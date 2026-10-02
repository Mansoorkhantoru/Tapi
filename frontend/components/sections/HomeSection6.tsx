"use client";

import React, { useState } from "react";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const fullText =
  "We're not like other flooring companies, with their dusty shops and pushy salespeople. You'll notice the Tapi difference the moment you enter one of our 220 showrooms nationwide. They're bright, modern spaces filled with the latest carpet, vinyl, laminate and wood flooring, and staffed by friendly experts who are there to help, not to hassle you into a sale.";

// ----------------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------------

export default function HomeSection5() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#eceef0] rounded-lg px-5 sm:px-8 py-5 sm:py-6">
          {expanded ? (
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {fullText}{" "}
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="text-blue-600 font-medium hover:underline whitespace-nowrap"
              >
                Read less −
              </button>
            </p>
          ) : (
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-2">
              {fullText}{" "}
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="text-blue-600 font-medium hover:underline whitespace-nowrap"
              >
                Read more +
              </button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}