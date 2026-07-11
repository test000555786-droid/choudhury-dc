"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const carouselData = [
  {
    image: "/images/gallery/smile_makeover.webp",
    name: "Meena Das",
    treatment: "Smile Makeover",
    text: "I came for a smile makeover and left with veneers that look completely natural. Everyone keeps asking if I've always had such perfect teeth!"
  },
  {
    image: "/images/gallery/hydrafacial_glow.webp",
    name: "Aarti S.",
    treatment: "HydraFacial",
    text: "My skin has never felt this glowing and hydrated. The team really knows how to pamper you while delivering real results."
  },
  {
    image: "/images/gallery/braces_transformation.webp",
    name: "Sunita Patel",
    treatment: "Orthodontics",
    text: "My daughter's braces journey has been wonderful here. The clinic is child-friendly and she actually looks forward to her appointments!"
  },
  {
    image: "/images/gallery/teeth_whitening.webp",
    name: "Kiran Rao",
    treatment: "Teeth Whitening",
    text: "Got my teeth whitened for a family wedding. The difference was immediate and the doctors were extremely professional."
  },
  {
    image: "/images/gallery/laser_hair_removal.webp",
    name: "Rahul Mishra",
    treatment: "Laser Hair Removal",
    text: "Six months of laser hair removal and I couldn't be happier. The results are permanent and treatment was much less painful than I expected."
  },
  {
    image: "/images/gallery/prp_hair_therapy.webp",
    name: "Aakash Nanda",
    treatment: "PRP Hair Therapy",
    text: "PRP therapy for my hair loss has given me incredible results. After just 4 sessions I can see new growth."
  },
  {
    image: "/images/gallery/root_canal.webp",
    name: "Priya Sharma",
    treatment: "Root Canal Treatment",
    text: "I was terrified of dentists until I visited Dr. Ch. Pritam. The root canal I dreaded was completely painless."
  }
];

export default function TestimonialsTeaser() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    const len = carouselData.length;
    if (offset > Math.floor(len / 2)) offset -= len;
    if (offset < -Math.floor(len / 2)) offset += len;
    return offset;
  };

  return (
    <section className="py-24 overflow-hidden bg-[#000000] flex flex-col items-center justify-center min-h-[80vh] px-4" aria-label="Patient testimonials">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
          Our happy customers
        </h2>
        
        <div className="relative w-full max-w-[1000px] h-[450px] sm:h-[500px] md:h-[600px] flex items-center justify-center mb-16">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 md:-left-8 lg:-left-16 z-50 p-3 md:p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative w-full h-full flex justify-center items-center">
            {carouselData.map((item, index) => {
              const offset = getOffset(index);
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 2;

              if (!isVisible && carouselData.length > 5) return null;

              return (
                <motion.div
                  key={item.image}
                  className="absolute w-[220px] h-[340px] sm:w-[280px] sm:h-[420px] md:w-[360px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-gray-900 border border-gray-800"
                  initial={false}
                  animate={{
                    x: `${offset * 75}%`,
                    scale: 1 - absOffset * 0.15,
                    zIndex: 10 - absOffset,
                    opacity: absOffset > 2 ? 0 : 1,
                    filter: `brightness(${100 - absOffset * 40}%)`
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image 
                    src={item.image} 
                    alt={`Happy customer ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                    priority={absOffset === 0}
                  />
                  
                  {/* Text Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 ${absOffset === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex items-center gap-1 mb-1.5 text-yellow-400 text-sm md:text-base">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium mb-3 line-clamp-3 sm:line-clamp-none leading-snug drop-shadow-md" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                      &quot;{item.text}&quot;
                    </p>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm sm:text-base drop-shadow-md" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
                        {item.name}
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm drop-shadow-md" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                        {item.treatment}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 sm:right-4 md:-right-8 lg:-right-16 z-50 p-3 md:p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Google rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-5 rounded-2xl mb-10 w-full max-w-3xl"
          style={{
            background: "#111111",
            border: "1px solid #333333",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
              aria-label="4.9 out of 5 stars rating"
            >
              4.9★
            </div>
            <div>
              <div
                className="font-semibold text-sm md:text-base text-white"
                style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
              >
                Excellent on Google
              </div>
              <div
                className="text-xs md:text-sm text-gray-400"
                style={{ fontFamily: "var(--font-inter, sans-serif)" }}
              >
                Based on 200+ verified patient reviews
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "#FFFFFF",
              color: "#000000",
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:bg-white hover:text-black"
            style={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
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
