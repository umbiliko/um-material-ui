import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface DialogContent
  extends Component<HTMLDivElement, DialogContentClassKey> {}

export type DialogContentClassKey = 'root';

export const DialogContentKey = 'DialogContent';

export default interface DialogContentVisual extends Visual<DialogContent> {
    type: typeof DialogContentKey;
}

