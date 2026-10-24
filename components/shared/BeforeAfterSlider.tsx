"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE (WEEK 0)",
  afterLabel = "AFTER (WEEK 16)",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;
      setSliderPosition(percent);
    },
    [containerRef]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e0a] cursor-ew-resize group shadow-2xl ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* "AFTER" Image (Full background) */}
      <div className="relative w-full h-[450px] sm:h-[540px]">
        <Image
          src={afterImage}
          alt="After Transformation"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-[#FFE600]/40 backdrop-blur-md">
          <span className="text-[11px] font-mono-tag font-bold text-[#FFE600] tracking-wider">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* "BEFORE" Image (Clipped by slider percentage) */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-[450px] sm:h-[540px] max-w-none" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
          <Image
            src={beforeImage}
            alt="Before Transformation"
            fill
            className="object-cover object-top grayscale brightness-90"
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md">
            <span className="text-[11px] font-mono-tag text-white/80 tracking-wider">
              {beforeLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Vertical Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#FFE600] z-20 pointer-events-none shadow-[0_0_12px_#FFE600]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Drag Knob */}
        <div
          onMouseDown={handleMouseDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFE600] text-black border-2 border-black flex items-center justify-center shadow-xl cursor-ew-resize pointer-events-auto hover:scale-110 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-0.5 text-xs font-black">
            <span>◀</span>
            <span>▶</span>
          </div>
        </div>
      </div>

      {/* Helpful Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono-tag text-white/60 pointer-events-none backdrop-blur-sm">
        DRAG SLIDER TO COMPARE
      </div>
    </div>
  );
}
