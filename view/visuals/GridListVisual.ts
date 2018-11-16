import { HTMLUListElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface GridList
    extends Component<HTMLUListElement, GridListClassKey> {
    cellHeight?: number | 'auto';
    cols?: number;
    component?: 'div' | 'ol' | 'ul';
    spacing?: number;
}

export type GridListClassKey = 'root';

export const GridListKey = 'GridList';

export default interface GridListVisual extends Visual<GridList> {
    type: typeof GridListKey;
}
