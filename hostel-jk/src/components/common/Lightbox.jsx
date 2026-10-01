import { useEffect } from 'react';
import { FaXmark, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Picture from '../ui/Picture.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.js';

export default function Lightbox({ fotos, indiceAtual, onClose, onPrev, onNext }) {
  useScrollLock();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const item = fotos[indiceAtual];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos">
      <div className="lightbox__backdrop" onClick={onClose} />

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--prev"
        aria-label="Foto anterior"
        onClick={onPrev}
      >
        <FaChevronLeft />
      </button>

      <div className="lightbox__content">
        <button type="button" className="lightbox__close" aria-label="Fechar" onClick={onClose}>
          <FaXmark />
        </button>
        <Picture
          key={item.foto}
          foto={item.foto}
          alt={item.legenda}
          className="lightbox__image"
          sizes="90vw"
          loading="eager"
        />
      </div>

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--next"
        aria-label="Próxima foto"
        onClick={onNext}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
