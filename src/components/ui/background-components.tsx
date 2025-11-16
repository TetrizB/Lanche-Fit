
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const Background = ({children}: {children: React.ReactNode}) => {
  const [count, setCount] = useState(0);

  return (
   <div className="w-full relative bg-background">
     <div className="relative z-10">
        {children}
     </div>
</div>
  );
};
