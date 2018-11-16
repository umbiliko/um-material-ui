import { Component, Ref, Visual } from './index';
import { TouchRipple } from '../visuals/TouchRippleVisual';
import { HTMLAnchorElement, HTMLButtonElement } from '../visuals/native/HtmlElementVisual';
import { FocusEventHandler } from '../handlers/index';

export default interface ButtonBase
    extends Component<HTMLAnchorElement & HTMLButtonElement, ButtonBaseClassKey> {
    action?: (actions: ButtonBaseActions) => void;
    buttonRef?: Ref;
    centerRipple?: boolean;
    component?: Visual<ButtonBase>;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    focusVisibleClassName?: string;
    TouchRippleProps?: Partial<TouchRipple>;
}

export type ButtonBaseClassKey = 'root' | 'disabled' | 'focusVisible';

export interface ButtonBaseActions {
    focusVisible(): void;
}

export interface ButtonBaseEffects {
    onFocusVisible?: FocusEventHandler;
}