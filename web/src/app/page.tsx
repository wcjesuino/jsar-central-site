import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-surface-dark px-6 text-center">
      <Logo variant="dark" size={40} />
      <Badge variant="green" dot>
        Atendimento 24h disponível
      </Badge>
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-editorial text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Site em construção
        </h1>
        <p className="max-w-md text-sm text-white/50 sm:text-base">
          Instalação e manutenção de ar-condicionado credenciada pelos
          principais fabricantes. Volte em breve.
        </p>
      </div>
      <Button href="https://wa.me/5521964088936" variant="primary" size="lg">
        Falar no WhatsApp
      </Button>
    </div>
  );
}
