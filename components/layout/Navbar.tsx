"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell, ArrowRight, CalendarCheck } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import Button from "@/components/ui/Button";
import BookingsDrawer from "@/components/shared/BookingsDrawer";
import JoinModal from "@/components/shared/JoinModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { bookedClasses, openJoinModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Trainers", href: "/trainers" },
    { name: "Membership", href: "/membership" },
    { name: "Schedule", href: "/schedule" },
    { name: "Tools", href: "/tools" },
    { name: "Transformations", href: "/transformations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-xl shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={() => setMobileMenuOpen(false)}
            >
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
                  EST. 2016 // ATHLETIC LAB
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#12120e]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tag tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-[#FFE600] text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.3)]"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* My Bookings Pill */}
              <button
                onClick={() => setBookingsDrawerOpen(true)}
                className="relative flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-[#FFE600]/40 text-xs font-mono-tag text-white transition-all backdrop-blur-md"
              >
                <CalendarCheck size={14} className="text-[#FFE600]" />
                <span className="hidden md:inline">BOOKINGS</span>
                {bookedClasses.length > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#FFE600] text-black text-[10px] font-bold flex items-center justify-center">
                    {bookedClasses.length}
                  </span>
                )}
              </button>

              {/* Join Now CTA */}
              <Button
                variant="primary"
                size="sm"
                onClick={() => openJoinModal()}
                iconRight={<ArrowRight size={14} />}
                className="font-bold tracking-wider"
              >
                JOIN NOW
              </Button>
            </div>

            {/* Mobile Menu & Bookings Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setBookingsDrawerOpen(true)}
                className="relative p-2 rounded-full border border-white/10 bg-white/5 text-white"
                aria-label="View bookings"
              >
                <CalendarCheck size={18} className="text-[#FFE600]" />
                {bookedClasses.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FFE600] text-black text-[10px] font-bold flex items-center justify-center">
                    {bookedClasses.length}
                  </span>
                )}
              </button>

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
          <div className="lg:hidden bg-[#070705] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-mono-tag tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#FFE600] text-black font-bold"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold uppercase tracking-wider"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openJoinModal();
                }}
              >
                Claim 3-Day Free Pass
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Bookings Drawer */}
      <BookingsDrawer
        isOpen={bookingsDrawerOpen}
        onClose={() => setBookingsDrawerOpen(false)}
      />

      {/* Global Join Modal */}
      <JoinModal />
    </>
  );
}
