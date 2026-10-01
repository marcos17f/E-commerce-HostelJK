import Card from '../ui/Card.jsx';
import Icon from '../ui/Icon.jsx';

export default function AudienceCard({ publico }) {
  const { icone, titulo, descricao } = publico;

  return (
    <Card className="audience-card">
      <span className="audience-card__icon">
        <Icon icon={icone} size={26} />
      </span>
      <h3 className="audience-card__title">{titulo}</h3>
      <p className="audience-card__desc">{descricao}</p>
    </Card>
  );
}
