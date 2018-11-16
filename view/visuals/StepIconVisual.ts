

import { Component, Visual } from '../primitives/index';

export interface StepIconVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, StepIconClasskey> {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  icon: Node;
}

export type StepIconClasskey = 'root' | 'text' | 'active' | 'completed' | 'error';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
