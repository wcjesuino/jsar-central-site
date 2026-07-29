"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useWhatsAppIntent, type WhatsAppService } from "./WhatsAppIntentContext";

export function WhatsAppButton({
  defaultService,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  defaultService?: WhatsAppService;
  variant?: "primary" | "cool" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const { open } = useWhatsAppIntent();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => open({ defaultService })}
    >
      {children}
    </Button>
  );
}
