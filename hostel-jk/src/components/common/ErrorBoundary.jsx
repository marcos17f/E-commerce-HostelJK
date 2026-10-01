import { Component } from 'react';
import ErrorScreen from './ErrorScreen.jsx';
import { reportarErro } from '../../monitoring/sentry.js';

export default class ErrorBoundary extends Component {
  state = { comErro: false };

  static getDerivedStateFromError() {
    return { comErro: true };
  }

  componentDidCatch(erro, info) {
    reportarErro(erro, { componentStack: info.componentStack });
  }

  render() {
    return this.state.comErro ? <ErrorScreen /> : this.props.children;
  }
}
