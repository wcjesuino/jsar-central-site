# JS AR Central — Plano de Campanhas Google Ads (Rascunho Inicial)

> **Orçamento:** R$500/mês total (~R$16,50/dia). Este é um orçamento de **teste/validação**, não de escala — a estrutura abaixo é propositalmente enxuta (poucos grupos de anúncio por campanha) para não pulverizar verba e conseguir dados de conversão mais rápido. Reavaliar estrutura assim que houver orçamento maior.
>
> **Landing pages de destino:** ainda em construção (Next.js/Vercel). Cada campanha aponta para uma LP dedicada por serviço, com formulário curto + botão de WhatsApp. URLs abaixo são placeholders — substituir quando as páginas estiverem no ar.
>
> **Geografia:** Rio de Janeiro (capital) + Baixada Fluminense, com raio a partir de Duque de Caxias-RJ (sede da empresa). Sugestão: usar segmentação por raio (ex: 30km de Duque de Caxias) combinada com exclusão de bairros/cidades fora da área de atendimento real, em vez de segmentar o estado inteiro do RJ.

## Divisão de orçamento

| Campanha | % do orçamento | Orçamento diário aprox. |
|---|---|---|
| Manutenção de Ar-Condicionado | 55% | ~R$9,10/dia |
| Instalação de Ar-Condicionado | 45% | ~R$7,40/dia |

Manutenção recebe fatia maior porque tende a ter ciclo de decisão mais curto e volume de busca maior — ajuda a gerar os primeiros leads/dados de conversão mais rápido para validar o funil. Reequilibrar depois de 2-3 semanas com base no CPL real de cada campanha.

---

## Campanha 1: Manutenção de Ar-Condicionado

**URL de destino:** `[LP-MANUTENCAO-URL]`

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

**Headlines (variações para teste):**
1. "Manutenção de Ar-Condicionado" / "Credenciada de Fábrica" / "Atendimento em Até 24h"
2. "Seu Ar Não Gela?" / "Técnico Credenciado Hoje" / "Garantia de Fábrica Preservada"
3. "Manutenção Sem Perder a Garantia" / "+10 Anos no Rio de Janeiro" / "Orçamento pelo WhatsApp"

**Descriptions (variações para teste):**
1. "Manutenção preventiva e corretiva com técnicos credenciados pelos principais fabricantes. Atendimento no RJ e Baixada Fluminense. Fale agora pelo WhatsApp."
2. "Manutenção feita por técnico não credenciado pode anular sua garantia de fábrica. Faça certo com quem tem credenciamento oficial. Orçamento rápido."

**Extensões de anúncio:**
- Extensão de chamada (com o número já usado no site: (21) 96408-8936)
- Extensão de local (vinculada ao Google Business Profile)
- Snippets estruturados: tipo "Serviços" → Manutenção preventiva, Manutenção corretiva, Limpeza, Higienização
- Extensão de frase de destaque: "Atendimento 24h", "Credenciado de fábrica", "+10 anos de experiência"

---

## Campanha 2: Instalação de Ar-Condicionado

**URL de destino:** `[LP-INSTALACAO-URL]`

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

**Headlines (variações para teste):**
1. "Instalação de Ar-Condicionado" / "Central e Split" / "Credenciado de Fábrica"
2. "Instale Certo, Sem Riscos" / "Técnicos Credenciados" / "Orçamento pelo WhatsApp"
3. "Ar-Condicionado Central ou Split" / "+10 Anos no Rio de Janeiro" / "Atendimento 24h"

**Descriptions (variações para teste):**
1. "Instalação de ar-condicionado central e split com credenciamento oficial de fábrica — sua garantia protegida desde o primeiro dia. Peça um orçamento."
2. "Especialistas em instalação de ar-condicionado no Rio de Janeiro e Baixada Fluminense. Credenciados por Daikin, LG, Carrier e outros. Fale conosco."

**Extensões de anúncio:** mesmas da Campanha 1 (chamada, local, snippets de "Serviços" → Instalação residencial, Instalação comercial, Central, Split).

---

## Configuração de conversão (pré-requisito antes de ativar)

Antes de ligar qualquer campanha, confirmar que estão configurados e testados:
1. Tag do Google Ads (conversão) instalada via GTM
2. Evento de conversão no clique do botão de WhatsApp
3. Evento de conversão no envio do formulário (thank-you page)
4. Evento de conversão no clique do telefone

Sem isso, o Google Ads otimiza às cegas — não ativar campanha sem essa base pronta.

## Estratégia de lance sugerida

Começar com **CPC Manual** (ou "Maximizar Cliques" com teto de CPC) nas primeiras 1-2 semanas até acumular conversões suficientes (recomendação do próprio Google: ~15-30 conversões/mês por campanha) antes de migrar para "Maximizar Conversões". Com R$500/mês total, é provável que leve algumas semanas para acumular dados suficientes — não trocar de estratégia de lance cedo demais.

## Rotina de monitoramento

- Semanal nas primeiras 4 semanas: CPC médio, CTR, CPL por campanha, qualidade dos leads (não só quantidade)
- A partir da 5ª semana: quinzenal, com ajuste de lances/palavras-chave conforme CPL real
- Mensal: relatório consolidado com CPL por serviço e recomendação de aumento/redistribuição de orçamento
