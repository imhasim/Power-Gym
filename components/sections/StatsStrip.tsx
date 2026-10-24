"use client";

import React, { useEffect, useState, useRef } from "react";
import { Users, Award, Calendar, Zap } from "lucide-react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

export default function StatsStrip() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    coaches: 0,
    years: 0,
    classes: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      id: "members",
      target: 1400,
      suffix: "+",
      label: "Active Members",
      sublabel: "94% 6-Month Retention Rate",
      icon: <Users size={22} className="text-[#FFE600]" />,
    },
    {
      id: "coaches",
      target: 28,
      suffix: "+",
      label: "Certified Coaches",
      sublabel: "CSCS & Olympic Specialists",
      icon: <Award size={22} className="text-[#FFE600]" />,
    },
    {
      id: "years",
      target: 10,
      suffix: "+",
      label: "Years Excellence",
      sublabel: "Pioneering Strength Science",
      icon: <Zap size={22} className="text-[#FFE600]" />,
    },
    {
      id: "classes",
      target: 45,
      suffix: "+",
      label: "Weekly Classes",
      sublabel: "HIIT, Barbell & Mobility",
      icon: <Calendar size={22} className="text-[#FFE600]" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease-out cubic
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 py-8 border-y border-white/10 bg-[#090907]/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const countVal =
              counts[stat.id as keyof typeof counts] || 0;

            return (
              <div
                key={stat.id}
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 ${
                  idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline justify-center sm:justify-start">
                    <span>{countVal.toLocaleString()}</span>
                    <span className="text-[#FFE600] ml-0.5">{stat.suffix}</span>
                  </div>
                  <p className="text-sm font-semibold text-white/90 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-white/50 font-mono-tag">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
