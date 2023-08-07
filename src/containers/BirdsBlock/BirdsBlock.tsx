import styles from './BirdsBlock.module.scss';

import { Bird } from '@containers/Bird/Bird';
import { DescriptionBirdDefault } from '@view/DescriptionBirdDefault/DescriptionBirdDefault';
import { useState } from 'react';
import { ButtonNavigation } from '@view/ButtonNavigation/ButtonNavigation';
import { DescriptionBird } from '@view/DescriptionBird/DescriptionBird';

import { ADD_POINTS } from '@constans/reducerActionType';
import { useDispatch } from 'react-redux';
import { type IBird } from '@constans/interface/birds.interface';
import { type IPropsValueBirds } from './BirdsBlock.interface';

import useSound from 'use-sound';
import alarmRight from '@static/alarmValue/right.mp3';
import alarmError from '@static/alarmValue/error.mp3';

const BirdsBlock: React.FC<IPropsValueBirds> = ({ birds, url, setMainBird, setPercentage }) => {
  const [bird, addBird] = useState<IBird | null>(null);
  const [disabled, setDisabled] = useState(true);
  const [isRightAnswerSelected, setRightAnswerSelected] = useState(false);
  const [points, setPoints] = useState(5);
  const [audioControl, setAudioControl] = useState(0);

  const [birdsArr, setBirdsArr] = useState<IBird[]>([]);

  const dispatch = useDispatch();

  const [playError] = useSound(alarmError);
  const [playRight] = useSound(alarmRight);

  const addPoints = (points: number): void => {
    dispatch({ type: ADD_POINTS, payload: points });
  };

  const onBirdNameClick = (bird: IBird): void => {
    setAudioControl(0);

    addBird(bird);

    if (!bird?.isRightAnswer) {
      if (points !== null) {
        setPoints(points - 1);
      }
      if (disabled) playError();
      else setPoints(0);
    }
    if (bird?.isRightAnswer) {
      const [mainBird] = birds.filter((bird: IBird) => bird.isRightAnswer);
      setMainBird(mainBird);
      setDisabled(false);
      setRightAnswerSelected(true);
      addPoints(points);
      if (disabled) playRight();
    }
    if (disabled) {
      setBirdsArr([...birdsArr, bird]);
    }
  };

  const clearList = (): void => {
    addBird(null);
    setMainBird({
      name: '******',
      img: 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg',
    });

    setRightAnswerSelected(false);
    setDisabled(true);
    setPoints(5);
    setPercentage(0);
    setBirdsArr([]);
  };

  return (
    <div>
      <div className={styles.ValueBlockBirds}>
        <ul className={styles.valuesMenu}>
          {birds.map((bird: IBird) => {
            const foundBird: IBird | undefined = birdsArr?.find((el: IBird) => el.id === bird.id);
            const birdDesignType = foundBird?.isRightAnswer ? 'right' : 'error';
            return (
              <Bird
                key={bird.id}
                onBirdNameClick={onBirdNameClick}
                bird={bird}
                designType={foundBird != null ? birdDesignType : undefined}
              />
            );
          })}
        </ul>
        {bird === null || bird === undefined ? (
          <DescriptionBirdDefault />
        ) : (
          <DescriptionBird birdValue={bird} setPercentage={setAudioControl} percentage={audioControl} />
        )}
      </div>
      <ButtonNavigation
        url={url}
        onClick={clearList}
        disabled={disabled}
        designType={isRightAnswerSelected ? 'primary' : undefined}
      />
    </div>
  );
};

export { BirdsBlock };
