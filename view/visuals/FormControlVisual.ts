import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, EventHandler, Margin, Visual } from '../primitives/index';
import { FocusEventHandler } from '../handlers/index'

export interface FormControl
    extends Component<HTMLDivElement, FormControlClassKey> {
    component?: 'div' | 'li' | 'span';
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    margin?: Margin;
    onBlur?: EventHandler;
    onFocus?: FocusEventHandler;
    required?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
}

export type FormControlClassKey = 'root' | 'marginNormal' | 'marginDense' | 'fullWidth';

export const FormControlKey = 'FormControl';

export default interface FormControlVisual extends Visual<FormControl> {
    type: typeof FormControlKey;
}
