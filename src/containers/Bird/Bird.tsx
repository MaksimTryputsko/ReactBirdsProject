import classNames from 'classnames';
import { P } from '@shared/PTextComponent/P';
import styles from './Bird.module.scss';

import { type IPropsBird } from './Bird.interface';

function Bird({ bird, onBirdNameClick, designType }: IPropsBird): JSX.Element {
  const classes = classNames(styles.default, {
    [styles.right]: designType === 'right',
    [styles.error]: designType === 'error',
  });
  const handleClick = (): void => {
    onBirdNameClick(bird);
  };
  return (
    <li className={styles.birdValue} id={`${bird.id}`} onClick={handleClick}>
      <div className={classes} />
      <P size="S">{bird.name}</P>
    </li>
  );
}

export { Bird };
