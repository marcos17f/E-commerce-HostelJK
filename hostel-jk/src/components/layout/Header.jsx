import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import Container from '../ui/Container.jsx';
import Logo from '../ui/Logo.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import NavMenu from './NavMenu.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <button
            type="button"
            className="header__toggle"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(true)}
          >
            <FaBars />
          </button>

          <a href="/#topo" className="header__logo" aria-label="Hostel JK, ir para o topo">
            <Logo />
          </a>

          <NavMenu />

          <div className="header__actions">
            <WhatsAppButton>Reservar no WhatsApp</WhatsAppButton>
          </div>
        </div>
      </Container>

      {menuAberto && <MobileMenu onClose={() => setMenuAberto(false)} />}
    </header>
  );
}
