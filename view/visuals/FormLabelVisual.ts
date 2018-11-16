import { HTMLLabelElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface FormLabel extends Component<HTMLLabelElement, FormLabelClassKey> {
    component?: 'div' | 'label' | 'span';
    disabled?: boolean;
    error?: boolean;
    filled?: boolean;
    focused?: boolean;
    required?: boolean;
}

export type FormLabelClassKey =
  | 'root'
  | 'focused'
  | 'disabled'
  | 'error'
  | 'filled'
  | 'required'
  | 'asterisk';

export const FormLabelKey = 'FormLabel';

export default interface FormLabelVisual extends Visual<FormLabel> {
    type: typeof FormLabelKey;
}
