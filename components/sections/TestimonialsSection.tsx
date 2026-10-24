"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070705] border-t border-white/10">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFE600]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <SectionLabel label="ATHLETE VOICES" tag="[ TESTIMONIALS ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            VERIFIED <span className="text-[#FFE600]">EXPERIENCES.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Read what entrepreneurs, orthopedic surgeons, and competitive lifters say about training at Power Gym.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="p-8 sm:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote
              size={64}
              className="absolute top-6 right-6 text-white/5 pointer-events-none"
            />

            <div className="space-y-6 relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#FFE600] text-[#FFE600]"
                  />
                ))}
                <span className="ml-2 font-mono-tag text-xs text-[#FFE600]">
                  5.0 VERIFIED RATING
                </span>
              </div>

              {/* Review Text */}
              <p className="font-heading text-lg sm:text-2xl text-white font-medium leading-relaxed">
                "{activeReview.text}"
              </p>

              {/* Highlight Tag */}
              <div className="inline-block px-3 py-1 rounded-md bg-[#FFE600]/10 border border-[#FFE600]/30 text-xs text-[#FFE600] font-mono-tag">
                KEY HIGHLIGHT: {activeReview.highlight}
              </div>

              {/* Author Info & Nav Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-white text-lg">
                    {activeReview.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-white/60 mt-0.5">
                    <span className="text-[#FFE600]">{activeReview.handle}</span>
                    <span>•</span>
                    <span>{activeReview.tier}</span>
                    <span>•</span>
                    <span className="text-white/40">{activeReview.date}</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#FFE600] shadow-[0_0_8px_#FFE600]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
