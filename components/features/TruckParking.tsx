import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Check, ShieldCheck, Clock, ParkingSquare } from "lucide-react";

const highlights = [
  { Icon: ParkingSquare, value: "20+", label: "Spaces" },
  { Icon: Clock,         value: "24/7", label: "Access"  },
  { Icon: ShieldCheck,   value: "Free", label: "No Cost" },
];

export function TruckParking() {
  return (
    <section id="parking" className="relative py-24 md:py-36 px-5 md:px-8 overflow-hidden bg-midnight">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1920&q=80&fit=crop"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/70" />
      </div>

      {/* Decorative green glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-sinclair-green/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">
              Truck Parking
            </p>
            <h2 className="text-white mb-6 leading-tight">
              Built for<br />
              <span className="text-white/55">Big Rigs.</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-sm">
              {siteConfig.parking.policy} Well-lit, monitored, and always available — no reservation needed.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-12">
              {siteConfig.parking.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sinclair-green/15 border border-sinclair-green/25 flex items-center justify-center flex-shrink-0">
                    <Check className="text-sinclair-green" size={11} />
                  </div>
                  <span className="text-white/55 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Quick stats row */}
            <div className="flex gap-10 pt-8 border-t border-white/[0.06]">
              {highlights.map(({ Icon, value, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sinclair-green/10 border border-sinclair-green/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-sinclair-green" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none">{value}</div>
                    <div className="text-[11px] text-white/55 uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Glass card */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 md:p-10 shadow-glass">
              <h3 className="text-white mb-8 text-xl font-bold">Parking Details</h3>
              <div className="divide-y divide-white/[0.06]">
                {[
                  { label: "Total Capacity",  value: siteConfig.parking.capacity },
                  { label: "Operating Hours", value: "24 Hours / 7 Days" },
                  { label: "Lighting",        value: "Full Coverage" },
                  { label: "Security",        value: "Monitored CCTV" },
                  { label: "Reservation",     value: "Walk-ins Welcome" },
                  { label: "Parking Fee",     value: "Complimentary" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-4">
                    <span className="text-white/55 text-sm">{row.label}</span>
                    <span className="text-white font-semibold text-sm">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-sinclair-green/10 pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-sinclair-green/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
