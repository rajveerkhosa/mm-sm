import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export function TruckParking() {
  return (
    <Section id="parking" className="bg-white">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h2 className="mb-6">Truck Parking</h2>
          <p className="text-xl mb-6 text-gray-700">
            <strong className="text-sinclair-green">{siteConfig.parking.capacity}</strong> of secure,
            well-lit parking available 24/7.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            {siteConfig.parking.policy}
          </p>

          <ul className="space-y-3">
            {siteConfig.parking.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="text-sinclair-green mt-1 flex-shrink-0" size={20} />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="bg-charcoal text-white">
          <h3 className="mb-4">Parking Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-600">
              <span className="text-gray-300">Capacity</span>
              <span className="font-bold text-xl">{siteConfig.parking.capacity}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-600">
              <span className="text-gray-300">Availability</span>
              <span className="font-bold text-xl">24/7</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-600">
              <span className="text-gray-300">Security</span>
              <span className="font-bold text-xl">Monitored</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Reservation</span>
              <span className="font-bold text-xl">Not Required</span>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
