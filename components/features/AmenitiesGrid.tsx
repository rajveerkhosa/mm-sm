import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function AmenitiesGrid() {
  return (
    <section id="amenities" className="bg-midnight-50 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              Full Service
            </p>
            <h2 className="text-white leading-tight">
              Everything You Need,<br />
              <span className="text-white/40">One Stop.</span>
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-xs leading-relaxed">
            Fuel, rest, food, and facilities for professional drivers at I-5 &amp; Lerdo Hwy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {siteConfig.amenities.map((amenity, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-start gap-4 p-6 md:p-7 rounded-2xl border border-white/[0.06] hover:border-sinclair-green/30 bg-midnight-100/50 hover:bg-sinclair-green/[0.05] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sinclair-green/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 w-11 h-11 bg-white/[0.05] group-hover:bg-sinclair-green/20 border border-white/[0.08] group-hover:border-sinclair-green/30 rounded-xl flex items-center justify-center transition-all duration-300">
                <Icon
                  name={amenity.icon}
                  className="text-white/40 group-hover:text-sinclair-green transition-colors duration-300"
                  size={20}
                />
              </div>

              <span className="relative z-10 font-semibold text-white/60 group-hover:text-white/90 text-sm leading-tight transition-colors duration-300">
                {amenity.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
