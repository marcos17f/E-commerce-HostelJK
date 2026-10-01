import { useEffect, useState } from 'react';
import Button from '../ui/Button.jsx';
import { site } from '../../config/site.js';
import { ativarAnalytics, desativarAnalytics } from '../../analytics/ga4.js';
import {
  EVENTO_ABRIR_PREFERENCIAS,
  lerConsentimento,
  salvarConsentimento,
} from '../../analytics/consentimento.js';

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const escolha = lerConsentimento();
    if (escolha === 'aceito') ativarAnalytics();
    if (!escolha) setVisivel(true);

    const abrir = () => setVisivel(true);
    window.addEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR_PREFERENCIAS, abrir);
  }, []);

  const escolher = (escolha) => {
    salvarConsentimento(escolha);
    if (escolha === 'aceito') ativarAnalytics();
    else desativarAnalytics();
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <section className="cookie-banner" aria-label="Aviso de cookies">
      <div className="cookie-banner__text">
        <p className="cookie-banner__title">A gente usa cookies</p>
        <p>
          Com a sua permissão, usamos cookies de análise (Google Analytics) para melhorar o site. Você pode recusar
          e mudar de ideia quando quiser.{' '}
          <a href={site.paginas.privacidade} className="cookie-banner__link">
            Política de Privacidade
          </a>
        </p>
      </div>

      <div className="cookie-banner__actions">
        <Button variant="outline" onClick={() => escolher('recusado')}>
          Recusar
        </Button>
        <Button onClick={() => escolher('aceito')}>Aceitar</Button>
      </div>
    </section>
  );
}
