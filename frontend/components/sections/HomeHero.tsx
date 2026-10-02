import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Red top accent bar */}

      <div className="relative flex min-h-[340px] w-full items-center justify-center sm:min-h-[420px] lg:min-h-[560px]">
        {/* Background image */}
        <Image
          src="/images/hero-banner-img.webp"
          alt="Living room with plush carpet flooring"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center sm:px-6">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            The flooring people you can{" "}
            <span className="text-[#f2a71b]">TRUST</span>
          </h1>

          <div className="mt-6 flex w-full max-w-md flex-col gap-4 sm:mt-8">
            <a
              href="/desginingroom"
              className="flex items-center justify-center gap-2 rounded-md bg-[#f2a71b] px-6 py-4 text-sm font-bold text-[#1f2937] shadow-sm sm:text-base hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <Calendar className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
              Start Designing Your Room
            </a>
            <a
              href="/exploreroom"
              className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-6 py-4 text-sm font-bold text-[#1f2937] shadow-sm sm:text-base hover:scale-105 transition-transform duration-200 cursor-pointer"
            >
              <MapPin className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
              Explore Featured Room Templates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}