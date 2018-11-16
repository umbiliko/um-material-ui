import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface InputAdornment
    extends Component<HTMLDivElement, InputAdornmentClassKey> {
    component?: 'div' | 'li';
    disableTypography?: boolean;
    position: 'start' | 'end';
    variant?: 'standard' | 'outlined' | 'filled';
}

export type InputAdornmentClassKey = 'root' | 'positionStart' | 'positionEnd' | 'filled';

export const InputAdornmentKey = 'InputAdornment';

export default interface InputAdornmentVisual extends Visual<InputAdornment> {
    type: typeof InputAdornmentKey;
}
