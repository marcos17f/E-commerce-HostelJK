import Card from '../ui/Card.jsx';
import Icon from '../ui/Icon.jsx';

export default function AmenityCard({ comodidade }) {
  const { icone, titulo, descricao } = comodidade;

  return (
    <Card className="amenity-card">
      <div className="amenity-card__icon">
        <Icon icon={icone} size={24} />
      </div>
      <h3 className="amenity-card__title">{titulo}</h3>
      <p className="amenity-card__desc">{descricao}</p>
    </Card>
  );
}
