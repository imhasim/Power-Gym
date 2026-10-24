"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { faqData, FaqItem } from "@/data/faq";
import { useBooking } from "@/context/BookingContext";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { openJoinModal } = useBooking();

  const categories = [
    { id: "all", label: "ALL QUESTIONS" },
    { id: "membership", label: "MEMBERSHIP & PASSES" },
    { id: "training", label: "COACHING & SESSIONS" },
    { id: "facility", label: "FACILITY & HOURS" },
    { id: "recovery", label: "COLD PLUNGE & SAUNA" },
  ];

  const filteredFaq =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070705] border-t border-white/10 cyber-grid">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#FFE600]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <SectionLabel label="KNOWLEDGE BASE" tag="[ FAQ ]" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            FREQUENTLY ASKED <br />
            <span className="text-[#FFE600]">QUESTIONS.</span>
          </h2>
          <p className="text-white/60 text-sm">
            Everything you need to know about our memberships, Olympic barbell equipment, cold plunge contrast recovery, and beginner onboarding.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono-tag tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                  : "bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#141410] border-[#FFE600]/50 shadow-[0_0_20px_rgba(255,230,0,0.12)]"
                    : "bg-[#0e0e0a]/80 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#FFE600] text-black rotate-180"
                        : "bg-white/5 text-white/60"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Concierge Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE600]/15 text-[#FFE600] flex items-center justify-center shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm">
                Have a question not listed here?
              </h4>
              <p className="text-xs text-white/50">
                Our front desk concierge and strength coaches respond within 5 minutes.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="primary"
            onClick={() => openJoinModal()}
            className="text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Ask a Coach Now
          </Button>
        </div>
      </div>
    </section>
  );
}
