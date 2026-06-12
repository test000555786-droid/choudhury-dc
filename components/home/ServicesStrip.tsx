"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  {
    icon: "🦷",
    name: "General Dentistry",
    description: "Check-ups, cleanings, fillings & preventive care",
    href: "/dental-services#general-dentistry",
    type: "dental",
  },
  {
    icon: "😁",
    name: "Cosmetic Dentistry",
    description: "Whitening, veneers & smile makeovers",
    href: "/dental-services#cosmetic-dentistry",
    type: "dental",
  },
  {
    icon: "📐",
    name: "Orthodontics",
    description: "Braces, aligners & bite correction",
    href: "/dental-services#orthodontics",
    type: "dental",
  },
  {
    icon: "💆",
    name: "Skin Brightening",
    description: "HydraFacial, glow peels & vitamin infusions",
    href: "/skin-care-services#skin-brightening",
    type: "skin",
  },
  {
    icon: "⚡",
    name: "Laser Hair Removal",
    description: "Permanent reduction for all skin types",
    href: "/skin-care-services#laser-hair-removal",
    type: "skin",
  },
  {
    icon: "🌿",
    name: "PRP Therapy",
    description: "Hair restoration & skin rejuvenation",
    href: "/skin-care-services#hair-scalp",
    type: "skin",
  },
];

export default function ServicesStrip() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Featured services">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Popular Treatments"
          title="Services Patients Love"
          subtitle="Our most-requested dental and skin care treatments, delivered with the highest standards of clinical care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isDental = service.type === "dental";
            const accent = isDental ? "#C5A46D" : "#E8748A";
            const bg = isDental ? "rgba(197,164,109,0.04)" : "rgba(232,116,138,0.04)";
            const borderHover = accent;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-200 block"
                  style={{
                    background: bg,
                    borderColor: "#E5E7EB",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = borderHover;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  aria-label={`${service.name} — ${service.description}`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ background: `${accent}12` }}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}
                    >
                      {service.name}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      {service.description}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/dental-services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: "#C5A46D",
                color: "#C5A46D",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              All Dental Services →
            </Link>
            <Link
              href="/skin-care-services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.02]"
              style={{
                borderColor: "#E8748A",
                color: "#E8748A",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              All Skin Care Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
