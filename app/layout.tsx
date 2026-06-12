import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { siteConfig, pageSEO } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageSEO.home.title,
    template: "%s | Choudhury Dental & Skin Care Clinic",
  },
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  authors: [{ name: "Choudhury Dental & Skin Care Clinic" }],
  creator: "Choudhury Dental & Skin Care Clinic",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    images: [{ url: "/og-images/home.jpg", width: 1200, height: 630, alt: "Choudhury Dental & Skin Care Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    images: ["/og-images/home.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
