"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface BookedClass {
  id: string;
  day: string;
  time: string;
  title: string;
  trainer: string;
  room: string;
  bookedAt: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  email: string;
  plan: string;
  goal: string;
  preferredTime: string;
  createdAt: string;
}

interface BookingContextType {
  bookedClasses: BookedClass[];
  bookClass: (slot: Omit<BookedClass, "bookedAt">) => boolean;
  cancelBooking: (id: string) => void;
  isBooked: (id: string) => boolean;
  isJoinModalOpen: boolean;
  selectedPlan: string;
  openJoinModal: (planName?: string) => void;
  closeJoinModal: () => void;
  savedLeads: LeadSubmission[];
  saveLead: (lead: Omit<LeadSubmission, "createdAt">) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const BOOKINGS_STORAGE_KEY = "power_gym_booked_classes_v1";
const LEADS_STORAGE_KEY = "power_gym_saved_leads_v1";

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookedClasses, setBookedClasses] = useState<BookedClass[]>([]);
  const [savedLeads, setSavedLeads] = useState<LeadSubmission[]>([]);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro Athlete");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
      if (storedBookings) {
        setBookedClasses(JSON.parse(storedBookings));
      }
      const storedLeads = localStorage.getItem(LEADS_STORAGE_KEY);
      if (storedLeads) {
        setSavedLeads(JSON.parse(storedLeads));
      }
    } catch (e) {
      console.error("Failed to load local storage:", e);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const bookClass = (slot: Omit<BookedClass, "bookedAt">) => {
    if (bookedClasses.some((b) => b.id === slot.id)) {
      showToast("You have already reserved a spot in this session!");
      return false;
    }
    const newBooking: BookedClass = {
      ...slot,
      bookedAt: new Date().toISOString(),
    };
    const updated = [...bookedClasses, newBooking];
    setBookedClasses(updated);
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    showToast(`✓ Spot Confirmed for ${slot.title} on ${slot.day}!`);
    return true;
  };

  const cancelBooking = (id: string) => {
    const updated = bookedClasses.filter((b) => b.id !== id);
    setBookedClasses(updated);
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    showToast("Booking cancelled successfully.");
  };

  const isBooked = (id: string) => {
    return bookedClasses.some((b) => b.id === id);
  };

  const openJoinModal = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  const saveLead = (lead: Omit<LeadSubmission, "createdAt">) => {
    const newLead: LeadSubmission = {
      ...lead,
      createdAt: new Date().toISOString(),
    };
    const updated = [newLead, ...savedLeads];
    setSavedLeads(updated);
    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookedClasses,
        bookClass,
        cancelBooking,
        isBooked,
        isJoinModalOpen,
        selectedPlan,
        openJoinModal,
        closeJoinModal,
        savedLeads,
        saveLead,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-[#12120e] border border-[#FFE600]/40 text-white shadow-2xl shadow-[#FFE600]/10 animate-fade-in backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] animate-pulse" />
          <span className="text-sm font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
