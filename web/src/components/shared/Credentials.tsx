"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Credential = {
  badge: string;
  name: string;
  certificate: string;
  certificateAlt: string;
};

const credentials: Credential[] = [
  {
    badge: "/credentials/badge_midea.png",
    name: "Midea",
    certificate: "/credentials/certificado_midea_carrier.jpg",
    certificateAlt: "Certificado de credenciamento Midea Carrier",
  },
  {
    badge: "/credentials/badge_carrier.png",
    name: "Carrier",
    certificate: "/credentials/certificado_midea_carrier.jpg",
    certificateAlt: "Certificado de credenciamento Midea Carrier",
  },
  {
    badge: "/credentials/badge_springer.png",
    name: "Springer",
    certificate: "/credentials/certificado_midea_carrier.jpg",
    certificateAlt: "Certificado de credenciamento Midea Carrier",
  },
  {
    badge: "/credentials/badge_toshiba.png",
    name: "Toshiba",
    certificate: "/credentials/certificado_midea_carrier.jpg",
    certificateAlt: "Certificado de credenciamento Midea Carrier",
  },
  {
    badge: "/credentials/badge_tcl.png",
    name: "TCL SEMP",
    certificate: "/credentials/certificado_tcl_semp.jpg",
    certificateAlt: "Certificado de credenciamento TCL SEMP",
  },
];

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Credentials() {
  const [preview, setPreview] = useState<Credential | null>(null);

  useEffect(() => {
    if (!preview) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [preview]);

  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="font-mono text-xs font-medium tracking-widest text-brand">
            CREDENCIAMENTO
          </div>
          <h2 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Autorizados pelos principais fabricantes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            Credenciamento oficial de fábrica — a garantia de que a instalação
            e manutenção seguem exatamente o protocolo exigido por cada marca.
            Clique em um selo para ver o certificado.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {credentials.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setPreview(c)}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={c.badge}
                alt={`Selo de credenciamento ${c.name}`}
                width={96}
                height={96}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
              <span className="text-xs font-semibold text-gray-600">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-auto rounded-2xl bg-white p-3 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow transition-colors hover:bg-gray-100 hover:text-gray-800"
            >
              <CloseIcon />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element -- imagem de documento externo variável, otimização do next/image é desnecessária aqui */}
            <img
              src={preview.certificate}
              alt={preview.certificateAlt}
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
