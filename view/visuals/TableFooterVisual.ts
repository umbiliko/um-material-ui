

import { Component, Visual } from '../primitives/index';

export interface TableFooterVisual extends Component<TableFooterBaseVisual, TableFooterClassKey> {
  component?: VisualType<TableFooterBaseProps>;
}

export type TableFooterClassKey = 'root';

export type TableFooterBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}