import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FAQAccordion from "@/components/shared/FAQAccordion";
import AppointmentForm from "@/components/shared/AppointmentForm";
import { pageSEO, siteConfig, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSEO.contact.title,
  description: pageSEO.contact.description,
  keywords: pageSEO.contact.keywords,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: pageSEO.contact.title,
    description: pageSEO.contact.description,
    url: `${siteConfig.url}/contact`,
  },
};

const contactFAQs = [
  {
    question: "Do you accept walk-in patients?",
    answer: "Yes, we do accept walk-in patients, subject to availability. However, we strongly recommend booking an appointment in advance to minimise your wait time. For dental emergencies, we always accommodate walk-ins on the same day.",
  },
  {
    question: "Is there a consultation fee?",
    answer: "Yes, there is a nominal consultation fee which is adjusted against the cost of treatment if you proceed. We believe in transparent pricing — all fees are communicated clearly before any treatment begins. Please call or WhatsApp us for current fee details.",
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "Yes, we offer flexible payment plans and EMI options for major dental and skin procedures such as dental implants, braces, and multi-session skin treatments. Details are shared during your consultation based on the treatment plan recommended.",
  },
  {
    question: "Can I book for both dental and skin care on the same visit?",
    answer: "Absolutely — this is one of the unique advantages of our dual-specialty clinic. You can schedule a dental consultation or procedure and a skin care appointment on the same day. Our reception team will coordinate your slots to make it as convenient as possible.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "For your first visit, please bring: any previous dental X-rays or reports (if available), a list of current medications, your insurance card (if applicable), and a valid photo ID. For skin care consultations, a brief history of any previous treatments or skin conditions you've been diagnosed with is helpful.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        title="Get in Touch"
        subtitle="We're here to help — reach out anytime. We'll respond within 2 hours."
        breadcrumbs={[{ label: "Contact" }]}
        accentColor="dental"
        bgImage="/images/hero/contact-hero.png"
      />

      {/* Main two-column section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Contact information and appointment form">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — Clinic Info */}
            <div>
              <h2 className="font-bold text-2xl mb-6" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
                Clinic Information
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    content: siteConfig.address,
                    color: "#1F2A37",
                    href: siteConfig.googleMapsUrl,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    content: siteConfig.phone,
                    color: "#1F2A37",
                    href: `tel:${siteConfig.phone}`,
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    content: "Click to chat with us",
                    color: "#25D366",
                    href: `https://wa.me/${siteConfig.whatsapp}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    content: siteConfig.email,
                    color: "#1F2A37",
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: Clock,
                    label: "Clinic Hours",
                    content: "Everyday: 9:00 AM – 8:00 PM\nFriday: 9:00 AM – 2:00 PM (Evening closed)",
                    color: "#C9A84C",
                    href: undefined,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border" style={{ background: "#FFFFFF", borderColor: "#E5E7EB" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}10` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium whitespace-pre-line transition-colors duration-200"
                          style={{ color: "#1A1A2E", fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div className="text-sm font-medium whitespace-pre-line" style={{ color: "#1A1A2E", fontFamily: "var(--font-inter, sans-serif)" }}>
                          {item.content}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello! I'd like to book an appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "#25D366", fontFamily: "var(--font-inter, sans-serif)" }}
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>

              {/* Map */}
              <div
                className="rounded-2xl overflow-hidden border flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F7F8FA 0%, #e8edf5 100%)", borderColor: "#E5E7EB", minHeight: "220px" }}
                role="img"
                aria-label="Map showing clinic location at Kendrapada - Cuttack Rd, Salipur, Odisha 754202"
              >
                <div className="text-center py-12 px-6">
                  <MapPin className="w-10 h-10 mx-auto mb-3" style={{ color: "#1F2A37" }} aria-hidden="true" />
                  <div className="font-semibold text-sm mb-1" style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}>
                    Choudhury Dental &amp; Skin Care Clinic
                  </div>
                  <div className="text-xs mb-4" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                    Kendrapada - Cuttack Rd, Salipur, Odisha 754202
                  </div>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                    style={{ background: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Contact FAQ">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="FAQs"
            title="Before Your First Visit"
            subtitle="Common questions from new patients — answered."
          />
          <FAQAccordion faqs={contactFAQs} accentColor="#C5A46D" />
        </div>
      </section>

      {/* Emergency Strip */}
      <section
        className="py-8 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(239,68,68,0.06)", borderTop: "1.5px solid rgba(239,68,68,0.15)" }}
        aria-label="Dental emergency"
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-lg mb-1" style={{ color: "#EF4444", fontFamily: "var(--font-poppins, sans-serif)" }}>
              🚨 Dental Emergency? We&apos;re Available Today.
            </div>
            <div className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
              Don&apos;t wait. Same-day emergency appointments available — call us now.
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 flex-shrink-0"
            style={{ background: "#EF4444", boxShadow: "0 4px 16px rgba(239,68,68,0.3)", fontFamily: "var(--font-inter, sans-serif)" }}
            aria-label={`Call for dental emergency: ${siteConfig.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Emergency: {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
