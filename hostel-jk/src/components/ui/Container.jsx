import { cx } from '../../utils/cx.js';

export default function Container({ children, className = '' }) {
  return <div className={cx('container', className)}>{children}</div>;
}
