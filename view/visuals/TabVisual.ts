

import { ButtonBaseVisual } from '../primitives/ButtonBase';
import { Component, Visual } from '../primitives/index';

export interface TabVisual extends Component<ButtonBaseVisual, TabClassKey, 'onChange'> {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement<any>;
  value?: any;
  label?: Node;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | 'secondary' | 'primary' | 'inherit';
}

export type TabClassKey =
  | 'root'
  | 'labelIcon'
  | 'textColorInherit'
  | 'textColorPrimary'
  | 'textColorSecondary'
  | 'selected'
  | 'disabled'
  | 'fullWidth'
  | 'wrapper'
  | 'labelContainer'
  | 'label'
  | 'labelWrapped';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
