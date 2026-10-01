import { cx } from '../../utils/cx.js';

export default function Badge({ children, className = '' }) {
  return <span className={cx('badge', className)}>{children}</span>;
}
