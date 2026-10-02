"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";
import { Mail } from "lucide-react";
import { useState } from "react";

// lucide-react no longer ships brand/logo icons, so these are small inline SVGs
function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.19 4.1 15.13 4 13.9 4c-2.56 0-4.31 1.56-4.31 4.42V10.5H7v3h2.59V21h3.91z" />
        </svg>
    );
}
function InstagramIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}
function TwitterIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.9 3H21l-6.6 7.5L22.2 21h-6.8l-5.3-6.9L4 21H1.9l7-8-7.9-9.9H8l4.8 6.3L18.9 3zm-1.2 16h1.9L7.4 5H5.4l12.3 14z" />
        </svg>
    );
}
function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9.5h4V21H3V9.5zm7 0h3.8v1.57h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9.5z" />
        </svg>
    );
}

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const columns = [
    {
        title: "About Tapi",
        links: [
            { label: "About Tapi", href: "/about-us" },
            {
                label: "Tapiness",
                href: "/tapiness",
            },
            { label: "Trust", href: "/trust" },
            { label: "Get in touch", href: "/contact-us" },
            { label: "Help Centre", href: "/help" },
            { label: "Careers", href: "/" },
            { label: "Charity", href: "/help/charity" },
            { label: "Carpetright", href: "/carpetright-carpets" },
            { label: "Wow us to win £500!", href: "ugccompetition" },
        ],
    },
    {
        title: "Our Services",
        links: [
            { label: "Book your home visit", href: "/book-a-home-visit" },
            { label: "Find your nearest store", href: "/" },
            { label: "Measuring & Planning", href: "/services/measuring-and-planning" },
            { label: "Fitting", href: "/services/fitting" },
            { label: "Uplift & Removal", href: "services/uplift-and-disposal" },
            { label: "Interest Free Credit", href: "/services/interest-free-credit" },
            { label: "Wear guarantee", href: "/services/wear-guarantee" },
            { label: "Carpet Price Promise", href: "/services/our-carpet-price-promise" },
            { label: "Business to Business", href: "/services/business-to-business" },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { label: "Carpet", href: "/help" },
            { label: "Vinyl Flooring", href: "/faqs" },
            { label: "Laminate", href: "/status" },
            { label: "Luxury Vinyl Tiles", href: "/privacy" },
            { label: "Engineered Wood", href: "/terms" },
            { label: "Herringbone Flooring", href: "/terms" },
            { label: "Artificial Grass", href: "/terms" },
            { label: "Brands at Tapi", href: "/terms" },
            { label: "FREE Flooring Guide", href: "/terms" },
            { label: "Watch Video Guides", href: "/terms" },
        ],
    },

     {
        title: "Shop by Room",
        links: [
            { label: "Bedroom Flooring", href: "/help" },
            { label: "Bathroom Flooring", href: "/faqs" },
            { label: "Kitchen Flooring", href: "/status" },
            { label: "Living Room Flooring", href: "/privacy" },
            { label: "Stairs Flooring", href: "/terms" },
            { label: "Hallway Flooring", href: "/terms" },
            { label: "Dining Room Flooring", href: "/terms" },
            { label: "Home Office Flooring", href: "/terms" },
            { label: "Conservatory Flooring", href: "/terms" },
        ],
    },
];

const socials = [
    { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
    { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
    { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
    { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | submitting | success

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus("submitting");
        // TODO: wire this up to your actual newsletter endpoint
        await new Promise((r) => setTimeout(r, 600));
        setStatus("success");
        setEmail("");
    };

    return (
        <footer className={`${manrope.className}`}>
            <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] lg:gap-8">
                    {/* Brand / About */}


                    {/* Link columns */}
                    {columns.map((col) => (
                        <div key={col.title}>
                            <p className="text-[13px] font-extrabold tracking-wide uppercase">
                                {col.title}
                            </p>
                            <ul className="mt-4 list-none space-y-3">
                                {col.links.map((l) => (
                                    <li key={l.label} className="flex items-center gap-2.5">
                                        {/* <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#2DD4BF]" /> */}
                                        <Link
                                            href={l.href}
                                            className="text-[14px] font-medium transition hover:text-gray/900"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <p className="text-[13px] font-extrabold tracking-wide uppercase">
                            Sign up for our newsletter
                        </p>
                        <p className="mt-4 max-w-[260px] text-[13px] leading-[19px] font-medium">
                          Receive the latest offers, promotions and Tapi news delivered straight to your inbox with our exclusive email newsletter.
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-4 max-w-[260px]">
                            <div className="flex items-center border-b pb-2 transition focus-within:border-[#2DD4BF]">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email address"
                                    aria-label="Email address"
                                    className="w-full bg-transparent text-[13px] font-medi outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    aria-label="Subscribe"
                                    className="shrink-0 rounded-full border border-[#2DD4BF] p-1 transition hover:bg-[#2DD4BF] hover:text-[#1A3562] disabled:opacity-50"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                            {status === "success" && (
                                <p className="mt-2 text-[12px] font-medium ">
                                    Thanks for subscribing!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center sm:justify-start sm:text-left">
                        <p className="text-[12px] font-medium">
                          Terms of Use
                        </p>
                        <span className="hidden text-white/30 sm:inline">·</span>
                        <Link
                            href="/privacy"
                            className="text-[12px] font-medium  transition hover:text-[#2DD4BF]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                             className="text-[12px] font-medium  transition hover:text-[#2DD4BF]"
                        >
                           Press Office
                        </Link>
                        <Link
                            href="/cookies"
                            className="text-[12px] font-medium transition hover:text-[#2DD4BF]"
                        >
                           HTML Sitemap
                        </Link>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center justify-center gap-3">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-8 w-8 items-center justify-center rounded-full border transition hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
                            >
                                <Icon width={15} height={15} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}