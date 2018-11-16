

import { Component, Visual } from '../primitives/index';

export interface TableRowVisual extends Component<TableRowBaseVisual, TableRowClassKey> {
  component?: VisualType<TableRowBaseProps>;
  hover?: boolean;
  selected?: boolean;
}

export type TableRowBaseProps = React.HTMLAttributes<HTMLTableRowElement>;

export type TableRowClassKey = 'root' | 'selected' | 'hover' | 'head' | 'footer';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
