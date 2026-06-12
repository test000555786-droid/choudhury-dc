"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function CTABanner() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }}
      aria-label="Book appointment call to action"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl mb-4" aria-hidden="true">🏥</div>
          <h2
            className="font-bold text-[#1F2A37] mb-4"
            style={{
              fontFamily: "var(--font-poppins, sans-serif)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: 1.2,
            }}
          >
            Ready for a Healthier Smile or Glowing Skin?
          </h2>
          <p
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Book your appointment today — it only takes 2 minutes. We confirm within 2 hours and same-day slots are available for urgent cases.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)",
                boxShadow: "0 4px 20px rgba(31,42,55,0.35)",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              📅 Book Appointment
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "transparent",
                color: "#1F2A37",
                border: "2px solid #1F2A37",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <p
            className="mt-5 text-xs"
            style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Mon–Sat: 9 AM–8 PM &nbsp;·&nbsp; Sun: 10 AM–2 PM &nbsp;·&nbsp; Serving Salepur, Odisha
          </p>
        </motion.div>
      </div>
    </section>
  );
}
