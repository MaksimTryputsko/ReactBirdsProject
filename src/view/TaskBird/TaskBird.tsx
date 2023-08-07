import { AudioPlayerElements } from 'src/shared/AudioPlayerElements/AudioPlayerElements';
import { type IPropsTaskBird } from './TaskBird.interface';
import { P } from '@shared/PTextComponent/P';
import styles from './TaskBird.module.scss';
const TaskBird: React.FC<IPropsTaskBird> = ({ song, mainBird, setPercentage, percentage }) => (
  <div className={styles.TaskBird}>
    <div>
      <img src={mainBird.img} alt="randomLogo" className={styles.birdImage} />
    </div>
    <div className={styles.wrapperTaskBird}>
      <div>
        <h3>
          <P size="L">{mainBird.name}</P>
        </h3>
      </div>
      <div className={styles.line}></div>
      <div>
        <AudioPlayerElements song={song} setPercentage={setPercentage} percentage={percentage} />
      </div>
    </div>
  </div>
);

export { TaskBird };
