import { Footer } from "@/components/features/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Accessibility Statement - ${siteConfig.name}`,
  description: `Accessibility statement for ${siteConfig.name}. We're committed to making our website usable for everyone.`,
};

export default function AccessibilityPage() {
  return (
    <main id="main" tabIndex={-1} className="bg-midnight min-h-screen">
      <section className="pt-36 pb-12 px-5 md:px-8 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sinclair-green text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">
            Accessibility
          </p>
          <h1
            className="font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
          >
            Accessibility Statement
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            {siteConfig.name} is committed to making our website and physical
            location usable by everyone, including people with disabilities. We
            actively work to meet recognized accessibility standards.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8">
        <div className="max-w-3xl mx-auto prose-invert">
          <h2 className="text-white text-2xl font-bold mb-3 mt-2">Our commitment</h2>
          <p className="text-white/75 text-base leading-relaxed mb-8">
            We aim to conform to the{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sinclair-green hover:text-sinclair-green-light underline underline-offset-4"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>{" "}
            across the site. These guidelines define how to make web content
            more accessible to people with a wide range of disabilities,
            including visual, auditory, motor, and cognitive disabilities.
          </p>

          <h2 className="text-white text-2xl font-bold mb-3 mt-10">Steps we&apos;ve taken</h2>
          <ul className="space-y-3 text-white/75 text-base leading-relaxed list-disc pl-6 mb-8">
            <li>Semantic HTML with proper headings, landmarks, and labels so screen readers can navigate the site.</li>
            <li>Sufficient color contrast between text and background that meets or exceeds WCAG AA.</li>
            <li>Visible keyboard focus on every interactive element and a &ldquo;Skip to main content&rdquo; link for keyboard users.</li>
            <li>Descriptive alternative text for informative images and empty alt text for decorative ones.</li>
            <li>Form controls associated with labels, required-field indication, and screen-reader status announcements.</li>
            <li>Respect for the user&apos;s reduced-motion preference, which disables non-essential animations.</li>
            <li>Touch targets sized for ease of use on mobile and at our physical location signage.</li>
          </ul>

          <h2 className="text-white text-2xl font-bold mb-3 mt-10">Known limitations</h2>
          <p className="text-white/75 text-base leading-relaxed mb-3">
            We&apos;re working continuously to improve accessibility. Some
            sections of the Tandoori Nights restaurant subsite use older
            third-party templates that may not fully meet WCAG 2.1 AA in every
            area. We are improving these as time allows.
          </p>

          <h2 className="text-white text-2xl font-bold mb-3 mt-10">Reporting an issue</h2>
          <p className="text-white/75 text-base leading-relaxed mb-3">
            If you encounter an accessibility barrier or have suggestions, please
            let us know. We&apos;ll do our best to address it promptly.
          </p>
          <ul className="space-y-2 text-white/85 text-base leading-relaxed mb-8">
            <li>
              <strong className="text-white">Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=Accessibility%20feedback`}
                className="text-sinclair-green hover:text-sinclair-green-light underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong className="text-white">Phone:</strong>{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sinclair-green hover:text-sinclair-green-light underline underline-offset-4"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <strong className="text-white">Address:</strong>{" "}
              {siteConfig.address.street}, {siteConfig.address.city},{" "}
              {siteConfig.address.state} {siteConfig.address.zip}
            </li>
          </ul>
          <p className="text-white/75 text-base leading-relaxed">
            When contacting us, please describe the page or feature involved
            and, if helpful, the assistive technology you&apos;re using
            (screen reader, magnifier, etc.). We aim to respond within five
            business days.
          </p>

          <h2 className="text-white text-2xl font-bold mb-3 mt-10">Formal complaints</h2>
          <p className="text-white/75 text-base leading-relaxed mb-8">
            If you&apos;re not satisfied with our response, you may file a
            complaint with the U.S. Department of Justice under the Americans
            with Disabilities Act at{" "}
            <a
              href="https://www.ada.gov/file-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sinclair-green hover:text-sinclair-green-light underline underline-offset-4"
            >
              ada.gov
            </a>
            .
          </p>

          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <p className="text-white/55 text-sm">
              This statement was last reviewed on{" "}
              <time dateTime="2026-05-22">May 22, 2026</time>.
            </p>
            <p className="mt-4">
              <Link href="/" className="text-sinclair-green hover:text-sinclair-green-light underline underline-offset-4 text-sm">
                ← Back to home
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
