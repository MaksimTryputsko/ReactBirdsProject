import { type ReactNode } from 'react';

export interface IButton {
  url?: string;
  onClick?: () => void;
  disabled?: boolean;
  designType?: 'primary' | undefined;
  children?: ReactNode;
}
