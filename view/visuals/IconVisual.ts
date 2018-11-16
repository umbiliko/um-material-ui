import { Color } from '../domains/index';
import { HTMLSpanElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface Icon
    extends Component<HTMLSpanElement, IconClassKey> {
    color?: Color | 'action' | 'disabled' | 'error';
    component?: 'i' | 'span';
    fontSize?: 'inherit' | 'default' | 'small' | 'large';
}

export type IconClassKey =
    | 'root'
    | 'colorSecondary'
    | 'colorAction'
    | 'colorDisabled'
    | 'colorError'
    | 'colorPrimary'
    | 'fontSizeInherit'
    | 'fontSizeSmall'
    | 'fontSizeLarge';

export const IconKey = 'Icon';

export default interface IconVisual extends Visual<Icon> {
    type: typeof IconKey;
}
