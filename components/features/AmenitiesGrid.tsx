import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function AmenitiesGrid() {
  return (
    <Section id="amenities" className="bg-cream">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-sinclair-green-100 rounded-full mb-4">
          <span className="text-sinclair-green-700 font-bold text-sm uppercase tracking-wide">Full Service</span>
        </div>
        <h2 className="mb-6 text-navy">Amenities & Services</h2>
        <p className="text-navy-light text-xl max-w-2xl mx-auto leading-relaxed">
          Everything you need for a comfortable stop on the road
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
        {siteConfig.amenities.map((amenity, index) => (
          <Card key={index} className="text-center group">
            <div className="flex flex-col items-center gap-4">
              <div className="p-5 bg-gradient-to-br from-sinclair-green-100 to-sinclair-green-50 rounded-2xl group-hover:from-sinclair-green group-hover:to-sinclair-green-600 transition-all duration-300 shadow-md">
                <Icon name={amenity.icon} className="text-sinclair-green group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h4 className="font-bold text-base text-navy">{amenity.name}</h4>
              <Badge variant={amenity.available ? "available" : "coming-soon"}>
                {amenity.available ? "Available" : "Coming Soon"}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
