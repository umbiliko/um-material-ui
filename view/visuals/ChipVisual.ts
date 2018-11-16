import { EventHandler } from 'react';
import { HTMLDivElement } from './native/HtmlElementVisual';
import { Color, Component, Element, Node, Visual } from '../primitives/index';

export interface Chip
    extends Component<HTMLDivElement, ChipClassKey> {
    avatar?: Element<any>;
    clickable?: boolean;
    color?: Color;
    component?: 'div';
    deleteIcon?: Element<any>;
    icon?: Element<any>;
    label?: Node;
    onDelete?: EventHandler<any>;
    variant?: 'default' | 'outlined';
}

export type ChipClassKey =
  | 'root'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'clickable'
  | 'clickablePrimary'
  | 'clickableSecondary'
  | 'deletable'
  | 'deletablePrimary'
  | 'deletableSecondary'
  | 'outlined'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'avatar'
  | 'avatarPrimary'
  | 'avatarSecondary'
  | 'avatarChildren'
  | 'label'
  | 'deleteIcon'
  | 'deleteIconPrimary'
  | 'deleteIconSecondary'
  | 'deleteIconOutlinedColorPrimary'
  | 'deleteIconOutlinedColorSecondary';

export const ChipKey = 'Chip';

export default interface ChipVisual extends Visual<Chip> {
    type: typeof ChipKey;
}
