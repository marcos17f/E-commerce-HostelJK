import { cx } from '../../utils/cx.js';

export default function PriceSeal({ valor, label = 'A partir de', className = '' }) {
  return (
    <div className={cx('price-seal', className)} role="img" aria-label={`${label} R$ ${valor} a diária`}>
      <span className="price-seal__label">{label}</span>
      <span className="price-seal__value">R$ {valor}</span>
      <span className="price-seal__cents">a diária</span>
    </div>
  );
}
