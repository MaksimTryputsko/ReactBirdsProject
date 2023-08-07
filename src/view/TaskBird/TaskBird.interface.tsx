interface MainBird {
  img: string;
  name: string;
}
export interface IPropsTaskBird {
  song: string;
  mainBird: MainBird;
  setPercentage: (value: number) => void;
  percentage: number;
}
