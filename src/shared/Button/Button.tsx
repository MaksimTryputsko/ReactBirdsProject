import styles from './Button.module.scss';
import { type IButton } from '@shared/Button/Button.interface';
import classNames from 'classnames';

const Button: React.FC<IButton> = ({ onClick, disabled, designType, children }) => {
  const classes = classNames(styles.default, {
    [styles.primary]: designType === 'primary',
  });
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
