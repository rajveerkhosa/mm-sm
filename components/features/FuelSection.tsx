import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { Car, Truck } from "lucide-react";

export function FuelSection() {
  const carFuels = [
    {
      name: "Regular Unleaded",
      price: siteConfig.fuelPrices.car.unleaded,
      label: "87",
    },
    {
      name: "Premium",
      price: siteConfig.fuelPrices.car.premium,
      label: "91+",
    },
  ];

  const truckFuels = [
    {
      name: "High-Flow Diesel",
      price: siteConfig.fuelPrices.truck.diesel,
      label: "ULSD",
    },
    {
      name: "DEF at Pump",
      price: siteConfig.fuelPrices.truck.def,
      label: "DEF",
    },
  ];

  return (
    <section id="fuel" className="relative py-24 md:py-32 px-4 md:px-6 overflow-hidden bg-navy">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sinclair-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sinclair-red rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 bg-sinclair-green/20 border-2 border-sinclair-green rounded-full mb-6">
            <span className="text-sinclair-green font-bold text-sm uppercase tracking-wider">Live Fuel Pricing</span>
          </div>
          <h2 className="mb-6 text-white font-display">Today's Fuel Prices</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Competitive pricing for both cars and commercial vehicles
          </p>
        </div>

        {/* Two-column layout for Cars and Trucks */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Cars Section */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-3 bg-sinclair-green px-6 py-3 rounded-2xl shadow-sinclair-lg">
                <Car className="text-white" size={28} />
                <span className="text-white font-bold text-xl font-display">For Cars</span>
              </div>
            </div>

            <div className="pt-12 pb-8 px-6 md:px-8 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl">
              <div className="space-y-6">
                {carFuels.map((fuel, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-center justify-between p-6 bg-white/10 rounded-2xl border border-white/20 hover:border-sinclair-green/50 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-sinclair-green/20 rounded-xl flex items-center justify-center">
                          <span className="text-sinclair-green font-black text-lg">{fuel.label}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{fuel.name}</h4>
                          <p className="text-gray-400 text-sm">per gallon</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl md:text-5xl font-black text-sinclair-green font-display">
                          {fuel.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trucks Section */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-3 bg-sinclair-red px-6 py-3 rounded-2xl shadow-xl">
                <Truck className="text-white" size={28} />
                <span className="text-white font-bold text-xl font-display">For Trucks</span>
              </div>
            </div>

            <div className="pt-12 pb-8 px-6 md:px-8 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl">
              <div className="space-y-6">
                {truckFuels.map((fuel, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-center justify-between p-6 bg-white/10 rounded-2xl border border-white/20 hover:border-sinclair-red/50 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-sinclair-red/20 rounded-xl flex items-center justify-center">
                          <span className="text-sinclair-red font-black text-sm">{fuel.label}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{fuel.name}</h4>
                          <p className="text-gray-400 text-sm">per gallon</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl md:text-5xl font-black text-sinclair-red font-display">
                          {fuel.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sinclair Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 mb-6">
            <div className="w-3 h-3 bg-sinclair-green rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">Proud Sinclair Fuel Partner</span>
          </div>
          <p className="text-gray-400 text-sm">
            Prices updated regularly. Call for current pricing:{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-sinclair-green hover:text-sinclair-green-400 font-bold transition-colors">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
