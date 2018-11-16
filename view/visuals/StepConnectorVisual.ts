

import { Orientation } from './StepperVisual';
import { Component, Visual } from '../primitives/index';

export type StepConnectorIcon = React.ReactElement<any> | string | number;

export interface StepConnectorVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, StepConnectorClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
  index?: number;
  orientation?: Orientation;
}

export type StepConnectorClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'alternativeLabel'
  | 'active'
  | 'completed'
  | 'disabled'
  | 'line'
  | 'lineHorizontal'
  | 'lineVertical';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}