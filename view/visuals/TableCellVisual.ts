

import { Component, Visual } from '../primitives/index';

/**
 * `<TableCell>` will be rendered as an `<th>`or `<td>` depending
 * on the context it is used in. Where context literally is the
 * React `context`.
 *
 * Since it is not decided via prop, we have create loose typings
 * here.
 */
export interface TableCellVisual extends Component<TableCellBaseVisual, TableCellClassKey> {
  component?: VisualType<TableCellBaseProps>;
  numeric?: boolean;
  padding?: Padding;
  sortDirection?: SortDirection;
  variant?: 'head' | 'body' | 'footer';
}

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
  React.TdHTMLAttributes<HTMLTableDataCellElement>;

export type Padding = 'default' | 'checkbox' | 'dense' | 'none';

export type SortDirection = 'asc' | 'desc' | false;

export type TableCellClassKey =
  | 'root'
  | 'head'
  | 'body'
  | 'footer'
  | 'numeric'
  | 'paddingDense'
  | 'paddingCheckbox'
  | 'paddingNone';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
