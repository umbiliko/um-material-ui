

import { Orientation } from './StepperVisual';
import { Component, Visual } from '../primitives/index';

export interface StepVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, StepClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: Node;
  completed?: boolean;
  connector?: React.ReactElement<any>;
  disabled?: boolean;
  index?: number;
  last?: boolean;
  orientation?: Orientation;
}

export type StepClasskey = 'root' | 'horizontal' | 'vertical' | 'alternativeLabel';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}