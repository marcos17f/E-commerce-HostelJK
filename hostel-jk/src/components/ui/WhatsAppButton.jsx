import { FaWhatsapp } from 'react-icons/fa6';
import { gerarLinkWhatsApp } from '../../utils/whatsapp.js';
import { cx } from '../../utils/cx.js';

export default function WhatsAppButton({ mensagem, children, size = 'md', className = '' }) {
  const classes = cx('whatsapp-button', size === 'sm' && 'whatsapp-button--sm', className);

  return (
    <a
      href={gerarLinkWhatsApp(mensagem)}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}
