import { ReactNode } from 'react';

export default interface PropsButton {
  children?: ReactNode
  onClick?: any;
  className: string;
  type: 'submit' | 'button';
}