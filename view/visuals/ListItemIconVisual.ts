import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Element, Visual } from '../primitives/index';

export interface ListItemIcon
    extends Component<HTMLDivElement, ListItemIconClassKey> {
    children: Element<any>;
}

export type ListItemIconClassKey = 'root';

export const ListItemIconKey = 'ListItemIcon';

export default interface ListItemIconVisual extends Visual<ListItemIcon> {
    type: typeof ListItemIconKey;
}
