import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, className, padding = "md" }: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sinclair-green-200 hover:-translate-y-1",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
