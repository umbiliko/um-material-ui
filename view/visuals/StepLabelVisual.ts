

import { Orientation } from './StepperVisual';
import { StepButtonIcon } from './StepButtonVisual';
import { StepIconVisual } from './StepIconVisual';
import { Component, Visual } from '../primitives/index';

export interface StepLabelVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, StepLabelClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: Node;
  completed?: boolean;
  disabled?: boolean;
  error?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: Node;
  orientation?: Orientation;
  StepIconComponent?: VisualType;
  StepIconProps?: Partial<StepIconVisual>;
}

export type StepLabelClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'active'
  | 'completed'
  | 'alternativeLabel'
  | 'error'
  | 'disabled'
  | 'label'
  | 'iconContainer'
  | 'labelContainer';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
