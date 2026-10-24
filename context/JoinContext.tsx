"use client";

import React, { createContext, useContext, useState } from "react";

interface JoinContextType {
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  scrollToJoin: (planName?: string) => void;
}

const JoinContext = createContext<JoinContextType | undefined>(undefined);

export function JoinProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState("Pro Athlete");

  const scrollToJoin = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    const element = document.getElementById("join");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <JoinContext.Provider value={{ selectedPlan, setSelectedPlan, scrollToJoin }}>
      {children}
    </JoinContext.Provider>
  );
}

export function useJoin() {
  const context = useContext(JoinContext);
  if (!context) {
    throw new Error("useJoin must be used within a JoinProvider");
  }
  return context;
}
