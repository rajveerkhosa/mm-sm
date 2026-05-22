import { siteConfig } from "@/config/site";
import { Car, Truck, Zap } from "lucide-react";

const carFuels = [
  { name: "Regular Unleaded", octane: "87",   price: siteConfig.fuelPrices.car.unleaded },
  { name: "Premium Unleaded", octane: "91+",  price: siteConfig.fuelPrices.car.premium  },
  { name: "E85 Flex Fuel",    octane: "E85",  price: siteConfig.fuelPrices.car.e85      },
];

const truckFuels = [
  { name: "Ultra Low Sulfur Diesel", octane: "ULSD", price: siteConfig.fuelPrices.truck.diesel },
  { name: "Diesel Exhaust Fluid",    octane: "DEF",  price: siteConfig.fuelPrices.truck.def    },
];

export function FuelSection() {
  return (
    <section id="fuel" className="relative py-24 md:py-32 px-5 md:px-8 bg-midnight-50 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sinclair-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sinclair-red/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sinclair-green/25 bg-sinclair-green/8 mb-6">
            <Zap size={12} className="text-sinclair-green" />
            <span className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.2em]">Live Fuel Pricing</span>
          </div>
          <h2 className="text-white mb-4">Today&apos;s Prices</h2>
          <p className="text-white/55 text-base max-w-md mx-auto">
            Competitive rates for passenger vehicles and commercial trucks.
          </p>
        </div>

        {/* Price boards */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Car board */}
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden bg-midnight-100">
            <div className="flex items-center gap-3 px-7 py-5 border-b border-white/[0.05] bg-sinclair-green/8">
              <Car size={18} className="text-sinclair-green" />
              <span className="text-white font-semibold text-sm uppercase tracking-widest">Passenger Vehicles</span>
            </div>
            <div className="p-4 space-y-3">
              {carFuels.map((fuel, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 rounded-xl border border-white/[0.04] hover:border-sinclair-green/20 hover:bg-sinclair-green/[0.04] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sinclair-green/10 border border-sinclair-green/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-sinclair-green font-black text-xs">{fuel.octane}</span>
                    </div>
                    <div>
                      <p className="text-white/80 font-medium text-sm">{fuel.name}</p>
                      <p className="text-white/55 text-xs">per gallon</p>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-sinclair-green font-display tracking-tight">
                    {fuel.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Truck board */}
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden bg-midnight-100">
            <div className="flex items-center gap-3 px-7 py-5 border-b border-white/[0.05] bg-white/[0.03]">
              <Truck size={18} className="text-gold" />
              <span className="text-white font-semibold text-sm uppercase tracking-widest">Commercial Trucks</span>
            </div>
            <div className="p-4 space-y-3">
              {truckFuels.map((fuel, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 rounded-xl border border-white/[0.04] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-black text-xs">{fuel.octane}</span>
                    </div>
                    <div>
                      <p className="text-white/80 font-medium text-sm">{fuel.name}</p>
                      <p className="text-white/55 text-xs">per gallon</p>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-gold font-display tracking-tight">
                    {fuel.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-white/55 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-sinclair-green animate-pulse" />
            Prices updated regularly —{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sinclair-green hover:text-sinclair-green-light transition-colors font-medium"
            >
              call for current rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
