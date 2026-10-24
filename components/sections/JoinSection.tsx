"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useJoin } from "@/context/JoinContext";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { GYM_CONFIG, MAP_LINK, MAP_EMBED } from "@/lib/config";

export default function JoinSection() {
  const { selectedPlan, setSelectedPlan } = useJoin();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Build Muscle & Tone Up",
    preferredTime: "Morning (05:00 AM - 10:00 AM)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please write your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hi Power Gym, I want to join.
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Plan: ${selectedPlan}
Goal: ${formData.goal}
Preferred time: ${formData.preferredTime}`;

    setSubmittedMessage(message);

    try {
      window.open(
        `https://wa.me/${GYM_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } catch (err) {
      console.log(err);
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#FFE600", "#FFFFFF", "#CCB800", "#050505"],
      });
    } catch (err) {
      console.log(err);
    }

    setIsSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    window.open(
      `https://wa.me/${GYM_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(submittedMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden bg-[#050505] cyber-grid">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFE600]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <SectionLabel label="VISIT & JOIN" tag="[ CONTACT & 3-DAY PASS ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            COME TRY POWER GYM <span className="text-[#FFE600]">FOR FREE.</span>
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Fill out the form below to message us directly on WhatsApp for your free trial pass, or drop by our Sikar gym floor today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Join / Free Trial Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-7 sm:p-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono-tag w-fit">
                    <Flame size={13} className="animate-pulse" />
                    <span>CLAIM YOUR 3-DAY FREE PASS ON WHATSAPP</span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
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

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                      YOUR PHONE NUMBER (10 DIGITS) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9024076766"
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

                  {/* Plan Choice & Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                        SELECT MEMBERSHIP PLAN
                      </label>
                      <select
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 focus:border-[#FFE600] outline-none text-white text-sm transition-all"
                      >
                        <option value="Starter Power">Starter Power (₹999/mo) — Gym Floor</option>
                        <option value="Pro Athlete">Pro Athlete (₹1,799/mo) — Gym + Sauna</option>
                        <option value="Elite VIP">Elite VIP (₹2,999/mo) — Personal Coach</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tag text-white/80 mb-1.5">
                        YOUR MAIN FITNESS GOAL
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
                      <option value="Morning (05:00 AM - 10:00 AM)">Morning (05:00 AM - 10:00 AM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (05:00 PM - 10:00 PM)">Evening (05:00 PM - 10:00 PM)</option>
                    </select>
                  </div>

                  {/* Security info */}
                  <div className="flex items-center gap-2 text-xs text-white/50 pt-1 font-mono-tag">
                    <ShieldCheck size={14} className="text-[#FFE600]" />
                    <span>NO PAYMENT NEEDED • CONNECT INSTANTLY ON WHATSAPP</span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full font-bold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,230,0,0.4)]"
                    iconRight={<MessageCircle size={18} />}
                  >
                    Claim Pass on WhatsApp
                  </Button>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,230,0,0.5)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <span className="font-mono-tag text-xs text-[#FFE600]">
                      REQUEST SENT
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                      Opening WhatsApp...
                    </h3>
                    <p className="text-white/80 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Opening WhatsApp... please tap Send to complete your request.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-white/50">Name:</span>
                      <span className="text-white font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Phone:</span>
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Plan:</span>
                      <span className="text-[#FFE600] font-medium">{selectedPlan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Preferred Time:</span>
                      <span className="text-white font-medium">{formData.preferredTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer"
                    >
                      <MessageCircle size={18} />
                      <span>Tap to Open WhatsApp Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full py-2.5 text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit for Another Person
                    </button>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>

          {/* Right Column: Real Gym Contact Details & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-7 sm:p-8 space-y-6">
              <div>
                <span className="font-mono-tag text-xs font-bold text-[#FFE600] tracking-widest block mb-1">
                  GYM LOCATION & DETAILS
                </span>
                <h3 className="font-heading text-2xl font-black text-white">
                  Visit Us in Sikar
                </h3>
              </div>

              {/* Full Address */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center text-[#FFE600] shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs mb-0.5">Full Address:</p>
                    <p className="text-white/80 leading-relaxed text-xs">
                      {GYM_CONFIG.ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Clickable Phone Number */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center text-[#FFE600] shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs mb-0.5">Phone Number:</p>
                    <a
                      href={`tel:${GYM_CONFIG.PHONE_LINK}`}
                      className="text-[#FFE600] font-bold text-sm hover:underline flex items-center gap-1.5"
                    >
                      {GYM_CONFIG.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center text-[#FFE600] shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-white text-xs">Operating Hours:</p>
                    <p className="text-white/80">{GYM_CONFIG.TIMINGS_WEEKDAYS}</p>
                    <p className="text-white/80">{GYM_CONFIG.TIMINGS_SUNDAY}</p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FFE600] text-white hover:text-black border border-white/10 hover:border-[#FFE600] text-xs font-mono-tag font-bold tracking-wider transition-all duration-300 shadow-md"
                >
                  <Navigation size={14} className="text-[#FFE600] group-hover:text-black" />
                  <span>Get Directions</span>
                  <ExternalLink size={13} className="opacity-60" />
                </a>
              </div>

              {/* Responsive Embedded Google Map */}
              <div className="space-y-2 pt-2">
                <span className="font-mono-tag text-[10px] text-white/40 block">
                  INTERACTIVE MAP VIEW:
                </span>
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/10 relative bg-black/60 shadow-inner">
                  <iframe
                    src={MAP_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Power Gym Google Map Location"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
