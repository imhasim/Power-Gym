"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Flame, Clock, User, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { programsData } from "@/data/programs";
import { useJoin } from "@/context/JoinContext";

export default function ProgramsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { scrollToJoin } = useJoin();

  const categories = [
    { id: "all", label: "ALL WORKOUTS" },
    { id: "strength", label: "STRENGTH & WEIGHTS" },
    { id: "hiit", label: "CARDIO & FAT BURN" },
    { id: "hypertrophy", label: "BODY TONING" },
    { id: "mobility", label: "STRETCH & SAUNA" },
    { id: "combat", label: "BOXING FITNESS" },
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
            <SectionLabel label="OUR WORKOUTS" tag="[ PROGRAMS ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              EXERCISE CLASSES <br />
              <span className="text-[#FFE600]">FOR EVERY FITNESS GOAL.</span>
            </h2>
          </div>
          <p className="text-white/70 text-sm max-w-md">
            Whether you want to build strong muscles, burn extra calories, or just relax and stretch, our coaches are ready to help you every step of the way.
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
                    <p className="text-white/70 text-xs line-clamp-2 mt-1.5 leading-relaxed">
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

                  <div className="text-xs text-white/60 flex items-center gap-1 pt-1 border-t border-white/5">
                    <User size={13} className="text-[#FFE600]" />
                    <span>Coach: {program.coach}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => scrollToJoin()}
                  iconRight={<ArrowRight size={14} />}
                  className="w-full text-xs font-bold"
                >
                  Join This Program
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
