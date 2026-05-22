import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Flame, Drumstick, Clock, Phone, ArrowUpRight } from "lucide-react";

export function RestaurantsSection() {
  return (
    <section id="restaurants" className="bg-midnight py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">
            Eat With Us
          </p>
          <h2 className="text-white mb-4 leading-tight">
            Two Kitchens. <span className="text-white/55">One Stop.</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            From sizzling tandoor to crispy southern fried — fresh hot food, every hour of the day.
          </p>
        </div>

        {/* Featured: Tandoori Nights */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-3 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&q=85&fit=crop"
                alt="Authentic Indian dishes from Tandoori Nights"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />

              {/* Featured badge */}
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sinclair-red/90 backdrop-blur-md">
                  <Flame size={12} className="text-white" />
                  <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">
                    Now Featured
                  </span>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-base">Tandoori Nights</p>
                    <p className="text-white/55 text-xs">Authentic Indian Cuisine</p>
                  </div>
                  <div className="w-2 h-2 bg-sinclair-green rounded-full animate-pulse flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-sinclair-red/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <p className="text-sinclair-red text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Restaurant · Indian
            </p>
            <h3 className="text-white font-black text-4xl md:text-5xl leading-tight mb-5 font-display">
              Tandoori Nights
            </h3>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Hand-crafted curries, fresh-baked naan straight from the tandoor, fragrant biryanis, and bold,
              warming spices. Authentic Indian cooking — served hot, served fast, served right inside the plaza.
            </p>

            {/* Quick highlights */}
            <ul className="space-y-3 mb-8">
              {[
                "Tandoor-fired breads & kebabs",
                "Vegetarian & non-veg options",
                "Biryani, curries, & thali plates",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-sinclair-red flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="/tandoori-nights"
                className="inline-flex items-center justify-center gap-2 bg-sinclair-red hover:bg-sinclair-red/90 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-sinclair-red/20"
              >
                Visit Tandoori Nights
                <ArrowUpRight size={15} />
              </a>
              <div className="flex items-center gap-3 text-white/55 text-xs uppercase tracking-widest">
                <Clock size={13} className="text-sinclair-red" />
                Open daily inside the plaza
              </div>
            </div>
          </div>
        </div>

        {/* Chester's Chicken */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Restaurant · Fried Chicken
            </p>
            <h3 className="text-white font-black text-4xl md:text-5xl leading-tight mb-5 font-display">
              Chester&apos;s Chicken
            </h3>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Famous hand-breaded fried chicken made fresh all day. Crispy, golden, and packed with flavor —
              tenders, wings, drums, and family-size buckets to keep you fueled on the road.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Hand-breaded fresh daily",
                "Tenders, wings, & classic combos",
                "Sides, biscuits, & cold drinks",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-white/55 text-xs uppercase tracking-widest">
              <Drumstick size={13} className="text-gold" />
              Always cooked fresh
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562967914-608f82629710?w=1400&q=85&fit=crop"
                alt="Fresh fried chicken from Chester's Chicken"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />

              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/95 backdrop-blur-md">
                  <Drumstick size={12} className="text-midnight" />
                  <span className="text-midnight text-[11px] font-bold uppercase tracking-[0.2em]">
                    Fried Fresh
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-base">Chester&apos;s Chicken</p>
                    <p className="text-white/55 text-xs">Famous Fried Chicken</p>
                  </div>
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Hours strip */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/55 text-xs uppercase tracking-widest mb-1">Hours of operation</p>
            <p className="text-white font-bold text-lg">Open 24 Hours / 7 Days</p>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-3 border border-white/15 hover:border-sinclair-green/40 hover:bg-sinclair-green/[0.05] text-white/80 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
          >
            <Phone size={15} className="text-sinclair-green" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
