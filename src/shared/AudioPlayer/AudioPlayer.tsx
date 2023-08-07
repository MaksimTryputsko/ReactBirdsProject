import React, { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.scss';
import { type IPropsAudioPlayer } from './AudioPlayer.interface';

const AudioPlayer = ({ onChange, percentage }: IPropsAudioPlayer): JSX.Element => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef<HTMLInputElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inputAudio: HTMLInputElement | null = rangeRef.current;
    const divAudio: HTMLDivElement | null = thumbRef.current;
    const rangeWidth = inputAudio?.getBoundingClientRect().width;
    const thumbWith = divAudio?.getBoundingClientRect().width;

    if (thumbWith !== null && thumbWith !== undefined && rangeWidth !== null && rangeWidth !== undefined) {
      const centerThumb = (thumbWith / 100) * percentage * -1;
      const centerProgressBar = thumbWith + (rangeWidth / 100) * percentage - (thumbWith / 100) * percentage;
      setPosition(percentage);
      setMarginLeft(centerThumb);
      setProgressBarWidth(centerProgressBar);
    }
  }, [percentage]);
  return (
    <div className={styles.audioPlayerSliderContainer}>
      <div className={styles.progressBarCover} style={{ width: `${progressBarWidth}px` }}></div>
      <div
        className={styles.thumb}
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input value={position} type="range" step="0.1" className={styles.range} onChange={onChange} ref={rangeRef} />
    </div>
  );
};

export { AudioPlayer };
