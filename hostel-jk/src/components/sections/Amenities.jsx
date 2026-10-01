import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import AmenityCard from '../common/AmenityCard.jsx';
import Reveal from '../ui/Reveal.jsx';
import { comodidades } from '../../data/conteudo.js';

export default function Amenities() {
  if (comodidades.length === 0) return null;

  return (
    <section className="amenities" id="comodidades">
      <Container>
        <SectionTitle eyebrow="Estrutura" heading="O que você encontra no JK" />

        <div className="amenities__grid">
          {comodidades.map((item) => (
            <Reveal key={item.id}>
              <AmenityCard comodidade={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
