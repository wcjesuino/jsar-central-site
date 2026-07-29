import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { GlassNav } from "@/components/shared/GlassNav";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

const stats = [
  { value: "+10 anos", label: "De atuação no Rio de Janeiro", color: "text-brand" },
  { value: "24h", label: "Atendimento emergencial", color: "text-cool" },
  { value: "100%", label: "Credenciado pelos fabricantes", color: "text-gold" },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[640px] flex-col justify-between overflow-hidden rounded-t-hero bg-surface-dark p-8">
      <div className="absolute inset-0">
        <video
          src="/video/hero_technician.mp4"
          poster="/video/hero_technician_poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark from-20% via-surface-dark/55 via-48% to-surface-dark/12" />
        <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -top-16 -right-10 h-[320px] w-[320px] rounded-full bg-cool/15 blur-3xl" />
      </div>

      <GlassNav />

      <div className="relative z-10 max-w-xl">
        <Badge variant="green" dot className="mb-5">
          Atendimento 24h disponível
        </Badge>

        <h1 className="font-editorial text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Ar-condicionado
          <br />
          <span className="text-gray-400">instalado certo.</span>
          <br />
          Garantia intacta.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
          Instalação e manutenção credenciada pelos principais fabricantes —
          a única forma de manter a garantia de fábrica válida. Atuação em
          toda a Baixada Fluminense e Rio de Janeiro.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <WhatsAppButton variant="primary" size="lg">
            Solicitar Orçamento
          </WhatsAppButton>
          <WhatsAppButton
            variant="outline"
            size="lg"
            className="border-white/25 text-white hover:border-white hover:text-white"
          >
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className={`font-editorial text-2xl font-semibold tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs text-white/35">{stat.label}</div>
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
            Instalação em andamento
          </div>
          <div className="mt-0.5 text-[11px] text-white/40">
            Técnico credenciado em campo
          </div>
        </div>
      </div>
    </section>
  );
}
