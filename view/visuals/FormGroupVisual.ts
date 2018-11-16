import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface FormGroup
    extends Component<HTMLDivElement, FormGroupClassKey> {
    row?: boolean;
}
export type FormGroupClassKey = 'root' | 'row';

export const FormGroupKey = 'FormGroup';

export default interface FormGroupVisual extends Visual<FormGroup> {
    type: typeof FormGroupKey;
}
