import { cx } from '../../utils/cx.js';

export default function Logo({ className = '' }) {
  return (
    <div className={cx('logo', className)}>
      <svg width="34" height="20" viewBox="0 0 34 20" className="logo__roof" aria-hidden="true">
        <path d="M2 18 L17 3 L32 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="13" y="12" width="8" height="6" fill="currentColor" />
      </svg>
      <span className="logo__hostel">HOSTEL</span>
      <span className="logo__jk-row">
        <span className="logo__jk">JK</span>
      </span>
    </div>
  );
}
