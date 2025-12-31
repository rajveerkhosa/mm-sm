import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function FAQ() {
  return (
    <Section id="faq" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Got questions? We've got answers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {siteConfig.faqs.map((faq, index) => (
          <Card key={index}>
            <h4 className="mb-3 text-sinclair-green">{faq.question}</h4>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
