"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Flame, Shield, Activity, Dumbbell, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import SectionLabel from "@/components/ui/SectionLabel";
import { useJoin } from "@/context/JoinContext";
import { GYM_CONFIG } from "@/lib/config";

export default function HeroSection() {
  const { scrollToJoin } = useJoin();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid">
      {/* Volumetric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-[#FFE600]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#3A3A0A]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Clean Corner Info */}
      <div className="hidden lg:block absolute top-28 left-8 text-[11px] font-mono-tag text-white/40 space-y-1">
        <p>/ POWER GYM MAIN FLOOR</p>
        <p>/ SIKAR, RAJASTHAN</p>
        <p>/ OPP. RAJMEWAR HOSPITAL</p>
      </div>

      <div className="hidden lg:block absolute top-28 right-8 text-[11px] font-mono-tag text-right text-white/40 space-y-1">
        <p>[ MON–SAT 5AM–10PM ]</p>
        <p>[ SUN 6AM–12PM ]</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <SectionLabel
              label="WELCOME TO POWER GYM"
              tag="YOUR FITNESS HOME"
              glow
            />

            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              BUILD POWER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#FFF366] to-[#FFE600] glow-text">
                BREAK LIMITS.
              </span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to Power Gym. We have high-quality weights, friendly expert trainers, fun fitness classes, and clean recovery rooms to help you get strong, stay active, and feel your best every day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollToJoin()}
                iconRight={<ArrowRight size={18} />}
                className="w-full sm:w-auto font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,230,0,0.45)]"
              >
                Claim 3-Day Free Pass
              </Button>

              <a
                href={`tel:${GYM_CONFIG.PHONE_LINK}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFE600] text-white hover:text-black transition-all text-sm font-semibold tracking-wider"
              >
                <Phone size={16} className="text-[#FFE600]" />
                <span>Call Now: {GYM_CONFIG.PHONE_DISPLAY}</span>
              </a>

              <Button
                size="lg"
                variant="secondary"
                href="#programs"
                icon={<Dumbbell size={18} className="text-[#FFE600]" />}
                className="w-full sm:w-auto text-sm tracking-wider font-semibold"
              >
                Explore Programs
              </Button>
            </div>

            {/* Simple Feature Ticker */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/70 font-mono-tag">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-ping" />
                <span className="text-white font-medium">FRIENDLY COACHES ON FLOOR</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <Shield size={14} className="text-[#FFE600]" />
                <span>TOP-QUALITY EQUIPMENT</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <Flame size={14} className="text-[#FFE600]" />
                <span>COLD PLUNGE & SAUNA READY</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition with Floating Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE600]/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Hero Card Container */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#0e0e0a] shadow-2xl shadow-black group">
              <Image
                src="/images/hero.jpg"
                alt="Power Gym Athlete Deadlift with Yellow Neon"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 pointer-events-none" />

              {/* Corner Tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md">
                <span className="font-mono-tag text-[10px] text-[#FFE600] tracking-widest">
                  /MAIN WEIGHT ROOM
                </span>
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-[#12120e]/85 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tag text-[#FFE600]">
                      SAFE & GUIDED LIFTING
                    </span>
                    <h4 className="font-heading font-bold text-white text-base">
                      Free Weights & Strength Training
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FFE600]/15 border border-[#FFE600]/40 flex items-center justify-center text-[#FFE600] font-mono-tag text-xs font-black">
                    FIT
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Activity size={13} className="text-[#FFE600]" /> Beginner-Friendly
                  </span>
                  <span>•</span>
                  <span>Quality Steel Barbells</span>
                </div>
              </div>
            </div>

            {/* Floating Signature Chips */}
            <div className="hidden sm:block absolute -top-4 -left-6 z-20 animate-float-slow">
              <Chip label="FRIENDLY EXPERT COACHES" hasCheck />
            </div>

            <div className="hidden sm:block absolute top-1/3 -right-6 z-20 animate-float-reverse">
              <Chip label="OPEN 24 HOURS A DAY" hasCheck />
            </div>

            <div className="hidden sm:block absolute -bottom-3 -left-4 z-20 animate-float-slow">
              <Chip label="COLD PLUNGE & SAUNA" hasCheck />
            </div>

            <div className="hidden sm:block absolute bottom-1/4 -right-5 z-20 animate-float-reverse">
              <Chip label="SIMPLE HEALTHY MEAL PLANS" hasCheck />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
