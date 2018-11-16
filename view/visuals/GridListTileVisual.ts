import { HTMLLIElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface GridListTile
    extends Component<HTMLLIElement, GridListTileClassKey> {
    cols?: number;
    component?: 'center' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'span';
    rows?: number;
}

export type GridListTileClassKey = 'root' | 'tile' | 'imgFullHeight' | 'imgFullWidth';

export const GridListTileKey = 'GridListTile';

export default interface GridListTileVisual extends Visual<GridListTile> {
    type: typeof GridListTileKey;
}
