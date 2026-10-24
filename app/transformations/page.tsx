import React from "react";
import type { Metadata } from "next";
import TransformationsSection from "@/components/sections/TransformationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Athlete Transformations & Case Studies | POWER GYM",
  description:
    "Explore before and after transformations: fat loss, muscle hypertrophy, and strength milestones with interactive split comparison slider.",
};

export default function TransformationsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="VERIFIED CASE STUDIES" tag="[ RESULTS ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          PHYSICAL RECOMPOSITION. <span className="text-[#FFE600]">UNFILTERED.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          Look through our athletes’ documented progress. Interactive before/after split sliders show the genuine impact of systematic training and cold recovery.
        </p>
      </div>

      <TransformationsSection />
      <TestimonialsSection />
      <TrialCtaSection />
    </div>
  );
}
