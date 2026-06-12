"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";

interface SkinServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  services: string[];
  image?: string;
  index: number;
}

const iconMap: Record<string, string> = {
  droplets: "💧",
  sparkles: "✨",
  zap: "⚡",
  sun: "☀️",
  wind: "🌿",
  shield: "🛡️",
};

export default function SkinServiceCard({ id, icon, title, description, services, image, index }: SkinServiceCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group rounded-3xl border flex flex-col sm:flex-row overflow-hidden transition-all duration-300 bg-white"
      style={{ borderColor: "#E5E7EB", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,116,138,0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(232,116,138,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Left: Image Section */}
      <div className="relative w-full sm:w-[45%] h-56 sm:h-auto overflow-hidden bg-gray-100 flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl bg-rose-50">
            {iconMap[icon] ?? "✨"}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Right: Content Section */}
      <div className="p-7 sm:p-8 flex flex-col gap-5 w-full sm:w-[55%] flex-grow relative">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110"
            style={{ background: "rgba(232,116,138,0.1)" }}
            aria-hidden="true"
          >
            {iconMap[icon] ?? "✨"}
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#E8748A", fontFamily: "var(--font-inter, sans-serif)" }}>
              Skin Care
            </div>
            <h2 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#c45c73]" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
              {title}
            </h2>
          </div>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
          {description}
        </p>

        <ul className="space-y-2.5 flex-1" aria-label={`${title} treatments`}>
          {services.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm transition-transform duration-300" style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}>
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#E8748A" }} aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #E8748A 0%, #c45c73 100%)", fontFamily: "var(--font-inter, sans-serif)" }}
            aria-label={`Book a consultation for ${title}`}
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
