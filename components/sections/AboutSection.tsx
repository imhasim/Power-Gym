"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { Dumbbell, Flame, HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";

export default function AboutSection() {
  const { openJoinModal } = useBooking();

  const pillars = [
    {
      code: "PILLAR // 01",
      title: "Biomechanical Precision",
      desc: "Every lift is calibrated against joint angles, bar velocity, and kinetic chain alignment. No reckless movements—only progressive, injury-free force development.",
      icon: <Dumbbell size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PILLAR // 02",
      title: "Anaerobic Conditioning",
      desc: "Metabolic circuits structured with battle ropes, prowlers, and assault sprints to elevate mitochondrial density and slash body fat.",
      icon: <Flame size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PILLAR // 03",
      title: "Contrast Cellular Recovery",
      desc: "Sub-4°C ice plunges and 90°C cedar saunas to accelerate tissue repair, flush metabolic waste, and stimulate heat/cold shock proteins.",
      icon: <HeartPulse size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PILLAR // 04",
      title: "High-Performance Culture",
      desc: "An ego-free environment where beginners and competitive powerlifters push each other beyond self-imposed boundaries every single day.",
      icon: <ShieldCheck size={20} className="text-[#FFE600]" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070705]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFE600]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <SectionLabel label="SYSTEM PHILOSOPHY" tag="[ ABOUT POWER GYM ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              NOT JUST A GYM. <br />
              <span className="text-[#FFE600]">AN ARCHITECTURE OF HUMAN POTENTIAL.</span>
            </h2>
          </div>
          <div className="hidden sm:block text-right">
            <span className="font-mono-tag text-xs text-white/40 block">
              /LAT 28.6139° N
            </span>
            <span className="font-mono-tag text-xs text-[#FFE600] font-semibold">
              HIGH-PERFORMANCE IRON LAB
            </span>
          </div>
        </div>

        {/* Editorial Statement + Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="font-heading text-xl sm:text-2xl text-white/90 font-medium leading-relaxed">
              Most modern gyms are designed to sell memberships you won’t use. Power Gym was built for the relentless. We engineered an uncompromising space where sports science, Eleiko steel, cold therapy, and elite coaching converge.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/60">
            <div>
              <span className="font-mono-tag text-xs text-[#FFE600] font-bold block mb-1">
                // OLYMPIC GRADE ONLY
              </span>
              <p>
                Every barbell is needle-bearing calibrated; every bench is IPF-spec; our turf is shock-absorbent composite designed for heavy sled drags.
              </p>
            </div>
            <div>
              <span className="font-mono-tag text-xs text-[#FFE600] font-bold block mb-1">
                // ZERO GUEST OVERCROWDING
              </span>
              <p>
                We cap active peak-hour access to ensure your rest intervals and platform availability are never compromised by crowded queues.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <GlassCard
              key={pillar.code}
              className="p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tag text-[10px] text-white/50 tracking-widest">
                    {pillar.code}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FFE600]/15 group-hover:border-[#FFE600]/40 transition-colors">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-[#FFE600] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono-tag text-[#FFE600] group-hover:translate-x-1 transition-transform">
                <span>EXPLORE METHOD</span>
                <ArrowRight size={12} />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <Button
            size="md"
            variant="outline"
            onClick={() => openJoinModal()}
            className="font-mono-tag text-xs tracking-widest"
          >
            [ EXPERIENCE THE ARENA // BOOK TRIAL PASS ]
          </Button>
        </div>
      </div>
    </section>
  );
}
