import { useReveal } from '../../hooks/useReveal.js';
import { cx } from '../../utils/cx.js';

export default function Reveal({ children, className = '', as = 'div' }) {
  const ref = useReveal();
  const Tag = as;

  return (
    <Tag ref={ref} className={cx('reveal', className)}>
      {children}
    </Tag>
  );
}
