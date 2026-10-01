import Icon from '../ui/Icon.jsx';

export default function BenefitItem({ icone, titulo }) {
  return (
    <div className="benefit-item">
      <span className="benefit-item__icon-wrap">
        <Icon icon={icone} size={22} />
      </span>
      <span className="benefit-item__title">{titulo}</span>
    </div>
  );
}
