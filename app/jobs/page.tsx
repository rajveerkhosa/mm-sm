import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Check, Phone, Navigation, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Careers - ${siteConfig.name}`,
  description: `Join our team at ${siteConfig.name}. We're hiring friendly, dependable people to help run the plaza.`,
};

const benefits = [
  "Competitive wages",
  "Paid time off",
  "Flexible scheduling",
  "Employee meal & store discounts",
  "Friendly team environment",
  "Growth opportunities",
];

const positions = [
  {
    title: "Cashier / Store Clerk",
    type: "Full-time / Part-time",
    description: "Handle customer transactions, stock shelves, and help keep the store and fuel area clean and welcoming. Friendly attitude and reliability are what we look for most.",
  },
];

export default function JobsPage() {
  return (
    <main id="main" tabIndex={-1} className="bg-midnight">
      {/* Header */}
      <section className="pt-36 pb-20 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sinclair-green/25 bg-sinclair-green/8 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-sinclair-green animate-pulse" />
            <span className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.2em]">Now Hiring</span>
          </div>
          <h1
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Join Our<br />
            <span className="text-white/55">Team.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-md">
            We&apos;re always looking for great people to join the {siteConfig.name} family.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Why Work Here</p>
          <h2 className="text-white mb-12">What We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.06] bg-midnight-100/40"
              >
                <div className="w-6 h-6 rounded-full bg-sinclair-green/10 border border-sinclair-green/25 flex items-center justify-center flex-shrink-0">
                  <Check className="text-sinclair-green" size={12} />
                </div>
                <span className="text-white/60 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Open Role</p>
          <h2 className="text-white mb-12">Now Hiring</h2>
          <div className="max-w-2xl">
            {positions.map((pos, i) => (
              <div
                key={i}
                className="group flex flex-col p-8 rounded-2xl border border-white/[0.06] hover:border-sinclair-green/25 bg-midnight-100/30 hover:bg-sinclair-green/[0.03] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{pos.title}</h3>
                    <span className="text-sinclair-green text-xs font-medium uppercase tracking-wide">{pos.type}</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">{pos.description}</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-between gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium group-hover:text-sinclair-green"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={14} />
                    Call to Apply
                  </span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-14 text-center border border-white/[0.06]">
            <h2 className="text-white mb-4">Ready to Apply?</h2>
            <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
              Give us a call or stop by in person to fill out an application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-sinclair-green hover:bg-sinclair-green-dark text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-sinclair text-sm"
              >
                <Phone size={16} />
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.mapsUrl}
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
