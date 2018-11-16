

import { SwitchBaseVisual, SwitchBaseClassKey } from '../primitives/SwitchBase';
import { Component, Visual } from '../primitives/index';

export interface RadioVisual
  extends Component<SwitchBaseVisual, RadioClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: Node;
  color?: 'primary' | 'secondary' | 'default';
  icon?: Node;
}

export type RadioClassKey = SwitchBaseClassKey | 'colorPrimary' | 'colorSecondary';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}