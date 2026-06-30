"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const credentials = [
  "IDA Member (Indian Dental Association)",
  "Certified Implantologist",
  "Laser Specialist",
  "15+ Years Clinical Experience",
];

export default function DoctorSnippet() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "#F7F8FA" }}
      aria-label="Doctor profile"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          <div className="grid md:grid-cols-3 gap-0">
            {/* Doctor photo placeholder */}
            <div
              className="flex items-center justify-center p-12"
              style={{
                background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)",
                minHeight: "280px",
              }}
              aria-hidden="true"
            >
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                  style={{ background: "rgba(31,42,55,0.05)" }}
                >
                  👨‍⚕️
                </div>
                <div className="font-bold text-[#1F2A37] text-lg" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                  Dr. Ch. Pritam Pratik Praharaj
                </div>
                <div className="text-sm mt-1" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                  Lead Specialist
                </div>
              </div>
            </div>

            {/* Doctor info */}
            <div className="col-span-2 p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(31,42,55,0.05)", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  BDS · MDS (Dental)
                </span>
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  15+ Years Experience
                </span>
              </div>

              <h2
                className="font-bold text-2xl mb-3"
                style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}
              >
                Dr. Ch. Pritam Pratik Praharaj
              </h2>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                With over 15 years of practice in Salepur, Dr. Ch. Pritam Pratik Praharaj leads the clinic with a commitment 
                to pain-free, patient-first care. Trained in advanced dental procedures, he has built a reputation 
                for excellence, helping establish the clinic as a trusted destination for comprehensive healthcare.
              </p>

              <blockquote
                className="text-sm italic mb-5 pl-4"
                style={{
                  color: "#4B5563",
                  borderLeft: "3px solid #C5A46D",
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                &ldquo;Every patient deserves a dentist who listens first. We treat people, not just conditions.&rdquo;
              </blockquote>

              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#22C55E" }} aria-hidden="true" />
                    {cred}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: "#C5A46D", fontFamily: "var(--font-inter, sans-serif)" }}
                aria-label="Read the full doctor profile on About page"
              >
                Read Full Profile
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
