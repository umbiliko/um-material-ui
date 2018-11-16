import { SwitchBase, SwitchBaseClassKey } from '../primitives/SwitchBase';
import { Component, Node, Visual } from '../primitives/index';

export interface Checkbox
    extends Component<SwitchBase, CheckboxClassKey, 'checkedIcon' | 'color' | 'icon'> {
    checkedIcon?: Node;
    color?: 'primary' | 'secondary' | 'default';
    icon?: Node;
    indeterminate?: boolean;
    indeterminateIcon?: Node;
}

export type CheckboxClassKey =
  | SwitchBaseClassKey
  | 'indeterminate'
  | 'colorPrimary'
  | 'colorSecondary';

export const CheckboxKey = 'Checkbox';

export default interface CheckboxVisual extends Visual<Checkbox> {
    type: typeof CheckboxKey;
}
