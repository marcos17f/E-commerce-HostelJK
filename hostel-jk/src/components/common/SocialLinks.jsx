import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { site } from '../../config/site.js';
import { gerarLinkWhatsApp } from '../../utils/whatsapp.js';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={site.instagram.url}
        className="social-links__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram do Hostel JK"
      >
        <FaInstagram />
      </a>
      <a
        href={gerarLinkWhatsApp()}
        className="social-links__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp do Hostel JK"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
