import { Theme } from './Theme';
import { Transition } from '../primitives/Transition';
import { Component, Node, Visual } from '../primitives/index';

export interface Collapse extends Component<Transition, CollapseClassKey, 'timeout'> {
  children?: Node;
  collapsedHeight?: string;
  component?: CollapseVisual['type'];
  theme?: Theme;
  timeout?: Transition['timeout'] | 'auto';
}

export type CollapseClassKey = 'container' | 'entered' | 'wrapper' | 'wrapperInner';

export const CollapseKey = 'Collapse';

export default interface CollapseVisual extends Visual<Collapse> {
    type: typeof CollapseKey;
}
