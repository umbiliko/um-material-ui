import { TypographyVisual } from './TypographyVisual';
import { Component, Visual } from '../primitives/index';

export interface DialogContentText
  extends Component<TypographyVisual, DialogContentTextClassKey> {}

export type DialogContentTextClassKey = 'root';

export const DialogContentTextKey = 'DialogContentText';

export default interface DialogContentTextVisual extends Visual<DialogContentText> {
    type: typeof DialogContentTextKey;
}
