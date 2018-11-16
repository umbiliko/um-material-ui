

import { Orientation } from './StepperVisual';
import { Transition } from '../primitives/Transition';
import { Component, Visual } from '../primitives/index';

export interface StepContentVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, StepContentClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: Node;
  completed?: boolean;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
  TransitionComponent?: React.ComponentType<Transition>;
  transitionDuration?: Transition['timeout'] | 'auto';
  TransitionProps?: Transition;
}

export type StepContentClasskey = 'root' | 'last' | 'transition';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}