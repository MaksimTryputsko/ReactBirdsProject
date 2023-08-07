export function secondsToHms(seconds: number): string {
  if (!(seconds !== null)) return '00m 00s';
  let duration: number = seconds;
  const hours: number = duration / 3600;
  duration = duration % 3600;

  let min: number | string = parseInt(`${duration / 60}`);
  duration = duration % 60;

  let sec: number | string = parseInt(`${duration}`);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (parseInt(`${hours}`, 10) > 0) {
    return `${parseInt(`${hours}`, 10)}h ${min}m ${sec}s`;
  }
  if (min === 0) {
    return `00m ${sec}s`;
  }
  return `${min}m ${sec}s`;
}
