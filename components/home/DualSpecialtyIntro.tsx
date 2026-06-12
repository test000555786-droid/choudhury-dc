"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const specialties = [
  {
    icon: "🦷",
    label: "Dental Care",
    heading: "Comprehensive Dental Services",
    description:
      "From routine check-ups to complete smile transformations — general, cosmetic, orthodontic, pediatric, and advanced dental procedures all under one expert roof.",
    href: "/dental-services",
    accent: "#C5A46D",
    gradientHover: "rgba(245, 239, 230, 0.95)",
    gradientBase: "rgba(245, 239, 230, 0.7)",
    ctaColor: "#1F2A37",
    image: "/images/dental_services/general-dentistry.webp",
    features: ["Painless RCT", "Dental Implants", "Teeth Whitening", "Braces & Aligners"],
  },
  {
    icon: "✨",
    label: "Skin Care",
    heading: "Advanced Skin & Hair Treatments",
    description:
      "Science-backed, personalised dermatological care — from acne and pigmentation management to laser hair removal, PRP therapy, and anti-ageing treatments.",
    href: "/skin-care-services",
    accent: "#C5A46D",
    gradientHover: "rgba(245, 239, 230, 0.95)",
    gradientBase: "rgba(245, 239, 230, 0.7)",
    ctaColor: "#1F2A37",
    image: "/images/skin_services/skin-brightening.webp",
    features: ["Laser Hair Removal", "PRP Therapy", "HydraFacial", "Acne Treatment"],
  },
];

export default function DualSpecialtyIntro() {
  return (
    <section className="pt-20 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Our dual specialties">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Offer"
          title="Two Specialties. One Trusted Clinic."
          subtitle="Choudhury Dental & Skin Care Clinic is Salepur's only dual-specialty centre combining expert dentistry with certified dermatological care."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-3xl h-[450px] sm:h-[500px] w-full shadow-lg"
              style={{ background: "#F5EFE6" }}
            >
              {/* Background Image & Zoom Effect */}
              <Image
                src={spec.image}
                alt={spec.heading}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Overlay */}
              <div 
                className="absolute inset-0 transition-all duration-500 ease-in-out pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${spec.gradientHover} 0%, ${spec.gradientBase} 60%, transparent 100%)`,
                  opacity: 0.8,
                }}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${spec.gradientHover} 0%, ${spec.gradientHover} 70%, rgba(245,239,230,0.4) 100%)`,
                }}
              />

              {/* Content Layer */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl shadow-md"
                    style={{ background: "rgba(31,42,55,0.05)", backdropFilter: "blur(10px)" }}
                    aria-hidden="true"
                  >
                    {spec.icon}
                  </div>

                  {/* Label */}
                  <div
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: spec.accent,
                      fontFamily: "var(--font-inter, sans-serif)",
                      textShadow: "none"
                    }}
                  >
                    {spec.label}
                  </div>
                </div>

                {/* Heading */}
                <h3
                  className="font-bold text-2xl sm:text-3xl mb-3 text-[#1F2A37] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins, sans-serif)", textShadow: "none" }}
                >
                  {spec.heading}
                </h3>

                {/* Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  {spec.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {spec.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium"
                      style={{ color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: spec.accent, boxShadow: `0 0 8px ${spec.accent}` }}
                        aria-hidden="true"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div>
                  <Link
                    href={spec.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#1F2A37] transition-all duration-300 group-hover:bg-[#1F2A37] group-hover:text-[#F5EFE6] border border-[#1F2A37]/20 group-hover:border-transparent hover:scale-[1.02]"
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                    aria-label={`Learn more about ${spec.heading}`}
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
