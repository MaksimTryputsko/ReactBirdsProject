import styles from './DiscriptionBirdDefault.module.scss';
import { P } from '@shared/PTextComponent/P';

const DescriptionBirdDefault: React.FC = () => (
  <div className={styles.descriptionBird}>
    <div>
      <P size="S">Полслушайте Плеер.</P>
    </div>
    <div>
      <P size="S">Выберите птицу из списка</P>
    </div>
  </div>
);

export { DescriptionBirdDefault };
