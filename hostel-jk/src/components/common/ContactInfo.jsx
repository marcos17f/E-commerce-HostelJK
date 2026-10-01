import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { site } from '../../config/site.js';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <span className="contact-info__row">
        <FaLocationDot aria-hidden="true" className="u-text-gold" />
        {site.endereco.enderecoCompleto}
      </span>
      <a href={`tel:${site.telefone.e164}`} className="contact-info__row contact-info__row--link">
        <FaPhone aria-hidden="true" className="u-text-gold" />
        {site.telefone.exibicao}
      </a>
    </div>
  );
}
