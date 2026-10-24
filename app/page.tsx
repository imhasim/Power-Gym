import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import SystemsSection from "@/components/sections/SystemsSection";
import TrainersSection from "@/components/sections/TrainersSection";
import PlansSection from "@/components/sections/PlansSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import ToolsSection from "@/components/sections/ToolsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrialCtaSection from "@/components/sections/TrialCtaSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats Strip */}
      <StatsStrip />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Programs */}
      <ProgramsSection />

      {/* 5. Systems Section (Tree style) */}
      <SystemsSection />

      {/* 6. Trainers */}
      <TrainersSection />

      {/* 7. Membership Plans */}
      <PlansSection />

      {/* 8. Transformations Gallery */}
      <TransformationsSection />

      {/* 9. Live Schedule */}
      <ScheduleSection />

      {/* 10. Fitness Tools & Calculators */}
      <ToolsSection />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Free Trial Pass CTA */}
      <TrialCtaSection />

      {/* 13. FAQ */}
      <FaqSection />
    </div>
  );
}
