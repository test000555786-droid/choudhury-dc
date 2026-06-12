"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dental-services", label: "Dental Services" },
  { href: "/skin-care-services", label: "Skin Care" },
  { href: "/about", label: "About Us" },
  { href: "/gallery-reviews", label: "Gallery & Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const needsDarkText = scrolled || menuOpen || isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center
            ? "bg-[rgba(255,255,255,0.97)] backdrop-blur-md shadow-[0_1px_24px_rgba(31,42,55,0.08)]" 
            : "bg-transparent"}
          h-[72px]
          lg:bg-[#FAFAFA] lg:backdrop-blur-none lg:border-b lg:border-gray-200
          ${scrolled ? "lg:h-[80px] lg:shadow-[0_4px_20px_rgba(0,0,0,0.03)]" : "lg:h-[96px] lg:shadow-none"}
        `}
      >
        <div className="px-4 sm:px-6 lg:px-12 h-full w-full">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 lg:gap-3 group"
              aria-label="Choudhury Dental & Skin Care Clinic – Home"
            >
              <div
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl lg:rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 lg:!bg-none lg:bg-[#1F2A37]"
                style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)" }}
              >
                <Stethoscope className="w-5 h-5 lg:w-[22px] lg:h-[22px] text-white lg:text-[#C5A46D]" />
              </div>
              <div className="leading-tight flex flex-col justify-center">
                <div
                  className={`font-bold text-base tracking-tight lg:text-[22px] lg:font-semibold lg:tracking-wide transition-colors ${
                    needsDarkText ? "text-[#1F2A37]" : "text-white"
                  } lg:!text-[#1F2A37]`}
                  style={{
                    fontFamily: "var(--font-poppins, sans-serif)",
                  }}
                >
                  Choudhury
                </div>
                <div
                  className={`text-xs font-medium tracking-wide lg:text-[10px] lg:tracking-[0.15em] lg:uppercase lg:font-normal lg:mt-[2px] transition-colors ${
                    needsDarkText ? "text-[#6B7280]" : "text-white/80"
                  } lg:!text-[#6B7280]`}
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                  }}
                >
                  Dental &amp; Skin Care Clinic
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative py-2 text-[14px] font-medium tracking-[0.03em] transition-colors duration-300 ${
                      isActive ? "text-[#C5A46D]" : "text-[#1F2A37] hover:text-[#C5A46D]"
                    }`}
                    style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A46D] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center justify-center w-[42px] h-[42px] rounded-full border border-gray-200 hover:bg-[#F8F9FA] hover:border-[#C5A46D] transition-all duration-300 hover:-translate-y-[1px]"
                title="Call Now"
                aria-label={`Call us at ${siteConfig.phone}`}
              >
                <Phone className="w-[18px] h-[18px] text-[#1F2A37] group-hover:text-[#C5A46D] transition-colors duration-300" />
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(26,42,58,0.2)]"
                style={{
                  background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)",
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile: Call icon + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors duration-200"
                style={{ 
                  borderColor: needsDarkText ? "#1F2A37" : "rgba(255, 255, 255, 0.5)", 
                  color: needsDarkText ? "#1F2A37" : "#ffffff" 
                }}
                aria-label="Call now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ color: needsDarkText ? "#1F2A37" : "#ffffff" }}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 250 }}
            className="lg:hidden fixed top-[72px] right-0 bottom-0 w-full sm:w-[380px] z-40 flex flex-col border-l"
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(24px)",
              borderColor: "rgba(229, 231, 235, 0.4)",
              boxShadow: "-12px 0 40px rgba(31,42,55,0.1)",
            }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300"
                      style={{
                        background: isActive ? "rgba(31,42,55,0.05)" : "transparent",
                      }}
                    >
                      <span
                        className="text-lg transition-colors duration-300"
                        style={{
                          color: isActive ? "#1F2A37" : "#4B5563",
                          fontFamily: "var(--font-poppins, sans-serif)",
                          fontWeight: isActive ? 600 : 500,
                        }}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="w-2 h-2 rounded-full"
                          style={{ background: "#C5A46D" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Contact / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="p-6 border-t mt-auto"
              style={{ 
                borderColor: "rgba(229, 231, 235, 0.5)", 
                background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(247,248,250,0.8) 100%)" 
              }}
            >
              <div className="mb-5 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#C5A46D]"
                  style={{ color: "#4B5563", fontFamily: "var(--font-inter, sans-serif)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100 text-[#C5A46D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)",
                  boxShadow: "0 8px 24px rgba(31,42,55,0.25)",
                  fontFamily: "var(--font-inter, sans-serif)",
                }}
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-30"
            style={{ 
              background: "rgba(31,42,55,0.3)", 
              backdropFilter: "blur(6px)",
              top: "72px" 
            }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
