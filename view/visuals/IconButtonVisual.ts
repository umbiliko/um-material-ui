import { Color } from '../domains/index';
import { ButtonBase, Component, Visual } from '../primitives/index';

export interface IconButton extends Component<ButtonBase, IconButtonClassKey> {
    color?: Color;
    disabled?: boolean;
    disableRipple?: boolean;
}

export type IconButtonClassKey =
    | 'root'
    | 'colorInherit'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'disabled'
    | 'label';

export const IconButtonKey = 'IconButton';

export default interface IconButtonVisual extends Visual<IconButton> {
    type: typeof IconButtonKey;
}
