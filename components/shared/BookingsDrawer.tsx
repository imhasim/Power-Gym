"use client";

import React from "react";
import { X, Calendar, Clock, MapPin, User, Trash2, Dumbbell, Sparkles } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import Button from "@/components/ui/Button";

interface BookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingsDrawer({ isOpen, onClose }: BookingsDrawerProps) {
  const { bookedClasses, cancelBooking, openJoinModal } = useBooking();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e0a] border-l border-white/10 p-6 flex flex-col shadow-2xl shadow-black animate-slide-left">
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/30 flex items-center justify-center text-[#FFE600]">
                <Dumbbell size={20} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  My Booked Classes
                </h3>
                <p className="text-xs text-white/50">
                  {bookedClasses.length} {bookedClasses.length === 1 ? "Session" : "Sessions"} Reserved
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Bookings List */}
          <div className="flex-1 overflow-y-auto py-5 space-y-4">
            {bookedClasses.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/30">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">No classes booked yet</h4>
                  <p className="text-xs text-white/50 max-w-xs mx-auto mt-1">
                    Explore our weekly schedule and reserve your spot for HIIT, Olympic Lifting, or Yoga.
                  </p>
                </div>
                <Button
                  size="sm"
                  href="/schedule"
                  onClick={onClose}
                  className="mt-2 text-xs"
                >
                  View Schedule & Book
                </Button>
              </div>
            ) : (
              bookedClasses.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFE600]/30 transition-all space-y-3 relative group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tag px-2 py-0.5 rounded bg-[#FFE600]/15 text-[#FFE600] border border-[#FFE600]/30">
                        CONFIRMED SPOT
                      </span>
                      <h4 className="font-heading font-bold text-white text-base mt-1.5">
                        {item.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => cancelBooking(item.id)}
                      className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                      title="Cancel reservation"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#FFE600]" />
                      <span>{item.day}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#FFE600]" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={13} className="text-[#FFE600]" />
                      <span>{item.trainer}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#FFE600]" />
                      <span>{item.room}</span>
                    </div>
                  </div>

                  <div className="pt-1 text-[11px] text-white/40">
                    Reserved on {new Date(item.bookedAt).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Info */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="p-3 rounded-xl bg-[#FFE600]/5 border border-[#FFE600]/20 flex items-center gap-3">
              <Sparkles size={18} className="text-[#FFE600] shrink-0" />
              <p className="text-xs text-white/70">
                Arrive 10 minutes prior for locker key and wristband assignment.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              onClick={() => {
                onClose();
                openJoinModal();
              }}
            >
              Upgrade Membership / Get 3-Day Pass
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
