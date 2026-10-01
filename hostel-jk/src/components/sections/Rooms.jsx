import { useState } from 'react';
import { FaBed } from 'react-icons/fa6';
import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import EmptyState from '../ui/EmptyState.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import RoomCard from '../common/RoomCard.jsx';
import Reveal from '../ui/Reveal.jsx';
import { cx } from '../../utils/cx.js';
import { quartos } from '../../data/quartos.js';

export default function Rooms() {
  const [ativoId, setAtivoId] = useState(quartos[0]?.id);
  const quartoAtivo = quartos.find((quarto) => quarto.id === ativoId) ?? quartos[0];

  return (
    <section className="rooms" id="quartos">
      <Container>
        <SectionTitle eyebrow="Acomodações" heading="Conheça o hostel" />

        {!quartoAtivo ? (
          <EmptyState
            icone={FaBed}
            titulo="Estamos atualizando os quartos"
            descricao="A lista de acomodações volta em breve. Enquanto isso, consulte a disponibilidade direto com a gente."
          >
            <WhatsAppButton>Consultar no WhatsApp</WhatsAppButton>
          </EmptyState>
        ) : (
          <>
            <div className="rooms__tabs" role="tablist" aria-label="Tipos de quarto">
              {quartos.map((quarto) => (
                <button
                  key={quarto.id}
                  type="button"
                  role="tab"
                  aria-selected={quarto.id === ativoId}
                  className={cx('rooms__tab', quarto.id === ativoId && 'rooms__tab--active')}
                  onClick={() => setAtivoId(quarto.id)}
                >
                  <span className="rooms__tab-number">{quarto.numero}</span>
                  <span className="rooms__tab-label">{quarto.nome}</span>
                </button>
              ))}
            </div>

            <Reveal key={quartoAtivo.id}>
              <RoomCard quarto={quartoAtivo} />
            </Reveal>
          </>
        )}
      </Container>
    </section>
  );
}
