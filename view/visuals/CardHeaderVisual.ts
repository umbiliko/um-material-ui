import { TypographyVisual } from './TypographyVisual';
import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Node, Visual } from '../primitives/index';

export interface CardHeader
  extends Component<HTMLDivElement, CardHeaderClassKey, 'title'> {
  action?: Node;
  avatar?: Node;
  component?: 'div';
  disableTypography?: boolean;
  subheader?: Node;
  subheaderTypographyProps?: Partial<TypographyVisual>;
  title?: Node;
  titleTypographyProps?: Partial<TypographyVisual>;
}

export type CardHeaderClassKey = 'root' | 'avatar' | 'action' | 'content' | 'title' | 'subheader';

export const CardHeaderKey = 'CardHeader';

export default interface CardHeaderVisual extends Visual<CardHeader> {
    type: typeof CardHeaderKey;
}


