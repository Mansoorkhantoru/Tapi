import type { SVGProps } from "react";
import { ChevronRight } from "lucide-react";


function FittingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="10" y="7" width="15" height="18" rx="1" />
      <path d="M10 7c-4 0-5 3.5-5 5.5s1 5.5 5 5.5" />
      <circle cx="7.5" cy="12.5" r="1.6" />
    </svg>
  );
}

function MeasuringIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="7" y="15" width="20" height="7" rx="1.5" transform="rotate(-35 17 18)" />
      <path d="M12 22l-4 4" strokeLinecap="round" />
      <path d="M15 13.5l1.5-1.5M18 16.5l1.5-1.5M21 19.5l1.5-1.5" />
    </svg>
  );
}

function PercentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M11 6h7l3 3v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l3-3Z" />
      <path d="M18 6v3h3" />
      <text x="16" y="21" fontSize="7" fontWeight="700" textAnchor="middle" stroke="none" fill="currentColor">
        0%
      </text>
    </svg>
  );
}

function WheelbarrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M7 12h11l3 7H10z" />
      <circle cx="8" cy="23" r="2.5" />
      <path d="M10.5 21l-5-3" />
      <path d="M21 19l4-9" />
      <path d="M25 10h2" />
    </svg>
  );
}

function PriceHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M6 20c2-1 4-1 6 0l4 1.5c1.5.5 3 .3 4-.6l6-5" />
      <path d="M6 20v4" />
      <path d="M16 12v9M13 14h5.5a1.8 1.8 0 0 1 0 3.5H14" />
    </svg>
  );
}

function SmileyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="16" cy="16" r="10" />
      <path d="M11.5 19c1.2 1.5 2.8 2.2 4.5 2.2s3.3-.7 4.5-2.2" strokeLinecap="round" />
      <circle cx="12.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* --- Data --- */

const benefits = [
  {
    Icon: FittingIcon,
    title: "We can arrange fitting",
    subtitle: "The perfect fit without the hassle",
  },
  {
    Icon: MeasuringIcon,
    title: "Free measuring & planning",
    subtitle: "Get expert help at every step",
  },
  {
    Icon: PercentIcon,
    title: "0% interest-free credit",
    subtitle: "Spread the cost, at no extra cost",
  },
  {
    Icon: WheelbarrowIcon,
    title: "Uplift & removal",
    subtitle: "We can take care of your old flooring",
  },
  {
    Icon: PriceHandIcon,
    title: "Our carpet price promise",
    subtitle: "Your dream carpet for the best price",
  },
  {
    Icon: SmileyIcon,
    title: "Wear guarantee on every floor",
    subtitle: "Peace of mind for years to come",
  },
] as const;

export default function WhyTapi() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 mt-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#33475b] sm:mb-8 sm:text-3xl">
          Why is Tapi right for YOU?
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ Icon, title, subtitle }) => (
            <a
              key={title}
              href="#"
              className="flex items-center gap-4 rounded-xl bg-gray-100 px-4 py-4 transition-colors hover:bg-gray-200 sm:px-5"
            >
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#33475b] text-white">
                <Icon className="h-7 w-7" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-base font-bold text-[#33475b]">
                  {title}
                </span>
                <span className="block truncate text-sm text-gray-500">
                  {subtitle}
                </span>
              </span>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-[#33475b]" strokeWidth={2} />
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="w-full max-w-md rounded-lg bg-[#33475b] px-8 py-4 text-center text-base font-bold text-white transition-colors hover:bg-[#283748] sm:w-auto"
          >
            More about our services
          </a>
        </div>
      </div>
    </section>
  );
}