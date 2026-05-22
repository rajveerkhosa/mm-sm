"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Amenities", href: "#amenities" },
  { label: "Fuel Prices", href: "#fuel" },
  { label: "Parking", href: "#parking" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Jobs", href: "/jobs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when the viewport grows past md or on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-midnight/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="/" aria-label={`${siteConfig.name} — Home`} className="flex items-center gap-3 group">
            <div aria-hidden="true" className="w-8 h-8 md:w-9 md:h-9 gradient-sinclair rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-sinclair transition-all duration-300">
              <span className="text-white font-black text-base leading-none">L</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm md:text-base font-display tracking-wide">
                Lerdo Travel Plaza
              </span>
            </div>
          </a>

          {/* Mobile-only: centered Tandoori Nights pill */}
          <a
            href="/tandoori-nights"
            aria-label="Tandoori Nights — Indian restaurant inside the plaza"
            className="md:hidden absolute left-1/2 -translate-x-1/2 group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full overflow-hidden whitespace-nowrap"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-sinclair-red to-sinclair-red/85 rounded-full shadow-md shadow-sinclair-red/30" />
            <Flame aria-hidden="true" size={11} className="relative text-white animate-pulse" />
            <span className="relative text-white font-bold text-[11px] tracking-wide">
              Tandoori Nights
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.06] text-sm"
              >
                {link.label}
              </a>
            ))}

            {/* Visual separator before the featured Tandoori pill */}
            <span aria-hidden="true" className="mx-2 h-5 w-px bg-white/25" />

            {/* Emphasized Tandoori Nights link */}
            <a
              href="/tandoori-nights"
              aria-label="Tandoori Nights — Indian restaurant inside the plaza (new)"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden transition-all duration-300"
            >
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-sinclair-red/90 to-sinclair-red rounded-lg" />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-sinclair-red to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <Flame aria-hidden="true" size={13} className="relative text-white animate-pulse" />
              <span className="relative text-white font-bold text-sm tracking-wide">
                Tandoori Nights
              </span>
              <span aria-hidden="true" className="relative inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/25 text-white text-[9px] font-bold uppercase tracking-widest">
                New
              </span>
            </a>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call ${siteConfig.name} at ${siteConfig.phone}`}
              className="flex items-center gap-2 bg-sinclair-green hover:bg-sinclair-green-dark text-white font-semibold px-3 py-2 md:px-5 md:py-2.5 rounded-xl transition-all duration-200 hover:shadow-sinclair text-sm"
            >
              <Phone aria-hidden="true" size={14} />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="primary-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          id="primary-mobile-menu"
          aria-label="Mobile primary"
          hidden={!open}
          className="md:hidden border-t border-white/[0.06] pb-4 pt-2 space-y-1"
        >
          {/* Emphasized Tandoori Nights link — mobile */}
          <a
            href="/tandoori-nights"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-sinclair-red to-sinclair-red/80 text-white font-bold text-sm shadow-lg shadow-sinclair-red/20"
          >
            <span className="flex items-center gap-2">
              <Flame aria-hidden="true" size={15} />
              Tandoori Nights
            </span>
            <span aria-hidden="true" className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/25 text-white text-[9px] font-bold uppercase tracking-widest">
              New
            </span>
          </a>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-3 text-white/80 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/[0.06] text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
