"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Stethoscope, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/dental-services", label: "Dental Services" },
  { href: "/skin-care-services", label: "Skin Care" },
  { href: "/about", label: "About Us" },
  { href: "/gallery-reviews", label: "Gallery & Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact & Appointments" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1F2A37" }} role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4"
              aria-label="Choudhury Dental & Skin Care Clinic – Home"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C5A46D 0%, #D4AF7F 100%)" }}
              >
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-base" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                  Choudhury
                </div>
                <div className="text-xs font-medium" style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}>
                  Dental &amp; Skin Care Clinic
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}>
              Salipur&rsquo;s trusted dual-specialty clinic — combining expert dental care with advanced dermatology since 2009. Serving patients across Odisha with precision, compassion, and care.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-label="Follow us on Facebook"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-label="Follow us on Instagram"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-label="Watch our videos on YouTube"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
                aria-label="Find us on Google Maps"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
              >
                <MapPin className="w-4 h-4 text-white" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(37,211,102,0.2)" }}
                aria-label="Chat with us on WhatsApp"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.3)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.2)")}
              >
                <MessageCircle className="w-4 h-4" style={{ color: "#25D366" }} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="font-semibold text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 flex items-center gap-2"
                      style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C5A46D" }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3
              className="font-semibold text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
            >
              Contact Us
            </h3>
            <address className="not-italic space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C5A46D" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}>
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#C5A46D" }} />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#25D366" }} />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#25D366")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#C5A46D" }} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C5A46D" }} />
                <div className="text-sm leading-relaxed" style={{ color: "#94a3b8", fontFamily: "var(--font-inter, sans-serif)" }}>
                  <div>Everyday: 9:00 AM – 8:00 PM</div>
                  <div>Friday: 9:00 AM – 2:00 PM (Evening closed)</div>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
            &copy; {year} Choudhury Dental &amp; Skin Care Clinic. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
            Serving patients in Salipur, Cuttack District, Kendrapada, Nichintakohili, Choudwar, Chandikhol, Naraj, Barang and nearby areas.
          </p>
          <p className="text-xs" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
            Designed with ♥ for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
