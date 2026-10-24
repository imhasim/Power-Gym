"use client";

import React, { useState } from "react";
import { Check, X, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { plansData, comparisonMatrix } from "@/data/plans";
import { useBooking } from "@/context/BookingContext";

export default function PlansSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly">("monthly");
  const [showFullMatrix, setShowFullMatrix] = useState(false);
  const { openJoinModal } = useBooking();

  return (
    <section id="membership" className="py-24 relative overflow-hidden bg-[#070705] cyber-grid">
      {/* Background Volumetric Glow behind middle card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FFE600]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <SectionLabel label="INVESTMENT IN EXCELLENCE" tag="[ PLANS ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            MEMBERSHIP TIERS. <br />
            <span className="text-[#FFE600]">ALL-INCLUSIVE INTEGRITY.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Zero hidden maintenance costs. Zero locker fees. Pick the performance tier that matches your dedication and start dominating.
          </p>
        </div>

        {/* Billing Cycle Switcher with Savings Badges */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-[#12120e] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              MONTHLY
            </button>

            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`relative px-5 py-2 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                billingCycle === "quarterly"
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              QUARTERLY
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[#FFE600]/20 text-[#FFE600] text-[9px] font-bold border border-[#FFE600]/30">
                SAVE 15%
              </span>
            </button>

            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-5 py-2 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              YEARLY
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-[#FFE600] text-black text-[9px] font-black">
                SAVE 30%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plansData.map((plan) => {
            const rawPrice = plan.price[billingCycle];
            const displayPrice =
              billingCycle === "monthly"
                ? rawPrice
                : billingCycle === "quarterly"
                ? Math.round(rawPrice / 3)
                : Math.round(rawPrice / 12);

            const isPro = plan.highlight;

            return (
              <GlassCard
                key={plan.id}
                accentBorder={isPro}
                className={`p-7 sm:p-9 flex flex-col justify-between relative ${
                  isPro
                    ? "lg:-translate-y-3 bg-[#13130f]/95 shadow-[0_0_35px_rgba(255,230,0,0.22)]"
                    : ""
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popularBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFE600] text-black font-mono-tag text-[10px] font-black tracking-widest shadow-[0_0_15px_#FFE600]">
                    {plan.popularBadge}
                  </div>
                )}

                <div>
                  {/* Tier Code */}
                  <span className="font-mono-tag text-xs text-[#FFE600] tracking-wider block mb-1">
                    {plan.code}
                  </span>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1.5 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="my-6 pb-6 border-b border-white/10 flex items-baseline gap-1.5">
                    <span className="text-sm font-mono-tag text-white/50">₹</span>
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                      {displayPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono-tag text-white/50">
                      / month
                    </span>
                    {billingCycle !== "monthly" && (
                      <span className="ml-2 text-[10px] font-mono-tag text-[#FFE600] bg-[#FFE600]/10 px-2 py-0.5 rounded border border-[#FFE600]/20">
                        Billed ₹{rawPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Included Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono-tag text-white/40 block">
                      FEATURES & PROTOCOLS INCLUDED:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs ${
                          feat.included ? "text-white/90" : "text-white/30 line-through"
                        }`}
                      >
                        {feat.included ? (
                          <span className="w-4 h-4 rounded-full bg-[#FFE600] text-black flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full bg-white/5 text-white/30 flex items-center justify-center shrink-0 mt-0.5">
                            <X size={11} />
                          </span>
                        )}
                        <span>{feat.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <Button
                    variant={isPro ? "primary" : "secondary"}
                    size="lg"
                    className="w-full font-bold uppercase tracking-wider text-xs"
                    onClick={() => openJoinModal(plan.name)}
                    iconRight={<ArrowRight size={16} />}
                  >
                    Select {plan.name}
                  </Button>
                  <p className="text-[10px] text-center text-white/40 mt-2 font-mono-tag">
                    INCLUDES 3-DAY MONEY-BACK ASSURANCE
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Feature Comparison Table Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowFullMatrix(!showFullMatrix)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FFE600]/40 text-xs font-mono-tag text-white transition-all cursor-pointer"
          >
            <span>{showFullMatrix ? "[ HIDE DETAILED COMPARISON TABLE ]" : "[ VIEW FULL FEATURE COMPARISON TABLE ]"}</span>
          </button>
        </div>

        {/* Full Comparison Table Accordion */}
        {showFullMatrix && (
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#0e0e0a] p-6 animate-fade-in shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-white/50 font-mono-tag">
                  <th className="py-3 px-4">FACILITY FEATURE</th>
                  <th className="py-3 px-4 text-center">STARTER POWER</th>
                  <th className="py-3 px-4 text-center text-[#FFE600]">PRO ATHLETE</th>
                  <th className="py-3 px-4 text-center">ELITE VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white/90">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-center text-white/60">
                      {row.starter}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-[#FFE600]">
                      {row.pro}
                    </td>
                    <td className="py-3.5 px-4 text-center text-white">
                      {row.elite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
