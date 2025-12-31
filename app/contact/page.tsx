"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-charcoal text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out to us anytime. We're available 24/7 to answer your questions.
            </p>

            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sinclair-green/10 rounded-full">
                    <Icon name="phone" className="text-sinclair-green" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Phone</h4>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-lg text-sinclair-green hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sinclair-green/10 rounded-full">
                    <Icon name="map-pin" className="text-sinclair-green" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Address</h4>
                    <p className="text-gray-700">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </p>
                    <Button
                      href={siteConfig.mapsUrl}
                      variant="outline"
                      size="sm"
                      className="mt-3"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sinclair-green/10 rounded-full">
                    <Icon name="clock" className="text-sinclair-green" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Hours</h4>
                    <p className="text-lg font-semibold text-gray-700">{siteConfig.hours}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <h3 className="mb-6">Send Us a Message</h3>

              {status === "success" && (
                <div className="mb-6 p-4 bg-sinclair-green/10 border border-sinclair-green rounded-lg">
                  <p className="text-sinclair-green font-semibold">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-sinclair-red/10 border border-sinclair-red rounded-lg">
                  <p className="text-sinclair-red font-semibold">
                    {errorMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sinclair-green"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sinclair-green"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sinclair-green resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
