import { Component, Visual } from '../primitives/index';
import { HTMLDivElement } from './native/HtmlElementVisual';

export interface CardActions
  extends Component<HTMLDivElement, CardActionsClassKey> {
  disableActionSpacing?: boolean;
}

export type CardActionsClassKey = 'root' | 'action';

export const CardActionsKey = 'CardActions';

export default interface CardActionsVisual extends Visual<CardActions> {
    type: typeof CardActionsKey;
}
