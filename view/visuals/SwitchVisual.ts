

import { SwitchBaseVisual, SwitchBaseClassKey } from '../primitives/SwitchBase';
import { Component, Visual } from '../primitives/index';

export interface SwitchVisual
  extends Component<SwitchBaseVisual, SwitchClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: Node;
  color?: 'primary' | 'secondary' | 'default';
  icon?: Node;
}

export type SwitchClassKey =
  | SwitchBaseClassKey
  | 'bar'
  | 'icon'
  | 'iconChecked'
  | 'switchBase'
  | 'colorPrimary'
  | 'colorSecondary';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
