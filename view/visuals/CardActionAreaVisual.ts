import { Component, ButtonBase, Visual } from '../primitives/index';

export interface CardActionArea
    extends Component<ButtonBase, CardActionAreaClassKey> {
    focusVisibleClassName?: string;
}

export type CardActionAreaClassKey = 'root' | 'focusVisible' | 'focusHighlight';

export const CardActionAreaKey = 'CardActionArea';

export default interface CardActionAreaVisual extends Visual<CardActionArea> {
    type: typeof CardActionAreaKey;
}
