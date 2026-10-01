import Container from '../ui/Container.jsx';
import ScriptText from '../ui/ScriptText.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <Container>
        <Reveal>
          <h2 className="final-cta__title">Aqui você encontra o descanso que precisa</h2>
          <ScriptText as="p" className="final-cta__sub">
            Faça sua reserva 👇
          </ScriptText>
          <div className="final-cta__action">
            <WhatsAppButton>Reservar agora no WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
