import { HTMLParagraphElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface FormHelperText
    extends Component<HTMLParagraphElement, FormHelperTextClassKey> {
    disabled?: boolean;
    error?: boolean;
    filled?: boolean;
    focused?: boolean;
    component?: 'div' | 'li' | 'p' | 'span';
    margin?: 'dense';
    required?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
}

export type FormHelperTextClassKey =
  | 'root'
  | 'error'
  | 'disabled'
  | 'marginDense'
  | 'focused'
  | 'filled'
  | 'contained'
  | 'required';

export const FormHelperTextKey = 'FormHelperText';

export default interface FormHelperTextVisual extends Visual<FormHelperText> {
    type: typeof FormHelperTextKey;
}
