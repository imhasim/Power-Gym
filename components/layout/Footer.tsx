"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dumbbell, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { useJoin } from "@/context/JoinContext";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const { scrollToJoin } = useJoin();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes("@")) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-[#040403] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FFE600]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFE600] flex items-center justify-center text-black font-black text-lg shadow-[0_0_15px_rgba(255,230,0,0.4)]">
                <Dumbbell size={20} strokeWidth={2.5} />
              </div>
              <div className="flex items-center tracking-tighter font-heading text-xl font-black">
                <span className="text-white">POWER</span>
                <span className="text-[#FFE600] ml-1">GYM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] ml-1" />
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We help you build strength, stay active, and feel your best. Clean gym equipment, fun workouts, and friendly coaches ready to support you every day.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFE600] hover:border-[#FFE600]/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFE600] hover:border-[#FFE600]/40 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFE600] hover:border-[#FFE600]/40 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <span className="font-mono-tag text-xs font-bold text-[#FFE600] tracking-widest">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Philosophy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">
                  Our Trainers
                </a>
              </li>
              <li>
                <a href="#bmi" className="hover:text-white transition-colors">
                  BMI Calculator
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-white transition-colors">
                  Join / 3-Day Pass
                </a>
              </li>
            </ul>
          </div>

          {/* Gym Hours & Location */}
          <div className="space-y-3">
            <span className="font-mono-tag text-xs font-bold text-[#FFE600] tracking-widest">
              OPERATING HOURS
            </span>
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-[#FFE600] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon – Sat:</p>
                  <p>05:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-[#FFE600] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sunday:</p>
                  <p>06:00 AM – 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin size={15} className="text-[#FFE600] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Facility Address:</p>
                  <p>Plot 42, Performance Way, Sector 4, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <span className="font-mono-tag text-xs font-bold text-[#FFE600] tracking-widest">
              FREE WORKOUT TIPS
            </span>
            <p className="text-xs text-white/60">
              Get simple exercise tips, healthy meal ideas, and gym updates sent to your email each week.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/30 text-xs text-[#FFE600] flex items-center gap-2">
                <Check size={16} />
                <span>Subscribed! Check your inbox for your first workout tip.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/40 focus:border-[#FFE600] outline-none"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="w-full text-xs font-bold tracking-wider"
                  iconRight={<ArrowRight size={13} />}
                >
                  SUBSCRIBE
                </Button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => scrollToJoin()}
                className="text-xs text-[#FFE600] hover:underline flex items-center gap-1 font-mono-tag cursor-pointer"
              >
                <span>[ GET FREE 3-DAY PASS ]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 POWER GYM INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Gym Rules & Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
