import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface ListSubheader
    extends Component<HTMLDivElement, ListSubheaderClassKey> {
    color?: 'default' | 'primary' | 'inherit';
    component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'li' | 'span';
    disableGutters?: boolean;
    disableSticky?: boolean;
    inset?: boolean;
}

export type ListSubheaderClassKey =
    | 'root'
    | 'colorPrimary'
    | 'colorInherit'
    | 'inset'
    | 'sticky'
    | 'gutters';

export const ListSubheaderKey = '';

export default interface ListSubheaderVisual extends Visual<ListSubheader> {
    type: typeof ListSubheaderKey;
}
