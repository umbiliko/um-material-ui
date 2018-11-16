import { HTMLLabelElement } from './native/HtmlElementVisual';
import { Component, Element, Node, Ref, Visual } from '../primitives/index';
import { ChangeEventHandler } from '../handlers/index'

export interface FormControlLabel
    extends Component<HTMLLabelElement, FormControlLabelClassKey, 'onChange'> {
    checked?: boolean | string;
    control: Element<any>;
    disabled?: boolean;
    inputRef?: Ref;
    label: Node;
    name?: string;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
    value?: string;
}

export type FormControlLabelClassKey = 'root' | 'start' | 'disabled' | 'label';

export interface FormControlLabelHandler {
    onChange?: ChangeEventHandler<boolean>;
}

export const FormControlLabelKey = 'FormControlLabel';

export default interface FormControlLabelVisual extends Visual<FormControlLabel> {
    type: typeof FormControlLabelKey;
}
