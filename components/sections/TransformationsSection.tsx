"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/shared/BeforeAfterSlider";
import { transformationsData } from "@/data/transformations";
import { useBooking } from "@/context/BookingContext";
import { ArrowRight, Trophy, TrendingUp, Check } from "lucide-react";

export default function TransformationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { openJoinModal } = useBooking();

  const categories = ["All", "Recomp", "Fat Loss", "Hypertrophy"];

  const filteredTransformations =
    selectedCategory === "All"
      ? transformationsData
      : transformationsData.filter((t) => t.category === selectedCategory);

  const activeTrans = filteredTransformations[0] || transformationsData[0];

  return (
    <section id="transformations" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-[#FFE600]/6 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel label="HALL OF RESULTS" tag="[ TRANSFORMATIONS ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              PROOF OF DISCIPLINE. <br />
              <span className="text-[#FFE600]">MEASURABLE BIOMETRICS.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            No flattering angles or optical illusions. Real Power Gym athletes documenting body composition changes through consistent barbell overload and cellular recovery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Featured Interactive Comparison Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Interactive Split Slider */}
          <div className="lg:col-span-6">
            <BeforeAfterSlider
              beforeImage={activeTrans.beforeImg}
              afterImage={activeTrans.afterImg}
              beforeLabel="WEEK 0 // BASELINE"
              afterLabel={`WEEK 16 // ${activeTrans.stats.weightChange.toUpperCase()}`}
            />
          </div>

          {/* Transformation Details & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono-tag mb-2">
                <Trophy size={13} />
                <span>CASE STUDY: {activeTrans.timeframe.toUpperCase()} DURATION</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                {activeTrans.name},{" "}
                <span className="text-white/60 text-xl font-normal">
                  {activeTrans.age} yrs • {activeTrans.profession}
                </span>
              </h3>
            </div>

            {/* Metric Blocks */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#12120e] border border-white/10">
                <span className="text-[10px] font-mono-tag text-white/40 block">FAT MASS</span>
                <span className="font-heading font-black text-white text-base sm:text-lg text-[#FFE600] mt-1 block">
                  {activeTrans.stats.weightChange}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#12120e] border border-white/10">
                <span className="text-[10px] font-mono-tag text-white/40 block">BODY FAT %</span>
                <span className="font-heading font-black text-white text-base sm:text-lg mt-1 block">
                  {activeTrans.stats.bodyFatChange}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#12120e] border border-white/10">
                <span className="text-[10px] font-mono-tag text-white/40 block">FORCE PR</span>
                <span className="font-heading font-black text-white text-base sm:text-lg text-[#FFE600] mt-1 block">
                  {activeTrans.stats.benchOrDeadliftChange}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed">
                "{activeTrans.quote}"
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-white/50 border-t border-white/5">
                <span>Protocol: <strong className="text-white">{activeTrans.program}</strong></span>
                <span>Coach: <strong className="text-[#FFE600]">{activeTrans.coach}</strong></span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openJoinModal()}
                iconRight={<ArrowRight size={18} />}
                className="font-bold uppercase tracking-wider text-xs"
              >
                Start Your 16-Week Recomp Blueprint
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
