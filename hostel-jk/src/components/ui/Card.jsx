import { cx } from '../../utils/cx.js';

export default function Card({ children, className = '', ...rest }) {
  return (
    <div className={cx('card', className)} {...rest}>
      {children}
    </div>
  );
}
