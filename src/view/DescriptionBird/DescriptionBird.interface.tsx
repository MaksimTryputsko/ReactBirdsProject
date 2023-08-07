import { type IBird } from '@constans/interface/birds.interface';

export interface IPropsDescription {
  birdValue: IBird;
  setPercentage: (value: number) => void;
  percentage: number;
}
