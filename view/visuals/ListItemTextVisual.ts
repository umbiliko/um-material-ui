import { Typography } from './TypographyVisual';
import { Component, Node, Visual } from '../primitives/index';

export interface ListItemText
    extends Component<HTMLDivElement, ListItemTextClassKey> {
    disableTypography?: boolean;
    inset?: boolean;
    primary?: Node;
    primaryTypographyProps?: Partial<Typography>;
    secondary?: Node;
    secondaryTypographyProps?: Partial<Typography>;
}

export type ListItemTextClassKey =
    | 'root'
    | 'inset'
    | 'dense'
    | 'primary'
    | 'secondary'
    | 'textDense';

export const ListItemTextKey = 'ListItemText';

export default interface ListItemTextVisual extends Visual<ListItemText> {
    type: typeof ListItemTextKey;
}
