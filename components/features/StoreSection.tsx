import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export function StoreSection() {
  return (
    <section id="store" className="bg-midnight py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85&fit=crop"
                alt="Fresh food at the Trucker Deli & Grill"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-2 h-2 bg-sinclair-green rounded-full animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">{siteConfig.store.name}</p>
                    <p className="text-white/50 text-xs">Serving fresh food 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-sinclair-green/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">
              Food & Store
            </p>
            <h2 className="text-white mb-6 leading-tight">
              {siteConfig.store.name}
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              {siteConfig.store.description} Real food made fresh, all day and all night — because the road doesn&apos;t stop, and neither do we.
            </p>

            <ul className="space-y-4">
              {siteConfig.store.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-sinclair-green/10 border border-sinclair-green/25 flex items-center justify-center flex-shrink-0">
                    <Check className="text-sinclair-green" size={12} />
                  </div>
                  <span className="text-white/60 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <p className="text-white/55 text-xs uppercase tracking-widest">Hours of operation</p>
              <p className="text-white font-bold text-lg mt-1">Open 24 Hours / 7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
