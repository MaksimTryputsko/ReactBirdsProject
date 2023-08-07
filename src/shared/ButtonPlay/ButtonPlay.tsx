import styles from './Button.module.scss';
import { type IPropsButtonAudio } from './Button.interface';
import classNames from 'classnames';
function ButtonPlay({ play, isPlaying }: IPropsButtonAudio): JSX.Element {
  const classes = classNames({ [styles.buttonStop]: isPlaying }, { [styles.buttonPlay]: !isPlaying });

  return (
    <div className={styles.button}>
      <div onClick={play} className={classes} />
    </div>
  );
}
export { ButtonPlay };
