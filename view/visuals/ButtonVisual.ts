import { ButtonBase, Component, Visual } from '../primitives/index';
import { Color } from '../domains/index';

export interface Button extends Component<ButtonBase, ButtonClassKey, 'component'> {
  color?: Color;
  component?: 'button' | ButtonVisual['type'];
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  href?: string;
  mini?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: string;
  variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
}

export type ButtonClassKey =
  | 'root'
  | 'label'
  | 'text'
  | 'textPrimary'
  | 'textSecondary'
  | 'flat'
  | 'flatPrimary'
  | 'flatSecondary'
  | 'outlined'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'colorInherit'
  | 'contained'
  | 'containedPrimary'
  | 'containedSecondary'
  | 'raised'
  | 'raisedPrimary'
  | 'raisedSecondary'
  | 'focusVisible'
  | 'disabled'
  | 'fab'
  | 'mini'
  | 'sizeSmall'
  | 'sizeLarge'
  | 'fullWidth';

export const ButtonKey = 'Button';

export default interface ButtonVisual extends Visual<Button> {
    type: typeof ButtonKey;
}
