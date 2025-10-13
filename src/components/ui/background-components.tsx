
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Background = ({children}: {children: React.ReactNode}) => {
  return (
   <div className="w-full relative">
  {/* Soft Yellow Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at center, #FFF991 0%, transparent 70%)
      `,
      opacity: 0.2,
      mixBlendMode: "multiply",
      pointerEvents: "none",
    }}
  />
     <div className="relative z-10">
        {children}
     </div>
</div>
  );
};
