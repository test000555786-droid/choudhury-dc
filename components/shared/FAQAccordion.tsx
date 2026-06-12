"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  accentColor?: string;
}

export default function FAQAccordion({ faqs, accentColor = "#C5A46D" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-xl overflow-hidden border transition-all duration-200"
            style={{
              borderColor: isOpen ? accentColor : "#E5E7EB",
              background: isOpen ? "rgba(255,255,255,1)" : "#FFFFFF",
              boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.06)" : "0 1px 4px rgba(0,0,0,0.04)",
            }}
            role="listitem"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span
                className="font-semibold text-sm sm:text-base leading-snug"
                style={{
                  color: isOpen ? accentColor : "#1A1A2E",
                  fontFamily: "var(--font-poppins, sans-serif)",
                }}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
                aria-hidden="true"
              >
                <ChevronDown
                  className="w-5 h-5"
                  style={{ color: isOpen ? accentColor : "#6B7280" }}
                />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{
                      color: "#4B5563",
                      fontFamily: "var(--font-inter, sans-serif)",
                      borderTop: `1px solid ${accentColor}20`,
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
