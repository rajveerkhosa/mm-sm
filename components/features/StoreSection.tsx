import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export function StoreSection() {
  return (
    <Section id="store" className="bg-white">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <Card className="bg-gradient-to-br from-sinclair-green to-sinclair-green/80 text-white">
            <h3 className="mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {siteConfig.store.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="mb-6">{siteConfig.store.name}</h2>
          <p className="text-xl mb-6 text-gray-700">
            {siteConfig.store.description}
          </p>
          <p className="text-lg text-gray-600">
            Whether you need a quick snack, a hot meal, or supplies for the road,
            we've got you covered. Open 24/7 for your convenience.
          </p>
        </div>
      </div>
    </Section>
  );
}
