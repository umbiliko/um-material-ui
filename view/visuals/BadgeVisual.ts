import { Color } from '../domains/index';
import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Node, Visual } from '../primitives/index';

export interface Badge
  extends Component<HTMLDivElement, BadgeClassKey> {
  badgeContent: Node;
  children: Node;
  color?: Color | 'error';
  component?: BadgeVisual['type'];
}

export type BadgeClassKey = 'root' | 'badge' | 'colorPrimary' | 'colorSecondary';

export const BadgeKey = 'Badge';

export default interface BadgeVisual extends Visual<Badge> {
    type: typeof BadgeKey;
}
