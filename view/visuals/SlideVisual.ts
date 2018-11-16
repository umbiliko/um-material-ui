import { Theme } from './Theme';
import { Transition } from '../primitives/Transition';
import { Visual } from '../primitives/index';

export interface Slide extends Transition {
    direction: 'left' | 'right' | 'up' | 'down';
    theme?: Theme;
}

export const SlideKey = 'Slide';

export default interface SlideVisual extends Visual<Slide> {
    type: typeof SlideKey;
}