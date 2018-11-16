

import { Component, Visual } from '../primitives/index';

export interface TableBodyVisual extends Component<TableBodyBaseVisual, TableBodyClassKey> {
  component?: VisualType<TableBodyBaseProps>;
}

export type TableBodyClassKey = 'root';

export type TableBodyBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
