import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/common/ErrorBoundary.jsx';
import { iniciarMonitoramento } from './monitoring/sentry.js';
import './styles/index.css';

// Ponto comum de montagem de todas as páginas (home e política de privacidade).
export function montarPagina(Pagina) {
  iniciarMonitoramento();

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ErrorBoundary>
        <Pagina />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
