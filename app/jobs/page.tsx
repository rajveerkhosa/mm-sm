import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: `Careers - ${siteConfig.name}`,
  description: `Join our team at ${siteConfig.name}. We're hiring for multiple positions. Competitive pay, benefits, and a great work environment.`,
};

export default function JobsPage() {
  const benefits = [
    "Competitive wages",
    "Health insurance options",
    "Paid time off",
    "Flexible scheduling",
    "Employee discounts",
    "Growth opportunities",
  ];

  const positions = [
    {
      title: "Fuel Attendant",
      type: "Full-time / Part-time",
      description: "Assist customers with fueling, maintain pump area cleanliness, and ensure safety procedures.",
    },
    {
      title: "Cashier / Store Clerk",
      type: "Full-time / Part-time",
      description: "Handle customer transactions, stock shelves, and maintain store appearance.",
    },
    {
      title: "Kitchen Staff",
      type: "Full-time / Part-time",
      description: "Prepare hot food, maintain food safety standards, and ensure kitchen cleanliness.",
    },
    {
      title: "Maintenance Technician",
      type: "Full-time",
      description: "Maintain facility equipment, perform repairs, and ensure facility operations.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-charcoal text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            We're always looking for great people to join the {siteConfig.name} family
          </p>
          <div className="inline-block px-6 py-3 bg-sinclair-green rounded-lg text-2xl font-bold">
            NOW HIRING
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Work With Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer competitive benefits and a supportive work environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <div className="flex items-center gap-3">
                <Check className="text-sinclair-green flex-shrink-0" size={24} />
                <span className="text-lg font-semibold">{benefit}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Available Positions */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our current job openings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-sinclair-green/10 rounded-full">
                  <Icon name="door-open" className="text-sinclair-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1">{position.title}</h3>
                  <p className="text-sm text-gray-500 font-semibold">{position.type}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{position.description}</p>
              <Button href={`tel:${siteConfig.phone}`} variant="primary" size="sm" className="w-full">
                Call to Apply
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* How to Apply */}
      <Section className="bg-sinclair-green text-white text-center">
        <h2 className="mb-6">Ready to Apply?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Give us a call or stop by in person to fill out an application.
          We're looking forward to meeting you!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="lg" className="flex items-center justify-center gap-3">
            <Icon name="phone" size={24} />
            Call {siteConfig.phone}
          </Button>
          <Button href={siteConfig.mapsUrl} variant="outline" size="lg" className="bg-white text-sinclair-green border-white hover:bg-gray-100 flex items-center justify-center gap-3">
            <Icon name="navigation" size={24} />
            Get Directions
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
