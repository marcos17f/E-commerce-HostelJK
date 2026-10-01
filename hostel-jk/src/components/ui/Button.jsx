import { cx } from '../../utils/cx.js';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  block = false,
  className = '',
  ...rest
}) {
  const classes = cx('button', `button--${variant}`, block && 'button--block', className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
