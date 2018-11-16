import { HTMLUListElement } from './native/HtmlElementVisual';
import { Component, Element, Visual } from '../primitives/index';

export interface List
    extends Component<HTMLUListElement, ListClassKey> {
    component?: 'ol' | 'ul';
    dense?: boolean;
    disablePadding?: boolean;
    subheader?: Element<any>;
}

export type ListClassKey = 'root' | 'padding' | 'dense' | 'subheader';

export const ListKey = 'List';

export default interface ListVisual extends Visual<List> {
    type: typeof ListKey;
}
