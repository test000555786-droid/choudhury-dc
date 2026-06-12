"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "@/components/shared/ReviewCard";
import { homepageTestimonials } from "@/lib/data/testimonials";

export default function TestimonialsTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#FFFFFF" }} aria-label="Patient testimonials">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What Patients Say"
          title="Real Results, Real Stories"
          subtitle="Over 200 five-star reviews on Google. Here's what our patients share about their experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {homepageTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ReviewCard
                name={testimonial.name}
                initials={testimonial.initials}
                rating={testimonial.rating}
                text={testimonial.text}
                treatment={testimonial.treatment}
                type={testimonial.type as "Dental" | "Skin Care"}
                date={testimonial.date}
              />
            </motion.div>
          ))}
        </div>

        {/* Google rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl mb-8"
          style={{
            background: "#F7F8FA",
            border: "1px solid #E5E7EB",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="text-3xl font-bold"
              style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}
              aria-label="4.9 out of 5 stars rating"
            >
              4.9★
            </div>
            <div>
              <div
                className="font-semibold text-sm"
                style={{ color: "#1A1A2E", fontFamily: "var(--font-poppins, sans-serif)" }}
              >
                Excellent on Google
              </div>
              <div
                className="text-xs"
                style={{ color: "#9CA3AF", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Based on 200+ verified patient reviews
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{
              background: "#1F2A37",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
            aria-label="Leave a Google review for our clinic"
          >
            Leave a Review →
          </a>
        </motion.div>

        <div className="text-center">
          <Link
            href="/gallery-reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-[1.02]"
            style={{
              borderColor: "#1F2A37",
              color: "#1F2A37",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            See All Reviews &amp; Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
