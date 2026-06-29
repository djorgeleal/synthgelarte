import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDE_IMAGES = [
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/16.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/18.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/19.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/11.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/13.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/9.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/6.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/5.webp",
  "https://gelatinastransfer.theeducaciondigital.com/wp-content/uploads/2026/06/4.webp"
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all slider images on mount for instant visual swap
  useEffect(() => {
    SLIDE_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? SLIDE_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === SLIDE_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // Variants for smooth swipe transitions
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-rose-50/30 border border-rose-100 shadow-xl group/slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="gelatina-image-slider"
    >
      {/* Slider Header Badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        Diseños Premium Reales
      </div>

      {/* Image Container with Responsive aspect ratios */}
      <div className="relative aspect-square sm:aspect-video md:h-[380px] w-full overflow-hidden flex items-center justify-center bg-stone-900">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={SLIDE_IMAGES[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full object-cover select-none"
            alt={`Gelatina de transferencia premium ${currentIndex + 1}`}
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
          />
        </AnimatePresence>

        {/* Gradient overlays for readability of controls */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 to-transparent pointer-events-none md:opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 to-transparent pointer-events-none md:opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300" />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 md:left-4 z-10 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-amber-500 text-amber-950 hover:text-white shadow-md active:scale-95 transition-all cursor-pointer hover:shadow-lg focus:outline-none"
          aria-label="Imagen anterior"
          id="slider-btn-prev"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 md:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-amber-500 text-amber-950 hover:text-white shadow-md active:scale-95 transition-all cursor-pointer hover:shadow-lg focus:outline-none"
          aria-label="Siguiente imagen"
          id="slider-btn-next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Counter indicator */}
        <div className="absolute bottom-3 right-4 z-10 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-full">
          {currentIndex + 1} / {SLIDE_IMAGES.length}
        </div>
      </div>

      {/* Pagination dots container below image */}
      <div className="bg-white py-3 flex justify-center gap-1.5 border-t border-rose-50">
        {SLIDE_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-rose-200 hover:bg-rose-300'
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
