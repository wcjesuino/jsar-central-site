import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | JS AR Central",
  description:
    "Como a JS AR Central coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

const sections = [
  {
    title: "1. Quais dados coletamos",
    body: (
      <>
        <p>
          Coletamos os seguintes dados pessoais quando você preenche um formulário de
          orçamento ou contato em nosso site:
        </p>
        <ul className="mt-3 list-disc pl-5">
          <li>Nome</li>
          <li>Número de WhatsApp/telefone</li>
          <li>Bairro ou cidade</li>
          <li>Serviço de interesse (instalação ou manutenção de ar-condicionado)</li>
        </ul>
        <p className="mt-3">
          Não coletamos dados sensíveis (como origem racial, convicção religiosa, dados de
          saúde, entre outros) e não processamos pagamentos diretamente pelo site.
        </p>
        <p className="mt-3">
          Também coletamos automaticamente dados de navegação por meio de ferramentas de
          análise (Google Analytics 4) e de mensuração de campanhas (Google Tag Manager e
          Google Ads), como páginas visitadas, tempo de permanência e origem do acesso, por
          meio de cookies e tecnologias similares.
        </p>
      </>
    ),
  },
  {
    title: "2. Finalidade da coleta",
    body: (
      <>
        <p>Utilizamos os dados coletados para:</p>
        <ul className="mt-3 list-disc pl-5">
          <li>
            Entrar em contato para apresentar orçamentos e agendar serviços de instalação
            ou manutenção de ar-condicionado;
          </li>
          <li>Melhorar a experiência de navegação no site;</li>
          <li>Medir a performance de campanhas de marketing (Google Ads) e do site como um todo;</li>
          <li>Cumprir obrigações legais ou regulatórias, quando aplicável.</li>
        </ul>
        <p className="mt-3">
          Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
          fins de marketing de terceiros.
        </p>
      </>
    ),
  },
  {
    title: "3. Compartilhamento de dados",
    body: (
      <>
        <p>Seus dados podem ser compartilhados com:</p>
        <ul className="mt-3 list-disc pl-5">
          <li>
            Ferramentas de tecnologia que operam em nosso nome (ex.: Google Analytics,
            Google Tag Manager, Google Ads, provedores de hospedagem como a Vercel), sempre
            limitado ao necessário para prestação do serviço;
          </li>
          <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Retenção dos dados",
    body: (
      <p>
        Mantemos os dados coletados pelo tempo necessário para cumprir a finalidade para a
        qual foram coletados (contato comercial e prestação de serviço), ou pelo prazo
        exigido por obrigações legais/fiscais aplicáveis, após o qual são eliminados ou
        anonimizados de forma segura.
      </p>
    ),
  },
  {
    title: "5. Seus direitos como titular dos dados",
    body: (
      <>
        <p>Nos termos da LGPD, você tem direito a:</p>
        <ul className="mt-3 list-disc pl-5">
          <li>Confirmar a existência de tratamento dos seus dados;</li>
          <li>Acessar os dados que temos sobre você;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei;
          </li>
          <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Revogar o consentimento e solicitar a eliminação dos dados tratados com base nele;</li>
          <li>Obter informações sobre com quem compartilhamos seus dados.</li>
        </ul>
        <p className="mt-3">
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
          <strong className="font-semibold text-gray-900">comercial@jsarcentral.com.br</strong>,
          informando seu nome e o pedido específico. Responderemos dentro do prazo legal
          aplicável.
        </p>
      </>
    ),
  },
  {
    title: "6. Cookies e tecnologias de análise",
    body: (
      <p>
        Utilizamos cookies e ferramentas como Google Analytics 4 e Google Tag Manager para
        entender como os visitantes usam o site e para medir a performance de campanhas
        veiculadas no Google Ads. Você pode desativar cookies diretamente nas configurações
        do seu navegador, o que pode afetar algumas funcionalidades do site.
      </p>
    ),
  },
  {
    title: "7. Segurança dos dados",
    body: (
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados
        pessoais coletados contra acessos não autorizados, perda, alteração ou divulgação
        indevida.
      </p>
    ),
  },
  {
    title: "8. Alterações nesta política",
    body: (
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. A data da última
        atualização estará sempre indicada no topo deste documento. Recomendamos a revisão
        periódica desta página.
      </p>
    ),
  },
  {
    title: "9. Contato",
    body: (
      <>
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos
          seus dados pessoais, entre em contato:
        </p>
        <ul className="mt-3 list-disc pl-5">
          <li>
            <strong className="font-semibold text-gray-900">E-mail:</strong>{" "}
            comercial@jsarcentral.com.br
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Telefone/WhatsApp:</strong>{" "}
            (21) 96408-8936
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Responsável pelo tratamento de dados:
            </strong>{" "}
            JS AR Central
          </li>
        </ul>
      </>
    ),
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="font-mono text-xs font-medium tracking-widest text-brand">
          LGPD
        </div>
        <h1 className="font-editorial mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-gray-400">Última atualização: 29 de julho de 2026</p>

        <p className="mt-8 text-sm leading-relaxed text-gray-600">
          A JS AR Central (&ldquo;nós&rdquo;) respeita a sua privacidade e está comprometida
          em proteger os dados pessoais dos visitantes e clientes que utilizam este site
          (jsarcentral.com.br). Esta Política de Privacidade explica quais dados coletamos,
          como os utilizamos e quais são os seus direitos, em conformidade com a Lei Geral
          de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
        </p>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-gray-200 pt-8">
              <h2 className="font-editorial text-xl font-bold text-gray-900">{s.title}</h2>
              <div className="mt-3 text-sm leading-relaxed text-gray-600">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
