import { site } from '../../config/site.js';
import Container from '../ui/Container.jsx';
import Logo from '../ui/Logo.jsx';
import SocialLinks from '../common/SocialLinks.jsx';
import ContactInfo from '../common/ContactInfo.jsx';
import { abrirPreferenciasDeCookies } from '../../analytics/consentimento.js';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__col">
            <Logo />
            <p className="u-text-muted">{site.slogan}</p>
          </div>

          <div className="footer__col footer__col--nav">
            <span className="footer__col-title">Navegação</span>
            {site.menu.map((item) => (
              <a key={item.href} href={item.href} className="footer__nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Contato</span>
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>

        <div className="footer__credit">
          <div className="footer__legal">
            <a href={site.paginas.privacidade} className="footer__nav-link">
              Política de Privacidade
            </a>
            <button type="button" className="footer__nav-link" onClick={abrirPreferenciasDeCookies}>
              Preferências de cookies
            </button>
          </div>
          <p>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
          <p>
            <a href={site.credito.url} target="_blank" rel="noopener noreferrer">
              <strong>{site.credito.texto}</strong> · {site.credito.telefone}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
