import { InputBase } from '../primitives/InputBase';
import { Component, Visual } from '../primitives/index';

export interface FilledInput extends Component<InputBase, FilledInputClassKey> {}

export type FilledInputClassKey =
  | 'root'
  | 'underline'
  | 'focused'
  | 'disabled'
  | 'adornedStart'
  | 'adornedEnd'
  | 'error'
  | 'multiline'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputAdornedStart'
  | 'inputAdornedEnd';

export const FilledInputKey = 'FilledInput';

export default interface FilledInputVisual extends Visual<FilledInput> {
    type: typeof FilledInputKey;
}
