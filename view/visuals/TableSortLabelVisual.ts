

import { ButtonBase } from '../primitives/ButtonBase';
import { SvgIconVisual } from './SvgIconVisual';
import { Component, Visual } from '../primitives/index';

export interface TableSortLabelVisual
  extends Component<ButtonBase, TableSortLabelClassKey> {
  active?: boolean;
  direction?: 'asc' | 'desc';
  hideSortIcon?: boolean;
  IconComponent?: React.ComponentType<SvgIconVisual>;
}

export type TableSortLabelClassKey =
  | 'root'
  | 'active'
  | 'icon'
  | 'iconDirectionDesc'
  | 'iconDirectionAsc';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
