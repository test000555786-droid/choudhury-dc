"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const videoData = [
  { name: "Priya S.", treatment: "Smile Makeover", thumbnail: "/images/gallery/smile_makeover.webp" },
  { name: "Rahul M.", treatment: "Laser Hair Removal", thumbnail: "/images/gallery/laser_hair_removal.webp" },
  { name: "Meena D.", treatment: "Dental Implants", thumbnail: "/images/gallery/dental_implants.webp" },
  { name: "Kiran R.", treatment: "Teeth Whitening", thumbnail: "/images/gallery/teeth_whitening.webp" },
  { name: "Deepak R.", treatment: "Acne Scar Treatment", thumbnail: "/images/gallery/acne_scar_treatment.webp" },
  { name: "Sunita P.", treatment: "Orthodontics", thumbnail: "/images/gallery/braces_transformation.webp" }
];

export default function VideoTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    const len = videoData.length;
    if (offset > Math.floor(len / 2)) offset -= len;
    if (offset < -Math.floor(len / 2)) offset += len;
    return offset;
  };

  return (
    <section className="py-24 overflow-hidden bg-[#000000] flex flex-col items-center justify-center px-4" aria-label="Video testimonials">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <div className="text-[#C5A46D] text-sm md:text-base font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
            Video Testimonials
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Hear directly from patients about their experience at our clinic.
          </p>
        </div>
        
        <div className="relative w-full max-w-[1000px] h-[450px] sm:h-[500px] md:h-[600px] flex items-center justify-center mb-10">
          <button 
            onClick={prevSlide}
            className="absolute left-0 sm:left-4 md:-left-8 lg:-left-16 z-50 p-3 md:p-4 rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-lg focus:outline-none"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative w-full h-full flex justify-center items-center">
            {videoData.map((item, index) => {
              const offset = getOffset(index);
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 2;

              if (!isVisible && videoData.length > 5) return null;

              return (
                <motion.div
                  key={item.thumbnail + index}
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
                    src={item.thumbnail} 
                    alt={`Video testimonial from ${item.name}`}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 360px"
                    priority={absOffset === 0}
                  />
                  
                  <div className="absolute inset-0 bg-black/20" />

                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${absOffset === 0 ? 'scale-100' : 'scale-75'}`}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#007AFF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,122,255,0.6)] hover:scale-110 transition-transform">
                      <Play fill="white" size={24} className="ml-1" />
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 ${absOffset === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg drop-shadow-md" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
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
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
