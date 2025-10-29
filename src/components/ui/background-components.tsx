
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Background = ({children}: {children: React.ReactNode}) => {
  const [count, setCount] = useState(0);

  return (
   <div className="w-full relative bg-background">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at center, hsla(var(--primary) / 0.5) 0%, transparent 60%)
      `,
      opacity: 0.8,
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
