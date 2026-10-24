import React from "react";
import type { Metadata } from "next";
import TrainersSection from "@/components/sections/TrainersSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Certified Master Coaches | POWER GYM",
  description:
    "Meet our faculty of CSCS performance directors, Olympic barbell referees, and sports rehabilitation specialists.",
};

export default function TrainersPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="FACULTY OF FORCE" tag="[ COACHING STAFF ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          WORLD-CLASS <span className="text-[#FFE600]">MENTORS.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          No generic trainers with weekend certificates. Our coaches hold master degrees in exercise physiology, national competitive records, and decades of podium results.
        </p>
      </div>

      <TrainersSection />
      <TrialCtaSection />
    </div>
  );
}
