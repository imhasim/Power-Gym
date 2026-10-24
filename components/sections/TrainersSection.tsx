"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ArrowRight, X, Trophy, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { trainersData, Trainer } from "@/data/trainers";
import { useBooking } from "@/context/BookingContext";

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const { openJoinModal } = useBooking();

  return (
    <section id="trainers" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#FFE600]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel label="FACULTY OF FORCE" tag="[ COACHES ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              MASTER PRACTITIONERS. <br />
              <span className="text-[#FFE600]">ZERO COMPROMISE STANDARDS.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            Our coaching team consists of certified CSCS strength directors, Olympic weightlifting referees, and sports rehabilitation specialists.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer) => (
            <GlassCard
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className="overflow-hidden flex flex-col justify-between group cursor-pointer"
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
                    {trainer.experienceYears} YRS EXPERIENCE
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FFE600] transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-white/60 font-medium line-clamp-1 mt-0.5">
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

                  <p className="text-xs text-white/50 italic line-clamp-2 pt-1 border-t border-white/5">
                    "{trainer.quote}"
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-mono-tag text-[#FFE600] group-hover:translate-x-0.5 transition-transform">
                <span>VIEW PROFILE & BIO</span>
                <ArrowRight size={14} />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Trainer Profile Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-[#0e0e0a] border border-[#FFE600]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Photo */}
              <div className="sm:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Bio & Credentials */}
              <div className="sm:col-span-7 space-y-4">
                <div>
                  <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                    {selectedTrainer.code} // {selectedTrainer.experienceYears} YEARS EXPERIENCE
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedTrainer.name}
                  </h3>
                  <p className="text-xs text-[#FFE600]/90 font-medium mt-0.5">
                    {selectedTrainer.role}
                  </p>
                </div>

                <p className="text-xs text-white/80 leading-relaxed">
                  {selectedTrainer.bio}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] font-mono-tag text-white/40 block">CLIENTS TRANSFORMED</span>
                    <span className="font-bold text-white text-sm">{selectedTrainer.stats.clientsTransformed}+</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tag text-white/40 block">PERSONAL BEST / PR</span>
                    <span className="font-bold text-[#FFE600] text-sm">{selectedTrainer.stats.personalBest}</span>
                  </div>
                </div>

                {/* Credentials */}
                <div>
                  <span className="text-[10px] font-mono-tag text-white/50 block mb-1.5">
                    CERTIFICATIONS & ACCREDITATIONS:
                  </span>
                  <div className="space-y-1">
                    {selectedTrainer.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle size={13} className="text-[#FFE600] shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="primary"
                    className="flex-1 font-bold tracking-wider text-xs uppercase"
                    onClick={() => {
                      setSelectedTrainer(null);
                      openJoinModal();
                    }}
                  >
                    Request 1-on-1 Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
