import { type IBird } from '@constans/interface/birds.interface';
import { type IMainBird } from '@constans/interface/IMainBird.interface';

export interface IPropsValueBirds {
  birds: IBird[];
  url: string;
  setMainBird: (value: IBird | IMainBird) => void;
  setPercentage: (value: number) => void;
  percentage?: number;
}
