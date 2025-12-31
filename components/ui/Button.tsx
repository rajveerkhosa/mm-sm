import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-bold rounded-xl transition-all duration-300 text-center inline-block transform hover:scale-105 active:scale-95";

  const variants = {
    primary: "gradient-sinclair text-white hover:shadow-sinclair-lg shadow-sinclair border-2 border-sinclair-green-600",
    secondary: "bg-sinclair-red text-white hover:bg-sinclair-red-dark shadow-red hover:shadow-xl border-2 border-sinclair-red-600",
    outline: "border-3 border-sinclair-green bg-white text-sinclair-green hover:bg-sinclair-green hover:text-white shadow-md hover:shadow-sinclair",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base md:text-lg",
    lg: "px-9 py-4.5 text-lg md:text-xl",
    xl: "px-12 py-6 text-xl md:text-2xl font-extrabold", // Extra large for hero CTAs
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
