

import { Orientation } from '../Stepper';
import { ButtonBaseVisual } from '../primitives/ButtonBase';
import { Component, Visual } from '../primitives/index';

export type StepButtonIcon = React.ReactElement<any> | string | number | null;

export interface StepButtonVisual extends Component<ButtonBaseVisual, StepButtonClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: Node;
  orientation?: Orientation;
}

export type StepButtonClasskey = 'root' | 'vertical' | 'touchRipple';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
