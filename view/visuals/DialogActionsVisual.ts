import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface DialogActions
    extends Component<HTMLDivElement, DialogActionsClassKey> {
    disableActionSpacing?: boolean;
}

export type DialogActionsClassKey = 'root' | 'action';

export const DialogActionsKey = 'DialogActions';

export default interface DialogActionsVisual extends Visual<DialogActions> {
    type: typeof DialogActionsKey;
}
