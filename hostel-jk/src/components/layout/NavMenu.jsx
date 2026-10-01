import { site } from '../../config/site.js';

export default function NavMenu() {
  return (
    <nav className="nav-menu" aria-label="Menu principal">
      <ul className="nav-menu__list">
        {site.menu.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav-menu__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
