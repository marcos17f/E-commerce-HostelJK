import { useCallback, useState } from 'react';

export function useCarouselIndex(length, initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? length - 1 : i - 1));
  }, [length]);

  const next = useCallback(() => {
    setIndex((i) => (i === length - 1 ? 0 : i + 1));
  }, [length]);

  return { index, prev, next, goTo: setIndex };
}
