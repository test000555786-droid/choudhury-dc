"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: "💊",
    title: "Painless Treatments",
    description: "Advanced anaesthesia and gentle techniques ensure a comfortable, stress-free experience for every patient.",
  },
  {
    icon: "🔬",
    title: "Modern Equipment",
    description: "Digital X-rays, laser technology, and the latest diagnostic tools for precise, efficient care.",
  },
  {
    icon: "🎓",
    title: "Certified Doctors",
    description: "IDA-registered dentists and IADVL-certified dermatologists with 15+ years of combined expertise.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Transparent pricing, EMI options, and treatment plans designed to fit your budget.",
  },
  {
    icon: "🧼",
    title: "Hygienic Environment",
    description: "International sterilisation protocols, single-use consumables, and a clinic you can trust.",
  },
  {
    icon: "📅",
    title: "Flexible Appointments",
    description: "Morning, afternoon, and evening slots available. Same-day booking for urgent cases.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#F7F8FA" }}
      aria-label="Why choose our clinic"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Patients Choose Us"
          title="A Clinic That Puts You First"
          subtitle="Every decision we make — from equipment to protocols to opening hours — is designed around patient comfort and clinical excellence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-6 rounded-2xl border transition-all duration-200"
              style={{
                background: i % 2 === 0 ? "#FFFFFF" : "#FFFFFF",
                borderColor: "#E5E7EB",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(31,42,55,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "#1F2A37";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
              }}
            >
              <div className="text-3xl mb-4" aria-hidden="true">{reason.icon}</div>
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
