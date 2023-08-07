import styles from './AudioPlayerElements.module.scss';
import { AudioPlayer } from 'src/shared/AudioPlayer/AudioPlayer';
import ControlPanel from 'src/shared/ControlPanel/ControlPanel';
import { useState, useRef } from 'react';
import { ButtonPlay } from 'src/shared/ButtonPlay/ButtonPlay';
import { type IPropsAudio } from './AudioPlayerElements.interface';

const AudioPlayerElements = ({ song, percentage, setPercentage }: IPropsAudio): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const audio: HTMLAudioElement | null = audioRef.current;
    const target = e.target as HTMLInputElement;
    if (audio != null) {
      audio.currentTime = (audio.duration / 100) * +target?.value;
    }

    setPercentage(+target.value);
  };

  const play = (): void => {
    const audio: HTMLAudioElement | null = audioRef.current;
    if (audio != null) {
      audio.volume = 0.1;
      if (!isPlaying) {
        setIsPlaying(true);
        audio.play();
      }

      if (isPlaying) {
        setIsPlaying(false);
        audio.pause();
      }
    }
  };

  const getCurrDuration = (e: React.MouseEvent<HTMLAudioElement, MouseEvent>): void => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(+time.toFixed(2));
  };
  const setDurationValue = (e: React.MouseEvent<HTMLAudioElement, MouseEvent>): void => {
    setDuration(+e.currentTarget.duration.toFixed(2));
  };
  return (
    <div className={styles.audioPlayerElements}>
      <ButtonPlay play={play} isPlaying={isPlaying} />
      <div className={styles.wrapperPlayer}>
        <AudioPlayer onChange={onChange} percentage={percentage} />
        <audio ref={audioRef} src={song} onLoadedData={setDurationValue} onTimeUpdate={getCurrDuration} />
        <ControlPanel duration={duration} currentTime={currentTime} />
      </div>
    </div>
  );
};

export { AudioPlayerElements };
