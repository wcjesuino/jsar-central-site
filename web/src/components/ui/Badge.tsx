import type { ReactNode } from "react";

type Variant = "green" | "brand" | "cool" | "gold" | "gray";

const variantClasses: Record<Variant, string> = {
  green: "bg-green-500/10 border-green-500/25 text-green-600",
  brand: "bg-brand/10 border-brand/30 text-brand-hover",
  cool: "bg-cool/10 border-cool/30 text-cool-hover",
  gold: "bg-gold/15 border-gold/35 text-[#8A6D17]",
  gray: "bg-gray-100 border-gray-200 text-gray-500",
};

type BadgeProps = {
  variant?: Variant;
  dot?: boolean;
  children: ReactNode;
  className?: string;
};

export function Badge({
  variant = "gray",
  dot = false,
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-[11px] font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </span>
  );
}
