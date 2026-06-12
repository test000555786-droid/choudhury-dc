"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110"
          style={{
            background: "#1F2A37",
            boxShadow: "0 4px 16px rgba(31,42,55,0.25)",
          }}
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
