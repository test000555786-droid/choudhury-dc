"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  timeSlot: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  service?: string;
}

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics & Braces",
  "Pediatric Dentistry",
  "Advanced Procedures (Implants/RCT)",
  "Emergency Dental",
  "Skin Consultation",
  "Acne & Pigmentation Treatment",
  "Laser Hair Removal",
  "Anti-Ageing Treatment",
  "Hair & Scalp (PRP)",
  "Other",
];

const timeSlots = [
  "Morning 9:00 AM – 12:00 PM",
  "Afternoon 12:00 PM – 4:00 PM",
  "Evening 4:00 PM – 8:00 PM",
];

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "1.5px solid #E5E7EB",
  fontSize: "0.875rem",
  color: "#1A1A2E",
  background: "#FFFFFF",
  fontFamily: "var(--font-inter, sans-serif)",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.375rem",
  fontFamily: "var(--font-inter, sans-serif)",
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", service: "", date: "", timeSlot: "", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    else if (form.name.trim().length < 2) newErrors.name = "Please enter your full name.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    if (!form.service) newErrors.service = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    
    const textMessage = `*New Appointment Request*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email || "N/A"}%0A*Service:* ${form.service}%0A*Date:* ${form.date || "Any"}%0A*Time:* ${form.timeSlot || "Any"}%0A*Concern:* ${form.message || "None"}`;
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${textMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const getBorderColor = (field: string, hasError?: boolean) => {
    if (hasError) return "#EF4444";
    if (focusedField === field) return "#C5A46D";
    return "#E5E7EB";
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center border"
        style={{ background: "rgba(34,197,94,0.05)", borderColor: "#22C55E" }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: "#22C55E" }} aria-hidden="true" />
        <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
          Appointment Request Sent!
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}>
          Thank you, <strong>{form.name}</strong>. We&apos;ve received your request for <strong>{form.service}</strong>.
          Our team will confirm your appointment within <strong>2 hours</strong> via call or WhatsApp.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ background: "#25D366", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            💬 Chat on WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", timeSlot: "", message: "" }); }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border-2"
            style={{ borderColor: "#1F2A37", color: "#1F2A37", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-7 border"
      style={{ background: "#FFFFFF", borderColor: "#E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
      role="form"
      aria-label="Appointment booking form"
    >
      <h2 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins, sans-serif)", color: "#1A1A2E" }}>
        Book an Appointment
      </h2>
      <p className="text-xs mb-6" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
        We confirm within 2 hours. Fields marked * are required.
      </p>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="apt-name" style={labelStyle}>Full Name *</label>
          <input
            id="apt-name"
            type="text"
            placeholder="e.g. Priya Sharma"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputStyle, borderColor: getBorderColor("name", !!errors.name) }}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" className="flex items-center gap-1.5 mt-1.5 text-xs" style={{ color: "#EF4444", fontFamily: "var(--font-inter, sans-serif)" }} role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />{errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="apt-phone" style={labelStyle}>Phone Number *</label>
          <input
            id="apt-phone"
            type="tel"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputStyle, borderColor: getBorderColor("phone", !!errors.phone) }}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
            inputMode="numeric"
          />
          {errors.phone && (
            <p id="phone-error" className="flex items-center gap-1.5 mt-1.5 text-xs" style={{ color: "#EF4444", fontFamily: "var(--font-inter, sans-serif)" }} role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />{errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="apt-email" style={labelStyle}>Email Address <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
          <input
            id="apt-email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputStyle, borderColor: getBorderColor("email") }}
            autoComplete="email"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="apt-service" style={labelStyle}>Service Required *</label>
          <select
            id="apt-service"
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            onFocus={() => setFocusedField("service")}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputStyle, borderColor: getBorderColor("service", !!errors.service), cursor: "pointer" }}
            aria-required="true"
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && (
            <p id="service-error" className="flex items-center gap-1.5 mt-1.5 text-xs" style={{ color: "#EF4444", fontFamily: "var(--font-inter, sans-serif)" }} role="alert">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />{errors.service}
            </p>
          )}
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="apt-date" style={labelStyle}>Preferred Date</label>
            <input
              id="apt-date"
              type="date"
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => handleChange("date", e.target.value)}
              onFocus={() => setFocusedField("date")}
              onBlur={() => setFocusedField(null)}
              style={{ ...inputStyle, borderColor: getBorderColor("date") }}
            />
          </div>
          <div>
            <label htmlFor="apt-time" style={labelStyle}>Preferred Time</label>
            <select
              id="apt-time"
              value={form.timeSlot}
              onChange={(e) => handleChange("timeSlot", e.target.value)}
              onFocus={() => setFocusedField("timeSlot")}
              onBlur={() => setFocusedField(null)}
              style={{ ...inputStyle, borderColor: getBorderColor("timeSlot"), cursor: "pointer" }}
            >
              <option value="">Any time</option>
              {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="apt-message" style={labelStyle}>Your Concern <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
          <textarea
            id="apt-message"
            rows={3}
            placeholder="Briefly describe your concern or any specific questions…"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputStyle, borderColor: getBorderColor("message"), resize: "vertical", minHeight: "80px" }}
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ background: "linear-gradient(135deg, #1F2A37 0%, #243447 100%)", fontFamily: "var(--font-inter, sans-serif)" }}
          aria-label="Submit appointment request"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending Request…
            </span>
          ) : (
            "📅 Request Appointment"
          )}
        </button>

        <p className="text-center text-xs" style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}>
          🔒 Your information is private and secure. We never share your details.
        </p>
      </div>
    </div>
  );
}
