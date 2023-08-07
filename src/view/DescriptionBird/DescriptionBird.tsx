import styles from './DescriptionBird.module.scss';
import { AudioPlayerElements } from 'src/shared/AudioPlayerElements/AudioPlayerElements';
import { type IPropsDescription } from './DescriptionBird.interface';
import { P } from '@shared/PTextComponent/P';

const DescriptionBird: React.FC<IPropsDescription> = ({ birdValue, setPercentage, percentage }) => (
  <div className={styles.descriptionBird}>
    <div className={styles.birdCard}>
      <img src={birdValue.img} alt="birdImg" className={styles.birdValueImg} />
      <div className={styles.birdCharacteristic}>
        <div>
          <h4>
            <P size="M">{birdValue.name}</P>
          </h4>
        </div>
        <div className={styles.line}></div>
        <div>
          <P size="S">{birdValue.view}</P>
        </div>
        <div className={styles.line}></div>
        <div>
          <AudioPlayerElements song={birdValue.song} percentage={percentage} setPercentage={setPercentage} />
        </div>
      </div>
    </div>
    <div>
      <P size="S">{birdValue.description}</P>
    </div>
  </div>
);

export { DescriptionBird };
