import styles from './P.module.scss';
import { type IPropsP } from './P.interface';
import classNames from 'classnames';
const P = ({ children, size }: IPropsP): JSX.Element => {
  const classes = classNames(
    { [styles.small]: size === 'S' },
    { [styles.medium]: size === 'M' },
    { [styles.large]: size === 'L' },
  );
  return <p className={classes}>{children}</p>;
};

export { P };
