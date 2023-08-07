import { type IBird } from '@constans/interface/birds.interface';

export interface IPropsBird {
  bird: IBird;
  onBirdNameClick: (value: IBird) => void;
  designType: 'error' | 'right' | undefined;
}
