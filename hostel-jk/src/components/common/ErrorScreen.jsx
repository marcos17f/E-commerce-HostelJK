import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import { gerarLinkWhatsApp } from '../../utils/whatsapp.js';

// Mesma cara da 500.html, para quando o erro acontece dentro do app.
export default function ErrorScreen() {
  return (
    <main className="error-page" role="alert">
      <a href="/" className="error-page__logo" aria-label="Hostel JK, ir para a página inicial">
        <Logo />
      </a>

      <h1 className="error-page__title">Algo deu errado por aqui</h1>
      <p className="error-page__text">
        Tivemos um problema para carregar esta página. Tente de novo em instantes. Se preferir, chama a gente no
        WhatsApp que a reserva sai do mesmo jeito.
      </p>

      <div className="error-page__actions">
        <Button onClick={() => window.location.reload()}>Tentar novamente</Button>
        <Button href={gerarLinkWhatsApp()} variant="outline" target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </Button>
      </div>
    </main>
  );
}
