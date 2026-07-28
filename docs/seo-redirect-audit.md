# Auditoria de SEO e Mapa de Redirects — JS AR Central

> **Levantamento parcial via crawl direto do site ao vivo** (não via Google Search Console — ainda sem acesso). Este documento cobre apenas as URLs alcançáveis a partir da home e do menu principal. Precisa ser complementado assim que o acesso ao Search Console for reestabelecido, para confirmar quais URLs realmente têm tráfego orgânico e backlinks antes de finalizar o mapa de redirects 301 do site novo.

## ⚠️ Achado crítico: o site atual está quebrado (só a Home funciona)

Ao tentar acessar cada página encontrada no menu principal, **todas retornaram HTTP 404**, exceto a home (`/`, HTTP 200). Testado de três formas independentes (curl simples, curl com cookies/headers completos de navegador, e uma ferramenta de fetch separada) — resultado consistente nas três.

Também testei acesso direto por `?page_id=N` (padrão nativo do WordPress, ignora links amigáveis): a home resolve (301), mas todas as outras páginas (`page_id=459, 437, 102`) também retornam 404. Isso indica que o problema não é só nos links amigáveis/permalinks — as páginas parecem inacessíveis mesmo pela via mais direta do WordPress.

A API REST do WordPress (`/wp-json/`) também está bloqueada/indisponível (404), então não foi possível confirmar via API se as páginas ainda existem no banco de dados (só despublicadas/inacessíveis) ou se foram de fato removidas.

**Isso é urgente e vale um alerta separado ao cliente**, independente da migração: o site atual está, na prática, funcionando só como uma home sem navegação — qualquer visitante que clique em "Quem Somos", "Soluções", "Blog" ou "Fale Conosco" cai em erro 404 agora mesmo. Se ainda há tráfego orgânico chegando no site antigo, isso é uma perda de leads acontecendo hoje.

## Inventário de URLs descobertas (via menu principal da Home)

Não há sitemap.xml/wp-sitemap.xml acessível (testado `/sitemap.xml`, `/sitemap_index.xml`, `/wp-sitemap.xml` — todos 404). O inventário abaixo vem exclusivamente do menu de navegação renderizado na home (5 itens, únicos que existem como links internos na página).

| URL antiga | Rótulo no menu | Status atual | Destino de redirect 301 proposto (site novo) | Observação |
|---|---|---|---|---|
| `https://www.jsarcentral.com.br/` | Home | 200 OK | `/` | Sem mudança de URL — é a home em ambos os sites. |
| `https://www.jsarcentral.com.br/js-ar-central-especialista-em-ar-condicionado-rio-de-janeiro/` | Quem Somos | **404 (quebrado)** | `/` (Home institucional) | No site novo o conteúdo "Quem Somos" vira parte da Home, não uma página separada — redirecionar para `/` evita perda total do link equity. |
| `https://www.jsarcentral.com.br/solucoes-em-climatizacao-especialista-em-ar-condicionado-rio-de-janeiro/` | Soluções | **404 (quebrado)** | `/` (Home institucional) — reavaliar para `/instalacao-ar-condicionado` se o conteúdo original era focado em instalação | Slug longo sugere página de serviços em geral; como o site novo separa em duas LPs (Instalação/Manutenção), o mais seguro é redirecionar para a Home, que linka para ambas. |
| `https://www.jsarcentral.com.br/solucoes-em-climatizacao/` | (variante curta do link acima, mesma página) | **404 (quebrado)** | `/` | Mesma observação do item anterior — provável slug alternativo/canônico da mesma página. |
| `https://www.jsarcentral.com.br/blog/` | Blog | **404 (quebrado)** | `/` (Home) | Blog será descontinuado no site novo. Não há posts navegáveis nem enumeráveis no momento (API bloqueada, página do índice quebrada), então não foi possível levantar URLs individuais de posts. Ver observação abaixo. |
| `https://www.jsarcentral.com.br/fale-conosco-js-ar-central-ar-condicionado-rio-de-janeiro/` | Fale Conosco | **404 (quebrado)** | `/contato` | Mapeamento direto — a página de Contato existe no site novo. |

## Posts de blog: não enumeráveis no momento

O índice `/blog/` está 404 e a API REST (`/wp-json/wp/v2/posts`) está bloqueada, então não há como listar posts individuais a partir do crawl. Se houver posts antigos indexados no Google (mesmo com o blog descontinuado), eles só vão aparecer numa auditoria via Search Console. **Ação pendente:** quando o acesso ao Search Console voltar, filtrar por padrão de URL (posts de blog costumam ter data ou categoria no path, ex. `/2022/05/algum-titulo/` ou `/categoria/algum-titulo/`) e adicionar cada um a este mapa com destino `/` (redirect genérico para a Home, já que o blog não migra).

## Recomendação de próximos passos

1. **Avisar o cliente sobre o site atual quebrado** — isso é independente da migração e pode estar custando leads agora.
2. Quando o Search Console voltar a ser acessível: exportar a lista de páginas indexadas com impressões/cliques nos últimos 12-16 meses e cruzar com este mapa, adicionando qualquer URL de blog ou variação não capturada aqui.
3. Implementar os redirects 301 da tabela acima na configuração do Next.js/Vercel (`next.config.js` → `redirects()`, ou `vercel.json`) antes do corte de DNS.
4. Considerar um redirect coringa (`/blog/*` → `/`) para cobrir posts individuais não mapeados manualmente.
