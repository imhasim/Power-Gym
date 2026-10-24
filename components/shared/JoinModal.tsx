"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Flame, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { useBooking } from "@/context/BookingContext";
import Button from "@/components/ui/Button";

export default function JoinModal() {
  const { isJoinModalOpen, closeJoinModal, selectedPlan, saveLead } = useBooking();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: selectedPlan || "Pro Athlete",
    goal: "Hypertrophy & Muscle Mass",
    preferredTime: "Morning (06:00 - 10:00 AM)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState("849201");

  // Sync plan if changed outside
  React.useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  if (!isJoinModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save lead to localStorage
    saveLead(formData);
    setPassCode(String(Math.floor(100000 + Math.random() * 900000)));

    // Trigger celebratory confetti burst!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFE600", "#FFFFFF", "#CCB800", "#050505"],
      });
    } catch (e) {
      console.log(e);
    }

    setIsSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Power Gym Team! I would like to confirm my 3-Day Free Pass & membership inquiry.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested Plan: ${formData.plan}\nGoal: ${formData.goal}\nPreferred Time: ${formData.preferredTime}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      plan: "Pro Athlete",
      goal: "Hypertrophy & Muscle Mass",
      preferredTime: "Morning (06:00 - 10:00 AM)",
    });
    setErrors({});
    closeJoinModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0e0e0a] border border-[#FFE600]/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#FFE600]/10 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono-tag mb-3">
                <Flame size={12} className="animate-pulse" />
                <span>LIMITED 3-DAY FREE PASS INCLUDED</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Claim Your <span className="text-[#FFE600]">Power Pass</span>
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Zero commitment. Experience Olympic platforms, cold plunge recovery, and get an InBody bio-scan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono-tag text-white/70 mb-1">
                  FULL NAME *
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
                  } focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600] outline-none text-white text-sm transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-white/70 mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    } focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600] outline-none text-white text-sm transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono-tag text-white/70 mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600] outline-none text-white text-sm transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Membership Plan Choice */}
              <div>
                <label className="block text-xs font-mono-tag text-white/70 mb-1">
                  SELECTED TIER / PLAN
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) =>
                    setFormData({ ...formData, plan: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                >
                  <option value="Starter Power">Starter Power (₹999/mo) — Open Iron Access</option>
                  <option value="Pro Athlete">Pro Athlete (₹1,799/mo) — Full Recovery & Classes [Recommended]</option>
                  <option value="Elite VIP">Elite VIP (₹2,999/mo) — Dedicated 1-on-1 Master Coach</option>
                </select>
              </div>

              {/* Fitness Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-white/70 mb-1">
                    PRIMARY GOAL
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                  >
                    <option value="Hypertrophy & Muscle Mass">Hypertrophy & Muscle Mass</option>
                    <option value="Fat Loss & Calorie Burn">Fat Loss & Calorie Burn</option>
                    <option value="Olympic Strength & Power">Olympic Strength & Power</option>
                    <option value="Mobility & Longevity">Mobility & Longevity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tag text-white/70 mb-1">
                    PREFERRED TIME
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                  >
                    <option value="Morning (06:00 - 10:00 AM)">Morning (06:00 - 10:00 AM)</option>
                    <option value="Afternoon (12:00 - 04:00 PM)">Afternoon (12:00 - 04:00 PM)</option>
                    <option value="Evening (05:00 - 10:00 PM)">Evening (05:00 - 10:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs text-white/50 pt-2">
                <ShieldCheck size={16} className="text-[#FFE600]" />
                <span>Your information is strictly private. Instant pass issued.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,230,0,0.4)]"
                  iconRight={<ArrowRight size={18} />}
                >
                  Activate 3-Day Pass Now
                </Button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,230,0,0.5)]">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="font-mono-tag text-xs text-[#FFE600]">PASS CODE #PG-{passCode}</span>
              <h3 className="font-heading text-3xl font-bold text-white mt-1">
                Pass Activated!
              </h3>
              <p className="text-white/70 text-sm mt-2 max-w-sm mx-auto">
                Welcome, <strong className="text-white">{formData.name}</strong>. Your 3-Day VIP Free Trial for the{" "}
                <strong className="text-[#FFE600]">{formData.plan}</strong> tier has been registered.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-white/50">Location:</span>
                <span className="text-white font-medium">Power Gym Main Arena, Sector 4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Timing:</span>
                <span className="text-white font-medium">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Assigned Coach:</span>
                <span className="text-[#FFE600] font-medium">Marcus Thorne</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm tracking-wide transition-all shadow-lg"
              >
                <PhoneCall size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 text-xs text-white/50 hover:text-white transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
