"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useJoin } from "@/context/JoinContext";
import confetti from "canvas-confetti";
import { ShieldCheck, CheckCircle2, ArrowRight, Flame, MessageCircle } from "lucide-react";

export default function JoinSection() {
  const { selectedPlan, setSelectedPlan } = useJoin();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Build Muscle & Tone Up",
    preferredTime: "Morning (06:00 AM - 10:00 AM)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState("849201");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please write your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errs.email = "Please enter a valid email address.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setPassCode(String(Math.floor(100000 + Math.random() * 900000)));

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#FFE600", "#FFFFFF", "#CCB800", "#050505"],
      });
    } catch (e) {
      console.log(e);
    }

    setIsSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Power Gym! I would like to use my 3-Day Free Pass.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPlan: ${selectedPlan}\nGoal: ${formData.goal}\nPreferred Time: ${formData.preferredTime}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden bg-[#050505] cyber-grid">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFE600]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <SectionLabel label="GET STARTED" tag="[ 3-DAY FREE PASS ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            COME TRY POWER GYM <span className="text-[#FFE600]">FOR FREE.</span>
          </h2>
          <p className="text-white/70 text-sm max-w-lg mx-auto">
            Fill out this quick form to claim your 3-Day Free Pass. Visit our gym floor, try the machines, and talk with our friendly coaches with zero pressure.
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono-tag w-fit">
                <Flame size={13} className="animate-pulse" />
                <span>LIMITED 3-DAY FREE PASS AVAILABLE</span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.name ? "border-red-500" : "border-white/10"
                  } focus:border-[#FFE600] outline-none text-white text-sm transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                    YOUR PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    } focus:border-[#FFE600] outline-none text-white text-sm transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                    YOUR EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } focus:border-[#FFE600] outline-none text-white text-sm transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Plan Choice & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                    MEMBERSHIP PLAN YOU WANT TO TRY
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                  >
                    <option value="Starter Power">Starter Power (₹999/mo) — Gym Floor Access</option>
                    <option value="Pro Athlete">Pro Athlete (₹1,799/mo) — Gym + Classes + Sauna</option>
                    <option value="Elite VIP">Elite VIP (₹2,999/mo) — Includes Personal Coach</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                    WHAT IS YOUR MAIN FITNESS GOAL?
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                  >
                    <option value="Build Muscle & Tone Up">Build Muscle & Tone Up</option>
                    <option value="Lose Weight & Burn Fat">Lose Weight & Burn Fat</option>
                    <option value="Get Stronger & Lift Heavy">Get Stronger & Lift Heavy</option>
                    <option value="Improve Flexibility & Stay Healthy">Improve Flexibility & Stay Healthy</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                  WHEN DO YOU PREFER TO WORK OUT?
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                >
                  <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                  <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="Evening (05:00 PM - 10:00 PM)">Evening (05:00 PM - 10:00 PM)</option>
                </select>
              </div>

              {/* Security info */}
              <div className="flex items-center gap-2 text-xs text-white/50 pt-1 font-mono-tag">
                <ShieldCheck size={14} className="text-[#FFE600]" />
                <span>NO PAYMENT NEEDED • WE NEVER SHARE YOUR CONTACT INFO</span>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full font-bold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,230,0,0.4)]"
                iconRight={<ArrowRight size={18} />}
              >
                Claim My Free 3-Day Pass
              </Button>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,230,0,0.5)]">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="font-mono-tag text-xs text-[#FFE600]">
                  PASS CODE #PG-{passCode}
                </span>
                <h3 className="font-heading text-3xl font-bold text-white mt-1">
                  Your Free Pass is Ready!
                </h3>
                <p className="text-white/75 text-sm mt-2 max-w-sm mx-auto">
                  Welcome, <strong className="text-white">{formData.name}</strong>. Your 3-Day Free Pass for the{" "}
                  <strong className="text-[#FFE600]">{selectedPlan}</strong> plan is now active.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-white/50">Location:</span>
                  <span className="text-white font-medium">Power Gym Main Arena, Sector 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Workout Time:</span>
                  <span className="text-white font-medium">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Your Host:</span>
                  <span className="text-[#FFE600] font-medium">Coach Marcus Thorne</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm tracking-wide transition-all shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Send Us a Message on WhatsApp</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 text-xs text-white/50 hover:text-white transition-colors"
                >
                  Submit for Another Person
                </button>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
