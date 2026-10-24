import React from "react";
import type { Metadata } from "next";
import ToolsSection from "@/components/sections/ToolsSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Fitness Calculators & Workout Planner | POWER GYM",
  description:
    "Precision BMI Analyzer, Mifflin-St Jeor TDEE & Macronutrient calculator, and automated weekly workout routine generator.",
};

export default function ToolsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="METABOLIC LAB & DIAGNOSTICS" tag="[ FITNESS TOOLS ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          SCIENTIFIC <span className="text-[#FFE600]">DIAGNOSTICS.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          Assess your body mass index, calibrate your exact caloric and protein targets, and generate an evidence-backed periodized split to print out.
        </p>
      </div>

      <ToolsSection />
      <TrialCtaSection />
    </div>
  );
}
