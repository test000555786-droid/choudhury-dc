"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience", icon: "🏆" },
  { value: 10000, suffix: "+", label: "Patients Treated", icon: "👥" },
  { value: 6, suffix: "", label: "Specializations", icon: "🎯" },
  { value: 4.9, suffix: "★", label: "Google Rating", icon: "⭐" },
];

function Counter({ target, suffix, isFloat }: { target: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const steps = 50;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, target, isFloat]);

  const display =
    target >= 1000
      ? count.toLocaleString()
      : isFloat
      ? count.toFixed(1)
      : count;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section
      className="pt-16 lg:pt-28 pb-12"
      style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EFE7DC 100%)" }}
      aria-label="Clinic statistics and trust signals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
              <div
                className="font-bold text-[#1F2A37] mb-1"
                style={{
                  fontFamily: "var(--font-poppins, sans-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                }}
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  isFloat={stat.value % 1 !== 0}
                />
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "#6B7280", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
