import { FaWhatsapp } from 'react-icons/fa6';
import { gerarLinkWhatsApp } from '../../utils/whatsapp.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={gerarLinkWhatsApp()}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
