import { env } from '../config/env.js';

let sdk = null;
const fila = [];

function enfileirarErro(evento) {
  fila.push([evento.error ?? evento.reason ?? new Error(evento.message ?? 'Erro desconhecido'), {}]);
}

async function carregarSentry() {
  try {
    const Sentry = await import('./sentry-sdk.js');
    Sentry.init({
      dsn: env.sentryDsn,
      environment: import.meta.env.MODE,
      sendDefaultPii: false,
      tracesSampleRate: 0,
    });
    sdk = Sentry;

    // A partir daqui o próprio Sentry captura os erros globais.
    window.removeEventListener('error', enfileirarErro);
    window.removeEventListener('unhandledrejection', enfileirarErro);
    fila.splice(0).forEach(([erro, contexto]) => Sentry.captureException(erro, { extra: contexto }));
  } catch {
    // Bloqueador de anúncios ou falha de rede: o site segue funcionando sem o monitoramento.
  }
}

// Monitoramento de erros. Só roda em produção e com VITE_SENTRY_DSN definida;
// o SDK é baixado depois que a página fica ociosa, para não competir com o conteúdo.
export function iniciarMonitoramento() {
  if (!env.producao || !env.sentryDsn) return;

  window.addEventListener('error', enfileirarErro);
  window.addEventListener('unhandledrejection', enfileirarErro);

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(carregarSentry, { timeout: 4000 });
  } else {
    window.setTimeout(carregarSentry, 2000);
  }
}

export function reportarErro(erro, contexto = {}) {
  console.error(erro);
  if (!env.producao || !env.sentryDsn) return;

  if (sdk) sdk.captureException(erro, { extra: contexto });
  else fila.push([erro, contexto]);
}
