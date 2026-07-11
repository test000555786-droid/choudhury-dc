import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ServiceCard from "@/components/dental/ServiceCard";
import { dentalServices, dentalFAQs } from "@/lib/data/dental-services";
import { pageSEO, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSEO.dentalServices.title,
  description: pageSEO.dentalServices.description,
  keywords: pageSEO.dentalServices.keywords,
  alternates: { canonical: `${siteConfig.url}/dental-services` },
  openGraph: {
    title: pageSEO.dentalServices.title,
    description: pageSEO.dentalServices.description,
    url: `${siteConfig.url}/dental-services`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dentalFAQs.map((faq) => ({
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
    { "@type": "ListItem", position: 2, name: "Dental Services", item: `${siteConfig.url}/dental-services` },
  ],
};

export default function DentalServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Comprehensive Dental Care in Salepur"
        subtitle="From routine check-ups to complete smile transformations — gentle, modern, patient-first dentistry."
        breadcrumbs={[{ label: "Dental Services" }]}
        accentColor="dental"
        bgImage="/images/hero/dental-hero.png"
      />

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              At Choudhury Dental &amp; Skin Care Clinic, we believe every patient deserves dental care that is as gentle as it is effective. Our approach combines the latest in dental technology with a deeply human touch — listening carefully, explaining thoroughly, and treating with precision.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              From your child&apos;s first visit to advanced implant surgery, our team of certified dentists in Salepur covers the full spectrum of dental care. Every procedure is performed in a sterilised, modern environment using digital diagnostics for accurate, efficient treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Dental services list">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Dental Care Under One Roof"
            subtitle="Six specialised departments, one seamless experience. Find the treatment you need below."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dentalServices.map((service, i) => (
              <ServiceCard
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

      {/* Before & After */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Before and after results">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Real Results"
            title="Before &amp; After Transformations"
            subtitle="See the difference expert dental care makes. Real patients, real results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { treatment: "Smile Makeover with Veneers", before: "Stained, uneven teeth", after: "Bright, perfectly aligned smile" },
              { treatment: "Dental Implants", before: "Missing tooth with gap", after: "Natural-looking permanent implant" },
              { treatment: "Teeth Whitening", before: "Yellowed, discoloured enamel", after: "6+ shades brighter in one session" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: "#E5E7EB", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
              >
                <div className="grid grid-cols-2">
                  <div
                    className="p-6 flex flex-col items-center justify-center text-center"
                    style={{ background: "rgba(239,68,68,0.05)", borderRight: "1px solid #E5E7EB" }}
                  >
                    <div className="text-3xl mb-2" aria-hidden="true">😕</div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#EF4444" }}>Before</div>
                    <div className="text-xs leading-snug" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>{item.before}</div>
                  </div>
                  <div
                    className="p-6 flex flex-col items-center justify-center text-center"
                    style={{ background: "rgba(34,197,94,0.05)" }}
                  >
                    <div className="text-3xl mb-2" aria-hidden="true">😁</div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#22C55E" }}>After</div>
                    <div className="text-xs leading-snug" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>{item.after}</div>
                  </div>
                </div>
                <div
                  className="px-4 py-3 text-center text-xs font-semibold"
                  style={{ background: "#F7F8FA", color: "#1F2A37", fontFamily: "var(--font-poppins, sans-serif)", borderTop: "1px solid #E5E7EB" }}
                >
                  {item.treatment}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery-reviews"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{ borderColor: "#1F2A37", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
            >
              See Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Dental FAQ">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Common Questions"
            title="Dental FAQs"
            subtitle="Answers to the questions we hear most from patients."
          />
          <FAQAccordion faqs={dentalFAQs} accentColor="#C5A46D" />
        </div>
      </section>

      {/* Emergency strip */}
      <section
        className="py-8 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(239,68,68,0.06)", borderTop: "1px solid rgba(239,68,68,0.15)" }}
        aria-label="Dental emergency contact"
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-lg mb-1" style={{ color: "#EF4444", fontFamily: "var(--font-poppins, sans-serif)" }}>
              🚨 Dental Emergency? We&apos;re Available Today.
            </div>
            <div className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
              Same-day emergency appointments. Don&apos;t wait — call us now.
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 flex-shrink-0"
            style={{ background: "#EF4444", fontFamily: "var(--font-inter, sans-serif)" }}
            aria-label={`Call for dental emergency at ${siteConfig.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Now: {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }} aria-label="Book dental appointment">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-[#1F2A37] mb-4" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: "clamp(1.4rem, 3vw, 1.875rem)" }}>
            Book Your Dental Appointment Today
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
            Serving patients across Salepur and Odisha. Consultations available 6 days a week.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}>
              📅 Book Appointment
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90" style={{ background: "rgba(31,42,55,0.05)", color: "#1F2A37", border: "2px solid rgba(31,42,55,0.3)", fontFamily: "var(--font-inter, sans-serif)" }} aria-label={`Call ${siteConfig.phone}`}>
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
