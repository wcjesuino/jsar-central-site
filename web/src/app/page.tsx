import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-[#12151A] px-6 text-center">
      <Image
        src="/brand/mark_symbol_white.png"
        alt="JS AR Central"
        width={96}
        height={96}
        priority
        className="h-16 w-auto"
      />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Site em construção
        </h1>
        <p className="max-w-md text-sm text-white/50 sm:text-base">
          Instalação e manutenção de ar-condicionado credenciada pelos
          principais fabricantes. Volte em breve.
        </p>
      </div>
      <a
        href="https://wa.me/5521964088936"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#E2081A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B8050F]"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
