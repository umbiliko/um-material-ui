import { TransitionGroup } from 'react-transition-group';
import { Component, Visual } from '../primitives/index';

export type TouchRipple = Component<TransitionGroup.TransitionGroupProps,
    TouchRippleClassKey> & {
    center?: boolean;
};

export type TouchRippleClassKey =
    | 'root'
    | 'ripple'
    | 'rippleVisible'
    | 'ripplePulsate'
    | 'child'
    | 'childLeaving'
    | 'childPulsate';

export const TouchRippleKey = 'TouchRipple';

export default interface TouchRippleVisual extends Visual<TouchRipple> {
    type: typeof TouchRippleKey;
}
