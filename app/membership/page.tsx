import React from "react";
import type { Metadata } from "next";
import PlansSection from "@/components/sections/PlansSection";
import FaqSection from "@/components/sections/FaqSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TrialCtaSection from "@/components/sections/TrialCtaSection";

export const metadata: Metadata = {
  title: "Membership Tiers & Pricing | POWER GYM",
  description:
    "Choose your tier: Starter Power (₹999), Pro Athlete (₹1,799), or Elite VIP (₹2,999). 100% transparent pricing with zero maintenance fees.",
};

export default function MembershipPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        <SectionLabel label="INVESTMENT IN EXCELLENCE" tag="[ MEMBERSHIP PLANS ]" />
        <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight">
          CHOOSE YOUR <span className="text-[#FFE600]">PERFORMANCE TIER.</span>
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto">
          Every membership includes biometric body scans, state-of-the-art Eleiko equipment access, and 3-day money-back assurance.
        </p>
      </div>

      <PlansSection />
      <TrialCtaSection />
      <FaqSection />
    </div>
  );
}
