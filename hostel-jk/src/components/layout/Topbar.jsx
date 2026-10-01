import { site } from '../../config/site.js';
import Container from '../ui/Container.jsx';

export default function Topbar() {
  return (
    <div className="topbar">
      <Container>
        <div className="topbar__inner">
          <span>{site.endereco.enderecoCompleto}</span>
          <span className="topbar__divider">•</span>
          <span>{site.telefone.exibicao}</span>
        </div>
      </Container>
    </div>
  );
}
