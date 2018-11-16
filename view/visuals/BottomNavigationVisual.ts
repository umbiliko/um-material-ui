import { ChangeEventHandler } from '../handlers/index';
import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Node, Visual } from '../primitives/index';

export interface BottomNavigation
    extends Component<HTMLDivElement, BottomNavigationClassKey> {
    children: Node;
    showLabels?: boolean;
    value?: any;
}

export type BottomNavigationClassKey = 'root';

export interface BottomNavigationEffects {
    onChange?: ChangeEventHandler;
}

export const BottomNavigationKey = 'BottomNavigation';

export default interface BottomNavigationVisual extends Visual<BottomNavigation> {
    type: typeof BottomNavigationKey;
}
