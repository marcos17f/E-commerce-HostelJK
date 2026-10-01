// Guarda a escolha de cookies do visitante (LGPD). Nada de análise carrega antes do "Aceitar".
const CHAVE = 'hosteljk:consentimento-cookies';
const VERSAO = 1;
const VALIDADE_MS = 1000 * 60 * 60 * 24 * 180; // pergunta de novo a cada 6 meses

export const EVENTO_CONSENTIMENTO = 'hosteljk:consentimento';
export const EVENTO_ABRIR_PREFERENCIAS = 'hosteljk:abrir-preferencias-cookies';

// Retorna 'aceito', 'recusado' ou null (ainda não escolheu / escolha expirada).
export function lerConsentimento() {
  try {
    const salvo = JSON.parse(window.localStorage.getItem(CHAVE));
    if (!salvo || salvo.versao !== VERSAO) return null;
    if (Date.now() - salvo.data > VALIDADE_MS) return null;
    return salvo.escolha === 'aceito' || salvo.escolha === 'recusado' ? salvo.escolha : null;
  } catch {
    return null;
  }
}

export function salvarConsentimento(escolha) {
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify({ versao: VERSAO, escolha, data: Date.now() }));
  } catch {
    // Navegação privada ou armazenamento bloqueado: a escolha vale só para esta visita.
  }
  window.dispatchEvent(new CustomEvent(EVENTO_CONSENTIMENTO, { detail: escolha }));
}

export function abrirPreferenciasDeCookies() {
  window.dispatchEvent(new Event(EVENTO_ABRIR_PREFERENCIAS));
}
