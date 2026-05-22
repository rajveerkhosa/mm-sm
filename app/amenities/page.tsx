import { Icon } from "@/components/ui/Icon";
import { Footer } from "@/components/features/Footer";
import { CTAStrip } from "@/components/features/CTAStrip";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Amenities - ${siteConfig.name}`,
  description: `Full list of amenities at ${siteConfig.name}: truck parking, high-flow diesel, hot food from Tandoori Nights and Chester's Chicken, DEF at the pump, and more.`,
};

export default function AmenitiesPage() {
  return (
    <main id="main" tabIndex={-1} className="bg-midnight">
      {/* Header */}
      <section className="bg-midnight pt-36 pb-20 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Full Service</p>
          <h1
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Amenities &<br />
            <span className="text-white/55">Services</span>
          </h1>
          <p className="text-white/40 text-lg max-w-md">
            Everything you need for a comfortable stop at I-5 &amp; Lerdo Hwy.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {siteConfig.amenities.map((amenity, i) => (
              <div
                key={i}
                className="group flex items-center gap-5 p-6 rounded-2xl border border-white/[0.06] hover:border-sinclair-green/25 bg-midnight-100/40 hover:bg-sinclair-green/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-sinclair-green/15 border border-white/[0.06] group-hover:border-sinclair-green/25 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Icon
                    name={amenity.icon}
                    className="text-white/55 group-hover:text-sinclair-green transition-colors duration-300"
                    size={22}
                  />
                </div>
                <div>
                  <p className="text-white/70 group-hover:text-white font-semibold text-sm transition-colors duration-200">
                    {amenity.name}
                  </p>
                  <p className={`text-xs mt-0.5 font-medium ${amenity.available ? "text-sinclair-green" : "text-gold"}`}>
                    {amenity.available ? "Available" : "Coming Soon"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
      <Footer />
    </main>
  );
}
