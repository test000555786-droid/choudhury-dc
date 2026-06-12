import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SkinServiceCard from "@/components/skin/SkinServiceCard";
import { skinServices, skinFAQs } from "@/lib/data/skin-services";
import { pageSEO, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSEO.skinCareServices.title,
  description: pageSEO.skinCareServices.description,
  keywords: pageSEO.skinCareServices.keywords,
  openGraph: {
    title: pageSEO.skinCareServices.title,
    description: pageSEO.skinCareServices.description,
    url: `${siteConfig.url}/skin-care-services`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: skinFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Skin Care Services", item: `${siteConfig.url}/skin-care-services` },
  ],
};

export default function SkinCareServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Advanced Skin Care Treatments in Salepur"
        subtitle="Science-backed, personalised dermatological care for every skin type and concern."
        breadcrumbs={[{ label: "Skin Care Services" }]}
        accentColor="skin"
        bgImage="/images/hero/skin-hero.png"
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              Our dermatology department takes a results-oriented, evidence-based approach to skin and hair care. Every treatment plan is personalised following a thorough skin analysis — because no two skin types are the same.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              From acne and pigmentation management to advanced anti-ageing procedures and laser therapies, our certified dermatologists use clinically validated treatments to deliver visible, lasting results for patients across Salepur and Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FDF6F0" }} aria-label="Skin care services list">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Comprehensive Skin &amp; Hair Care"
            subtitle="Six treatment categories covering every skin concern — from routine glow treatments to specialist dermatological care."
            accentColor="#E8748A"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skinServices.map((service, i) => (
              <SkinServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                services={service.services}
                image={service.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skin Quiz Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Skin type quiz">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FDF6F0 0%, rgba(232,116,138,0.08) 100%)", border: "1px solid rgba(232,116,138,0.2)" }}
          >
            <div className="text-4xl mb-4" aria-hidden="true">🧴</div>
            <h2 className="font-bold text-xl mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
              Not Sure What Your Skin Needs?
            </h2>
            <p className="text-sm leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
              Every skin type is different. Book a free skin consultation with our dermatologist and get a personalised treatment plan designed just for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #E8748A 0%, #c45c73 100%)", boxShadow: "0 4px 16px rgba(232,116,138,0.3)", fontFamily: "var(--font-inter, sans-serif)" }}
            >
              ✨ Book Free Skin Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FDF6F0" }} aria-label="Skin care FAQ">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Skin Care FAQs"
            subtitle="Everything you need to know before your first appointment."
            accentColor="#E8748A"
          />
          <FAQAccordion faqs={skinFAQs} accentColor="#E8748A" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #c45c73 0%, #E8748A 50%, #f0a0b0 100%)" }}
        aria-label="Book skin care appointment"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: "clamp(1.4rem, 3vw, 1.875rem)" }}>
            Book Your Skin Consultation Today
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter, sans-serif)" }}>
            Results-driven dermatological care in the heart of Salepur. We respond within 2 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: "#FFFFFF", color: "#E8748A", fontFamily: "var(--font-inter, sans-serif)" }}>
              📅 Book Appointment
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.4)", fontFamily: "var(--font-inter, sans-serif)" }} aria-label="Call now">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
