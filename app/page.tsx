import type { Metadata } from "next";
import { pageSEO, localBusinessSchema, siteConfig } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import DualSpecialtyIntro from "@/components/home/DualSpecialtyIntro";
import DoctorSnippet from "@/components/home/DoctorSnippet";
import ServicesStrip from "@/components/home/ServicesStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsTeaser from "@/components/home/TestimonialsTeaser";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  openGraph: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    url: siteConfig.url,
    images: [{ url: "/og-images/home.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <DualSpecialtyIntro />
      <DoctorSnippet />
      <ServicesStrip />
      <WhyChooseUs />
      <TestimonialsTeaser />
      <CTABanner />
    </>
  );
}
