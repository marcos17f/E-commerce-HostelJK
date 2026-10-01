import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import AudienceCard from '../common/AudienceCard.jsx';
import Reveal from '../ui/Reveal.jsx';
import { publicos } from '../../data/conteudo.js';

export default function ForWhom() {
  if (publicos.length === 0) return null;

  return (
    <section className="for-whom" id="o-hostel">
      <Container>
        <SectionTitle eyebrow="Pra você" heading="Seja a trabalho, estudo ou descanso" />

        <div className="for-whom__grid">
          {publicos.map((publico) => (
            <Reveal key={publico.id}>
              <AudienceCard publico={publico} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
