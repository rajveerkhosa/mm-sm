"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-midnight py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">FAQ</p>
          <h2 className="text-white">Common Questions</h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06]">
          {siteConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                >
                  <span
                    className={cn(
                      "font-semibold text-base transition-colors duration-200",
                      isOpen ? "text-white" : "text-white/50 group-hover:text-white/80"
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      isOpen
                        ? "bg-sinclair-green text-white rotate-45"
                        : "bg-white/[0.06] text-white/55 group-hover:bg-white/[0.10] group-hover:text-white/60"
                    )}
                  >
                    <Plus size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12">
                    <p className="text-white/40 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
