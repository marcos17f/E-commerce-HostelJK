import { cx } from '../../utils/cx.js';

export default function Icon({ icon: IconComponent, size = 20, className = '', ...rest }) {
  if (!IconComponent) return null;

  return (
    <span className={cx('icon', className)} aria-hidden="true">
      <IconComponent size={size} {...rest} />
    </span>
  );
}
