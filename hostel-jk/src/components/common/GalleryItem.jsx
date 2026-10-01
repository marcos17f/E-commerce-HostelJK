import Picture from '../ui/Picture.jsx';

export default function GalleryItem({ foto, legenda, onClick }) {
  return (
    <button
      type="button"
      className="gallery-item"
      onClick={onClick}
      aria-label={`Ver foto: ${legenda}`}
    >
      <Picture
        foto={foto}
        alt={legenda}
        className="gallery-item__image u-warm-photo"
        sizes="(min-width: 960px) 280px, (min-width: 640px) 33vw, 50vw"
      />
      <span className="gallery-item__overlay">
        <span className="gallery-item__caption">{legenda}</span>
      </span>
    </button>
  );
}
