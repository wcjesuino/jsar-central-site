# JS AR Central — Otimização Google Ads (10/09/2026)

> Histórico da intervenção feita em 10/09/2026 para destravar a veiculação da campanha
> Search, que estava praticamente parada desde 01/09.
>
> Conta: **JS Ar Central** — Google Ads customer `1384765107`, sob a MCC Agência Reino
> (`2631448144`). Campanha ativa: **"Instalacao e Manutencao de Ar-Condicionado"**
> (`24084016928`), Search, lance MANUAL_CPC, só Rede de Pesquisa do Google.

---

## ⏰ LEMBRETE — REVISÃO PENDENTE: 14/09/2026 de manhã

O Wagner vai pedir "roda a revisão" no dia 14/09 de manhã (não há agente na nuvem — o
agendador não alcança a API do Google Ads, que só tem credenciais locais em
`ads-studio/.env.local`). Ao ser acionado:

1. Rodar as queries da **§6** (mesmas da baseline) e preencher a tabela de comparação.
2. Avaliar pela metodologia campeão/desafiante — puxar qualificação dos leads no CRM do
   Ads Studio (funil JS AR Central), não só volume.
3. Decidir sobre os **desvios da §4**: (a) pausar ou não "instalação split" / "split
   inverter" (QS 1); (b) adicionar Rio de Janeiro cidade (`geoTargetConstants/1001655`)
   se o núcleo já estiver servindo.
4. Verificar se `post_click_quality_score` saiu de BELOW_AVERAGE.
5. Registrar tudo no §Log e mandar relatório pro Wagner.

**Estado em 10/09 12:05:** campanha ainda não veiculou nada depois das mudanças
(1 impressão às 10h, antes da alteração das 10:54) — propagação normal do Google Ads.

---

## 1. Diagnóstico (por que não estava imprimindo)

Nenhum bloqueio de política/pagamento — conta `ENABLED`, faturamento `APPROVED`, anúncios
`APPROVED`, keywords `APPROVED`. O problema é **Ad Rank abaixo do limite de veiculação**:

| Sintoma | Evidência |
|---|---|
| Campanha parou de servir | 11–24/ago: 120–350 impr/dia · 25–31/ago: 16–92/dia · **01–08/set: 0** · 09/set: 1 impr, R$0 |
| Gasto de setembro | **R$ 0,00** (conta inteira) |
| Perda por rank | `search_rank_lost_impression_share` 62–86% em agosto, ~100% em setembro |
| Impression share | `search_impression_share` ~15–25% em agosto |
| Quality Score no chão | maioria das keywords QS 1–4 (máx. 4); `post_click_quality_score = BELOW_AVERAGE` |
| Lance << mercado | lance R$3,50 vs. estimativa de CPC 1ª página R$5,95–7,91 nas keywords principais |
| Mercado pequeno | segmentação geográfica era **só a cidade de Duque de Caxias** |
| Anúncios novos | RSAs trocadas p/ domínio de produção ~25–27/ago → histórico de QS/eCTR resetou |

Gatilho provável do apagão total: em **27/08** o lance dos grupos subiu de R$2,50 → R$3,50
(usuário jesuino.marketing), mas continuou abaixo do necessário; com QS resetado + volume
mínimo, o Ad Rank efetivo caiu abaixo do limite e a campanha saiu do leilão.

Estimativas de CPC de 1ª página (Google), lance era R$3,50:

| Keyword | CPC 1ª página | Top of page |
|---|---|---|
| manutenção de ar condicionado (exata) | R$ 7,57 | R$ 7,57 |
| assistência técnica ar condicionado | R$ 6,30 | R$ 6,64 |
| manutenção de ar condicionado perto de mim | R$ 5,95 | R$ 8,95 |
| empresa de manutenção de ar condicionado | R$ 7,91 | R$ 8,34 |

---

## 2. Baseline — estado ANTES das mudanças (para comparar em 3–4 dias)

**Métricas da campanha `24084016928` — últimos 30 dias (≈11/ago–09/set), lidas em 10/09:**

| Métrica | Valor |
|---|---|
| Impressões | 3.000 |
| Cliques | 120 |
| Investimento | R$ 302,31 |
| CPC médio | ~R$ 2,52 |
| Conversões | 2 |
| CPL (custo por conversão) | ~R$ 151 |
| Search impression share | 20,7% |
| Rank lost IS | 62,4% |
| Budget lost IS | 16,8% |
| Top impression share | 15,3% |

**Setembro até 09/09:** 1 impressão, 0 clique, R$ 0,00, 0 conversão. (Campanha fora do ar.)

**Configuração anterior:**
- Orçamento diário: **R$ 16,50** (budget `15756929463`)
- Lance dos 2 grupos: **R$ 3,50** (`cpc_bid_micros = 3500000`), sem lance por keyword
- Geo: **Duque de Caxias apenas** (`geoTargetConstants/1031613` + `/9216437`)
- Agendamento: 06h–22h, todos os dias (mantido)
- Rede: só Google Search (Search Partners e Display OFF) (mantido)
- Estratégia de lance: CPC Manual, eCPC desligado (mantido)

**Quality Score por keyword (10/09, antes):**

| Keyword | QS |
|---|---|
| manutenção de ar condicionado (exata) | 4 |
| técnico de ar condicionado | 4 |
| instalação de ar condicionado (exata) | 4 |
| empresa de instalação de ar condicionado | 4 |
| ar condicionado não gela | 3 |
| conserto de ar condicionado | 1 |
| limpeza de ar condicionado | 1 |
| instalação de ar condicionado split | 1 |
| quanto custa instalar ar condicionado | 1 |
| instalação de ar condicionado split inverter | 1 |
| (demais keywords) | sem QS / dados insuficientes |

---

## 3. Mudanças aplicadas em 10/09/2026 ~10:54 (-03)

Todas via API Google Ads v22 (`googleAds:mutate`). Scripts em
`/private/tmp/.../scratchpad/` (sessão) — lógica replicável.

### 3.1 Orçamento diário: R$ 16,50 → **R$ 30,00**
- `campaignBudgets/15756929463` · `amount_micros`: `16500000` → `30000000`
- Motivo: com CPC real de R$6–8, R$16,50/dia rende ~2 cliques/dia — insuficiente para
  reconstruir Quality Score e gerar volume estatístico. R$30/dia é o piso realista de teste.
- Teto de exposição: ~R$ 900/mês (antes o plano era R$ 500/mês — decisão do usuário em 10/09).

### 3.2 Lance por keyword: **R$ 8,00** nas 4 âncoras de manutenção
Lance no nível da keyword (grupo `207233388668` — "Manutencao AC - Credenciada"),
`cpc_bid_micros = 8000000`. Grupo continua com default R$3,50 para as demais.

| Keyword | resourceName | Match |
|---|---|---|
| manutenção de ar condicionado | `adGroupCriteria/207233388668~1118004256` | EXATA |
| assistência técnica ar condicionado | `adGroupCriteria/207233388668~1649975727` | FRASE |
| manutenção de ar condicionado perto de mim | `adGroupCriteria/207233388668~296180085790` | FRASE |
| empresa de manutenção de ar condicionado | `adGroupCriteria/207233388668~325724415564` | FRASE |

Motivo: são os termos de maior intenção comercial e volume para o negócio. R$8 fica acima
da estimativa de 1ª página (R$5,95–7,91) → volta a entrar no leilão em posição competitiva.

### 3.3 Keywords pausadas (QS 1, baixa qualificação de lead)

| Keyword | resourceName | Motivo |
|---|---|---|
| conserto de ar condicionado | `adGroupCriteria/207233388668~325724414564` | QS 1; puxava "conserto de janela" (unidade que não é o foco) |
| limpeza de ar condicionado | `adGroupCriteria/207233388668~325724420564` | QS 1; intenção "faça você mesmo" — puxava "produto para limpar", "ar clean" |
| quanto custa instalar ar condicionado | `adGroupCriteria/207233431668~52989831626` | QS 1; pesquisador de preço puro, baixa qualificação |

### 3.4 Geografia ampliada — +5 cidades da Baixada Fluminense
Campanha `24084016928`, novos `campaign_criterion` LOCATION:

| Cidade | geoTargetConstant | resourceName |
|---|---|---|
| Nova Iguaçu | `geoTargetConstants/1001652` | `campaignCriteria/24084016928~1001652` |
| São João de Meriti | `geoTargetConstants/1032068` | `campaignCriteria/24084016928~1032068` |
| Belford Roxo | `geoTargetConstants/1031480` | `campaignCriteria/24084016928~1031480` |
| Nilópolis | `geoTargetConstants/1031845` | `campaignCriteria/24084016928~1031845` |
| Mesquita | `geoTargetConstants/1031814` | `campaignCriteria/24084016928~1031814` |

Geo final: Duque de Caxias + as 5 acima. Restaura a cobertura do plano original
(`docs/google-ads-plan.md`), que tinha sido reduzida a Duque de Caxias sozinha.

---

## 4. Desvios em relação ao pedido do usuário (registrado para transparência)

1. **"Pausar as keywords de QS 1"** — o usuário pediu pausar todas. Pausei 3 de 5.
   Mantive ativas **"instalação de ar condicionado split"** (`207233431668~4493699571`) e
   **"instalação de ar condicionado split inverter"** (`207233431668~325724418644`):
   são os termos-produto centrais do grupo de Instalação; o QS 1 aqui é reflexo do
   histórico resetado da conta e da LP fraca, não do termo. Se em 13–14/09 continuarem
   QS 1 com 0 clique, aí sim pausar.
2. **"Incluir a Zona Norte do Rio"** — não incluí a cidade do Rio de Janeiro ainda.
   Com orçamento de R$30/dia e QS em reconstrução, jogar volume de Rio-capital diluiria
   a verba e atrasaria a recuperação do QS na área núcleo. **Próximo passo (≈14/09):**
   se o core estiver servindo de novo, adicionar `geoTargetConstants/1001655` (Rio de
   Janeiro cidade), possivelmente com ajuste de lance por localização negativo p/ bairros
   distantes.

---

## 5. Landing pages — mudanças aplicadas em 10/09

Auditoria via subagente identificou que o `post_click_quality_score = BELOW_AVERAGE` é de
**conteúdo e contato**, não bug. Site: repo `wcjesuino/jsar-central-site`, Next.js App Router,
deploy Vercel (projeto `web`). Branch de trabalho: **`ads/qs-landing-pages-2026-09`**.

### 5.1 Contato acessível sem JavaScript (era o achado P0)
Antes: o único CTA do hero era um `<button>` que abre modal React (exige JS + preencher
nome/WhatsApp antes de falar com alguém); telefone só no rodapé, também como `<button>`.
- **`site-config.ts`**: adicionado `phoneHref: "tel:+5521964088936"`, `siteUrl`, dados de
  NAP (cidade-sede, horário, área de atendimento).
- **`LpHero`**: ao lado do CTA de WhatsApp, agora tem `<a href="tel:...">Ligar: (21) 96408-8936</a>`
  — link real, funciona sem JS.
- **Novo `MobileContactBar`**: barra fixa no rodapé só no mobile, com "Ligar agora" (`tel:`) e
  "WhatsApp" (`wa.me` direto). Dispara `phone_click` / `whatsapp_click` no dataLayer.
- **`FloatingWhatsAppButton`**: escondido no mobile (`hidden sm:flex`) para não colidir com a barra.
- **`Footer`**: telefone virou `<a href="tel:">` (deixou de ser client component); adicionado
  bloco de horário + área de atendimento (as 7 cidades).

### 5.2 Correspondência de palavra-chave — LP de Manutenção (era o achado P0 principal)
Antes: H1 "Manutenção que preserva sua garantia. Não arrisque." — nenhuma das palavras do
grupo de anúncios ("conserto", "assistência técnica", "limpeza", "não gela", "técnico")
aparecia acima da dobra; sem menção à região.
- **H1** → "Conserto e manutenção de ar-condicionado em Duque de Caxias e Baixada"
- **Subtítulo** → "Ar não gela, pinga água, faz barulho ou está com mau cheiro? Assistência
  técnica credenciada de fábrica, com diagnóstico no local e atendimento 24h para emergências."
- **CTA** "Solicitar Orçamento" → "Falar com um técnico agora"
- **Chips na dobra** (novo prop `highlights` do `LpHero`): Ar não gela · Pinga água/vaza ·
  Faz barulho ou cheira mal · Limpeza e higienização · Recarga de gás · Troca de peças ·
  Manutenção preventiva (PMOC)
- **Nova seção "O que a gente resolve"** (6 cards, ~600 palavras de conteúdo próprio com as
  keywords): ar não gela, vazamento, limpeza/higienização, recarga de gás e reparos,
  preventiva/PMOC, sem anular garantia.
- **`metadata` title/description** reescritos com os mesmos termos + região + canonical.
- **FAQ** ampliada com "Meu ar não está gelando, o que pode ser?" e "Vocês fazem conserto no
  mesmo dia?".

### 5.3 LP de Instalação (estava melhor — ajuste fino)
- H1 mantido (já casava); subtítulo e FAQ passam a citar Duque de Caxias explicitamente.
- Chips na dobra: Split e split inverter · Multi-split · Ar central · Residencial e comercial ·
  Projeto e dimensionamento · Sem taxa de visita.
- CTA → "Pedir orçamento de instalação"; `metadata` + canonical.
- FAQ com "Quanto custa instalar um ar-condicionado?" e "Quanto tempo leva uma instalação split?".

### 5.4 Dados estruturados (achado P1)
- **`StructuredData.tsx`** (novo): JSON-LD `HVACBusiness` no layout (nome, telefone, e-mail,
  `areaServed` com as 7 cidades, `openingHoursSpecification`, `sameAs` redes, `address` com
  localidade Duque de Caxias/RJ — **sem rua/CNPJ, que não temos**), e `FAQPage` por LP
  gerado a partir do array `faqItems` já existente.
- `metadataBase` definido no layout (`https://www.jsarcentral.com.br`); `canonical` por página.

### 5.5 Confiança / conteúdo enganoso (achado P1)
- **Removidos os depoimentos fictícios** das duas LPs (nomes inventados — Roberto A.,
  Mariana F., Fernanda M. — marcados no próprio código como "substituir antes de publicar";
  risco CONAR + sinal de conteúdo não original para o Google). Componente `Testimonials`
  mantido no repo para quando houver depoimentos reais.
  ⚠️ **Ainda há depoimentos fictícios na Home** (`src/app/page.tsx`) — não mexi porque a Home
  não recebe tráfego de anúncio; recomendo trocar por reais ou remover.

### 5.6 Contraste e mobile (achado P1)
- `LpHero`: subtítulo `text-white/55` → `/75`; labels dos stats `/35` → `/60`; gradiente
  sobre o vídeo mais escuro na faixa do texto.
- Selo "Atendimento 24h" agora aparece no mobile (era `hidden sm:block`).

### 5.7 Fontes (achado P2, baixo risco)
- Removida a família **Montserrat** (carregava 3 pesos, classe `font-display` não usada em
  lugar nenhum). Inter limitado a 4 pesos (era `wght@100..900`). `--font-display` aponta
  para Manrope.

### Não feito nesta rodada (próximos passos)
- **Otimização do vídeo do hero no mobile** (P1-4): não renderizar `<video>` abaixo de `sm`,
  comprimir os MP4 (2 MB / 1 MB) e converter posters para WebP. Precisa de teste visual —
  fica para a próxima rodada.
- **`next/font/local`** (P2-2): versionar os `.woff2` no repo p/ o build não depender de rede.
- Focus trap nos modais (P2-6); `size="md"` no CTA do `GlassNav` no mobile (P2-3).
- Confirmar `ADS_STUDIO_LEADS_WEBHOOK_URL` setado em produção na Vercel (P2-4) — se faltar,
  lead do formulário só cai em `console.log`.

### Build / deploy
- `tsc --noEmit`: passa. Build da Vercel (preview e produção): **sucesso** (`next build` roda
  tsc + eslint + compile — tudo limpo).
- Branch `ads/qs-landing-pages-2026-09` → commit `58ef962` → merge `--no-ff` em `main`
  (commit `1ed4f56`), push para produção em 10/09.
- Preview conferido via `vercel curl` (deployment protegido por SSO): H1 novo, `tel:` e
  `wa.me` presentes, JSON-LD `HVACBusiness` + `FAQPage`, chips renderizando, zero
  depoimento fictício, Montserrat removida (só 3 fontes no HTML).

### Rollback das LPs
`git revert 1ed4f56` (ou `git revert 58ef962`) e push para `main`.

---

## 6. O que medir em 13–14/09/2026

Rodar as mesmas queries de baseline e comparar:

| Indicador | Baseline (30d até 09/09) | Meta em 3–4 dias | Como ler |
|---|---|---|---|
| Impressões/dia | ~0 (setembro) | > 100/dia | campanha voltou ao leilão? |
| `search_rank_lost_impression_share` | ~100% (set) / 62% (ago) | < 60% | lance R$8 resolveu o rank? |
| `search_budget_lost_impression_share` | 17% | vigiar < 40% | R$30/dia está segurando a demanda nova? |
| CPC médio nas 4 âncoras | — | R$ 5–8 | está pagando o preço de mercado |
| Cliques/dia | ~0 | 5–12/dia | volume voltou |
| Conversões (form + WhatsApp) | 2 em 30d | ≥ 1–2 no período | funil ainda converte |
| CPL | ~R$ 151 | vigiar | qualificação dos leads (comentar no CRM Ads Studio) |
| Quality Score das 4 âncoras | 4 / s/QS | subindo (esp. pós-LP) | efeito da landing page |
| `post_click_quality_score` | BELOW_AVERAGE | ABOVE/AVERAGE | efeito da landing page |

**Avaliar pela metodologia campeão/desafiante:** ver qualificação dos leads no CRM do Ads
Studio (não só volume). Se as 4 âncoras a R$8 trouxerem leads qualificados, viram base do
campeão; termos a R$3,50 que só geram lixo entram na fila de pausa/negativa.

**Riscos a vigiar:**
- Orçamento estourar rápido (budget lost IS alto) → subir p/ R$40 ou baixar o lance p/ R$6–7.
- CPC nas âncoras vir a R$8 cheio e queimar verba sem conversão → reduzir p/ R$6.
- Cidades novas trazerem busca irrelevante → negativar termos / ajuste de lance por local.

---

## 7. Rollback (se precisar reverter)

| Mudança | Como reverter |
|---|---|
| Orçamento | `campaignBudgets/15756929463` `amount_micros` → `16500000` |
| Lances keyword | 4 `adGroupCriteria` do §3.2 → `cpc_bid_micros` `3500000` (ou remover o campo) |
| Keywords pausadas | 3 `adGroupCriteria` do §3.3 → `status` `ENABLED` |
| Geo | remover os 5 `campaignCriteria` do §3.4 |

---

## Log

- **2026-09-10 ~10:54 (-03)** — §3.1 a §3.4 (Google Ads) aplicados via API, verificados por re-query.
- **2026-09-10 ~12:00 (-03)** — auditoria de LP concluída; §5 (LPs) implementado, buildado e deployado em produção (commit `1ed4f56`). Doc de baseline pronto para revisão em 13–14/09.
- **2026-09-10 ~12:15 (-03)** — Wagner escolheu revisão manual no dia 14/09 de manhã (Opção A). Lembrete adicionado no topo deste doc. Sem agente na nuvem.
