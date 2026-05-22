import { siteConfig } from "@/config/site";
import { Navigation, Phone, ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden bg-midnight-50">
      {/* Green gradient background */}
      <div className="absolute inset-0 gradient-sinclair opacity-90" />

      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative rings */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              I-5 & Lerdo Hwy · Buttonwillow, CA
            </p>
            <h2
              className="font-black text-white leading-tight mb-3"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Ready to Stop?
            </h2>
            <p className="text-white/65 text-lg">
              Open 24/7 — no reservations, no hassle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:min-w-[220px]">
            <a
              href={siteConfig.mapsUrl}
              className="inline-flex items-center justify-between gap-3 bg-white text-sinclair-green font-bold px-6 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-xl group"
            >
              <span className="flex items-center gap-2 text-sm">
                <Navigation size={16} />
                Get Directions
              </span>
              <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-between gap-3 border-2 border-white/25 hover:border-white/50 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 group"
            >
              <span className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                {siteConfig.phone}
              </span>
              <ArrowRight size={14} className="opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
