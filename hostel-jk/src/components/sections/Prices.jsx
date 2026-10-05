import { useState } from 'react';
import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Reveal from '../ui/Reveal.jsx';
import { cx } from '../../utils/cx.js';
import { diarias, grupoApartirDe } from '../../data/precos.js';
import { mensagemParaDiaria, mensagemParaGrupo } from '../../utils/whatsapp.js';

const rotuloPessoas = (pessoas) => `${pessoas} ${pessoas === 1 ? 'pessoa' : 'pessoas'}`;

export default function Prices() {
  const [selecionado, setSelecionado] = useState(diarias[0]?.pessoas);

  if (diarias.length === 0) return null;

  const diaria = diarias.find((item) => item.pessoas === selecionado);
  const ehGrupo = !diaria;

  return (
    <section className="prices" id="precos">
      <Container>
        <SectionTitle
          eyebrow="Diárias"
          heading="Quanto custa ficar no JK"
          subtitle="Escolha quantas pessoas vão se hospedar e reserve pelo WhatsApp."
        />

        <div className="prices__grid" role="group" aria-label="Número de hóspedes">
          {diarias.map((item) => (
            <Reveal key={item.pessoas}>
              <button
                type="button"
                aria-pressed={item.pessoas === selecionado}
                className={cx('card price-card', item.pessoas === selecionado && 'price-card--active')}
                onClick={() => setSelecionado(item.pessoas)}
              >
                <span className="price-card__people">{rotuloPessoas(item.pessoas)}</span>
                <span className="price-card__value">R$ {item.valor}</span>
                <span className="price-card__unit">a diária</span>
              </button>
            </Reveal>
          ))}

          <Reveal className="prices__grid-full">
            <button
              type="button"
              aria-pressed={ehGrupo}
              className={cx('card price-card', ehGrupo && 'price-card--active')}
              onClick={() => setSelecionado(grupoApartirDe)}
            >
              <span className="price-card__people">{grupoApartirDe} pessoas ou mais</span>
              <span className="price-card__value">Sob consulta</span>
              <span className="price-card__unit">valor combinado com o gerente</span>
            </button>
          </Reveal>
        </div>

        <div className="prices__cta">
          <p className="prices__cta-text" aria-live="polite">
            {ehGrupo
              ? `A partir de ${grupoApartirDe} pessoas, fale com o gerente para combinar o valor.`
              : `${rotuloPessoas(diaria.pessoas)}: R$ ${diaria.valor} a diária.`}
          </p>
          <WhatsAppButton
            mensagem={
              ehGrupo ? mensagemParaGrupo(grupoApartirDe) : mensagemParaDiaria(rotuloPessoas(diaria.pessoas), diaria.valor)
            }
          >
            {ehGrupo ? 'Falar com o gerente' : `Reservar para ${rotuloPessoas(diaria.pessoas)}`}
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
