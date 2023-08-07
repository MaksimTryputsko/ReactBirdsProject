import styles from './ControlPanel.module.scss';
import { type IPropsControlPanel } from './ControlPanel.interface';
import { secondsToHms } from 'src/util/secondsToHms';

function ControlPanel({ duration, currentTime }: IPropsControlPanel): JSX.Element {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controlPanelTimer}>{secondsToHms(currentTime)}</div>
      <div className={styles.controlPanelTimer}>{secondsToHms(duration)}</div>
    </div>
  );
}
export default ControlPanel;
