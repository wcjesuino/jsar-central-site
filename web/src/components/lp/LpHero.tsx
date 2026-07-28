import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LpTopBar } from "@/components/lp/LpTopBar";
import { siteConfig, waLink } from "@/lib/site-config";

type LpHeroProps = {
  badgeLabel: string;
  headline: ReactNode;
  subheadline: string;
  primaryCtaLabel: string;
  ctaMessage: string;
  backgroundImage: string;
};

export function LpHero({
  badgeLabel,
  headline,
  subheadline,
  primaryCtaLabel,
  ctaMessage,
  backgroundImage,
}: LpHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-dark">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element -- imagem de fundo full-bleed com overlay */}
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark from-15% via-surface-dark/60 via-50% to-surface-dark/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-24">
        <LpTopBar ctaMessage={ctaMessage} />

        <div className="mt-14 max-w-xl sm:mt-20">
          <Badge variant="green" dot className="mb-5">
            {badgeLabel}
          </Badge>

          <h1 className="font-editorial text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {headline}
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
            {subheadline}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={waLink(ctaMessage)} variant="primary" size="lg">
              {primaryCtaLabel}
            </Button>
            <Button
              href={siteConfig.whatsappHref}
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-white hover:text-white"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
