import { HTMLDivElement, HTMLLIElement } from './native/HtmlElementVisual';
import { ButtonBase } from '../primitives/index';
import { Component, Visual } from '../primitives/index';

export interface ListItem
    extends Component<ButtonBase & HTMLLIElement, ListItemClassKey, 'component'> {
    button?: boolean;
    component?: 'div' | 'li' | 'span';
    ContainerComponent?: Visual<HTMLDivElement>;
    ContainerProps?: HTMLDivElement;
    dense?: boolean;
    disabled?: boolean;
    disableGutters?: boolean;
    divider?: boolean;
    focusVisibleClassName?: string;
    selected?: boolean;
}

export type ListItemClassKey =
    | 'root'
    | 'container'
    | 'focusVisible'
    | 'default'
    | 'dense'
    | 'disabled'
    | 'divider'
    | 'gutters'
    | 'button'
    | 'secondaryAction'
    | 'selected';

export const ListItemKey = 'ListItem';

export default interface ListItemVisual extends Visual<ListItem> {
    type: typeof ListItemKey;
}
