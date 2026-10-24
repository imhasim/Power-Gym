"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flame, Clock, User, ArrowRight, X, Dumbbell, Sparkles } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { programsData, Program } from "@/data/programs";
import { useBooking } from "@/context/BookingContext";

export default function ProgramsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);
  const { openJoinModal } = useBooking();

  const categories = [
    { id: "all", label: "ALL DISCIPLINES" },
    { id: "strength", label: "STRENGTH & POWER" },
    { id: "hiit", label: "METABOLIC & HIIT" },
    { id: "hypertrophy", label: "HYPERTROPHY" },
    { id: "mobility", label: "RECOVERY & FLOW" },
    { id: "combat", label: "COMBAT & BOXING" },
  ];

  const filteredPrograms =
    selectedCategory === "all"
      ? programsData
      : programsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-[#050505] cyber-grid">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FFE600]/6 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel label="DISCIPLINES & PROTOCOLS" tag="[ PROGRAMS ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              SCIENTIFIC TRAINING <br />
              <span className="text-[#FFE600]">ENGINEERED FOR PEAK ADAPTATION.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            Whether your objective is raw barbell power, sub-12% body fat, or accelerated cellular recovery, our evidence-backed protocols deliver measurable results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono-tag tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_15px_rgba(255,230,0,0.35)]"
                  : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <GlassCard
              key={program.id}
              className="overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0c] via-black/20 to-transparent" />

                  {/* Corner Mono Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 border border-white/15 backdrop-blur-md">
                    <span className="text-[10px] font-mono-tag text-[#FFE600] font-bold">
                      {program.tag}
                    </span>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                    <span className="text-[10px] font-mono-tag text-white">
                      {program.level}
                    </span>
                  </div>

                  {/* Metric Chips inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <Clock size={12} className="text-[#FFE600]" />
                      <span>{program.duration}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <Flame size={12} className="text-[#FFE600]" />
                      <span>{program.caloriesBurn}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FFE600] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-white/65 text-xs line-clamp-2 mt-1.5 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Focus Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {program.focus.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono-tag px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveModalProgram(program)}
                  className="text-xs font-mono-tag text-white/70 hover:text-[#FFE600] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={13} />
                </button>

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => openJoinModal()}
                  className="text-xs font-bold"
                >
                  Join Program
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View All Programs Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-[#12120e] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#FFE600]/15 border border-[#FFE600]/30 flex items-center justify-center text-[#FFE600] shrink-0">
              <Dumbbell size={24} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">
                Need a Custom Periodized Workout Routine?
              </h4>
              <p className="text-xs text-white/60">
                Use our automated workout planner to generate your 3 to 5 day split instantly.
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            size="md"
            href="/tools"
            className="text-xs font-mono-tag tracking-wider shrink-0"
          >
            [ OPEN FITNESS LAB & TOOLS ]
          </Button>
        </div>
      </div>

      {/* Program Details Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-[#0e0e0a] border border-[#FFE600]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                  {activeModalProgram.tag} // {activeModalProgram.level.toUpperCase()}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeModalProgram.title}
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  {activeModalProgram.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] font-mono-tag text-white/50 block">DURATION</span>
                  <span className="font-heading font-bold text-white text-sm mt-0.5 block">{activeModalProgram.duration}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] font-mono-tag text-white/50 block">BURN RATE</span>
                  <span className="font-heading font-bold text-[#FFE600] text-sm mt-0.5 block">{activeModalProgram.caloriesBurn}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] font-mono-tag text-white/50 block">INTENSITY</span>
                  <span className="font-heading font-bold text-white text-sm mt-0.5 block">{activeModalProgram.level}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] font-mono-tag text-white/50 block">LEAD COACH</span>
                  <span className="font-heading font-bold text-white text-sm mt-0.5 block truncate">{activeModalProgram.coach}</span>
                </div>
              </div>

              {/* Protocol breakdown */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="font-mono-tag text-xs text-[#FFE600] font-semibold block">
                  BIOMECHANICAL METHODOLOGY:
                </span>
                <p className="text-xs text-white/80 leading-relaxed">
                  {activeModalProgram.details}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
                  <Clock size={14} className="text-[#FFE600]" />
                  <span>Schedule: <strong>{activeModalProgram.scheduleSlots}</strong></span>
                </div>
              </div>

              {/* Key adaptions */}
              <div>
                <span className="font-mono-tag text-xs text-white/60 block mb-2">TARGET PHYSIOLOGICAL ADAPTATIONS:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProgram.focus.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90 p-2 rounded-lg bg-white/5">
                      <Sparkles size={13} className="text-[#FFE600] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-4">
                <Button
                  size="md"
                  variant="primary"
                  className="flex-1 font-bold uppercase tracking-wider"
                  onClick={() => {
                    setActiveModalProgram(null);
                    openJoinModal();
                  }}
                >
                  Book Free Session for this Program
                </Button>
                <Button
                  size="md"
                  variant="secondary"
                  href="/schedule"
                  onClick={() => setActiveModalProgram(null)}
                >
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
