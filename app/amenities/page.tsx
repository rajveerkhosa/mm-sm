import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Amenities - ${siteConfig.name}`,
  description: `Full list of amenities at ${siteConfig.name}: showers, laundry, Wi-Fi, truck parking, CAT scales, and more. Everything professional drivers need.`,
};

export default function AmenitiesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-charcoal text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4">Amenities & Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for a comfortable stop on the road
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.amenities.map((amenity, index) => (
            <Card key={index} className="hover:border-2 hover:border-sinclair-green transition-all">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-sinclair-green/10 rounded-full flex-shrink-0">
                  <Icon name={amenity.icon} className="text-sinclair-green" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{amenity.name}</h3>
                  <Badge variant={amenity.available ? "available" : "coming-soon"}>
                    {amenity.available ? "Available Now" : "Coming Soon"}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-sinclair-green text-white text-center">
        <h2 className="mb-6">Have Questions?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Call us anytime for more information about our amenities and services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="lg">
            Call {siteConfig.phone}
          </Button>
          <Button href="/" variant="outline" size="lg" className="bg-white text-sinclair-green border-white hover:bg-gray-100">
            Back to Home
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
