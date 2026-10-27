"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/config";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const message = encodeURIComponent(
    "Hi Power Gym, I want to know more about membership."
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Popup on left of button */}
      <div
        className={`absolute right-16 bottom-0 w-64 p-3 rounded-2xl bg-[#12120e] border border-[#FFE600]/30 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-auto ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:pointer-events-auto"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-mono-tag font-bold text-white">
              WE ARE ONLINE
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="md:hidden text-white/40 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
        <p className="text-[12px] text-white/70 mt-1">
          Have questions about memberships? Chat with us directly on WhatsApp.
        </p>
      </div>

      {/* Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-black hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="fill-black text-black stroke-[2.2]" />
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
      </a>
    </div>
  );
}
