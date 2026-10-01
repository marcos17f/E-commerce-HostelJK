import { cx } from '../../utils/cx.js';

export default function ScriptText({ children, as = 'p', className = '' }) {
  const Tag = as;
  return <Tag className={cx('script-text', className)}>{children}</Tag>;
}
