"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Monitor } from "lucide-react";

const ToothIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 21c-2.32-.42-4-2.52-4-4.88V12c0-1.85-.75-3.52-1.94-4.73C3.65 6.84 3 6.03 3 5c0-1.1.9-2 2-2 2.65 0 5 2.12 5 4.76V9c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V7.76C14 5.12 16.35 3 19 3c1.1 0 2 .9 2 2 0 1.03-.65 1.84-1.06 2.27C18.75 8.48 18 10.15 18 12v4.12c0 2.36-1.68 4.46-4 4.88-2.07.38-4.25-.7-5.5-2.28a.5.5 0 0 0-.76 0c-1.26 1.58-3.44 2.66-5.5 2.28z" />
    <path d="M12 21v-4" />
  </svg>
);

const FaceIcon = ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const features = [
  { icon: ToothIcon, title: "ADVANCED\nDENTAL CARE" },
  { icon: FaceIcon, title: "PREMIUM\nSKIN CARE" },
  { icon: Monitor, title: "MODERN\nTECHNOLOGY" },
  { icon: ShieldCheck, title: "SAFE, HYGIENIC\n& TRUSTED" },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center pt-[90px] lg:pt-[100px] pb-8 lg:pb-0"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)",
      }}
      aria-label="Hero — Choudhury Dental & Skin Care Clinic"
    >
      {/* Main Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row items-center relative z-10 pb-8 lg:pb-12">
        
        {/* Left Content */}
          <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20"
        >
          {/* Logo element for Hero */}
          <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
               {/* Decorative Logo */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C5A46D]">
                  <path d="M50 85 C20 65, 10 40, 20 25 C25 15, 35 15, 40 20 C45 25, 50 35, 50 35 C50 35, 55 25, 60 20 C65 15, 75 15, 80 25 C90 40, 80 65, 50 85 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M50 35 Q60 40, 60 55 Q55 65, 65 70 Q75 70, 70 80 Q65 85, 50 85" stroke="currentColor" strokeWidth="2" fill="none"/>
               </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-tight lg:leading-none mb-4 tracking-tight w-full break-words" style={{ fontFamily: "var(--font-poppins, serif)", color: "#1F2A37", fontWeight: 500 }}>
            Choudhury
          </h1>
          
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 w-full max-w-lg mb-8">
            <div className="h-[1px] bg-[#C5A46D] flex-1 opacity-60 hidden sm:block"></div>
            <p className="text-[10px] sm:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.25em] text-[#C5A46D] font-medium whitespace-nowrap">
              DENTAL & SKIN CARE CLINIC
            </p>
            <div className="h-[1px] bg-[#C5A46D] flex-1 opacity-60 hidden sm:block"></div>
          </div>

          {/* Small decorative flower/leaf SVG like in mockup */}
          <div className="mb-6 lg:mb-8">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto lg:mx-0 text-[#C5A46D]">
              <path d="M20 0C20 0 15 20 0 20C15 20 20 0 20 0Z" fill="currentColor"/>
              <path d="M20 0C20 0 25 20 40 20C25 20 20 0 20 0Z" fill="currentColor"/>
              <circle cx="20" cy="16" r="3" fill="currentColor"/>
            </svg>
          </div>

          {/* Tagline */}
          <h2 className="text-[10px] sm:text-xs lg:text-sm tracking-[0.1em] sm:tracking-[0.2em] font-semibold text-[#1F2A37] mb-4 lg:mb-5">
            CONFIDENCE. CARE. TRANSFORMATION.
          </h2>

          <p className="text-base lg:text-lg text-[#6B7280] max-w-md mb-8 lg:mb-10 px-4 lg:px-0" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Premium care for a healthier smile<br className="hidden sm:block"/> and radiant skin.
          </p>

          <Link
            href="/appointments"
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-xs sm:text-sm lg:text-base text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 3v18"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M9 15c.5.5 1.5 1 3 1s2.5-.5 3-1"/></svg>
            </span>
            YOUR JOURNEY TO THE BEST YOU <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 relative h-[40vh] sm:h-[50vh] lg:h-[calc(100vh-100px)] lg:self-start z-10 mt-8 lg:mt-0"
        >
          {/* Masked Image setup */}
          <div className="w-full h-full relative" style={{
             maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent 100%)"
          }}>
            <Image
              src="/images/split_face_hero.png"
              alt="Radiant skin and healthy smile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Overlay Icons */}
          <div className="absolute top-[45%] left-[10%] lg:left-[15%] w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-white/60 flex items-center justify-center text-white/90 backdrop-blur-sm shadow-lg shadow-black/5">
             <ToothIcon className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1} />
          </div>
          <div className="absolute top-[48%] right-[10%] lg:right-[20%] w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-white/60 flex items-center justify-center text-white/90 backdrop-blur-sm shadow-lg shadow-black/5">
             <FaceIcon className="w-5 h-5 lg:w-7 lg:h-7" strokeWidth={1} />
          </div>
        </motion.div>
      </div>

      {/* Bottom Features Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full px-4 relative z-30 lg:-mb-16"
      >
        <div 
          className="w-full max-w-6xl mx-auto rounded-3xl flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-start md:items-center justify-between py-6 px-6 sm:px-10 gap-6"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
            border: "1px solid rgba(255,255,255,0.8)"
          }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full md:w-auto md:flex-1 justify-start lg:justify-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#C5A46D]">
                <feature.icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.2} />
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-[#1F2A37] whitespace-pre-line tracking-wider leading-snug">
                {feature.title}
              </p>
              {/* Divider except for last */}
              {idx < features.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-[#E5E7EB] ml-auto" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
