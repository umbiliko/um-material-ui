import { ListItem } from './ListItemVisual';
import { Component, Visual } from '../primitives/index';

export interface MenuItem extends Component<ListItem, MenuItemClassKey> {
    component?: 'div' | 'li';
    role?: string;
}

export type MenuItemClassKey = 'root' | 'gutters' | 'selected';

export const MenuItemKey = 'MenuItem';

export default interface MenuItemVisual extends Visual<MenuItem> {
    type: typeof MenuItemKey;
}
