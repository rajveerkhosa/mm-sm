import { siteConfig } from "@/config/site";
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Amenities",   href: "#amenities" },
  { label: "Fuel Prices", href: "#fuel"      },
  { label: "Truck Parking", href: "#parking" },
  { label: "Restaurants",  href: "#restaurants" },
  { label: "Photo Gallery", href: "#gallery" },
  { label: "FAQ",         href: "#faq"       },
];

const pageLinks = [
  { label: "Contact Us",   href: "/contact" },
  { label: "Now Hiring",   href: "/jobs"    },
  { label: "Amenities",    href: "/amenities" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 gradient-sinclair rounded-xl flex items-center justify-center flex-shrink-0 shadow-sinclair">
                <span className="text-white font-black text-base">L</span>
              </div>
              <span className="text-white font-bold text-sm font-display">
                Lerdo Travel Plaza
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              {siteConfig.tagline}. Proudly serving drivers at I-5 &amp; Lerdo Hwy in Buttonwillow, CA.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sinclair-green/20 bg-sinclair-green/8">
              <div className="w-1.5 h-1.5 rounded-full bg-sinclair-green animate-pulse" />
              <span className="text-sinclair-green text-[11px] font-medium">Open Now · 24/7</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/55 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Contact</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-sinclair-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/55 text-sm leading-snug">{siteConfig.address.street}</p>
                  <p className="text-white/55 text-sm">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                </div>
              </div>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm group">
                <Phone size={14} className="text-sinclair-green flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm group">
                <Mail size={14} className="text-sinclair-green flex-shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <Clock size={14} className="text-sinclair-green flex-shrink-0" />
                <span className="text-white/55">Open 24 Hours</span>
              </div>
            </div>
          </div>

          {/* On-site */}
          <div>
            <h4 className="text-white/55 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">On-Site</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white/55 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Pages</h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-white/55 text-xs leading-relaxed">
                Sinclair Authorized<br />Fuel Partner
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/55">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Buttonwillow, CA · I-5 & Lerdo Hwy</p>
        </div>
      </div>
    </footer>
  );
}
