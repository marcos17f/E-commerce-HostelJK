import Container from '../ui/Container.jsx';
import BenefitItem from '../common/BenefitItem.jsx';
import Reveal from '../ui/Reveal.jsx';
import { beneficios } from '../../data/conteudo.js';

export default function Benefits() {
  if (beneficios.length === 0) return null;

  return (
    <section className="benefits">
      <Container>
        <Reveal>
          <div className="benefits__list">
            {beneficios.map((beneficio) => (
              <BenefitItem key={beneficio.id} icone={beneficio.icone} titulo={beneficio.titulo} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
