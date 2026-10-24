import React from "react";

interface MotivationBannerProps {
  quote: string;
}

export default function MotivationBanner({ quote }: MotivationBannerProps) {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-[#060605] border-y border-white/5">
      {/* Subtle ambient yellow center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-[#FFE600]/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="font-mono-tag text-xs text-[#FFE600] tracking-[0.25em] block mb-3 font-bold">
          DAILY MOTIVATION
        </span>
        <blockquote className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
