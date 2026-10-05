import Card from '../ui/Card.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import RoomFeatureList from './RoomFeatureList.jsx';
import RoomGallery from './RoomGallery.jsx';
import { mensagemParaQuarto } from '../../utils/whatsapp.js';

export default function RoomCard({ quarto }) {
  return (
    <Card className="room-card">
      <div className="room-card__grid">
        <RoomGallery fotos={quarto.fotos} nome={quarto.nome} />

        <div>
          <div className="room-card__header">
            <span className="room-card__number">{quarto.numero}</span>
            <h3 className="room-card__title">{quarto.nome}</h3>
          </div>

          <p className="room-card__desc">{quarto.descricao}</p>

          <RoomFeatureList itens={quarto.itens} />

          <div className="room-card__footer">
            <WhatsAppButton mensagem={mensagemParaQuarto(quarto.nome)}>
              Reservar
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
