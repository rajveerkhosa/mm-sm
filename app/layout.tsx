import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/features/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#008751",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lerdotravelcenter.com"),
  title: `${siteConfig.name} - Truck Stop in ${siteConfig.address.city}, CA`,
  description: `${siteConfig.name} offers 24/7 diesel fuel, truck parking, and amenities for professional drivers at I-5 & Lerdo Hwy in ${siteConfig.address.city}, California. Home of Tandoori Nights authentic Indian cuisine and Chester's Chicken.`,
  keywords: [
    "truck stop",
    "diesel fuel",
    "truck parking",
    "Buttonwillow CA",
    "Lerdo Hwy",
    "I-5 truck stop",
    "Sinclair fuel",
    "DEF",
    "Tandoori Nights",
    "Chester's Chicken",
    "trucker amenities",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lerdotravelcenter.com",
    title: siteConfig.name,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://lerdotravelcenter.com",
              name: siteConfig.name,
              alternateName: siteConfig.alternativeName,
              description: siteConfig.tagline,
              url: "https://lerdotravelcenter.com",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.address.coordinates.lat,
                longitude: siteConfig.address.coordinates.lng,
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              brand: {
                "@type": "Brand",
                name: "Sinclair",
              },
              paymentAccepted: "Cash, Credit Card, Debit Card",
              amenityFeature: siteConfig.amenities.map((amenity) => ({
                "@type": "LocationFeatureSpecification",
                name: amenity.name,
                value: amenity.available,
              })),
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
