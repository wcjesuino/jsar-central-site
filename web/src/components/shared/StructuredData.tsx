import { siteConfig } from "@/lib/site-config";

/** Renderiza um bloco JSON-LD. Server component — vai no HTML inicial. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Dados do negócio local — usado no layout, aparece em todas as páginas. */
export const localBusinessJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteConfig.siteUrl}/#business`,
  name: siteConfig.legalName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/brand/mark_symbol.png`,
  image: `${siteConfig.siteUrl}/brand/technician_badge.jpg`,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.baseCity,
    addressRegion: siteConfig.baseRegion,
    addressCountry: "BR",
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [siteConfig.instagramHref, siteConfig.facebookHref],
  slogan: "Instalação e manutenção de ar-condicionado credenciada de fábrica.",
};

/** Constrói o JSON-LD de FAQ a partir dos itens já usados na página. */
export function faqPageJsonLd(
  items: readonly { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
