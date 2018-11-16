import { Theme } from './Theme';
import { Transition, Visual } from '../primitives/index';

export interface Zoom extends Transition {
    theme?: Theme;
}

export const ZoomKey = 'Zoom';

export default interface ZoomVisual extends Visual<Zoom> {
    type: typeof ZoomKey;
}
