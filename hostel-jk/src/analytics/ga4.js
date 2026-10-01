import { env } from '../config/env.js';

let carregado = false;

function gtag() {
  window.dataLayer.push(arguments);
}

function registrarCliqueWhatsApp(evento) {
  const link = evento.target.closest?.('a[href^="https://wa.me/"]');
  if (link) gtag('event', 'generate_lead', { method: 'whatsapp' });
}

function apagarCookiesDoAnalytics() {
  const partes = window.location.hostname.split('.');
  const dominios = ['', ...partes.map((_, i) => `.${partes.slice(i).join('.')}`)];

  document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((nome) => nome === '_ga' || nome.startsWith('_ga_') || nome === '_gid')
    .forEach((nome) => {
      dominios.forEach((dominio) => {
        const alvo = dominio ? `; domain=${dominio}` : '';
        document.cookie = `${nome}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${alvo}`;
      });
    });
}

// Só é chamada depois que o visitante clica em "Aceitar".
export function ativarAnalytics() {
  if (!env.gaId) return;

  window[`ga-disable-${env.gaId}`] = false;
  window.dataLayer = window.dataLayer || [];
  document.addEventListener('click', registrarCliqueWhatsApp);

  if (carregado) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  carregado = true;

  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('js', new Date());
  gtag('config', env.gaId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${env.gaId}`;
  document.head.appendChild(script);
}

export function desativarAnalytics() {
  if (!env.gaId) return;

  window[`ga-disable-${env.gaId}`] = true;
  if (carregado) {
    gtag('consent', 'update', { analytics_storage: 'denied' });
    document.removeEventListener('click', registrarCliqueWhatsApp);
  }
  apagarCookiesDoAnalytics();
}
