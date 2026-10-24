import React from "react";
import { Check } from "lucide-react";

interface ChipProps {
  label: string;
  hasCheck?: boolean;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Chip({
  label,
  hasCheck = true,
  className = "",
  active = false,
  onClick,
}: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono-tag tracking-wider transition-all duration-300 ${
        onClick ? "cursor-pointer" : ""
      } ${
        active
          ? "border-[#FFE600] bg-[#FFE600]/15 text-[#FFE600] shadow-[0_0_15px_rgba(255,230,0,0.25)]"
          : "border-white/10 bg-[#12120e]/80 text-white/90 hover:border-[#FFE600]/40 backdrop-blur-md"
      } ${className}`}
    >
      {hasCheck && (
        <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#FFE600] text-black">
          <Check size={10} strokeWidth={3.5} />
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}
