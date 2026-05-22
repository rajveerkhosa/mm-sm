import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Navigation, Phone } from "lucide-react";

const stats = [
  { value: "24/7", label: "Always Open" },
  { value: "20+", label: "Truck Spaces" },
  { value: "Hi-Flow", label: "Diesel Pumps" },
  { value: "DEF", label: "At Every Pump" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-midnight overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
        {/* Layered gradients for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Green accent — left vertical stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-sinclair-green to-transparent opacity-60" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 pt-36 pb-14 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-10 bg-sinclair-green" />
          <span className="text-sinclair-green font-semibold text-[11px] md:text-xs uppercase tracking-[0.25em]">
            Sinclair Authorized · I-5 & Lerdo Hwy · Buttonwillow, CA
          </span>
        </div>

        {/* Headline — cinematic size */}
        <h1
          className="font-black leading-[0.88] tracking-tight mb-8 max-w-3xl"
          style={{ fontSize: "clamp(52px, 9vw, 116px)" }}
        >
          <span className="block text-white">Your Road.</span>
          <span className="block text-gradient-green">Your Stop.</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/50 text-lg md:text-xl max-w-sm md:max-w-md mb-12 leading-relaxed font-light">
          Full-service fuel, parking, and hot food — open every hour of every day.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={siteConfig.mapsUrl}
            className="inline-flex items-center justify-center gap-3 bg-sinclair-green hover:bg-sinclair-green-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-sinclair-lg text-base"
          >
            <Navigation size={18} />
            Get Directions
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-3 border border-white/12 hover:border-white/30 hover:bg-white/[0.05] text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
          >
            <Phone size={18} />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/[0.07] bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`py-5 px-5 md:px-8 ${i > 0 ? "border-l border-white/[0.06]" : ""}`}
              >
                <div className="text-xl md:text-2xl font-black text-white tracking-tight mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/55 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
