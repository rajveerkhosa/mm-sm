import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "available" | "coming-soon" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    available: "bg-sinclair-green text-white",
    "coming-soon": "bg-sinclair-red text-white",
    default: "bg-gray-200 text-charcoal",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
