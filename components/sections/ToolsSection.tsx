"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { presetRoutines, PresetRoutine } from "@/data/workouts";
import { useBooking } from "@/context/BookingContext";
import { Calculator, Flame, Dumbbell, Printer, ArrowRight, Sparkles, Check } from "lucide-react";

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<"bmi" | "tdee" | "workout">("bmi");
  const { openJoinModal } = useBooking();

  // BMI State
  const [bmiHeight, setBmiHeight] = useState<number>(175);
  const [bmiWeight, setBmiWeight] = useState<number>(75);

  const heightInMeters = bmiHeight / 100;
  const bmiValue = parseFloat(
    (bmiWeight / (heightInMeters * heightInMeters)).toFixed(1)
  );

  let bmiCategory = "Normal Weight";
  let bmiColor = "text-emerald-400";
  let bmiBarPercent = 50;
  let bmiRecommendation = "Aesthetic Hypertrophy Architecture";

  if (bmiValue < 18.5) {
    bmiCategory = "Underweight";
    bmiColor = "text-sky-400";
    bmiBarPercent = 20;
    bmiRecommendation = "Hypertrophy & Caloric Surplus Protocol";
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    bmiCategory = "Normal Weight / Lean";
    bmiColor = "text-[#FFE600]";
    bmiBarPercent = 48;
    bmiRecommendation = "Olympic Barbell & Peak Strength";
  } else if (bmiValue >= 25 && bmiValue < 30) {
    bmiCategory = "Overweight / Muscular Density";
    bmiColor = "text-amber-400";
    bmiBarPercent = 72;
    bmiRecommendation = "Metabolic HIIT & Body Recomp";
  } else {
    bmiCategory = "Obese / Metabolic Flush Needed";
    bmiColor = "text-red-400";
    bmiBarPercent = 92;
    bmiRecommendation = "Metabolic Shred & Contrast Recovery";
  }

  // TDEE State
  const [tdeeAge, setTdeeAge] = useState<number>(28);
  const [tdeeGender, setTdeeGender] = useState<"male" | "female">("male");
  const [tdeeHeight, setTdeeHeight] = useState<number>(175);
  const [tdeeWeight, setTdeeWeight] = useState<number>(75);
  const [tdeeActivity, setTdeeActivity] = useState<number>(1.55); // moderate
  const [tdeeGoal, setTdeeGoal] = useState<"cut" | "maintain" | "bulk">("cut");

  // Mifflin-St Jeor Equation
  const bmr =
    tdeeGender === "male"
      ? 10 * tdeeWeight + 6.25 * tdeeHeight - 5 * tdeeAge + 5
      : 10 * tdeeWeight + 6.25 * tdeeHeight - 5 * tdeeAge - 161;

  const maintenanceCalories = Math.round(bmr * tdeeActivity);
  const targetCalories =
    tdeeGoal === "cut"
      ? Math.round(maintenanceCalories - 450)
      : tdeeGoal === "bulk"
      ? Math.round(maintenanceCalories + 350)
      : maintenanceCalories;

  // Macro Splits (High protein athletic split)
  const proteinGrams = Math.round((targetCalories * 0.32) / 4);
  const carbGrams = Math.round((targetCalories * 0.43) / 4);
  const fatGrams = Math.round((targetCalories * 0.25) / 9);

  // Workout Split State
  const [workoutDays, setWorkoutDays] = useState<number>(4);
  const selectedRoutine =
    presetRoutines.find((r) => r.daysPerWeek === workoutDays) ||
    presetRoutines[1];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE600]/6 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <SectionLabel label="METABOLIC LAB & DIAGNOSTICS" tag="[ TOOLS ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            PRECISION FITNESS <span className="text-[#FFE600]">CALCULATORS.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Science eliminates guesswork. Calculate your exact body mass index, daily caloric expenditure, and generate an evidence-backed weekly workout routine.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#12120e] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("bmi")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                activeTab === "bmi"
                  ? "bg-[#FFE600] text-black font-extrabold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              01 // BMI ANALYZER
            </button>
            <button
              onClick={() => setActiveTab("tdee")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                activeTab === "tdee"
                  ? "bg-[#FFE600] text-black font-extrabold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              02 // TDEE & MACRO FUEL
            </button>
            <button
              onClick={() => setActiveTab("workout")}
              className={`px-5 py-2.5 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                activeTab === "workout"
                  ? "bg-[#FFE600] text-black font-extrabold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              03 // ROUTINE PLANNER
            </button>
          </div>
        </div>

        {/* TAB 1: BMI ANALYZER */}
        {activeTab === "bmi" && (
          <GlassCard className="p-8 sm:p-12 max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                    [ BIOMETRIC PARAMETERS ]
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1">
                    Calculate Body Mass Index
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Slide your current height and weight to assess baseline physique category.
                  </p>
                </div>

                {/* Height Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono-tag">
                    <span className="text-white/70">HEIGHT:</span>
                    <span className="text-white font-bold">{bmiHeight} CM ({(bmiHeight / 30.48).toFixed(1)} FT)</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="220"
                    value={bmiHeight}
                    onChange={(e) => setBmiHeight(Number(e.target.value))}
                    className="w-full accent-[#FFE600] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono-tag">
                    <span>140 CM</span>
                    <span>220 CM</span>
                  </div>
                </div>

                {/* Weight Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono-tag">
                    <span className="text-white/70">WEIGHT:</span>
                    <span className="text-white font-bold">{bmiWeight} KG ({(bmiWeight * 2.205).toFixed(0)} LBS)</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={bmiWeight}
                    onChange={(e) => setBmiWeight(Number(e.target.value))}
                    className="w-full accent-[#FFE600] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono-tag">
                    <span>40 KG</span>
                    <span>150 KG</span>
                  </div>
                </div>
              </div>

              {/* Output Gauge & Suggestion */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-6 text-center">
                <div>
                  <span className="text-[11px] font-mono-tag text-white/50 block">YOUR COMPUTED BMI VALUE</span>
                  <div className="font-heading text-6xl font-black text-white my-1 flex items-baseline justify-center gap-1">
                    <span>{bmiValue}</span>
                    <span className="text-sm font-mono-tag text-white/40">kg/m²</span>
                  </div>
                  <div className={`text-sm font-mono-tag font-bold tracking-wider ${bmiColor}`}>
                    ● {bmiCategory.toUpperCase()}
                  </div>
                </div>

                {/* Bar progress */}
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 via-[#FFE600] to-red-400 transition-all duration-300"
                    style={{ width: `${bmiBarPercent}%` }}
                  />
                </div>

                {/* Suggested Protocol */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs space-y-1">
                  <span className="font-mono-tag text-[10px] text-[#FFE600] block">RECOMMENDED PROGRAM:</span>
                  <p className="font-semibold text-white text-sm">{bmiRecommendation}</p>
                  <p className="text-white/60 text-[11px]">
                    Includes progressive barbell periodization, biometric body fat tracking, and contrast cold therapy.
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => openJoinModal()}
                  className="w-full font-bold text-xs uppercase tracking-wider"
                >
                  Consult a Coach for this BMI
                </Button>
              </div>
            </div>
          </GlassCard>
        )}

        {/* TAB 2: TDEE & MACRO FUEL */}
        {activeTab === "tdee" && (
          <GlassCard className="p-8 sm:p-12 max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                  [ MIFFLIN-ST JEOR FORMULA ]
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Metabolic TDEE & Macros
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">GENDER</label>
                    <select
                      value={tdeeGender}
                      onChange={(e) => setTdeeGender(e.target.value as "male" | "female")}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">AGE</label>
                    <input
                      type="number"
                      value={tdeeAge}
                      onChange={(e) => setTdeeAge(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">HEIGHT (CM)</label>
                    <input
                      type="number"
                      value={tdeeHeight}
                      onChange={(e) => setTdeeHeight(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">WEIGHT (KG)</label>
                    <input
                      type="number"
                      value={tdeeWeight}
                      onChange={(e) => setTdeeWeight(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono-tag text-white/60 block mb-1">ACTIVITY LEVEL</label>
                  <select
                    value={tdeeActivity}
                    onChange={(e) => setTdeeActivity(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white outline-none"
                  >
                    <option value={1.2}>Sedentary (desk job, 0 training)</option>
                    <option value={1.375}>Light Active (1–3 gym sessions/wk)</option>
                    <option value={1.55}>Moderate Active (4–5 gym sessions/wk)</option>
                    <option value={1.725}>Very Active (6–7 heavy training sessions/wk)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono-tag text-white/60 block mb-1">PRIMARY GOAL</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setTdeeGoal("cut")}
                      className={`py-2 rounded-xl text-xs font-mono-tag ${
                        tdeeGoal === "cut" ? "bg-[#FFE600] text-black font-bold" : "bg-white/5 text-white/60"
                      }`}
                    >
                      FAT CUT (-450)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTdeeGoal("maintain")}
                      className={`py-2 rounded-xl text-xs font-mono-tag ${
                        tdeeGoal === "maintain" ? "bg-[#FFE600] text-black font-bold" : "bg-white/5 text-white/60"
                      }`}
                    >
                      MAINTAIN
                    </button>
                    <button
                      type="button"
                      onClick={() => setTdeeGoal("bulk")}
                      className={`py-2 rounded-xl text-xs font-mono-tag ${
                        tdeeGoal === "bulk" ? "bg-[#FFE600] text-black font-bold" : "bg-white/5 text-white/60"
                      }`}
                    >
                      LEAN BULK (+350)
                    </button>
                  </div>
                </div>
              </div>

              {/* Targets & Macro breakdown */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono-tag text-white/50 block">TARGET DAILY INTAKE</span>
                  <div className="font-heading text-5xl font-black text-[#FFE600] my-1 flex items-baseline gap-1">
                    <span>{targetCalories.toLocaleString()}</span>
                    <span className="text-sm font-mono-tag text-white/40">KCAL / DAY</span>
                  </div>
                  <span className="text-xs text-white/60">
                    Baseline Maintenance TDEE: {maintenanceCalories.toLocaleString()} kcal
                  </span>
                </div>

                {/* Macro Split Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] font-mono-tag text-[#FFE600] block">PROTEIN</span>
                    <span className="font-heading font-black text-xl text-white block mt-0.5">{proteinGrams}g</span>
                    <span className="text-[9px] text-white/40 block mt-0.5">32% Calories</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] font-mono-tag text-sky-400 block">CARBOHYDRATES</span>
                    <span className="font-heading font-black text-xl text-white block mt-0.5">{carbGrams}g</span>
                    <span className="text-[9px] text-white/40 block mt-0.5">43% Calories</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-[10px] font-mono-tag text-amber-400 block">HEALTHY FATS</span>
                    <span className="font-heading font-black text-xl text-white block mt-0.5">{fatGrams}g</span>
                    <span className="text-[9px] text-white/40 block mt-0.5">25% Calories</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/20 text-xs text-white/80 space-y-1">
                  <p className="font-bold text-[#FFE600]">Coach Advice:</p>
                  <p className="text-[11px] text-white/70">
                    Consume at least 40g of your carbs 90 minutes before your barbell workout to maximize power output and intramuscular glycogen synthesis.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* TAB 3: WORKOUT SPLIT GENERATOR */}
        {activeTab === "workout" && (
          <GlassCard className="p-8 sm:p-12 max-w-4xl mx-auto animate-fade-in space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                  [ PERIODIZED SPLIT GENERATOR ]
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedRoutine.name}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {selectedRoutine.description}
                </p>
              </div>

              {/* Days filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tag text-white/50">DAYS/WK:</span>
                {[3, 4, 5].map((d) => (
                  <button
                    key={d}
                    onClick={() => setWorkoutDays(d)}
                    className={`w-9 h-9 rounded-xl font-mono-tag text-xs font-bold transition-all ${
                      workoutDays === d
                        ? "bg-[#FFE600] text-black shadow-[0_0_12px_rgba(255,230,0,0.4)]"
                        : "bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    {d}D
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Split Cards */}
            <div className="space-y-6">
              {selectedRoutine.schedule.map((day, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tag text-[#FFE600]">{day.dayName}</span>
                      <h4 className="font-heading font-bold text-white text-base">{day.focus}</h4>
                    </div>
                    <span className="text-xs font-mono-tag text-white/40">{day.exercises.length} Movements</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/5 text-white/40 font-mono-tag text-[10px]">
                          <th className="py-2">EXERCISE</th>
                          <th className="py-2 text-center">SETS</th>
                          <th className="py-2 text-center">REPS</th>
                          <th className="py-2 text-center">REST</th>
                          <th className="py-2">COACHING CUE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {day.exercises.map((ex, eIdx) => (
                          <tr key={eIdx} className="hover:bg-white/5">
                            <td className="py-2.5 font-semibold text-white/90">{ex.name}</td>
                            <td className="py-2.5 text-center text-[#FFE600] font-mono-tag">{ex.sets}</td>
                            <td className="py-2.5 text-center text-white/80 font-mono-tag">{ex.reps}</td>
                            <td className="py-2.5 text-center text-white/50 font-mono-tag">{ex.rest}</td>
                            <td className="py-2.5 text-white/50 text-[11px]">{ex.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Print and Export CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-white/50">
                Print or export to PDF to take to your next gym session.
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handlePrint}
                  icon={<Printer size={15} />}
                  className="text-xs"
                >
                  Print / Save Routine
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openJoinModal()}
                  className="text-xs font-bold"
                >
                  Execute with Power Gym Coach
                </Button>
              </div>
            </div>
          </GlassCard>
        )}
      </div>
    </section>
  );
}
