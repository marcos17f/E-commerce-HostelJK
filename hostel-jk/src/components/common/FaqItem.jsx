import { FaPlus } from 'react-icons/fa6';
import { cx } from '../../utils/cx.js';

export default function FaqItem({ pergunta, resposta, aberto, onToggle }) {
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-item__question"
        aria-expanded={aberto}
        onClick={onToggle}
      >
        <span>{pergunta}</span>
        <FaPlus className={cx('faq-item__icon', aberto && 'faq-item__icon--open')} aria-hidden="true" />
      </button>

      <div className={cx('faq-item__answer', aberto && 'faq-item__answer--open')}>
        <p className="faq-item__answer-text">{resposta}</p>
      </div>
    </div>
  );
}
