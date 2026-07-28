import type { ReactNode } from "react";

type Variant = "light" | "gray" | "dark";

const variantClasses: Record<Variant, string> = {
  light: "bg-white border border-gray-100 shadow-sm",
  gray: "bg-gray-50 border border-gray-200",
  dark: "bg-surface-dark text-white",
};

type CardProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function Card({ variant = "light", children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
