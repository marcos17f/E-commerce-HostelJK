import { FaInstagram } from 'react-icons/fa6';
import { site } from '../../config/site.js';
import Button from '../ui/Button.jsx';

export default function InstagramCta() {
  return (
    <div className="instagram-cta">
      <p className="u-text-muted">Quer ver mais do dia a dia do hostel?</p>
      <span className="instagram-cta__handle">{site.instagram.usuario}</span>
      <Button href={site.instagram.url} variant="outline" target="_blank" rel="noopener noreferrer">
        <FaInstagram aria-hidden="true" /> Seguir no Instagram
      </Button>
    </div>
  );
}
