import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { GlassNav } from "@/components/shared/GlassNav";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { WhatsAppService } from "@/components/whatsapp/WhatsAppIntentContext";

type Stat = { value: string; label: string; color: string };

type LpHeroProps = {
  badgeLabel: string;
  headline: ReactNode;
  subheadline: string;
  primaryCtaLabel: string;
  defaultService: WhatsAppService;
  videoSrc: string;
  posterSrc: string;
  stats: readonly Stat[];
  floatingBadge: { title: string; subtitle: string };
};

export function LpHero({
  badgeLabel,
  headline,
  subheadline,
  primaryCtaLabel,
  defaultService,
  videoSrc,
  posterSrc,
  stats,
  floatingBadge,
}: LpHeroProps) {
  return (
    <div className="mx-auto w-full max-w-[1280px] p-4 sm:p-5">
      <section className="relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-hero bg-surface-dark p-5 sm:min-h-[640px] sm:p-8">
        <div className="absolute inset-0">
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            // @ts-expect-error -- fetchPriority is valid on <video> in browsers but missing from React's video element typings
            fetchPriority="low"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark from-20% via-surface-dark/55 via-48% to-surface-dark/12" />
          <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute -top-16 -right-10 h-[320px] w-[320px] rounded-full bg-cool/15 blur-3xl" />
        </div>

        <GlassNav />

        <div className="relative z-10 mt-8 max-w-xl sm:mt-0">
          <div className="mb-3 hidden sm:mb-5 sm:block">
            <Badge variant="green" dot>
              {badgeLabel}
            </Badge>
          </div>

          <h1 className="font-editorial text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
            {headline}
          </h1>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55 sm:mt-4 sm:text-base">
            {subheadline}
          </p>

          <div className="mt-5 flex flex-wrap gap-4 sm:mt-6">
            <WhatsAppButton defaultService={defaultService} variant="primary" size="lg">
              {primaryCtaLabel}
            </WhatsAppButton>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className={`font-editorial text-xl font-semibold tracking-tight sm:text-2xl ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[11px] text-white/35 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-2.5 pr-4 backdrop-blur md:flex">
          <Image
            src="/brand/technician_badge.jpg"
            alt="Técnico credenciado em campo"
            width={44}
            height={60}
            className="h-[60px] w-[44px] rounded-md object-cover"
          />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wide text-white/40">
              Serviço
            </div>
            <div className="font-editorial text-sm font-semibold text-white">
              {floatingBadge.title}
            </div>
            <div className="mt-0.5 text-[11px] text-white/40">{floatingBadge.subtitle}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
