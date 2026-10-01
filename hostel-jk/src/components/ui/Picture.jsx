import { useEffect, useRef, useState } from 'react';
import { FaImage } from 'react-icons/fa6';
import { cx } from '../../utils/cx.js';
import { dadosDaFoto, gerarSrcset } from '../../utils/imagens.js';

// Foto responsiva: AVIF/WebP em várias larguras, com o JPG original de reserva,
// dimensões reservadas (sem pulo de layout), esqueleto enquanto carrega e aviso se falhar.
export default function Picture({
  foto,
  alt,
  sizes = '100vw',
  className = '',
  loading = 'lazy',
  prioridade,
  retrato,
  esqueleto = true,
}) {
  const [estado, setEstado] = useState('carregando');
  const imgRef = useRef(null);

  useEffect(() => {
    // Foto já em cache pode terminar de carregar antes de o React registrar o onLoad.
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setEstado('carregada');
  }, []);

  if (estado === 'erro') {
    return (
      <span className={cx('picture__erro', className)} role="img" aria-label={`${alt} (foto indisponível)`}>
        <FaImage aria-hidden="true" />
        <span>Foto indisponível</span>
      </span>
    );
  }

  const dados = dadosDaFoto(foto);
  const dadosRetrato = retrato ? dadosDaFoto(retrato.foto) : null;

  return (
    <picture className="picture">
      {dadosRetrato &&
        ['avif', 'webp'].map((formato) => (
          <source
            key={formato}
            type={`image/${formato}`}
            media={retrato.media}
            srcSet={gerarSrcset(retrato.foto, formato)}
            sizes={retrato.sizes}
            width={dadosRetrato.largura}
            height={dadosRetrato.altura}
          />
        ))}
      {dados &&
        ['avif', 'webp'].map((formato) => (
          <source key={formato} type={`image/${formato}`} srcSet={gerarSrcset(foto, formato)} sizes={sizes} />
        ))}
      <img
        ref={imgRef}
        src={foto}
        alt={alt}
        width={dados?.largura}
        height={dados?.altura}
        loading={loading}
        decoding="async"
        fetchpriority={prioridade}
        className={cx(className, esqueleto && estado === 'carregando' && 'picture__img--carregando')}
        onLoad={() => setEstado('carregada')}
        onError={() => setEstado('erro')}
      />
    </picture>
  );
}
