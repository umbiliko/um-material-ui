import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface CardContent
  extends Component<HTMLDivElement, CardContentClassKey> {
  component?: 'div' | CardContentVisual['type'];
}

export type CardContentClassKey = 'root';

export const CardContentKey = 'CardContent';

export default interface CardContentVisual extends Visual<CardContent> {
    type: typeof CardContentKey;
}
