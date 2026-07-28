import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "cool" | "dark" | "outline";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  cool: "bg-cool text-white hover:bg-cool-hover",
  dark: "bg-gray-900 text-white hover:bg-gray-700",
  outline:
    "border border-gray-300 text-gray-700 bg-transparent hover:border-gray-900 hover:text-gray-900",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold font-sans transition-colors";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return <Link {...props} href={props.href} className={classes} />;
  }

  return (
    <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} />
  );
}
