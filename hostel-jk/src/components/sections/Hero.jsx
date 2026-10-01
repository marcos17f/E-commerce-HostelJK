import Container from '../ui/Container.jsx';
import ScriptText from '../ui/ScriptText.jsx';
import PriceSeal from '../ui/PriceSeal.jsx';
import Button from '../ui/Button.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Badge from '../ui/Badge.jsx';
import Picture from '../ui/Picture.jsx';
import { site } from '../../config/site.js';
import { capa } from '../../utils/imagens.js';

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero__media">
        <Picture
          foto={capa.foto}
          retrato={{ foto: capa.fotoRetrato, media: capa.mediaRetrato, sizes: capa.sizesRetrato }}
          sizes={capa.sizes}
          alt={`Fachada do ${site.nome}`}
          className="u-warm-photo"
          loading="eager"
          prioridade="high"
          esqueleto={false}
        />
      </div>
      <div className="hero__overlay" />

      <Container>
        <div className="hero__content">
          <Badge className="hero__badge">{site.instagram.usuario}</Badge>

          <h1 className="hero__title">
            Seu melhor lugar <span>todos os dias</span>
          </h1>

          <ScriptText className="hero__script">É um lugar pra você se sentir bem!</ScriptText>

          <PriceSeal valor={site.precoApartir} className="hero__seal" />

          <div className="hero__actions">
            <WhatsAppButton>Faça sua reserva</WhatsAppButton>
            <Button href="#quartos" variant="outline">
              Ver quartos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
