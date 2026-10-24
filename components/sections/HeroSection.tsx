"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Shield, Trophy, Activity, Dumbbell, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import SectionLabel from "@/components/ui/SectionLabel";
import { useBooking } from "@/context/BookingContext";

export default function HeroSection() {
  const { openJoinModal } = useBooking();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden cyber-grid">
      {/* Volumetric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[550px] bg-[#FFE600]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#3A3A0A]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFE600]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Tech Corner Coordinates */}
      <div className="hidden lg:block absolute top-28 left-8 text-[11px] font-mono-tag text-white/30 space-y-1">
        <p>/LAT 28.6139° N</p>
        <p>/LONG 77.2090° E</p>
        <p>/STATUS: ELEIKO PLATFORMS ONLINE</p>
      </div>

      <div className="hidden lg:block absolute top-28 right-8 text-[11px] font-mono-tag text-right text-white/30 space-y-1">
        <p>[ POWER_OS // V1.0 ]</p>
        <p>[ CAPACITY: 84% OCCUPIED ]</p>
        <p>[ AIR PURITY: 99.4% HEPA ]</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <SectionLabel
              label="ELITE PERFORMANCE ARENA"
              tag="24/7 BIOMETRIC IRON"
              glow
            />

            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              BUILD POWER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#FFF366] to-[#FFE600] glow-text">
                BREAK LIMITS.
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              State-of-the-art barbell biomechanics, Olympic calibrated platforms, anaerobic battle conditioning, and contrast thermal recovery engineered for athletes who demand results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={() => openJoinModal()}
                iconRight={<ArrowRight size={18} />}
                className="w-full sm:w-auto font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,230,0,0.45)]"
              >
                Claim 3-Day Free Pass
              </Button>

              <Button
                size="lg"
                variant="secondary"
                href="/programs"
                icon={<Dumbbell size={18} className="text-[#FFE600]" />}
                className="w-full sm:w-auto text-sm tracking-wider font-semibold"
              >
                Explore Programs
              </Button>
            </div>

            {/* Live Ticker / Features strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/60 font-mono-tag">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-ping" />
                <span className="text-white font-medium">12 OPEN PLATFORMS NOW</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/80">
                <Shield size={14} className="text-[#FFE600]" />
                <span>CSCS CERTIFIED COACHES</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/80">
                <Flame size={14} className="text-[#FFE600]" />
                <span>3°C COLD PLUNGE READY</span>
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

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 pointer-events-none" />

              {/* Top Corner Monogram */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md">
                <span className="font-mono-tag text-[10px] text-[#FFE600] tracking-widest">
                  /ARENA_ZONE_01
                </span>
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-[#12120e]/85 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tag text-[#FFE600]">
                      LIVE BIOMECHANICS
                    </span>
                    <h4 className="font-heading font-bold text-white text-base">
                      Olympic Deadlift & Force Production
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FFE600]/15 border border-[#FFE600]/40 flex items-center justify-center text-[#FFE600] font-mono-tag text-xs font-black">
                    850W
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Activity size={13} className="text-[#FFE600]" /> 165 BPM Avg
                  </span>
                  <span>•</span>
                  <span>Eleiko Calibrated Steel</span>
                </div>
              </div>
            </div>

            {/* Floating Signature Chips around the image */}
            <div className="hidden sm:block absolute -top-4 -left-6 z-20 animate-float-slow">
              <Chip label="EXPERT CSCS COACHES" hasCheck />
            </div>

            <div className="hidden sm:block absolute top-1/3 -right-6 z-20 animate-float-reverse">
              <Chip label="24/7 BIOMETRIC ACCESS" hasCheck />
            </div>

            <div className="hidden sm:block absolute -bottom-3 -left-4 z-20 animate-float-slow">
              <Chip label="COLD PLUNGE & SAUNA" hasCheck />
            </div>

            <div className="hidden sm:block absolute bottom-1/4 -right-5 z-20 animate-float-reverse">
              <Chip label="CUSTOM MACRO PROTOCOLS" hasCheck />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
