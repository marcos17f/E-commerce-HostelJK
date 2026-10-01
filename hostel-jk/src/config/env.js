// Variáveis de ambiente públicas (prefixo VITE_). Veja o .env.example.
// Valores vazios ou ainda com o placeholder (XXXX) são tratados como "não configurado".
function lerVariavel(valor, formato) {
  const texto = (valor ?? '').trim();
  if (!texto || texto.includes('XXXX')) return null;
  return formato.test(texto) ? texto : null;
}

export const env = {
  gaId: lerVariavel(import.meta.env.VITE_GA_MEASUREMENT_ID, /^G-[A-Z0-9]{6,}$/),
  sentryDsn: lerVariavel(import.meta.env.VITE_SENTRY_DSN, /^https:\/\/.+@.+\/\d+$/),
  producao: import.meta.env.PROD,
};
