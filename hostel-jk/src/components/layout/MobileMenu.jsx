import { useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { site } from '../../config/site.js';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.js';

export default function MobileMenu({ onClose }) {
  const drawerRef = useRef(null);

  useScrollLock();

  useEffect(() => {
    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll('a[href], button:not([disabled])');
    focusable[0]?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div className="mobile-menu__overlay" onClick={onClose} />
      <div ref={drawerRef} className="mobile-menu__drawer" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu__header">
          <span>Menu</span>
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Fechar menu"
            aria-expanded="true"
            onClick={onClose}
          >
            <FaXmark />
          </button>
        </div>

        <ul className="mobile-menu__list">
          {site.menu.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="mobile-menu__link" onClick={onClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <WhatsAppButton>Reservar no WhatsApp</WhatsAppButton>
      </div>
    </>
  );
}
