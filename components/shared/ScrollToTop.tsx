"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollVal = (totalScroll / windowHeight) * 100;
      setScrollProgress(scrollVal);

      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#141410] border border-white/10 text-[#FFE600] hover:scale-110 active:scale-95 transition-all shadow-xl hover:border-[#FFE600]/40 group"
        aria-label="Scroll to top"
      >
        <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none">
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-white/10 fill-none"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-[#FFE600] fill-none transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp
          size={18}
          className="group-hover:-translate-y-0.5 transition-transform"
        />
      </button>
    </div>
  );
}
