import Topbar from '../components/layout/Topbar.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp.jsx';
import CookieBanner from '../components/layout/CookieBanner.jsx';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import { site } from '../config/site.js';
import { gerarLinkWhatsApp } from '../utils/whatsapp.js';
import { abrirPreferenciasDeCookies } from '../analytics/consentimento.js';

const ATUALIZADA_EM = '1º de outubro de 2026';

const cookies = [
  {
    nome: 'hosteljk:consentimento-cookies',
    tipo: 'Necessário (armazenamento local)',
    finalidade: 'Lembrar se você aceitou ou recusou os cookies de análise.',
    duracao: '6 meses',
  },
  {
    nome: '_ga',
    tipo: 'Análise (Google Analytics)',
    finalidade: 'Distinguir visitantes de forma anônima para gerar estatísticas de uso.',
    duracao: '2 anos',
  },
  {
    nome: '_ga_<ID>',
    tipo: 'Análise (Google Analytics)',
    finalidade: 'Manter o estado da sessão de navegação.',
    duracao: '2 anos',
  },
];

export default function PrivacyPolicy() {
  const linkContato = gerarLinkWhatsApp('Olá! Tenho uma dúvida sobre privacidade e uso dos meus dados no site do Hostel JK.');
  const { razaoSocial, cnpj, emailPrivacidade } = site.empresa;

  return (
    <>
      <Topbar />
      <Header />
      <main className="legal">
        <Container>
          <article className="legal__content">
            <header className="legal__header">
              <span className="section-title__eyebrow">Privacidade</span>
              <h1 className="legal__title">Política de Privacidade e Cookies</h1>
              <p className="legal__updated">Última atualização: {ATUALIZADA_EM}</p>
            </header>

            <p>
              Esta política explica, de forma direta, quais dados o site do {site.nome} trata, para que servem e quais
              são os seus direitos, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>

            <h2>1. Quem é o responsável</h2>
            <p>
              O responsável pelo tratamento dos dados (controlador) é o <strong>{razaoSocial || site.nome}</strong>
              {cnpj && <>, CNPJ {cnpj}</>}, localizado na {site.endereco.enderecoCompleto}, CEP {site.endereco.cep}.
            </p>
            <p>
              Para qualquer assunto sobre privacidade, fale com a gente pelo{' '}
              <a href={linkContato} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.telefone.exibicao}
              </a>
              {emailPrivacidade && (
                <>
                  {' '}
                  ou pelo e-mail <a href={`mailto:${emailPrivacidade}`}>{emailPrivacidade}</a>
                </>
              )}
              .
            </p>

            <h2>2. Quais dados tratamos</h2>
            <ul>
              <li>
                <strong>Contato pelo WhatsApp.</strong> O site não tem cadastro nem formulário. Ao clicar em um botão de
                reserva, você é levado ao WhatsApp e passa a conversar diretamente com a gente. Nessa conversa recebemos
                seu nome, número de telefone e o que você escrever. Usamos essas informações só para atender, orçar e
                confirmar a sua reserva.
              </li>
              <li>
                <strong>Dados de navegação (somente se você aceitar).</strong> Com o seu consentimento, o Google Analytics
                registra informações como páginas visitadas, tempo de visita, tipo de aparelho e navegador, cidade
                aproximada e cliques nos botões de reserva. Não usamos esses dados para identificar você.
              </li>
              <li>
                <strong>Dados técnicos.</strong> Como em todo site, o serviço de hospedagem registra endereço IP, data e
                hora de acesso por segurança. Se ocorrer um erro técnico, uma ferramenta de monitoramento pode registrar
                o tipo de navegador, a página e a descrição do erro para que possamos corrigir.
              </li>
              <li>
                <strong>Mapa.</strong> A seção “Onde fica” exibe um mapa do Google Maps. Ao carregá-lo, o Google pode
                coletar seu endereço IP e usar cookies próprios, conforme a política de privacidade do Google.
              </li>
            </ul>

            <h2>3. Para que usamos e com qual base legal</h2>
            <ul>
              <li>
                <strong>Atender e reservar</strong>: procedimentos preliminares e execução de contrato (art. 7º, V, da
                LGPD).
              </li>
              <li>
                <strong>Estatísticas de uso do site</strong>: seu consentimento (art. 7º, I), dado no aviso de cookies e
                revogável a qualquer momento.
              </li>
              <li>
                <strong>Segurança e correção de erros</strong>: legítimo interesse (art. 7º, IX).
              </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
              Cookies são pequenos arquivos guardados no seu navegador. Os cookies de análise só são ativados depois
              que você clica em “Aceitar”. Se recusar, o site funciona normalmente.
            </p>

            <div className="legal__table-wrap">
              <table className="legal__table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Finalidade</th>
                    <th scope="col">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((cookie) => (
                    <tr key={cookie.nome}>
                      <td>
                        <code>{cookie.nome}</code>
                      </td>
                      <td>{cookie.tipo}</td>
                      <td>{cookie.finalidade}</td>
                      <td>{cookie.duracao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>Você pode mudar a sua escolha quando quiser:</p>
            <Button variant="outline" onClick={abrirPreferenciasDeCookies}>
              Alterar preferências de cookies
            </Button>

            <h2>5. Com quem compartilhamos</h2>
            <p>
              Não vendemos dados. Eles só passam por fornecedores que fazem o site e o atendimento funcionarem: Google
              (Analytics e Maps), WhatsApp/Meta (conversas), o serviço de hospedagem do site e a ferramenta de
              monitoramento de erros. Alguns desses fornecedores processam dados fora do Brasil, seguindo as garantias
              previstas na LGPD.
            </p>

            <h2>6. Por quanto tempo guardamos</h2>
            <p>
              As conversas de reserva ficam guardadas pelo tempo necessário para o atendimento e para cumprir
              obrigações legais. Os dados do Google Analytics são mantidos por até 14 meses. Registros técnicos são
              apagados periodicamente.
            </p>

            <h2>7. Seus direitos</h2>
            <p>
              Você pode, a qualquer momento, pedir a confirmação e o acesso aos seus dados, a correção, a exclusão, a
              portabilidade, informações sobre compartilhamento e a revogação do consentimento (art. 18 da LGPD). É só
              chamar pelo{' '}
              <a href={linkContato} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              . Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
            </p>

            <h2>8. Alterações nesta política</h2>
            <p>
              Podemos atualizar este texto quando o site mudar. A data no topo da página indica a versão mais recente.
            </p>

            <p className="legal__back">
              <Button href={site.paginas.home}>Voltar para a página inicial</Button>
            </p>
          </article>
        </Container>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}
