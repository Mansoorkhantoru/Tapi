"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const faqs: FaqItem[] = [
  {
    id: "fit-flooring",
    question: "Do you fit flooring?",
    answer:
      "Yes, we offer a full fitting service carried out by our own trained fitting teams across the country.",
  },
  {
    id: "fitting-cost",
    question: "How much does fitting cost?",
    answer:
      "Fitting costs vary depending on the size of the room, the type of flooring and any additional work required. Speak to your local store for an accurate quote.",
  },
  {
    id: "move-furniture",
    question: "Do you move furniture out of the room before fitting new flooring?",
    answer:
      "Our fitting teams can move light furniture for you, but we recommend clearing valuable or heavy items yourself ahead of your appointment.",
  },
  {
    id: "uplift-remove",
    question: "Will you uplift and remove my old flooring?",
    answer:
      "Yes, uplifting and removal of your old flooring can be arranged as part of your fitting service for an additional charge.",
  },
];

// ----------------------------------------------------------------------------
// Subcomponents
// ----------------------------------------------------------------------------

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-l-4 border-[#f5a623] bg-[#eceef0]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left"
      >
        <span className="font-bold text-[#2e3a4b] text-sm sm:text-base leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-[#2e3a4b] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-5 -mt-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------------

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2e3a4b] mb-8 sm:mb-10">
          FAQs
        </h2>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-1 mb-8 sm:mb-10">
          {faqs.map((item) => (
            <FaqRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="border-2 border-[#2e3a4b] rounded-lg px-8 sm:px-10 py-3 sm:py-4 font-bold text-[#2e3a4b] text-sm sm:text-base hover:bg-[#2e3a4b] hover:text-white transition-colors"
          >
            See more FAQs
          </button>
        </div>
      </div>
    </section>
  );
}