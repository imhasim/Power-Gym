import React from "react";
import type { Metadata } from "next";
import ScheduleSection from "@/components/sections/ScheduleSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Weekly Class Schedule & Timetable | POWER GYM",
  description:
    "Check live class schedules from Monday to Sunday: Olympic Lifting, Battle Ropes HIIT, Kinetic Yoga, and Cold Plunge workshops. Instant spot reservation.",
};

export default function SchedulePage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="REAL-TIME TIMETABLE" tag="[ WEEKLY SCHEDULE ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          TRAIN TOGETHER. <span className="text-[#FFE600]">RESERVE YOUR ARENA.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          Sessions are capped to prevent crowding and guarantee dedicated coaching feedback. Click 'Book Spot' to lock in your session.
        </p>
      </div>

      <ScheduleSection />
      <TrialCtaSection />
    </div>
  );
}
