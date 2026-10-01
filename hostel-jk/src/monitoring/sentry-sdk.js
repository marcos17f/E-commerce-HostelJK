// Reexporta só o que usamos do Sentry, para o chunk carregado sob demanda ficar pequeno.
export { init, captureException } from '@sentry/react';
