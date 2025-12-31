import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Navigation, Phone, Fuel } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-navy text-white py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* Sinclair green accent strip */}
      <div className="absolute top-0 left-0 right-0 h-2 gradient-sinclair"></div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sinclair-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sinclair-red rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sinclair-green/20 border border-sinclair-green px-6 py-2 rounded-full mb-6">
          <Fuel className="text-sinclair-green" size={20} />
          <span className="text-sinclair-green-100 font-semibold">Sinclair Fuel Partner</span>
        </div>

        <h1 className="mb-6 text-balance bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          {siteConfig.name}
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-3xl mx-auto">
          <Button
            href={siteConfig.mapsUrl}
            variant="primary"
            size="xl"
            className="w-full sm:w-auto min-w-[280px] flex items-center justify-center gap-4"
          >
            <Navigation size={32} />
            Get Directions
          </Button>

          <Button
            href={`tel:${siteConfig.phone}`}
            variant="secondary"
            size="xl"
            className="w-full sm:w-auto min-w-[280px] flex items-center justify-center gap-4"
          >
            <Phone size={32} />
            Call Now
          </Button>
        </div>

        {/* Quick info bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sinclair-green mb-1">24/7</div>
            <div className="text-sm text-gray-400">Always Open</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sinclair-green mb-1">50+</div>
            <div className="text-sm text-gray-400">Parking Spots</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sinclair-green mb-1">Hi-Flow</div>
            <div className="text-sm text-gray-400">Diesel Pumps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-sinclair-green mb-1">Clean</div>
            <div className="text-sm text-gray-400">Showers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
