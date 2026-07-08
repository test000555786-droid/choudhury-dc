"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const credentials = [
  "M.B.B.S.",
  "M.D. (Skin & V.D.)",
  "Regd. No.: 9002 (Odisha)",
  "Consultant in Dermatology & S.T.D.",
];

export default function SkinDoctorSnippet() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "#FFFFFF" }}
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
            {/* Left Column without image */}
            <div
              className="flex items-center justify-center p-8 md:p-12"
              style={{
                background: "linear-gradient(135deg, #FDF6F0 0%, rgba(232,116,138,0.08) 100%)",
                borderRight: "1px solid #E5E7EB",
              }}
            >
              <div className="text-center w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-bold text-white shadow-md" style={{ background: "#E8748A", fontFamily: "var(--font-poppins, sans-serif)" }}>
                  NR
                </div>
                <div className="font-bold text-[#1F2A37] text-lg md:text-xl" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                  Dr. Ch. Nihar Ranjan Praharaj
                </div>
                <div className="text-sm mt-1" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
                  Lead Dermatologist
                </div>
              </div>
            </div>

            {/* Doctor info */}
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(31,42,55,0.05)", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  M.B.B.S. · M.D. (Skin & V.D.)
                </span>
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(232,116,138,0.1)", color: "#E8748A", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  Consultant
                </span>
              </div>

              <h2
                className="font-bold text-2xl mb-3"
                style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}
              >
                Dr. Ch. Nihar Ranjan Praharaj
              </h2>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Specialising in both clinical and aesthetic dermatology, Dr. Ch. Nihar Ranjan Praharaj leads our skin care department with a commitment to evidence-based treatments. He brings extensive expertise in managing a wide range of dermatological conditions, providing personalized care for every patient.
              </p>

              <blockquote
                className="text-sm italic mb-5 pl-4"
                style={{
                  color: "#4B5563",
                  borderLeft: "3px solid #E8748A",
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                &ldquo;Every skin journey is unique. We combine medical expertise with compassionate care to help you achieve your healthiest skin.&rdquo;
              </blockquote>

              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "#374151", fontFamily: "var(--font-inter, sans-serif)" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#E8748A" }} aria-hidden="true" />
                    {cred}
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: "#E8748A", fontFamily: "var(--font-inter, sans-serif)" }}
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
