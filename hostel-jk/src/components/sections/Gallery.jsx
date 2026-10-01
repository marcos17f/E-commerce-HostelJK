import { useCallback, useState } from 'react';
import { FaImages } from 'react-icons/fa6';
import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import EmptyState from '../ui/EmptyState.jsx';
import GalleryItem from '../common/GalleryItem.jsx';
import Lightbox from '../common/Lightbox.jsx';
import InstagramCta from '../common/InstagramCta.jsx';
import Reveal from '../ui/Reveal.jsx';
import { useCarouselIndex } from '../../hooks/useCarouselIndex.js';
import { galeria } from '../../data/conteudo.js';

export default function Gallery() {
  const [aberto, setAberto] = useState(false);
  const { index, prev, next, goTo } = useCarouselIndex(galeria.length);

  const abrir = (i) => {
    goTo(i);
    setAberto(true);
  };

  const fechar = useCallback(() => setAberto(false), []);

  return (
    <section className="gallery" id="galeria">
      <Container>
        <SectionTitle eyebrow="Instagram" heading="Momentos no Hostel JK" />

        {galeria.length === 0 ? (
          <EmptyState
            icone={FaImages}
            titulo="As fotos estão a caminho"
            descricao="Ainda não temos fotos por aqui. Dá uma olhada no nosso Instagram pra ver o hostel por dentro."
          />
        ) : (
          <Reveal>
            <div className="gallery__grid">
              {galeria.map((item, i) => (
                <GalleryItem key={item.id} foto={item.foto} legenda={item.legenda} onClick={() => abrir(i)} />
              ))}
            </div>
          </Reveal>
        )}

        <InstagramCta />
      </Container>

      {aberto && galeria[index] && (
        <Lightbox fotos={galeria} indiceAtual={index} onClose={fechar} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
