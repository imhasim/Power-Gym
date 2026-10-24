import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PlansSection from "@/components/sections/PlansSection";
import TrainersSection from "@/components/sections/TrainersSection";
import BmiCalculator from "@/components/sections/BmiCalculator";
import JoinSection from "@/components/sections/JoinSection";
import MotivationBanner from "@/components/ui/MotivationBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* Motivation Line 1 */}
      <MotivationBanner quote="Start today, and your body will thank you later." />

      {/* 2. About + Stats */}
      <AboutStatsSection />

      {/* 3. Programs */}
      <ProgramsSection />

      {/* Motivation Line 2 */}
      <MotivationBanner quote="Do not wait for the perfect time. Begin now." />

      {/* 4. Membership Plans */}
      <PlansSection />

      {/* 5. Trainers */}
      <TrainersSection />

      {/* Motivation Line 3 */}
      <MotivationBanner quote="Every small effort you make today brings a big change tomorrow." />

      {/* 6. Simple BMI Calculator */}
      <BmiCalculator />

      {/* 7. Join Form */}
      <JoinSection />
    </div>
  );
}
