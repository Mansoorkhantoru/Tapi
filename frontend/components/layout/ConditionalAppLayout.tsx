"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ROUTES_WITH_NAVBAR = new Set([
  "", "about","carpets","basket","help","exploreroom","desginingroom"
]);

export default function ConditionalAppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname() || "";

  // Navbar show karne ki logic
  const segment = pathname.replace(/^\/|\/$/g, "") || "";
  const parts = segment ? segment.split("/") : [];

  let showNavbar = true;
  if (pathname.startsWith("/review/write")) {
    showNavbar = false;
  } else if (parts.length === 1 && !ROUTES_WITH_NAVBAR.has(parts[0])) {
    showNavbar = false;
  }

  return (
    <div className={`flex flex-col min-h-screen ${showNavbar ? "pt-16" : ""}`}>
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showNavbar && <Footer />}
    </div>
  );
}
