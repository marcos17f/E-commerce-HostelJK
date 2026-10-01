import { useEffect, useRef, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import { cx } from '../../utils/cx.js';

export default function ScrollToTopButton() {
  const [visivel, setVisivel] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setVisivel(window.scrollY > 480);
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={cx('scroll-top', visivel && 'scroll-top--visible')}
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  );
}
