

import { Margin } from '../domains/index';
import { FormControlClassKey, FormControlVisual } from './FormControlVisual';
import { FormHelperTextVisual } from './FormHelperTextVisual';
import { InputVisual as StandardInputVisual } from './InputVisual';
import { FilledInputVisual } from './FilledInputVisual';
import { OutlinedInputVisual } from './OutlinedInputVisual';
import { InputLabelVisual } from './InputLabelVisual';
import { SelectVisual } from './SelectVisual';
import { Component, Visual } from '../primitives/index';

export interface BaseTextFieldProps
  extends Component<FormControlVisual, TextFieldClassKey, 'onChange' | 'defaultValue'> {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: Node;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: Partial<FormHelperTextVisual>;
  fullWidth?: boolean;
  helperText?: Node;
  id?: string;
  InputLabelProps?: Partial<InputLabelVisual>;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  label?: Node;
  margin?: Margin;
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  select?: boolean;
  SelectProps?: Partial<SelectVisual>;
  type?: string;
  value?: Array<string | number | boolean> | string | number | boolean;
}

export interface StandardTextFieldVisual extends BaseTextFieldProps {
  variant?: 'standard';
  InputProps?: Partial<StandardInputVisual>;
  inputProps?: StandardInputVisual['inputProps'];
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}

export interface FilledTextFieldVisual extends BaseTextFieldProps {
  variant: 'filled';
  InputProps?: Partial<FilledInputVisual>;
  inputProps?: FilledInputVisual['inputProps'];
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}

export interface OutlinedTextFieldVisual extends BaseTextFieldProps {
  variant: 'outlined';
  InputProps?: Partial<OutlinedInputVisual>;
  inputProps?: OutlinedInputVisual['inputProps'];
}


export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}

export type TextFieldVisual = StandardTextFieldVisual | FilledTextFieldVisual | OutlinedTextFieldVisual;

export type TextFieldClassKey = FormControlClassKey;

