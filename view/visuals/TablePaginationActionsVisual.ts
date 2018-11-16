

import { IconButtonVisual } from './IconButton/IconButton';
import { Component, Visual } from '../primitives/index';

export interface TablePaginationActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  backIconButtonProps?: Partial<IconButtonProps>;
  count: number;
  nextIconButtonProps?: Partial<IconButtonProps>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  page: number;
  rowsPerPage: number;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
