"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  accentColor?: "dental" | "skin" | "gold";
  bgOverlay?: string;
  bgImage?: string;
}

const accentColors = {
  dental: "#C5A46D",
  skin: "#C5A46D",
  gold: "#C5A46D",
};

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  accentColor = "dental",
  bgOverlay = "rgba(245, 239, 230, 0.85)",
  bgImage,
}: PageHeroProps) {
  const accent = accentColors[accentColor];

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "320px",
        background: `linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)`,
      }}
      aria-label="Page header"
    >
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            className="object-cover transition-transform duration-[10000ms] ease-linear scale-100 hover:scale-105"
            priority
          />
          <div
            className="absolute inset-0 z-0"
            style={{ background: bgOverlay }}
          />
        </>
      )}

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${accent} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${accent} 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pt-[calc(72px+4rem)]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center justify-center gap-1.5 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 text-xs font-medium transition-colors duration-200"
                style={{ color: "#6B7280" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1F2A37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7280")}
              >
                <Home className="w-3 h-3" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" style={{ color: "#9CA3AF" }} aria-hidden="true" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="text-xs font-medium transition-colors duration-200"
                    style={{ color: "#6B7280" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1F2A37")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7280")}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="text-xs font-semibold"
                    style={{ color: accent }}
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bold text-[#1F2A37] mb-4"
          style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "#6B7280",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 h-1 rounded-full"
          style={{
            width: "60px",
            background: accent,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
