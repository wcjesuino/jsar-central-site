# JS AR Central — Plano de Campanhas Google Ads

> **Status (atualizado 2026-07-30):** as duas landing pages já estão no ar e revisadas — `/instalacao-ar-condicionado` e `/manutencao-ar-condicionado`, ambas com formulário + WhatsApp funcionando e integradas ao CRM de leads. Headlines e descriptions abaixo já foram conferidas contra os limites reais do Google Ads (30/90 caracteres) — ver seção de validação no fim de cada campanha. **A estrutura de campanhas abaixo (2 campanhas separadas) foi consolidada em produção**: hoje é 1 campanha única "Instalação e Manutenção de Ar-Condicionado" (R$16,50/dia), com 2 grupos de anúncio (Manutenção AC, Instalação AC) mantendo as mesmas keywords/RSA descritas aqui — decisão tomada após pesquisa sobre orçamento baixo fragmentado (ver memória do projeto). O conteúdo de keywords/headlines/descriptions por serviço abaixo continua válido, só a divisão em 2 campanhas separadas que não reflete mais a conta real.
>
> **Orçamento:** R$500/mês total (~R$16,50/dia). Este é um orçamento de **teste/validação**, não de escala — a estrutura abaixo é propositalmente enxuta (poucos grupos de anúncio por campanha) para não pulverizar verba e conseguir dados de conversão mais rápido. Reavaliar estrutura assim que houver orçamento maior.
>
> **Landing pages de destino:** URLs atuais apontam para o domínio de preview da Vercel (`jsar-central-site-wagners-projects-3f297ba1.vercel.app`), já que o corte de DNS de `jsarcentral.com.br` (Story 5.3) ainda não aconteceu. **Não recomendo ativar campanhas pagas com esse domínio de preview** — além de não passar confiança pra quem clica no anúncio, o Vercel pode trocar essa URL a qualquer redeploy sem alias fixo. Atualizar os "Final URL" de cada anúncio para `https://jsarcentral.com.br/...` assim que o DNS for cortado, antes de ligar qualquer campanha de verdade.
>
> **Agendamento de anúncios (atualizado 2026-07-31):** ads_schedule configurado para **06h–22h, todos os dias da semana** (inclusive fins de semana — o contato de plantão responde sábado e domingo). Corte pensado para eliminar cliques de baixa intenção/impulso na madrugada (22h–06h), sem cortar a janela de intenção real do fim de tarde/início da noite (18h–22h, quando a pessoa chega em casa e percebe que o ar quebrou). Decisão do cliente, não é baseada em dado de conversão ainda — reavaliar com dados reais depois de accumular volume.
>
> **Geografia (atualizado 2026-07-31):** a pedido do cliente, a segmentação por lista de cidades foi substituída por **raio de 5km a partir da sede** (Av. Nilo Peçanha, 460, Centro, Duque de Caxias-RJ, CEP 25010-144 — lat -22.78685, lon -43.3119915). Aplicado na campanha unificada via `campaign_criterion.proximity`. Um raio de 5km é bem mais restrito que a cobertura anterior (Rio capital + 8 cidades da Baixada) — cabe reavaliar com o cliente se cobre a área real de atendimento, já que Nova Iguaçu/São João de Meriti/etc. podem ficar parcialmente ou totalmente fora desse raio.

## Divisão de orçamento

| Campanha | % do orçamento | Orçamento diário aprox. |
|---|---|---|
| Manutenção de Ar-Condicionado | 55% | ~R$9,10/dia |
| Instalação de Ar-Condicionado | 45% | ~R$7,40/dia |

Manutenção recebe fatia maior porque tende a ter ciclo de decisão mais curto e volume de busca maior — ajuda a gerar os primeiros leads/dados de conversão mais rápido para validar o funil. Reequilibrar depois de 2-3 semanas com base no CPL real de cada campanha.

---

## Campanha 1: Manutenção de Ar-Condicionado

**URL de destino:** `https://jsar-central-site-wagners-projects-3f297ba1.vercel.app/manutencao-ar-condicionado` (trocar para `https://jsarcentral.com.br/manutencao-ar-condicionado` após o corte de DNS)

### Grupo de anúncio único: "Manutenção AC — Credenciada"

Manter em 1 grupo de anúncio nesta fase inicial — orçamento não comporta segmentar por tipo de manutenção (preventiva/corretiva) ainda.

**Palavras-chave (frase e exata, evitar amplo puro neste orçamento):**
- [manutenção de ar condicionado]
- [manutenção ar condicionado rj]
- "manutenção de ar condicionado perto de mim"
- "conserto de ar condicionado"
- "técnico de ar condicionado"
- "assistência técnica ar condicionado"
- [manutenção ar condicionado duque de caxias]
- "limpeza de ar condicionado"
- "ar condicionado não gela"
- "manutenção ar condicionado credenciada"

**Negativas (aplicar em nível de conta, servem para as duas campanhas):**
- vaga, emprego, trabalhar, currículo, salário
- curso, como fazer, tutorial, aprenda, passo a passo
- peça avulsa, comprar peça, onde comprar
- gratuito, grátis (quando não for genuinamente o caso)
- manual, pdf, catálogo

**Headlines (validadas ≤30 caracteres — limite real do Google Ads):**
1. "Manutenção de Ar-Condicionado" (29) / "Credenciada de Fábrica" (22) / "Atendimento em Até 24h" (22)
2. "Seu Ar Não Gela?" (16) / "Técnico Credenciado Hoje" (24) / "Garantia de Fábrica Preservada" (30)
3. "Manutenção, Garantia Intacta" (28) / "+31 Anos no Rio de Janeiro" (26) / "Orçamento pelo WhatsApp" (23)

**Descriptions (validadas ≤90 caracteres — a versão anterior deste doc excedia bastante o limite; dividido em 4 descriptions curtas em vez de 2 longas):**
1. "Manutenção preventiva e corretiva com técnicos credenciados de fábrica." (71)
2. "Atendimento no Rio de Janeiro e Baixada Fluminense. Fale no WhatsApp." (69)
3. "Técnico não credenciado pode anular sua garantia de fábrica. Não arrisque." (74)
4. "Credenciamento oficial dos fabricantes. Orçamento rápido, sem compromisso." (74)

**Extensões de anúncio:**
- Extensão de chamada (com o número já usado no site: (21) 96408-8936)
- Extensão de local (vinculada ao Google Business Profile)
- Snippets estruturados: tipo "Serviços" → Manutenção preventiva, Manutenção corretiva, Limpeza, Higienização
- Extensão de frase de destaque: "Atendimento 24h", "Credenciado de fábrica", "+31 anos de experiência"

---

## Campanha 2: Instalação de Ar-Condicionado

**URL de destino:** `https://jsar-central-site-wagners-projects-3f297ba1.vercel.app/instalacao-ar-condicionado` (trocar para `https://jsarcentral.com.br/instalacao-ar-condicionado` após o corte de DNS)

### Grupo de anúncio único: "Instalação AC — Central e Split"

**Palavras-chave:**
- [instalação de ar condicionado]
- [instalação ar condicionado rj]
- "instalação de ar condicionado split"
- "instalação de ar condicionado central"
- "empresa de instalação de ar condicionado"
- "instalação ar condicionado duque de caxias"
- "quanto custa instalar ar condicionado"
- "instalação ar condicionado credenciada"

**Negativas:** usar a mesma lista da Campanha 1 (nível de conta), mais:
- aluguel, alugar (caso não seja serviço oferecido)
- usado, seminovo (se o foco for instalação, não venda de equipamento usado)

**Headlines (validadas ≤30 caracteres):**
1. "Instalação de Ar-Condicionado" (29) / "Central e Split" (15) / "Credenciado de Fábrica" (22)
2. "Instale Certo, Sem Riscos" (25) / "Técnicos Credenciados" (21) / "Orçamento pelo WhatsApp" (23)
3. "Instale Central ou Split" (24) / "+31 Anos no Rio de Janeiro" (26) / "Atendimento 24h" (15)

**Descriptions (validadas ≤90 caracteres — dividido em 4 descriptions curtas em vez de 2 longas):**
1. "Instalação de ar-condicionado central e split com credenciamento oficial." (73)
2. "Sua garantia de fábrica protegida desde o primeiro dia. Peça um orçamento." (74)
3. "Especialistas em instalação de ar-condicionado no RJ e Baixada Fluminense." (74)
4. "Credenciados por Daikin, LG, Carrier e outros fabricantes. Fale conosco." (72)

**Extensões de anúncio:** mesmas da Campanha 1 (chamada, local, snippets de "Serviços" → Instalação residencial, Instalação comercial, Central, Split).

---

## Configuração de conversão (pré-requisito antes de ativar)

Status atual (verificado no código do site):

1. ✅ Tag do Google Ads (conversão) instalada via GTM — `NEXT_PUBLIC_GTM_ID=GTM-P8T43FVN` configurado em produção em 2026-07-29. Duas ações de conversão criadas na conta (`AW-18340984715`): "Envio de Formulário" (label `ggc0CJ_60tgcEIvv1KlE`, gatilho `generate_lead`) e "Clique no WhatsApp" (label `oNu_CND40tgcEIvv1KlE`, gatilho `whatsapp_click`). Tags publicadas no GTM e **validadas em produção via rede real** — os dois pixels de conversão dispararam com status 200.
2. ✅ Evento de conversão no clique do botão de WhatsApp — `whatsapp_click` já disparado via `dataLayer` em todos os CTAs de WhatsApp (Hero, thank-you page).
3. ✅ Evento de conversão no envio do formulário (thank-you page) — `generate_lead` disparado nas duas thank-you pages (`instalacao-ar-condicionado/obrigado` e `manutencao-ar-condicionado/obrigado`), com `service` diferenciando Instalação/Manutenção.
4. ⬜ Evento de conversão no clique do telefone — não implementado ainda (o site usa WhatsApp como canal principal, não há link `tel:` clicável hoje).

**Bônus não previsto neste plano original:** os leads do formulário agora também caem automaticamente no CRM do Ads Studio (funil "novo"), com notificação por e-mail ao cliente — dá uma segunda fonte de verdade pra cruzar com as conversões do Google Ads e validar que o CPL calculado bate com leads reais recebidos.

Falta só o item 4 (opcional, rastrear clique em ligação) — o tracking de conversão essencial já está 100% pronto e validado.

**Status das campanhas (atualizado em 2026-07-29):** as duas campanhas Search deste plano já foram criadas na conta real da JS AR Central via API (Google Ads customer ID 1384765107, sob a MCC Agência Reino), com a estrutura exata descrita acima — geo por cidade, keywords, negativas, RSA com os headlines/descriptions validados. **Estão pausadas de propósito**, aguardando: (1) corte de DNS pra trocar a Final URL pro domínio próprio, (2) revisão final do cliente antes de ativar. O tracking de conversão (item anterior) não é mais bloqueio.

## Estratégia de lance sugerida

Começar com **CPC Manual** (ou "Maximizar Cliques" com teto de CPC) nas primeiras 1-2 semanas até acumular conversões suficientes (recomendação do próprio Google: ~15-30 conversões/mês por campanha) antes de migrar para "Maximizar Conversões". Com R$500/mês total, é provável que leve algumas semanas para acumular dados suficientes — não trocar de estratégia de lance cedo demais.

## Rotina de monitoramento

- Semanal nas primeiras 4 semanas: CPC médio, CTR, CPL por campanha, qualidade dos leads (não só quantidade)
- A partir da 5ª semana: quinzenal, com ajuste de lances/palavras-chave conforme CPL real
- Mensal: relatório consolidado com CPL por serviço e recomendação de aumento/redistribuição de orçamento
