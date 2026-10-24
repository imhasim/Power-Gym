"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, User, Check, Flame, ArrowRight, ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { scheduleData, daysOfWeek, ScheduleClass } from "@/data/schedule";
import { useBooking } from "@/context/BookingContext";

export default function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { bookClass, isBooked, openJoinModal } = useBooking();

  const categories = [
    { id: "all", label: "ALL SESSIONS" },
    { id: "strength", label: "BARBELL & STRENGTH" },
    { id: "hiit", label: "METABOLIC & HIIT" },
    { id: "mobility", label: "RECOVERY & YOGA" },
    { id: "combat", label: "BOXING" },
  ];

  const dayClasses = scheduleData.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section id="schedule" className="py-24 relative overflow-hidden bg-[#070705] cyber-grid">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FFE600]/6 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel label="LIVE TIMETABLE" tag="[ SCHEDULE ]" />
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              WEEKLY CLASS CALENDAR. <br />
              <span className="text-[#FFE600]">RESERVE YOUR SPOT.</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md">
            Classes are strictly capped to 15–20 athletes to guarantee coach attention. Real-time spots sync with your browser.
          </p>
        </div>

        {/* Day of Week Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {daysOfWeek.map((day) => {
            const isToday = day === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono-tag tracking-wider shrink-0 transition-all cursor-pointer ${
                  isToday
                    ? "bg-[#FFE600] text-black font-extrabold shadow-[0_0_15px_rgba(255,230,0,0.35)]"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {day.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Category Sub-Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono-tag tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-white/15 text-[#FFE600] border border-[#FFE600]/40"
                  : "bg-transparent text-white/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Classes Timetable Grid */}
        {dayClasses.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-[#0f0f0c] border border-white/10 space-y-3">
            <Calendar size={36} className="text-white/30 mx-auto" />
            <h4 className="font-heading text-lg font-bold text-white">No sessions scheduled for this filter</h4>
            <p className="text-xs text-white/50">Try switching to ALL SESSIONS or choosing another day of the week.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {dayClasses.map((item) => {
              const booked = isBooked(item.id);

              return (
                <div
                  key={item.id}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 ${
                    booked
                      ? "bg-[#141410] border-[#FFE600]/60 shadow-[0_0_20px_rgba(255,230,0,0.15)]"
                      : "bg-[#0f0f0c]/80 border-white/10 hover:border-[#FFE600]/30"
                  }`}
                >
                  {/* Left: Time & Class Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Time Badge */}
                    <div className="w-32 shrink-0 space-y-0.5">
                      <span className="font-heading text-2xl font-black text-white block">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono-tag text-[#FFE600]">
                        {item.duration}
                      </span>
                    </div>

                    {/* Class Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                          {item.category.toUpperCase()}
                        </span>
                        <span className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600]">
                          INTENSITY: {item.intensity.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-white/60 flex-wrap">
                        <span className="flex items-center gap-1.5">
                          <User size={13} className="text-[#FFE600]" /> Coach {item.trainer}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#FFE600]" /> {item.room}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Spots Remaining & Action Button */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                    <div className="text-left lg:text-right">
                      <span className="text-[10px] font-mono-tag text-white/50 block">AVAILABILITY</span>
                      <span className="text-xs font-mono-tag font-bold text-white">
                        {item.remainingSpots} of {item.totalSpots} spots left
                      </span>
                    </div>

                    {booked ? (
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] font-mono-tag text-xs font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]">
                        <Check size={14} strokeWidth={3} />
                        <span>SPOT RESERVED</span>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() =>
                          bookClass({
                            id: item.id,
                            day: item.day,
                            time: item.time,
                            title: item.title,
                            trainer: item.trainer,
                            room: item.room,
                          })
                        }
                        className="text-xs font-bold tracking-wider"
                      >
                        BOOK SPOT
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
