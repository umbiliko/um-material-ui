import { Theme } from './Theme';
import { Transition } from '../primitives/Transition';
import { Visual } from '../primitives/index';

export interface Fade extends Transition {
    theme?: Theme;
}

export const FadeKey = 'Fade';

export default interface FadeVisual extends Visual<Fade> {
    type: typeof FadeKey;
}
