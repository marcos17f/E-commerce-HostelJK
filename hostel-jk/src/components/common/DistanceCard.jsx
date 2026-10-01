import Card from '../ui/Card.jsx';
import Icon from '../ui/Icon.jsx';

export default function DistanceCard({ item }) {
  const { icone, titulo, distancia, tempo } = item;

  return (
    <Card className="distance-card">
      <span className="distance-card__icon">
        <Icon icon={icone} size={18} />
      </span>
      <div>
        <p className="distance-card__title">{titulo}</p>
        <p className="distance-card__meta">
          {distancia} · {tempo}
        </p>
      </div>
    </Card>
  );
}
