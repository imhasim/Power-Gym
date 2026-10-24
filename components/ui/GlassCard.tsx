import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  accentBorder?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  glowOnHover = true,
  accentBorder = false,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl border transition-all duration-300 ${
        accentBorder
          ? "border-[#FFE600]/40 shadow-[0_0_20px_rgba(255,230,0,0.15)] bg-[#12120e]/85"
          : "border-white/10 bg-[#0f0f0c]/70 hover:border-[#FFE600]/30"
      } ${
        glowOnHover
          ? "hover:shadow-[0_0_30px_rgba(255,230,0,0.18)] hover:-translate-y-1"
          : ""
      } backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
