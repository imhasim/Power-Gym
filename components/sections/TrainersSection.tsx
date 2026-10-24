"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import { trainersData } from "@/data/trainers";
import { useJoin } from "@/context/JoinContext";

export default function TrainersSection() {
  const { scrollToJoin } = useJoin();

  return (
    <section id="trainers" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#FFE600]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="MEET OUR TEAM" tag="[ COACHES ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              FRIENDLY COACHES. <br />
              <span className="text-[#FFE600]">EXPERT GUIDANCE FOR YOU.</span>
            </h2>
          </div>
          <p className="text-white/70 text-sm max-w-md">
            Our trainers have years of real coaching experience. They are patient, welcoming, and here to help you exercise safely without getting injured.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <GlassCard
              key={trainer.id}
              className="overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Trainer Portrait */}
                <div className="relative h-80 w-full overflow-hidden bg-[#111]">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0a] via-black/20 to-transparent" />

                  {/* Corner Code */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-mono-tag text-[#FFE600] font-bold">
                      {trainer.code}
                    </span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-md text-[10px] font-mono-tag text-white/90">
                    {trainer.experienceYears} YEARS EXPERIENCE
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FFE600] transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-[#FFE600]/90 font-medium line-clamp-1 mt-0.5">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono-tag px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/70"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-white/70 italic line-clamp-2 pt-1 border-t border-white/5">
                    "{trainer.quote}"
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => scrollToJoin()}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#FFE600] text-white/80 hover:text-black border border-white/10 hover:border-[#FFE600] flex items-center justify-between text-xs font-mono-tag transition-all duration-300 cursor-pointer"
                >
                  <span>TALK WITH A COACH</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
