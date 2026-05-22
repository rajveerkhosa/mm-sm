"use client";

import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { useState, FormEvent } from "react";
import { Phone, MapPin, Clock, Mail, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-midnight-100 border border-white/[0.12] focus:border-sinclair-green/60 focus:bg-midnight-200 rounded-xl px-4 py-3.5 text-white placeholder-white/45 text-sm outline-none transition-all duration-200";

  return (
    <main id="main" tabIndex={-1} className="bg-midnight min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-20 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Contact</p>
          <h1
            className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                Reach out with any questions. We&apos;re available around the clock to help.
              </p>

              <div className="space-y-6">
                {[
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: siteConfig.phone,
                    href: `tel:${siteConfig.phone}`,
                    sub: "Available 24/7",
                  },
                  {
                    Icon: MapPin,
                    label: "Address",
                    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
                    href: siteConfig.mapsUrl,
                    sub: "Get directions →",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                    sub: "We respond quickly",
                  },
                  {
                    Icon: Clock,
                    label: "Hours",
                    value: "Open 24 Hours",
                    href: undefined,
                    sub: "365 days a year",
                  },
                ].map(({ Icon, label, value, href, sub }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.06] bg-midnight-100/30"
                  >
                    <div
                      aria-hidden="true"
                      className="w-10 h-10 rounded-xl bg-sinclair-green/10 border border-sinclair-green/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <Icon size={16} className="text-sinclair-green" />
                    </div>
                    <div>
                      <p className="text-white/65 text-xs uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-white font-semibold text-sm hover:text-sinclair-green transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-sm">{value}</p>
                      )}
                      <p className="text-white/55 text-xs mt-1">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/[0.06]">
                <h2 className="text-white text-2xl font-bold mb-8">Send a Message</h2>

                {/* Status announcement for screen readers */}
                <div role="status" aria-live="polite" className="sr-only">
                  {status === "loading" && "Sending your message…"}
                  {status === "success" && "Message sent successfully."}
                  {status === "error" && `Error: ${errorMessage}`}
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      aria-hidden="true"
                      className="w-16 h-16 rounded-full bg-sinclair-green/15 border border-sinclair-green/30 flex items-center justify-center mb-5"
                    >
                      <Check className="text-sinclair-green" size={28} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-white/70 text-sm">We&apos;ll get back to you shortly.</p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-sinclair-green text-sm hover:text-sinclair-green-light transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <p className="text-white/55 text-xs mb-2">
                      <span className="text-sinclair-red" aria-hidden="true">*</span> indicates a required field
                    </p>

                    <div>
                      <label htmlFor="contact-name" className="text-white/75 text-xs uppercase tracking-wider block mb-2 font-semibold">
                        Your Name <span className="text-sinclair-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        aria-required="true"
                        autoComplete="name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-white/75 text-xs uppercase tracking-wider block mb-2 font-semibold">
                        Email Address <span className="text-sinclair-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="text-white/75 text-xs uppercase tracking-wider block mb-2 font-semibold">
                        Message <span className="text-sinclair-red" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        aria-required="true"
                        rows={5}
                        aria-describedby={status === "error" ? "contact-form-error" : undefined}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <div
                        id="contact-form-error"
                        role="alert"
                        className="px-4 py-3 rounded-xl bg-sinclair-red/10 border border-sinclair-red/30 text-sinclair-red text-sm"
                      >
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      aria-disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-sinclair-green hover:bg-sinclair-green-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-sinclair text-sm mt-2"
                    >
                      {status === "loading" ? (
                        <>
                          <span
                            aria-hidden="true"
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                          />
                          <span>Sending&hellip;</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} aria-hidden="true" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
