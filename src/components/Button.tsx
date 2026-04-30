"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-legal-blue text-white hover:bg-opacity-90",
      secondary: "bg-white text-legal-blue hover:bg-gray-100",
      outline: "border-2 border-legal-blue text-legal-blue hover:bg-legal-blue hover:text-white",
      gold: "bg-legal-gold text-white hover:bg-legal-gold-dark shadow-[0_0_15px_rgba(212,175,55,0.3)]",
      ghost: "bg-transparent hover:bg-gray-100 text-legal-blue",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
