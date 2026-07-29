import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects 301 do site WordPress antigo (docs/seo-redirect-audit.md).
  // Todas as páginas internas do site atual já retornam 404 — mapa
  // construído a partir do menu principal, pendente de complementar
  // quando o acesso ao Search Console voltar.
  async redirects() {
    return [
      {
        source: "/js-ar-central-especialista-em-ar-condicionado-rio-de-janeiro",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solucoes-em-climatizacao-especialista-em-ar-condicionado-rio-de-janeiro",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solucoes-em-climatizacao",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fale-conosco-js-ar-central-ar-condicionado-rio-de-janeiro",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
