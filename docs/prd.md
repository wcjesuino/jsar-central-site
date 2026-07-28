# JS AR Central — Site Novo (Next.js/Vercel) Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Substituir o site WordPress atual (jsarcentral.com.br) por um site novo em Next.js/Vercel, mais rápido e com controle total de tracking.
- Gerar leads qualificados para os dois serviços-âncora: Instalação e Manutenção de Ar-Condicionado.
- Viabilizar campanhas de Google Ads com rastreamento de conversão correto desde o primeiro real investido (orçamento inicial: R$500/mês).
- Preservar ao máximo o histórico de SEO do domínio (5 anos de indexação) durante a migração.
- Aplicar a identidade visual atualizada (refresh) de forma consistente em todas as páginas.
- Deixar a base pronta para, no futuro, adicionar novas páginas de serviço (ex.: split avulso, comercial x residencial) sem redesenho estrutural.

### Background Context

A JS AR Central é uma empresa de instalação e manutenção de ar-condicionado (especialista em sistemas centrais, mas atende split e outros equipamentos) atuando há mais de 10 anos no Rio de Janeiro e Baixada Fluminense. A empresa é credenciada por múltiplos fabricantes (Daikin, LG, Carrier, Gree, Fujitsu, Midea, entre outros), o que é um diferencial real: manutenção por técnico não credenciado pode anular a garantia de fábrica do cliente.

O site atual é um WordPress/Elementor publicado em 2021, e o acesso administrativo a ele foi perdido — não há mais como editar páginas, instalar tracking ou configurar redirects diretamente nele. Isso, somado à necessidade de uma base mais rápida e controlável para sustentar tráfego pago, motivou a decisão de reconstruir o site do zero em Next.js, hospedado na Vercel, com o domínio atual apontado via DNS quando o novo site estiver pronto. O blog do site atual será descontinuado (não migra). A identidade visual foi mantida (mesma logo), mas passou por um refresh formal de paleta e tipografia, já validado em um design system dedicado.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-07-28 | 0.1 | Rascunho inicial — Goals, Background, Requirements, UI Goals, Technical Assumptions, Epic List (alto nível, pendente aprovação antes de detalhar stories) | Claude (agência) |
| 2026-07-28 | 1.0 | Épicos validados pelo cliente; PRD completo com 5 épicos e 13 stories detalhadas (Acceptance Criteria) | Claude (agência) |

## Requirements

### Functional

1. FR1: O site deve ter uma Home institucional apresentando a empresa, os diferenciais (credenciamento de fábrica, 10+ anos, atendimento 24h) e links para as páginas de serviço.
2. FR2: O site deve ter uma landing page dedicada para Instalação de Ar-Condicionado, com copy, prova social e formulário de conversão próprios.
3. FR3: O site deve ter uma landing page dedicada para Manutenção de Ar-Condicionado, com copy, prova social e formulário de conversão próprios (ângulo de garantia/credenciamento como diferencial central).
4. FR4: Cada página de conversão (Home, LP Instalação, LP Manutenção) deve ter CTA duplo: formulário curto (nome, WhatsApp, serviço, bairro/cidade) e botão direto de WhatsApp.
5. FR5: O envio do formulário deve redirecionar para uma thank-you page própria, usada como gatilho de conversão no GA4/Google Ads.
6. FR6: O site deve ter uma página de Contato com telefone, WhatsApp, e-mail, horário de atendimento e área de cobertura (Rio de Janeiro e Baixada Fluminense).
7. FR7: O site deve exibir os logos dos fabricantes credenciados (lista confirmada: Agratto, Carrier, Daikin, Elgin, Fujitsu, Gree, Hitachi, LG, Midea, Philco, Springer Midea, TCL, Ventisol) como prova de credenciamento.
8. FR8: O site deve aplicar a identidade visual do design system (`assets/design_system_js_ar_central.html`): paleta, tipografia, componentes de botão/card/badge, e o símbolo da marca com troca automática de tinta preta/branca conforme o fundo.
9. FR9: URLs da estrutura antiga do WordPress que tiverem tráfego orgânico relevante devem receber redirect 301 para a página correspondente no site novo.
10. FR10: O site deve integrar GA4, Google Tag Manager e a tag de conversão do Google Ads, com eventos de conversão para: clique no WhatsApp, envio de formulário, clique no telefone.
11. FR11: O site deve ter uma política de privacidade/LGPD linkada no rodapé e no formulário de captura de lead.
12. FR12: O footer deve conter links para Instagram e Facebook da empresa.

### Non Functional

1. NFR1: O site deve ser mobile-first — a maior parte do tráfego pago via Google Ads chega por busca em dispositivos móveis.
2. NFR2: Tempo de carregamento (LCP) deve ficar abaixo de 2.5s em conexão móvel 4G para as páginas de conversão (Home e as duas LPs), já que são o destino direto do tráfego pago.
3. NFR3: O vídeo de fundo do hero (quando usado) deve ser otimizado para web (H.264, ~1080p, poster de fallback) para não penalizar o carregamento — já validado no design system em ~3,4MB para 10s.
4. NFR4: Acessibilidade no nível WCAG AA como meta razoável (contraste de texto, navegação por teclado nos formulários) — **suposição**, sem requisito explícito do cliente até o momento.
5. NFR5: O corte de DNS do domínio para a Vercel deve ser planejado para não gerar downtime perceptível.
6. NFR6: Nenhuma credencial (chaves de API, tokens do GA4/Ads) deve ficar hardcoded no código-fonte — usar variáveis de ambiente da Vercel.
7. NFR7: O site deve continuar funcional e coletando leads mesmo que o Google Ads/GTM falhe ao carregar (tracking não pode ser bloqueante).

## User Interface Design Goals

### Overall UX Vision

Site direto ao ponto, orientado à conversão: cada página de serviço deve levar o visitante do problema (ar quebrado, instalação necessária) à ação (WhatsApp ou formulário) com o mínimo de fricção, usando o credenciamento de fábrica como principal argumento de confiança.

### Key Interaction Paradigms

- CTA duplo (formulário + WhatsApp) sempre visível/próximo em cada página de conversão.
- Prova social (depoimentos, selos de credenciamento) posicionada perto de cada CTA, não isolada em seção separada.
- Ticker/carrossel de logos de fabricantes como elemento de confiança recorrente entre seções.

### Core Screens and Views

- Home institucional
- Landing Page: Instalação de Ar-Condicionado
- Landing Page: Manutenção de Ar-Condicionado
- Página de Contato
- Thank-you page (pós-formulário)
- Política de Privacidade/LGPD

### Accessibility: WCAG AA

**Suposição** — não foi definido explicitamente pelo cliente; proponho como padrão razoável de mercado, ajustável se necessário.

### Branding

Identidade já refresada e validada: logo mantida (símbolo "JS" + wordmark "AR CENTRAL" como tipografia viva, com variante em tinta branca para fundos escuros), vermelho da marca (#E2081A) como cor primária de CTA, azul-ciano (#149BD1) como acento temático de refrigeração, dourado (#C9A227) para elementos de credencial. Fontes: Manrope (headings), Montserrat (números/selos), Inter (corpo/interface), JetBrains Mono (dados técnicos). Referência completa: `assets/design_system_js_ar_central.html`.

### Target Device and Platforms: Web Responsive

Mobile-first, mas totalmente responsivo para desktop (o formulário de orçamento e os CTAs devem funcionar igualmente bem em ambos).

## Technical Assumptions

### Repository Structure: Single repo (não monorepo)

Um único projeto Next.js — não há necessidade de múltiplos pacotes/workspaces para o escopo atual (site institucional + 2 LPs + contato).

### Service Architecture

Next.js (App Router) implantado na Vercel. Rotas de API (Vercel Functions) apenas para o envio do formulário de orçamento (encaminhar lead por e-mail/webhook) — sem backend/banco de dados dedicado nesta fase.

### Testing Requirements

Escopo proporcional a um site institucional/marketing (não é um produto SaaS com lógica de negócio complexa): checagem manual de cada página antes do deploy, testes automatizados leves de Lighthouse (performance/SEO/acessibilidade) no CI, e um smoke test do fluxo de envio do formulário. **Não** propor pirâmide de testes completa (unit + integration + e2e) — seria over-engineering para o escopo.

### Additional Technical Assumptions and Requests

- Hospedagem: Vercel (domínio `jsarcentral.com.br` apontado via DNS pelo Wagner quando o site estiver pronto).
- CMS: nenhum inicialmente — conteúdo hardcoded/componentizado no próprio código, dado o número pequeno e estável de páginas. Reavaliar CMS headless apenas se o volume de páginas crescer bastante no futuro.
- Redirects 301: como não há mais acesso ao WordPress, o mapeamento de URLs antigas precisa ser feito via crawl do site ao vivo (ele continua no ar) e/ou Google Search Console assim que o acesso for reestabelecido (item pendente — ver riscos).
- Analytics: GA4 + Google Tag Manager + Google Ads conversion tag, todos via variáveis de ambiente.
- Orçamento de mídia (Google Ads): R$500/mês inicial — não é uma restrição técnica, mas informa que a estrutura de campanha (fora do escopo deste PRD de site) deve ser enxuta no lançamento.

## Epic List

Proposta de 5 épicos, sequenciais, cada um entregando um incremento testável e implantável:

1. **Epic 1: Fundação do Projeto** — Setup do Next.js na Vercel, aplicação dos tokens de design (cores/tipografia/componentes) do design system, layout compartilhado (header/footer), e integração inicial de GA4/GTM. Entrega uma página inicial simples (ainda sem todo o conteúdo) já publicada e rastreável.
2. **Epic 2: Home Institucional** — Página inicial completa: hero em vídeo, seção de serviços, credenciamento (ticker de fabricantes), depoimentos, CTA duplo.
3. **Epic 3: Landing Page de Instalação** — Página de conversão dedicada ao serviço de Instalação, com formulário, thank-you page e eventos de conversão configurados.
4. **Epic 4: Landing Page de Manutenção** — Página de conversão dedicada ao serviço de Manutenção (ângulo de garantia/credenciamento), formulário, thank-you page e eventos de conversão.
5. **Epic 5: Contato, Redirects e Lançamento** — Página de Contato, política de privacidade/LGPD, mapa de redirects 301 das URLs antigas, e corte de DNS para produção.

**Validado com o cliente em 2026-07-28:** ordem dos épicos aprovada, WCAG AA aprovado, sem CMS por enquanto aprovado, nenhum requisito funcional adicional apontado.

## Epic 1 Fundação do Projeto

Estabelecer a base técnica do site: projeto Next.js publicado na Vercel, tokens de design aplicados, layout compartilhado e tracking inicial. Ao final deste épico, existe uma página simples já no ar, com a identidade visual correta e rastreável — mesmo sem o conteúdo final de cada página.

### Story 1.1 Setup do projeto e deploy inicial

As a agência,
I want um projeto Next.js criado e publicado na Vercel,
so that exista uma base técnica real para construir todas as páginas em cima.

Acceptance Criteria:
1: Projeto Next.js (App Router) criado e versionado em repositório Git.
2: Projeto linkado a um projeto Vercel, com deploy automático a cada push.
3: Deploy de preview acessível publicamente (URL `*.vercel.app`) mostrando uma página inicial simples (pode ser um placeholder "em construção" com a logo).
4: Variáveis de ambiente configuradas na Vercel (mesmo que vazias/placeholder nesta etapa) para GA4/GTM/Ads, prontas para uso nas próximas stories.

### Story 1.2 Tokens de design como configuração reutilizável

As a desenvolvedor,
I want as cores, tipografia e componentes-base do design system convertidos em tokens/configuração do projeto (ex: Tailwind config ou CSS variables),
so that todas as páginas futuras usem a identidade visual de forma consistente, sem repetir valores hardcoded.

Acceptance Criteria:
1: Paleta de cores (`--brand`, `--cool`, `--gold`, escala de neutros) disponível como tokens no projeto.
2: Fontes (Manrope, Montserrat, Inter, JetBrains Mono) carregadas e configuradas.
3: Componentes-base (botão primário/secundário, badge/status pill, card) implementados como componentes React reutilizáveis, visualmente equivalentes aos exemplos do `assets/design_system_js_ar_central.html`.
4: Símbolo da marca implementado como componente que aceita variante clara/escura (reaproveitando `mark_symbol.png` e `mark_symbol_white.png`).

### Story 1.3 Layout compartilhado (Header e Footer)

As a visitante do site,
I want ver um cabeçalho e rodapé consistentes em todas as páginas,
so that eu consiga navegar entre Home, serviços e contato de qualquer lugar do site.

Acceptance Criteria:
1: Header com logo (ícone + wordmark), links para Instalação, Manutenção, Contato, e CTA "Pedir Orçamento".
2: Header responsivo (menu adaptado para mobile).
3: Footer com logo, links de redes sociais (Instagram, Facebook), informações de contato (telefone/WhatsApp, e-mail), e link para a política de privacidade.
4: Header e Footer aplicados em todas as rotas via layout compartilhado do Next.js.

### Story 1.4 Integração inicial de GA4 e GTM

As a agência,
I want o Google Tag Manager e GA4 instalados no site desde o primeiro deploy,
so that toda navegação a partir daqui já esteja sendo medida, antes mesmo do conteúdo final existir.

Acceptance Criteria:
1: Container do GTM instalado em todas as páginas via variável de ambiente (ID configurável, não hardcoded).
2: Tag do GA4 configurada dentro do GTM, disparando pageview em cada navegação (incluindo troca de rota client-side do Next.js).
3: Instalação validada via modo de preview do GTM e/ou DebugView do GA4.
4: Ausência do GTM/GA4 (ex: bloqueador de anúncios) não impede o carregamento ou uso do site (NFR7).

## Epic 2 Home Institucional

Construir a página inicial completa, que apresenta a empresa e direciona o tráfego (orgânico e de marca) para as páginas de serviço.

### Story 2.1 Hero em vídeo com CTA duplo

As a visitante buscando um prestador de ar-condicionado confiável,
I want ver imediatamente do que a empresa se trata e como entrar em contato,
so that eu decida rápido se continuo navegando ou já peço orçamento.

Acceptance Criteria:
1: Hero com vídeo de fundo em loop (técnico trabalhando), otimizado para web (H.264, ~1080p, poster de fallback), replicando o tratamento validado no design system.
2: Headline, subheadline e badge de status ("Atendimento 24h disponível") conforme copy validada no design system.
3: CTA duplo: botão "Solicitar Orçamento" (leva ao formulário/LP) e botão "Falar no WhatsApp" (abre WhatsApp com número da empresa).
4: Hero responsivo — vídeo e textos legíveis em mobile, sem quebrar layout.

### Story 2.2 Seção de serviços

As a visitante,
I want entender rapidamente quais serviços a empresa oferece,
so that eu escolha ir direto para a página de Instalação ou Manutenção.

Acceptance Criteria:
1: Cards/bento apresentando Instalação, Manutenção e Insumos, cada um linkando para a página correspondente (Insumos pode linkar para Contato, já que não tem LP própria).
2: Visual seguindo o padrão bento do design system (cards de tamanhos variáveis, cores brand/cool/gray).

### Story 2.3 Seção de credenciamento (ticker de fabricantes)

As a visitante,
I want ver que a empresa é credenciada pelos principais fabricantes,
so that eu confie que a garantia do meu equipamento será preservada.

Acceptance Criteria:
1: Ticker/carrossel com os logos dos 13 fabricantes confirmados (Agratto, Carrier, Daikin, Elgin, Fujitsu, Gree, Hitachi, LG, Midea, Philco, Springer Midea, TCL, Ventisol), reaproveitando os arquivos já baixados em `assets/brand/manufacturers/`.
2: Ticker em loop contínuo, com respiro visual entre o hero e a seção seguinte (mesmo ajuste já validado no design system).

### Story 2.4 Depoimentos e prova social

As a visitante,
I want ver relatos de outros clientes,
so that eu ganhe confiança antes de entrar em contato.

Acceptance Criteria:
1: Seção com pelo menos 3 cards de depoimento (nome, bairro/cidade, serviço prestado) — conteúdo real a ser fornecido pelo cliente; usar os exemplos do design system como placeholder até lá.
2: Estrutura do componente pronta para receber depoimentos reais sem retrabalho.

## Epic 3 Landing Page de Instalação

Página de conversão dedicada ao serviço de Instalação de Ar-Condicionado, otimizada para receber tráfego pago do Google Ads.

### Story 3.1 Estrutura da LP de Instalação

As a visitante que pesquisou "instalação de ar condicionado" no Google,
I want uma página focada só nesse serviço, com os diferenciais da empresa,
so that eu decida pedir orçamento sem precisar navegar pelo site inteiro.

Acceptance Criteria:
1: Hero específico da LP com copy focada em instalação (central, split, multi-split).
2: Seção de diferenciais (credenciamento, 10+ anos, atendimento 24h).
3: Prova social (reaproveitando componente da Story 2.4).
4: FAQ com perguntas frequentes sobre instalação.
5: Página não exibe o menu completo de navegação institucional — foco em manter o visitante na página (reduzir saída/distração), mantendo apenas logo e CTA no header.

### Story 3.2 Formulário de orçamento

As a visitante interessado,
I want preencher um formulário curto,
so that a empresa entre em contato comigo sem eu precisar ligar.

Acceptance Criteria:
1: Formulário com campos: Nome, WhatsApp, Serviço (pré-preenchido como "Instalação"), Bairro/Cidade.
2: Validação client-side dos campos obrigatórios.
3: Envio processado por uma rota de API (Vercel Function) que encaminha o lead (e-mail ou webhook — mecanismo exato a definir com o cliente).
4: Erros de envio são comunicados claramente ao usuário (sem perder os dados preenchidos).

### Story 3.3 Thank-you page e evento de conversão

As a agência,
I want um evento de conversão disparado após o envio bem-sucedido do formulário,
so that o Google Ads e o GA4 consigam otimizar campanhas com base em leads reais.

Acceptance Criteria:
1: Após envio bem-sucedido, o visitante é redirecionado para uma thank-you page própria da LP de Instalação.
2: Thank-you page dispara evento de conversão no GA4 (e, por consequência, disponível para importar no Google Ads).
3: Clique no botão de WhatsApp da LP também dispara um evento de conversão (mesmo sem passar pelo formulário).

## Epic 4 Landing Page de Manutenção

Página de conversão dedicada ao serviço de Manutenção, reaproveitando os componentes já construídos no Epic 3.

### Story 4.1 Estrutura da LP de Manutenção

As a visitante que pesquisou "manutenção de ar condicionado" no Google,
I want uma página focada nesse serviço, com ênfase na garantia de fábrica,
so that eu entenda por que vale a pena contratar uma empresa credenciada em vez de um técnico avulso.

Acceptance Criteria:
1: Hero específico com copy focada no ângulo de garantia/credenciamento (manutenção por técnico não credenciado pode anular a garantia).
2: Seção explicando os planos de manutenção preventiva (reaproveitando o conteúdo já esboçado no design system — Essencial/Profissional/Empresarial), com CTA para orçamento em vez de checkout direto.
3: Prova social e FAQ (reaproveitando componentes do Epic 3).

### Story 4.2 Formulário, thank-you page e conversão

As a visitante interessado em manutenção,
I want pedir orçamento pelo mesmo fluxo simples da LP de Instalação,
so that o processo seja igualmente rápido.

Acceptance Criteria:
1: Formulário reaproveitando o componente da Story 3.2, com campo Serviço pré-preenchido como "Manutenção".
2: Thank-you page própria da LP de Manutenção, disparando evento de conversão no GA4.
3: Clique no WhatsApp da LP também dispara evento de conversão.

## Epic 5 Contato, Redirects e Lançamento

Fechar as páginas restantes, aplicar os redirects necessários e preparar o corte de DNS para produção.

### Story 5.1 Página de Contato e Política de Privacidade

As a visitante,
I want encontrar todos os canais de contato e entender como meus dados são usados,
so that eu escolha o canal mais conveniente e confie na empresa.

Acceptance Criteria:
1: Página de Contato com telefone/WhatsApp, e-mail, horário de atendimento e área de cobertura (Rio de Janeiro e Baixada Fluminense).
2: Página de Política de Privacidade/LGPD, linkada no footer e no formulário de orçamento.

### Story 5.2 Redirects 301

As a agência,
I want as URLs antigas do WordPress redirecionando corretamente,
so that qualquer link/favorito antigo não leve a um 404.

Acceptance Criteria:
1: Redirects configurados no Next.js/Vercel conforme o mapa em `docs/seo-redirect-audit.md`.
2: Nota: como a auditoria encontrou que as páginas internas do site atual já estão retornando 404 (achado do crawl de 2026-07-28), o volume de redirects necessário é pequeno — confirmar com o cliente se há URLs adicionais historicamente importantes (ex: que apareciam em campanhas antigas) antes de finalizar esta story.

### Story 5.3 Checklist de lançamento e corte de DNS

As a agência,
I want um checklist claro antes de apontar o DNS de produção,
so that a virada do WordPress para o Next.js aconteça sem downtime perceptível.

Acceptance Criteria:
1: Todas as páginas (Home, LP Instalação, LP Manutenção, Contato) revisadas em produção (ambiente Vercel de preview) antes do corte.
2: GA4/GTM/Ads validados em produção antes do corte.
3: DNS do domínio `jsarcentral.com.br` apontado para a Vercel pelo Wagner.
4: Validação pós-corte: site acessível via domínio próprio, certificado SSL ativo, formulários funcionando.

## Next Steps

PRD completo com épicos e stories detalhados. Próximo passo: iniciar a implementação seguindo o fluxo do projeto (`docs/stories/`), começando pelo Epic 1.
