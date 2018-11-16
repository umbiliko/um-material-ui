import { List, ListClassKey } from './ListVisual';
import { Component, Visual } from '../primitives/index';
import { KeyboardEventHandler } from '../handlers/index';

export interface MenuList extends Component<List, MenuListClassKey, 'onKeyDown'> {
    onKeyDown?: KeyboardEventHandler;
}

export type MenuListClassKey = ListClassKey;

export const MenuListKey = 'MenuList';

export default interface MenuListVisual extends Visual<MenuList> {
    type: typeof MenuListKey;
}
