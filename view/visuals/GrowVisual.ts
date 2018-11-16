import { Theme } from './Theme';
import { Transition } from '../primitives/Transition';
import { Visual } from '../primitives/index';

export interface Grow extends Omit<Transition, 'timeout'> {
    theme?: Theme;
    timeout?: Transition['timeout'] | 'auto';
}

export const GrowKey = 'Grow';

export default interface GrowVisual extends Visual<Grow> {
    type: typeof GrowKey;
}
