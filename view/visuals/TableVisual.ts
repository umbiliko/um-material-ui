

import { Component, Visual } from '../primitives/index';

export interface TableVisual extends Component<TableBaseVisual, TableClassKey> {
  component?: VisualType<TableBaseProps>;
  padding?: Padding;
}

export type TableBaseProps = React.TableHTMLAttributes<HTMLTableElement>;

export type Padding = 'default' | 'checkbox' | 'dense' | 'none';

export type TableClassKey = 'root';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
