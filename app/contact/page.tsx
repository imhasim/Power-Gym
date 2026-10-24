"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useBooking } from "@/context/BookingContext";
import confetti from "canvas-confetti";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const { saveLead, openJoinModal } = useBooking();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "Pro Athlete",
    goal: "Hypertrophy & Muscle Mass",
    preferredTime: "Morning (06:00 - 10:00 AM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) errs.phone = "Valid 10-digit phone number is required.";
    if (!form.email.includes("@")) errs.email = "Valid email address is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    saveLead({
      name: form.name,
      phone: form.phone,
      email: form.email,
      plan: form.plan,
      goal: form.goal,
      preferredTime: form.preferredTime,
    });

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#FFE600", "#FFFFFF", "#CCB800"],
      });
    } catch (e) {
      console.log(e);
    }

    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Power Gym! I would like to inquire about membership and trial passes.\nName: ${form.name || "Athlete"}\nPhone: ${form.phone}\nPlan: ${form.plan}`
    );
    return `https://wa.me/919876543210?text=${text}`;
  };

  return (
    <div className="pt-28 pb-20 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <SectionLabel label="FACILITY ACCESS & INQUIRIES" tag="[ CONTACT & JOIN ]" />
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
            CONNECT WITH <span className="text-[#FFE600]">POWER GYM.</span>
          </h1>
          <p className="text-white/60 text-base">
            Visit our flagship performance arena in Sector 4 or schedule an InBody biometric scan and coach consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Facility Information & Google Maps Card */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-7 space-y-6">
              <div>
                <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                  // FACILITY SPECIFICATIONS
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                  Power Gym Arena Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Physical Address:</strong>
                    <span>Plot 42, Performance Way, Sector 4, High Performance Hub, New Delhi 110001</span>
                    <a
                      href="https://maps.google.com/?q=Power+Gym+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFE600] flex items-center gap-1 mt-1 font-mono-tag text-[11px] hover:underline"
                    >
                      <span>OPEN IN GOOGLE MAPS</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Operating Timings:</strong>
                    <p>Monday – Saturday: <strong>05:00 AM – 10:00 PM</strong></p>
                    <p>Sunday: <strong>06:00 AM – 12:00 PM</strong></p>
                    <p className="text-[#FFE600] text-[11px] font-mono-tag mt-0.5">
                      * Pro & Elite members have 24/7 keyless biometric access
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Concierge & Front Desk:</strong>
                    <span>+91 98765 43210 / +91 11 2984 5500</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#FFE600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Direct Inquiries:</strong>
                    <span>concierge@powergym.fit / coaching@powergym.fit</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Connect */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  <MessageCircle size={18} className="fill-black" />
                  <span>Instant Concierge Chat (WhatsApp)</span>
                </a>
              </div>
            </GlassCard>

            {/* Quick Map Preview Mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12120e] p-6 text-center space-y-3">
              <span className="font-mono-tag text-[10px] text-white/50 block">COORDINATES // SECTOR 4</span>
              <div className="w-12 h-12 rounded-full bg-[#FFE600]/15 border border-[#FFE600]/40 flex items-center justify-center mx-auto text-[#FFE600]">
                <MapPin size={24} />
              </div>
              <h4 className="font-heading font-bold text-white text-base">
                Underground Parking & Valet Available
              </h4>
              <p className="text-xs text-white/60">
                Secured basement parking with 6 dedicated high-speed EV chargers for members.
              </p>
            </div>
          </div>

          {/* Right Column: Full Join / Consultation Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="font-mono-tag text-xs text-[#FFE600] font-bold">
                      [ APPLICATION // 3-DAY FREE PASS & INQUIRY ]
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      Start Your Journey at Power Gym
                    </h2>
                    <p className="text-xs text-white/60 mt-1">
                      Submit your details to receive an instant 3-Day Digital Pass and schedule an optional InBody scan.
                    </p>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@domain.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                        MEMBERSHIP TIER INQUIRY
                      </label>
                      <select
                        value={form.plan}
                        onChange={(e) => setForm({ ...form, plan: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 text-white text-xs outline-none focus:border-[#FFE600]"
                      >
                        <option value="Starter Power">Starter Power (₹999/mo)</option>
                        <option value="Pro Athlete">Pro Athlete (₹1,799/mo) [Most Popular]</option>
                        <option value="Elite VIP">Elite VIP (₹2,999/mo)</option>
                        <option value="Trial Pass Only">3-Day Free Trial Pass Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                        FITNESS GOAL
                      </label>
                      <select
                        value={form.goal}
                        onChange={(e) => setForm({ ...form, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#171712] border border-white/10 text-white text-xs outline-none focus:border-[#FFE600]"
                      >
                        <option value="Hypertrophy & Muscle Mass">Hypertrophy & Muscle Mass</option>
                        <option value="Fat Loss & Calorie Burn">Fat Loss & Calorie Burn</option>
                        <option value="Olympic Strength & Power">Olympic Strength & Power</option>
                        <option value="Mobility & Longevity">Mobility & Longevity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono-tag text-white/70 block mb-1">
                      QUESTIONS / SPECIAL REQUIREMENTS (OPTIONAL)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Any injuries, personal training goals, preferred time..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[#FFE600]"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/50 font-mono-tag">
                    <ShieldCheck size={14} className="text-[#FFE600]" />
                    <span>ZERO SPAM. INSTANT PASS CONFIRMATION.</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full font-bold uppercase tracking-wider text-xs"
                    iconRight={<ArrowRight size={18} />}
                  >
                    Submit Application & Issue Digital Pass
                  </Button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#FFE600]/20 border border-[#FFE600] text-[#FFE600] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,230,0,0.4)]">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <span className="font-mono-tag text-xs text-[#FFE600]">APPLICATION RECEIVED</span>
                    <h3 className="font-heading text-3xl font-bold text-white mt-1">
                      Welcome to Power Gym!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{form.name}</strong>. Your pass code and registration details have been saved. Our concierge team is ready to welcome you at the arena.
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 max-w-sm mx-auto">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageCircle size={16} />
                      <span>Confirm Timing via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full text-xs text-white/50 hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
