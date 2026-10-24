"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useJoin } from "@/context/JoinContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToJoin } = useJoin();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Plans", href: "#plans" },
    { name: "Trainers", href: "#trainers" },
    { name: "BMI Calculator", href: "#bmi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#FFE600] flex items-center justify-center text-black font-black text-lg shadow-[0_0_15px_rgba(255,230,0,0.4)] group-hover:rotate-6 transition-transform">
              <Dumbbell size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center tracking-tighter font-heading text-xl font-black">
                <span className="text-white">POWER</span>
                <span className="text-[#FFE600] ml-1">GYM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] ml-1 animate-pulse" />
              </div>
              <span className="font-mono-tag text-[9px] text-white/50 tracking-[0.2em] -mt-1">
                EST. 2016 // FITNESS GYM
              </span>
            </div>
          </Link>

          {/* Desktop Anchor Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#12120e]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono-tag tracking-wider text-white/70 hover:text-[#FFE600] hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToJoin()}
              iconRight={<ArrowRight size={14} />}
              className="font-bold tracking-wider"
            >
              JOIN NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070705] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-mono-tag tracking-wider text-white/80 hover:text-[#FFE600] hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight size={14} className="opacity-40" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Button
              variant="primary"
              size="md"
              className="w-full font-bold uppercase tracking-wider"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToJoin();
              }}
            >
              Claim 3-Day Free Pass
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
