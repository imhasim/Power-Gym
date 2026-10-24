"use client";

import React, { useState } from "react";
import { ArrowRight, Flame, ShieldCheck, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import confetti from "canvas-confetti";

export default function TrialCtaSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { saveLead } = useBooking();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");

    saveLead({
      name,
      phone,
      email: `${name.toLowerCase().replace(/\s+/g, "")}@pass.powergym.fit`,
      plan: "Pro Athlete (3-Day Trial Pass)",
      goal: "Overall Strength & Biomechanics",
      preferredTime: "Evening",
    });

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#FFE600", "#FFFFFF", "#CCB800"],
      });
    } catch (e) {
      console.log(e);
    }

    setSubmitted(true);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-[#FFE600]/30 bg-[#0e0e0a] p-8 sm:p-14 shadow-2xl shadow-[#FFE600]/10">
          {/* Ambient yellow radial within banner */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#FFE600]/12 blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE600]/15 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono-tag">
                <Flame size={13} className="animate-pulse" />
                <span>LIMITED 25 TRIAL PASSES ISSUED PER MONTH</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                EXPERIENCE THE ARENA. <br />
                <span className="text-[#FFE600]">CLAIM YOUR 3-DAY PASS.</span>
              </h2>

              <p className="text-white/70 text-sm max-w-lg leading-relaxed">
                Step onto the Eleiko platforms, trial our metabolic battle rope class, and immerse yourself in the 3°C cold plunge. Zero risk. Zero obligation.
              </p>

              <div className="flex items-center gap-6 text-xs text-white/50 pt-2 font-mono-tag">
                <span>✓ NO CREDIT CARD NEEDED</span>
                <span>✓ INCLUDES INBODY SCAN</span>
                <span>✓ TOWEL & LOCKER READY</span>
              </div>
            </div>

            {/* Right Fast Form */}
            <div className="lg:col-span-5 bg-[#141410] border border-white/10 rounded-2xl p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <span className="font-mono-tag text-xs text-[#FFE600] font-bold block">
                    FAST 20-SECOND REGISTRATION
                  </span>

                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono-tag text-white/60 block mb-1">
                      MOBILE NUMBER (10 DIGITS)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                    />
                  </div>

                  {error && <p className="text-red-400 text-xs">{error}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full font-bold uppercase tracking-wider text-xs"
                    iconRight={<ArrowRight size={16} />}
                  >
                    Activate Instant Pass
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 pt-1 font-mono-tag">
                    <ShieldCheck size={12} className="text-[#FFE600]" />
                    <span>INSTANT DIGITAL QR PASS ISSUED</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg">
                      Pass Reserved, {name}!
                    </h4>
                    <p className="text-xs text-white/60 mt-1">
                      Our front desk has registered your 3-day access. Show this message or your phone number upon arrival.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tag text-[#FFE600]">
                    PASS CODE: #PG-TRIAL-{phone.slice(-4)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
