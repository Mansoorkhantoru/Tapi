"use client";

import React from "react";
import { Home, Calendar, MessageSquare, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------

interface AssistanceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const items: AssistanceItem[] = [
  {
    id: "home-visit",
    icon: Home,
    title: "Book a home visit",
    description: "Our experts will help you find your dream floor",
  },
  {
    id: "store-appointment",
    icon: Calendar,
    title: "Book a store appointment",
    description: "Over 220+ locations",
  },
  {
    id: "chat-advisors",
    icon: MessageSquare,
    title: "Chat with our expert advisors",
    description: "for instant advice",
  },
];

// ----------------------------------------------------------------------------
// Subcomponents
// ----------------------------------------------------------------------------

function AssistanceCard({ item }: { item: AssistanceItem }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className="w-full bg-[#f2f4f5] rounded-lg px-4 sm:px-5 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 text-left hover:bg-[#e9ecee] transition-colors"
    >
      <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#2e3a4b] flex-shrink-0" strokeWidth={1.5} />

      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#2e3a4b] text-sm sm:text-base">
          {item.title}
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-snug">
          {item.description}
        </p>
      </div>

      <ChevronRight className="w-5 h-5 text-[#2e3a4b] flex-shrink-0" />
    </button>
  );
}

// ----------------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------------

export default function PersonalAssistance() {
  return (
    <section className="w-full bg-[#f5f8fb] py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2e3a4b] mb-8 sm:mb-10">
          Personal assistance
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <AssistanceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}