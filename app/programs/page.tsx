import React from "react";
import type { Metadata } from "next";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Training Programs & Disciplines | POWER GYM",
  description:
    "Explore our evidence-backed training disciplines: Olympic Barbell, Battle Rope Conditioning, Aesthetic Hypertrophy, Combat Boxing, and Cellular Cold Plunge Recovery.",
};

export default function ProgramsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="PERFORMANCE DISCIPLINES" tag="[ PROGRAMS HUB ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          TRAIN WITH <span className="text-[#FFE600]">SURGICAL PRECISION.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          Every program at Power Gym is designed around progressive overload, joint longevity, and metabolic conditioning. Select your path below.
        </p>
      </div>

      <ProgramsSection />
      <ScheduleSection />
      <TrialCtaSection />
    </div>
  );
}
