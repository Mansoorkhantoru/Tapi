'use client';

import { Search, MapPin, Calendar, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="w-full bg-white mt-0 pt-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="flex w-full max-w-[180px] sm:max-w-xs">
          <div className="flex w-full items-center gap-2 border-b border-gray-300 pb-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full min-w-0 bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none"
            />
            <Search className="h-5 w-5 flex-shrink-0 text-gray-700" strokeWidth={1.5} />
          </div>
        </div>

        {/* Logo */}
        <Image
          src="/images/logo_tapi_aubergine.svg"
          width={200}
          height={50}
          alt="Logo"
          className="h-[40px] w-auto"
        />

        {/* Desktop actions */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#" className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900">
            <MapPin className="h-6 w-6" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-xs text-gray-600">Nearest store</span>
          </Link>

          <Link href="#" className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900">
            <Calendar className="h-6 w-6" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-center text-xs leading-tight text-gray-600">
              Book an<br />appointment
            </span>
          </Link>

          {/* ✅ Basket with live badge */}
          <Link
            href="/basket"
            className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900"
          >
            <div className="relative">
              <ShoppingCart className="h-6 w-6" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 min-w-5 px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </div>
            <span className="whitespace-nowrap text-xs text-gray-600">View Basket</span>
          </Link>

          <Link href="#" className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900">
            <Heart className="h-6 w-6" strokeWidth={1.5} />
            <span className="whitespace-nowrap text-xs text-gray-600">Favourites</span>
          </Link>
        </nav>

        {/* Mobile actions */}
        <nav className="flex items-center gap-4 lg:hidden">
          <Link href="#" className="text-gray-700">
            <MapPin className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <Link href="#" className="text-gray-700">
            <Calendar className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <Link href="/basket" className="relative text-gray-700">
            <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Link href="#" className="text-gray-700">
            <Heart className="h-5 w-5" strokeWidth={1.5} />
          </Link>
        </nav>
      </div>
    </header>
  );
}