import React from "react";

interface SectionLabelProps {
  label: string;
  tag?: string;
  className?: string;
  glow?: boolean;
}

export default function SectionLabel({
  label,
  tag,
  className = "",
  glow = true,
}: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#12120e]/80 backdrop-blur-md ${className}`}>
      <span className={`w-2 h-2 rounded-full bg-[#FFE600] ${glow ? "shadow-[0_0_8px_#FFE600]" : ""}`} />
      <span className="font-mono-tag text-[11px] font-semibold text-[#FFE600] tracking-[0.18em]">
        {label}
      </span>
      {tag && (
        <>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono-tag text-white/60">{tag}</span>
        </>
      )}
    </div>
  );
}
