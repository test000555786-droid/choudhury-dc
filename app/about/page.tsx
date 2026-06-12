import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { pageSEO, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSEO.about.title,
  description: pageSEO.about.description,
  keywords: pageSEO.about.keywords,
  openGraph: {
    title: pageSEO.about.title,
    description: pageSEO.about.description,
    url: `${siteConfig.url}/about`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${siteConfig.url}/about` },
  ],
};

const milestones = [
  { year: "2009", event: "Clinic founded in Salepur with a focus on gentle, patient-first dental care." },
  { year: "2014", event: "Expanded to a full dual-specialty centre, adding certified dermatology services." },
  { year: "2018", event: "Introduced advanced digital diagnostics, laser dentistry, and laser dermatology." },
  { year: "2024", event: "10,000+ patients treated. 4.9★ rated on Google with 200+ reviews." },
];

const highlights = [
  { icon: "🔬", title: "Modern Infrastructure", desc: "State-of-the-art dental chairs, digital X-ray units, laser systems, and a dedicated dermatology consultation suite." },
  { icon: "📡", title: "Digital Diagnosis", desc: "RVG digital X-rays, intraoral cameras, and skin analysis devices for precise, data-driven treatment planning." },
  { icon: "🧼", title: "Sterilisation Protocols", desc: "Autoclave sterilisation, single-use consumables, and international infection control standards across all departments." },
  { icon: "❤️", title: "Patient-First Experience", desc: "Warm reception, minimal wait times, clear cost estimates, and post-treatment follow-up for every patient." },
];

const values = [
  { icon: "🎯", title: "Precision Care", desc: "We use evidence-based protocols, digital diagnostics, and continuous training to deliver treatments with clinical precision." },
  { icon: "😌", title: "Patient Comfort", desc: "From our gentle anaesthesia techniques to our calming clinic environment, everything is designed around your comfort." },
  { icon: "✅", title: "Proven Results", desc: "We measure success by outcomes. Before-and-after documentation and long-term follow-up keep us accountable to you." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="About Choudhury Dental & Skin Care Clinic"
        subtitle="15+ years of trusted dual-specialty care in the heart of Salepur, Odisha."
        breadcrumbs={[{ label: "About Us" }]}
        accentColor="gold"
      />

      {/* Clinic Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Clinic story">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading eyebrow="Our Journey" title="Built on Trust, Guided by Care" align="left" />
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
                <p>
                  Choudhury Dental &amp; Skin Care Clinic was founded in 2009 with a single conviction: that patients in Salepur deserve world-class care delivered with genuine warmth. What began as a compact dental practice has grown into one of the city&apos;s most trusted dual-specialty clinics — serving over 10,000 patients across dentistry and dermatology.
                </p>
                <p>
                  In 2014, we expanded our vision by integrating a full dermatology department, making us one of the few clinics in Odisha offering certified dental and skin care under a single roof. This dual-specialty model means patients can address both oral health and skin concerns in one familiar, trusted environment.
                </p>
                <p>
                  Our mission has remained unchanged: to provide honest, transparent, results-driven healthcare. We invest continuously in modern equipment, clinical training, and the patient experience — because we believe great care should be accessible without compromise.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-bold text-base mb-6" style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}>
                Key Milestones
              </h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: "#E5E7EB" }} aria-hidden="true" />
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative flex gap-5 pl-12">
                      <div
                        className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-poppins, sans-serif)" }}
                      >
                        {m.year.slice(2)}
                      </div>
                      <div className="pt-2">
                        <div className="font-bold text-sm mb-1" style={{ color: "#1F2A37", fontFamily: "var(--font-poppins, sans-serif)" }}>
                          {m.year}
                        </div>
                        <div className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                          {m.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Lead doctor profile">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Meet the Doctor" title="Led by Expertise, Driven by Compassion" />
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div
                className="flex flex-col items-center justify-center p-12 text-center"
                style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)", minHeight: "320px" }}
              >
                <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl" style={{ background: "rgba(31,42,55,0.05)" }} aria-hidden="true">
                  👨‍⚕️
                </div>
                <div className="font-bold text-[#1F2A37] text-xl mb-1" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                  Dr. Choudhury
                </div>
                <div className="text-sm mb-3" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                  Founder &amp; Lead Specialist
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["IDA Member", "Certified Implantologist", "Laser Specialist"].map((badge) => (
                    <span key={badge} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "rgba(31,42,55,0.05)", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}>
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 p-8 sm:p-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  {["BDS · MDS (Prosthodontics)", "MBBS · MD Dermatology", "15+ Years Experience", "Dual Specialization"].map((q) => (
                    <span key={q} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "#F3F4F6", color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
                      {q}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
                  Dr. Choudhury brings over 15 years of clinical expertise spanning advanced restorative dentistry and medical dermatology. After completing specialist training in prosthodontics and subsequently qualifying in MD Dermatology, he established what has become one of Salepur&apos;s most respected dual-specialty clinics.
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
                  His philosophy is simple: listen first, diagnose precisely, treat gently. Known for his painless approach to dental procedures and his evidence-based dermatological protocols, Dr. Choudhury has built a reputation for outcomes that speak for themselves — evidenced by a 4.9-star rating across 200+ patient reviews.
                </p>
                <blockquote className="text-sm italic pl-4 mb-6" style={{ color: "#4B5563", borderLeft: "3px solid #C9A84C", fontFamily: "var(--font-inter, sans-serif)" }}>
                  &ldquo;Our goal is never just to fix a problem — it&apos;s to give every patient the confidence that comes with knowing their health is in good hands.&rdquo;
                </blockquote>
                <div className="grid sm:grid-cols-2 gap-2">
                  {["IDA Member (Indian Dental Association)", "IADVL Member (Dermatology)", "Certified Laser Practitioner", "Certified Implantologist (IAO)", "Digital Smile Design Trained", "PRP Therapy Certified"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-xs" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#22C55E" }} aria-hidden="true" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Our team">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Our Team" title="The People Behind Your Care" subtitle="A dedicated team of specialists and support staff committed to excellence." />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { image: "/images/team/dr-aman.webp", name: "Dr. Prashanta Panda", role: "Oral & Maxillofacial Surgeon", specialty: "BDS, MDS", regd: "Regd. No-2561(A)" },
              { image: "/images/team/dr-sarah.webp", name: "Dr. Chandrima Goswami", role: "Orthodontist", specialty: "BDS, MDS", regd: "Regd. No-8118(A)" },
              { image: "/images/team/dr-ritesh.webp", name: "Dr. Satish Saswat Majhi", role: "Periodontist", specialty: "BDS, MDS", regd: "Regd. No-1470(A)" },
              { image: "/images/team/dr-priya.webp", name: "Dr. Debajyoti Bardhan", role: "Oral Medicine & Radiology", specialty: "BDS, MDS", regd: "Regd. No-673(A)" },
              { image: "/images/team/dr-shivam.webp", name: "Dr. Shivam Singh", role: "Dental Surgeon", specialty: "BDS", regd: "Regd No-12925(A)" },
            ].map((member, i) => (
              <div key={i} className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.5rem)] rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ background: "#FFFFFF", borderColor: "#E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 text-center">
                  <div className="font-bold text-lg mb-1.5 transition-colors duration-300 group-hover:text-[#C5A46D]" style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)", lineHeight: "1.2" }}>{member.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#C5A46D", fontFamily: "var(--font-inter, sans-serif)" }}>{member.role}</div>
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-medium" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>{member.specialty}</div>
                    <div className="text-[11px]" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>{member.regd}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F7F8FA" }} aria-label="Clinic infrastructure">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Our Facility" title="Designed for Your Safety &amp; Comfort" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <div key={i} className="p-6 rounded-2xl border text-center transition-all duration-200" style={{ background: "#FFFFFF", borderColor: "#E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <div className="text-3xl mb-3" aria-hidden="true">{h.icon}</div>
                <div className="font-bold text-sm mb-2" style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}>{h.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }} aria-label="Our values">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What We Stand For" title="Our Three Pillars" subtitle="The principles that guide every decision we make." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-7 rounded-2xl text-center" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="text-4xl mb-4" aria-hidden="true">{v.icon}</div>
                <div className="font-bold text-[#1F2A37] text-lg mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>{v.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>{v.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}>
              📅 Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
