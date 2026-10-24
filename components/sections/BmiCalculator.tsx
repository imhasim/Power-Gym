"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useJoin } from "@/context/JoinContext";
import { ArrowRight } from "lucide-react";

export default function BmiCalculator() {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(75);
  const { scrollToJoin } = useJoin();

  const heightInMeters = height / 100;
  const bmiValue = parseFloat(
    (weight / (heightInMeters * heightInMeters)).toFixed(1)
  );

  let category = "Healthy Weight";
  let categoryColor = "text-[#FFE600]";
  let barPercent = 50;
  let suggestion = "Great job! Keep working out regularly and eating balanced meals to stay strong.";

  if (bmiValue < 18.5) {
    category = "Underweight";
    categoryColor = "text-sky-400";
    barPercent = 20;
    suggestion = "Eat healthy meals with plenty of protein and do gentle weight training to build strength.";
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    category = "Healthy Weight";
    categoryColor = "text-[#FFE600]";
    barPercent = 50;
    suggestion = "Great job! Keep working out regularly and eating balanced meals to stay strong.";
  } else if (bmiValue >= 25 && bmiValue < 30) {
    category = "A Little Overweight";
    categoryColor = "text-amber-400";
    barPercent = 75;
    suggestion = "Try our fun cardio classes and drink plenty of water to help trim extra weight easily.";
  } else {
    category = "Overweight";
    categoryColor = "text-red-400";
    barPercent = 92;
    suggestion = "Start with light walking and friendly coach guidance to build stamina and feel lighter.";
  }

  return (
    <section id="bmi" className="py-24 relative overflow-hidden bg-[#070705] cyber-grid">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FFE600]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <SectionLabel label="HEALTH CHECK" tag="[ BMI CALCULATOR ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            CHECK YOUR HEALTHY <span className="text-[#FFE600]">WEIGHT SCORE.</span>
          </h2>
          <p className="text-white/70 text-sm max-w-lg mx-auto">
            Move the sliders below to set your height and weight. Our easy calculator shows your score and gives you a helpful tip.
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="md:col-span-7 space-y-6">
              {/* Height */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono-tag">
                  <span className="text-white/70">YOUR HEIGHT:</span>
                  <span className="text-white font-bold">{height} CM ({(height / 30.48).toFixed(1)} FEET)</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#FFE600] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/50 font-mono-tag">
                  <span>140 CM (SHORT)</span>
                  <span>220 CM (TALL)</span>
                </div>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono-tag">
                  <span className="text-white/70">YOUR WEIGHT:</span>
                  <span className="text-white font-bold">{weight} KG ({(weight * 2.205).toFixed(0)} POUNDS)</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#FFE600] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/50 font-mono-tag">
                  <span>40 KG (LIGHT)</span>
                  <span>150 KG (HEAVY)</span>
                </div>
              </div>

              {/* Status categories legend */}
              <div className="grid grid-cols-4 gap-2 pt-2 text-[10px] font-mono-tag text-center text-white/60">
                <div className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="block text-sky-400 font-bold">&lt; 18.5</span>
                  <span>Under</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="block text-[#FFE600] font-bold">18.5 - 25</span>
                  <span>Healthy</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="block text-amber-400 font-bold">25 - 30</span>
                  <span>Over</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="block text-red-400 font-bold">&gt; 30</span>
                  <span>High</span>
                </div>
              </div>
            </div>

            {/* Computed Output */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-5">
              <div>
                <span className="text-[10px] font-mono-tag text-white/50 block">YOUR BMI SCORE</span>
                <div className="font-heading text-6xl font-black text-white my-1 flex items-baseline justify-center gap-1">
                  <span>{bmiValue}</span>
                  <span className="text-xs font-mono-tag text-white/40">score</span>
                </div>
                <div className={`text-xs font-mono-tag font-bold tracking-wider ${categoryColor}`}>
                  ● {category.toUpperCase()}
                </div>
              </div>

              {/* Gradient Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-[#FFE600] to-red-400 transition-all duration-300"
                  style={{ width: `${barPercent}%` }}
                />
              </div>

              {/* Suggestion */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-left text-xs space-y-1">
                <span className="font-mono-tag text-[10px] text-[#FFE600] block">COACH TIP:</span>
                <p className="text-white/75 text-[11px] leading-relaxed">{suggestion}</p>
              </div>

              <Button
                size="sm"
                variant="primary"
                onClick={() => scrollToJoin()}
                iconRight={<ArrowRight size={14} />}
                className="w-full font-bold uppercase tracking-wider text-xs"
              >
                Get a Workout Plan for Your Score
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
