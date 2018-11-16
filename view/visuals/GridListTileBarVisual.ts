import { Component, Node, Visual } from '../primitives/index';

export interface GridListTileBar extends Component<{}, GridListTileBarClassKey> {
    actionIcon?: Node;
    actionPosition?: 'left' | 'right';
    subtitle?: Node;
    title?: Node;
    titlePosition?: 'top' | 'bottom';
}

export type GridListTileBarClassKey =
  | 'root'
  | 'titlePositionBottom'
  | 'titlePositionTop'
  | 'rootSubtitle'
  | 'titleWrapActionPosLeft'
  | 'titleWrapActionPosRight'
  | 'title'
  | 'subtitle'
  | 'actionIcon'
  | 'actionIconActionPosLeft';

export const GridListTileBarKey = 'GridListTileBar';

export default interface GridListTileBarVisual extends Visual<GridListTileBar> {
    type: typeof GridListTileBarKey;
}
