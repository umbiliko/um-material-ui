import { ChangeEventHandler, MouseEventHandler }  from '../handlers/index';
import { ButtonBase, Component, Element, Node, Visual } from '../primitives/index';

export interface BottomNavigationAction
    extends Component<ButtonBase, BottomNavigationActionClassKey, 'onChange'> {
    icon?: string | Element<any>;
    label?: Node;
    selected?: boolean;
    showLabel?: boolean;
    value?: any;
}

export type BottomNavigationActionClassKey = 'root' | 'selected' | 'iconOnly' | 'wrapper' | 'label';

export const BottomNavigationActionKey = 'BottomNavigationAction';

export interface BottomNavigationActionEffects {
    onChange?: ChangeEventHandler;
    onClick?: MouseEventHandler;
}

export default interface BottomNavigationActionVisual extends Visual<BottomNavigationAction> {
    type: typeof BottomNavigationActionKey;
}
