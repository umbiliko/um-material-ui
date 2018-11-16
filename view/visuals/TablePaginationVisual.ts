

import { TableCellVisual } from './TableCellVisual';
import { IconButtonVisual } from './IconButtonVisual';
import { SelectVisual } from './SelectVisual';
import { Component, Visual } from '../primitives/index';

export interface LabelDisplayedRowsArgs {
  from: number;
  to: number;
  count: number;
  page: number;
}

export interface TablePaginationVisual
  extends Component<TablePaginationBaseVisual, TablePaginationClassKey> {
  ActionsComponent?: VisualType<TablePaginationBaseVisual>;
  backIconButtonProps?: Partial<IconButtonVisual>;
  component?: VisualType<TablePaginationBaseVisual>;
  count: number;
  labelDisplayedRows?: (paginationInfo: LabelDisplayedRowsArgs) => Node;
  labelRowsPerPage?: Node;
  nextIconButtonProps?: Partial<IconButtonVisual>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  SelectProps?: Partial<SelectVisual>;
}

export type TablePaginationBaseVisual = TableCellVisual;

export type TablePaginationClassKey =
  | 'root'
  | 'toolbar'
  | 'spacer'
  | 'menuItem'
  | 'caption'
  | 'input'
  | 'selectRoot'
  | 'select'
  | 'selectIcon'
  | 'actions';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
