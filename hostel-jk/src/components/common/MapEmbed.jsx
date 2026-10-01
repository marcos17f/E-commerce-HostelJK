import { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { site } from '../../config/site.js';
import { cx } from '../../utils/cx.js';

export default function MapEmbed() {
  const [carregado, setCarregado] = useState(false);
  const query = encodeURIComponent(site.endereco.enderecoCompleto);

  return (
    <div className="map-embed-wrap">
      <div className={cx('map-embed', !carregado && 'map-embed--carregando')}>
        {!carregado && (
          <span className="map-embed__status" role="status">
            Carregando mapa…
          </span>
        )}
        <iframe
          title={`Mapa: ${site.nome}`}
          src={`https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setCarregado(true)}
        />
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        className="map-embed__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaArrowUpRightFromSquare aria-hidden="true" />
        O mapa não abriu? Ver no Google Maps
      </a>
    </div>
  );
}
