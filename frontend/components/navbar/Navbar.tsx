"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Carpets", href: "/carpets" },
  {label:"Walls" , href:"/desginingroom"},
  { label: "Vinyl Flooring", href: "#" },
  { label: "Laminate", href: "#" },
  { label: "Luxury Vinyl Tiles", href: "#" },
  { label: "Engineered Wood", href: "#" },
  { label: "Artificial Grass", href: "#" },
  { label: "Ideas Hub", href: "#" },
  { label: "Basket", href: "/basket" },
  { label: "Home Visit", href: "/home-visit" },
  { label: "Help", href: "/help" },
  {label:"Explore Room" , href:"/exploreroom"}
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-t border-[#4B5563] bg-white">
      <div className="mx-auto flex w-fit items-stretch justify-center">
        {/* SALE tag */}
        <a
          href="#"
          className="flex flex-shrink-0 items-center justify-center bg-[#d90a1c] px-6 py-4 sm:px-8"
        >
          <span className="text-sm font-bold tracking-wide text-white sm:text-base">
            SALE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 px-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="whitespace-nowrap text-[15px] text-gray-700 hover:text-[#d90a1c]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile/tablet toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="ml-auto flex items-center px-4 text-gray-700 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile/tablet dropdown */}
      {open && (
        <ul className="flex flex-col border-t border-gray-100 bg-white px-4 py-2 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-3 text-[15px] text-gray-700 hover:text-[#d90a1c]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
