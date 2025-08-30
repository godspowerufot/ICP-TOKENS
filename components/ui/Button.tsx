"use client";

import { cn } from "../../utils/index";
import React from "react";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, ...props }, ref) => {
    const defaultStyles =
      " text-white font-inter cursor-pointer px-4 py-2 border border-solid bg-primary rounded-md hover:opacity-90 transition";

    return (
      <button className={cn(defaultStyles, className)} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

// ✅ Add display name to fix the eslint warning
Button.displayName = "Button";
