import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface DialogTitle
    extends Component<HTMLDivElement, DialogTitleClassKey> {
    disableTypography?: boolean;
}

export type DialogTitleClassKey = 'root';

export const DialogTitleKey = 'DialogTitle';

export default interface DialogTitleVisual extends Visual<DialogTitle> {
    type: typeof DialogTitleKey;
}

