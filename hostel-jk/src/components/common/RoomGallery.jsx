import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Picture from '../ui/Picture.jsx';
import { useCarouselIndex } from '../../hooks/useCarouselIndex.js';
import { cx } from '../../utils/cx.js';

export default function RoomGallery({ fotos, nome }) {
  const { index, prev, next } = useCarouselIndex(fotos.length);

  return (
    <div className="room-gallery">
      <div
        className="room-gallery__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {fotos.map((foto, i) => (
          <Picture
            key={foto}
            foto={foto}
            alt={`${nome} - foto ${i + 1}`}
            className="room-gallery__image u-warm-photo"
            sizes="(min-width: 760px) 545px, calc(100vw - 96px)"
          />
        ))}
      </div>

      {fotos.length > 1 && (
        <>
          <button
            type="button"
            className="room-gallery__arrow room-gallery__arrow--prev"
            aria-label="Foto anterior"
            onClick={prev}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="room-gallery__arrow room-gallery__arrow--next"
            aria-label="Próxima foto"
            onClick={next}
          >
            <FaChevronRight />
          </button>

          <div className="room-gallery__dots">
            {fotos.map((foto, i) => (
              <span key={foto} className={cx('room-gallery__dot', i === index && 'room-gallery__dot--active')} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
