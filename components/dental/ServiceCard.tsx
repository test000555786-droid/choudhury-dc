"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  services: string[];
  image?: string;
  index: number;
  accentColor?: string;
  bgColor?: string;
}

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  services,
  image,
  index,
  accentColor = "#C5A46D",
  bgColor = "#F5EFE6",
}: ServiceCardProps) {
  const isEmergency = id === "emergency-dental";
  const cardAccent = isEmergency ? "#EF4444" : accentColor;
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      id={id}
      data-expanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl h-[480px] sm:h-[500px] lg:h-[480px] w-full cursor-pointer shadow-lg"
      style={{ background: "#F5EFE6" }}
    >
      {/* Background Image & Zoom Effect */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110 group-data-[expanded=true]:scale-110"
        />
      )}

      {/* Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 ease-in-out pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(245, 239, 230, 0.95) 0%, rgba(245, 239, 230, 0.6) 50%, transparent 100%)",
        }}
      />
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 group-data-[expanded=true]:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(245, 239, 230, 1) 0%, rgba(245, 239, 230, 0.85) 60%, rgba(245, 239, 230, 0.4) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-end">
        
        {/* Always Visible Header */}
        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2 group-data-[expanded=true]:-translate-y-2">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-md"
              style={{ background: "#FFFFFF" }}
              aria-hidden="true"
            >
              {icon === "tooth" ? "🦷" :
               icon === "smile" ? "😁" :
               icon === "align-justify" ? "📐" :
               icon === "baby" ? "👶" :
               icon === "settings" ? "⚙️" :
               icon === "alert-circle" ? "🚨" : "🦷"}
            </div>
            <div
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: isEmergency ? "#EF4444" : "#C5A46D", fontFamily: "var(--font-inter, sans-serif)", textShadow: "none" }}
            >
              {isEmergency ? "Emergency Care" : "Dental Service"}
            </div>
          </div>
          
          <h2
            className="font-bold text-2xl text-[#1F2A37] mb-2"
            style={{ fontFamily: "var(--font-poppins, sans-serif)", textShadow: "none" }}
          >
            {title}
          </h2>
        </div>

        {/* Hidden Reveal Content */}
        <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-[450px] group-data-[expanded=true]:max-h-[450px] group-hover:opacity-100 group-data-[expanded=true]:opacity-100 group-hover:mt-2 group-data-[expanded=true]:mt-2 flex flex-col gap-4">
          
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {description}
          </p>

          <ul className="space-y-2" aria-label={`${title} services`}>
            {services.map((service, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: isEmergency ? "#EF4444" : "#C5A46D" }}
                  aria-hidden="true"
                />
                {service}
              </li>
            ))}
          </ul>

          <div className="pt-2 transform transition-all duration-500 delay-100 translate-y-4 opacity-0 group-hover:translate-y-0 group-data-[expanded=true]:translate-y-0 group-hover:opacity-100 group-data-[expanded=true]:opacity-100">
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] shadow-lg"
              style={{
                background: isEmergency
                  ? "linear-gradient(135deg, #EF4444 0%, #dc2626 100%)"
                  : "linear-gradient(135deg, #1F2A37 0%, #243447 100%)",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
              aria-label={`Book a consultation for ${title}`}
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {isEmergency ? "Call for Emergency" : "Book Consultation"}
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
