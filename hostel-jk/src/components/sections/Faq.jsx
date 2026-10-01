import { useState } from 'react';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import Container from '../ui/Container.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import EmptyState from '../ui/EmptyState.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import FaqItem from '../common/FaqItem.jsx';
import Reveal from '../ui/Reveal.jsx';
import { faq } from '../../data/conteudo.js';

export default function Faq() {
  const [abertoId, setAbertoId] = useState(null);

  const alternar = (id) => {
    setAbertoId((atual) => (atual === id ? null : id));
  };

  return (
    <section className="faq" id="duvidas">
      <Container>
        <SectionTitle eyebrow="Dúvidas" heading="Perguntas frequentes" />

        {faq.length === 0 ? (
          <EmptyState
            icone={FaRegCircleQuestion}
            titulo="Ficou com alguma dúvida?"
            descricao="Chama a gente no WhatsApp que respondemos rapidinho."
          >
            <WhatsAppButton mensagem="Olá! Tenho uma dúvida sobre o Hostel JK.">Tirar dúvida no WhatsApp</WhatsAppButton>
          </EmptyState>
        ) : (
          <Reveal>
            <div className="faq__list">
              {faq.map((item) => (
                <FaqItem
                  key={item.id}
                  pergunta={item.pergunta}
                  resposta={item.resposta}
                  aberto={abertoId === item.id}
                  onToggle={() => alternar(item.id)}
                />
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
