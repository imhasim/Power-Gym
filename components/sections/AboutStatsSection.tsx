"use client";

import React, { useEffect, useState, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { Dumbbell, Flame, HeartPulse, ShieldCheck, Users, Award, Zap, Calendar } from "lucide-react";

export default function AboutStatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    coaches: 0,
    years: 0,
    classes: 0,
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              members: Math.round(ease * 1400),
              coaches: Math.round(ease * 28),
              years: Math.round(ease * 10),
              classes: Math.round(ease * 45),
            });

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts({
                members: 1400,
                coaches: 28,
                years: 10,
                classes: 45,
              });
            }
          }, frameRate);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const pillars = [
    {
      code: "PART // 01",
      title: "Proper Form & Safety",
      desc: "Learn how to lift weights correctly with coach guidance so you build strength without any aches or back pain.",
      icon: <Dumbbell size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PART // 02",
      title: "Fun Cardio & Fat Burn",
      desc: "Energetic workouts using battle ropes, bikes, and body movements that help you burn calories and stay active.",
      icon: <Flame size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PART // 03",
      title: "Relaxing Recovery",
      desc: "Cold water plunge tubs and warm wooden saunas to soothe your sore muscles, ease stress, and help you sleep well.",
      icon: <HeartPulse size={20} className="text-[#FFE600]" />,
    },
    {
      code: "PART // 04",
      title: "Friendly Community",
      desc: "A warm, supportive environment with no ego. Members encourage each other whether you are a beginner or experienced.",
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
            <SectionLabel label="WHO WE ARE" tag="[ ABOUT POWER GYM ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              MORE THAN A GYM. <br />
              <span className="text-[#FFE600]">A WELCOMING PLACE TO GET HEALTHY.</span>
            </h2>
          </div>
          <div className="hidden sm:block text-right">
            <span className="font-mono-tag text-xs text-white/40 block">
              / SECTOR 4, NEW DELHI
            </span>
            <span className="font-mono-tag text-xs text-[#FFE600] font-semibold">
              CLEAN & SPACIOUS FITNESS CLUB
            </span>
          </div>
        </div>

        {/* Editorial Statement + Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="font-heading text-xl sm:text-2xl text-white/90 font-medium leading-relaxed">
              Many gyms can feel crowded, noisy, or confusing. At Power Gym, we keep things simple, clean, and friendly. We have high-quality equipment, trainers who genuinely care about your goals, and a supportive community where everyone belongs.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/70">
            <div>
              <span className="font-mono-tag text-xs text-[#FFE600] font-bold block mb-1">
                // CLEAN & SPACIOUS FLOOR
              </span>
              <p>
                We keep our gym floor clean, well-lit, and organized so you always have plenty of room to work out comfortably.
              </p>
            </div>
            <div>
              <span className="font-mono-tag text-xs text-[#FFE600] font-bold block mb-1">
                // BEGINNERS ARE WELCOME
              </span>
              <p>
                Whether you are stepping into a gym for the first time or returning after a break, our staff is always here to help you.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => (
            <GlassCard key={pillar.code} className="p-6 group">
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
              <p className="text-white/70 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Integrated Stats Strip */}
        <div
          ref={statsRef}
          className="rounded-3xl border border-white/10 bg-[#0d0d0a]/90 p-8 shadow-2xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Users size={22} className="text-[#FFE600]" />
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start">
                  <span>{counts.members.toLocaleString()}</span>
                  <span className="text-[#FFE600] ml-0.5">+</span>
                </div>
                <p className="text-sm font-semibold text-white/90 mt-0.5">Happy Members</p>
                <p className="text-xs text-white/50 font-mono-tag">Training Regularly</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pt-6 sm:pt-0 sm:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Award size={22} className="text-[#FFE600]" />
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start">
                  <span>{counts.coaches}</span>
                  <span className="text-[#FFE600] ml-0.5">+</span>
                </div>
                <p className="text-sm font-semibold text-white/90 mt-0.5">Friendly Coaches</p>
                <p className="text-xs text-white/50 font-mono-tag">Certified Trainers</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pt-6 sm:pt-0 sm:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Zap size={22} className="text-[#FFE600]" />
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start">
                  <span>{counts.years}</span>
                  <span className="text-[#FFE600] ml-0.5">+</span>
                </div>
                <p className="text-sm font-semibold text-white/90 mt-0.5">Years of Service</p>
                <p className="text-xs text-white/50 font-mono-tag">In Our Community</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pt-6 sm:pt-0 sm:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Calendar size={22} className="text-[#FFE600]" />
              </div>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start">
                  <span>{counts.classes}</span>
                  <span className="text-[#FFE600] ml-0.5">+</span>
                </div>
                <p className="text-sm font-semibold text-white/90 mt-0.5">Weekly Classes</p>
                <p className="text-xs text-white/50 font-mono-tag">Cardio, Lifting & Yoga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
