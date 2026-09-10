import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmtpaintingllc.com"),
  title: "JMT Painting LLC | Pintura Residencial y Comercial en Lithia Springs, GA",
  description:
    "Pintura interior y exterior, reparación de drywall y carpintería en Lithia Springs, Georgia. 25 años de experiencia. Solicita tu cotización con JMT Painting LLC.",
  alternates: {
    canonical: "https://www.jmtpaintingllc.com/",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "JMT Painting LLC",
    title: "JMT Painting LLC | Pintura Residencial y Comercial en Georgia",
    description: "Interior, exterior, drywall y carpintería. 25 años de experiencia en Lithia Springs, Georgia.",
    locale: "es_US",
    alternateLocale: "en_US",
    url: "https://www.jmtpaintingllc.com/",
    images: ["/images/og-image.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: "JMT Painting LLC",
  description:
    "Interior and exterior residential and commercial repainting, drywall repair and carpentry work. High quality and warranty work.",
  telephone: "+1-770-864-4011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "780 Heritage Pkwy",
    addressLocality: "Lithia Springs",
    addressRegion: "GA",
    postalCode: "30122",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "Georgia",
  },
  url: "https://www.jmtpaintingllc.com/",
  priceRange: "$$",
  foundingDate: "2001",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
