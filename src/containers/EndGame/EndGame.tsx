import styles from './EndGame.module.scss';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_POINTS } from '@constans/reducerActionType';
import { type IStatePoints } from '@view/Layout/Layout.interface';
import { type IPropsEndGame } from './EndGame.interface';
import { Button } from '@shared/Button/Button';

const EndGame: React.FC<IPropsEndGame> = ({ url }) => {
  const points: number = useSelector((state: IStatePoints) => state.points);
  const dispatch = useDispatch();

  const overridePoints = (): void => {
    dispatch({ type: REMOVE_POINTS, payload: points });
  };
  return (
    <div className={styles.endGame}>
      <h1>Поздравляем !</h1>
      <p>Вы прошли викторину и набрали {points} из 30 возможных баллов</p>
      <div className={styles.endGameLine}></div>

      <Link to={`../${url}`}>
        <Button onClick={overridePoints}>Попробывать еще раз!</Button>
      </Link>
    </div>
  );
};

export { EndGame };
