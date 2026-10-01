import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import MapEmbed from '../common/MapEmbed.jsx';
import DistanceCard from '../common/DistanceCard.jsx';
import Reveal from '../ui/Reveal.jsx';
import { distancias } from '../../data/conteudo.js';

export default function Location() {
  return (
    <section className="location" id="onde-fica">
      <Container>
        <SectionTitle eyebrow="Localização" heading="Pertinho de tudo" />

        <div className="location__grid">
          <Reveal>
            <MapEmbed />
          </Reveal>

          <div className="location__distances">
            {distancias.map((distancia) => (
              <Reveal key={distancia.id}>
                <DistanceCard item={distancia} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
