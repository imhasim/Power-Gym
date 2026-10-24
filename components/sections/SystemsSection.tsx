"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dumbbell, Utensils, HeartPulse, Users, Check, ArrowRight, Zap, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";

interface SystemNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  stat: string;
  description: string;
  bullets: string[];
}

export default function SystemsSection() {
  const [activeNode, setActiveNode] = useState<string>("strength");
  const { openJoinModal } = useBooking();

  const nodes: SystemNode[] = [
    {
      id: "strength",
      number: "SYSTEM // 01",
      title: "Force & Biomechanics",
      subtitle: "Maximal motor unit recruitment",
      icon: <Dumbbell size={20} className="text-[#FFE600]" />,
      position: "top-left",
      stat: "+38% Max Force",
      description: "We don't do random workouts. Barbell movements are programmed with RPE autoregulation, kinetic trajectory sensors, and progressive overload blocks.",
      bullets: [
        "Eleiko calibrated 20kg Olympic barbells & competition racks",
        "Bar velocity profiling for optimal power vs hypertrophy curves",
        "Kinematic joint angle correction on every repetition"
      ]
    },
    {
      id: "nutrition",
      number: "SYSTEM // 02",
      title: "Precision Fueling",
      subtitle: "Targeted metabolic partitioning",
      icon: <Utensils size={20} className="text-[#FFE600]" />,
      position: "top-right",
      stat: "100% Macro Precision",
      description: "Hard training is useless without calculated cellular recovery fuel. Every member receives custom macronutrient targets aligned to their basal metabolic rate.",
      bullets: [
        "Mifflin-St Jeor TDEE calibration updated monthly",
        "Pre & post-workout glycogen repletion timing",
        "Clean hydration & electrolyte formulas on tap"
      ]
    },
    {
      id: "recovery",
      number: "SYSTEM // 03",
      title: "Cellular Recovery",
      subtitle: "Thermal shock contrast protocol",
      icon: <HeartPulse size={20} className="text-[#FFE600]" />,
      position: "bottom-left",
      stat: "3°C Chilled Water",
      description: "Accelerate muscle repair by 2.4x. Contrast thermal cycling stimulates norepinephrine release, flushes lymphatic lactic acid, and restores autonomic balance.",
      bullets: [
        "Dual ozone-filtered cold plunge tubs maintained at 3°C",
        "90°C Finnish dry sauna for heat shock protein release",
        "Percussive therapy & myofascial foam rolling stations"
      ]
    },
    {
      id: "community",
      number: "SYSTEM // 04",
      title: "Relentless Tribe",
      subtitle: "Uncompromising accountability",
      icon: <Users size={20} className="text-[#FFE600]" />,
      position: "bottom-right",
      stat: "94% Adherence",
      description: "Surround yourself with lifters and coaches who celebrate your PRs and keep you showing up when motivation fades. Culture is our strongest barbell.",
      bullets: [
        "Monthly community barbell lift-offs and PR boards",
        "Zero-ego culture where members spot each other safely",
        "Certified coaching staff present on the floor at all times"
      ]
    }
  ];

  const currentSystem = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070705] border-y border-white/10">
      {/* Background Volumetric Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFE600]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <SectionLabel label="INTEGRATED ECOSYSTEM" tag="[ ARCHITECTURE ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            TRAINING IN <span className="text-[#FFE600]">SYSTEMS.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Isolated workouts yield temporary results. Real physical transformation requires a synchronized loop of biomechanics, fuel, contrast recovery, and collective energy.
          </p>
        </div>

        {/* The 4-Node Interactive Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Satellite Nodes */}
          <div className="lg:col-span-3 space-y-6">
            {nodes.slice(0, 2).map((node) => {
              const isActive = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#141410] border-[#FFE600] shadow-[0_0_20px_rgba(255,230,0,0.25)] scale-[1.02]"
                      : "bg-[#0d0d0a]/80 border-white/10 hover:border-[#FFE600]/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tag text-[10px] text-white/50">{node.number}</span>
                    <span className="text-xs font-mono-tag text-[#FFE600] font-bold">{node.stat}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {node.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base">{node.title}</h4>
                      <p className="text-xs text-white/50">{node.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central System Hub Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center py-6">
            {/* Visual Ring Orbit */}
            <div className="absolute inset-4 sm:inset-10 border border-white/10 rounded-full border-dashed animate-spin-slow pointer-events-none" />
            <div className="absolute inset-10 sm:inset-20 border border-[#FFE600]/20 rounded-full pointer-events-none" />

            {/* Central Visual Card */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border-2 border-[#FFE600]/40 shadow-2xl shadow-black z-10 group">
              <Image
                src={activeNode === "recovery" ? "/images/recovery-sauna.jpg" : activeNode === "strength" ? "/images/hero.jpg" : "/images/program-hiit.jpg"}
                alt="System Focus Visual"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Active Center Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-[#FFE600]/50 text-[#FFE600] font-mono-tag text-[10px] tracking-wider">
                  CURRENT SYSTEM // ACTIVE
                </span>
                <span className="w-3 h-3 rounded-full bg-[#FFE600] animate-ping" />
              </div>

              {/* Center Overlay Stats */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 border border-white/15 backdrop-blur-md z-10">
                <span className="text-[10px] font-mono-tag text-[#FFE600]">{currentSystem.number}</span>
                <h3 className="font-heading font-extrabold text-white text-xl">{currentSystem.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1">{currentSystem.description}</p>
              </div>
            </div>
          </div>

          {/* Right Satellite Nodes */}
          <div className="lg:col-span-3 space-y-6">
            {nodes.slice(2, 4).map((node) => {
              const isActive = activeNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#141410] border-[#FFE600] shadow-[0_0_20px_rgba(255,230,0,0.25)] scale-[1.02]"
                      : "bg-[#0d0d0a]/80 border-white/10 hover:border-[#FFE600]/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-tag text-[10px] text-white/50">{node.number}</span>
                    <span className="text-xs font-mono-tag text-[#FFE600] font-bold">{node.stat}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {node.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base">{node.title}</h4>
                      <p className="text-xs text-white/50">{node.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Active System Breakdown Panel */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0f0f0c] border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-2">
              <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                {currentSystem.number} PROTOCOL SPECIFICATION
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                {currentSystem.title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {currentSystem.description}
              </p>
            </div>

            <div className="md:col-span-7 space-y-3">
              {currentSystem.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white/90"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFE600] text-black shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
