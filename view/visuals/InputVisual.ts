import { InputBase } from '../primitives/InputBase';
import { Component, Visual } from '../primitives/index';

export interface Input extends Component<InputBase, InputClassKey> {}

export type InputClassKey =
  | 'root'
  | 'formControl'
  | 'focused'
  | 'disabled'
  | 'underline'
  | 'error'
  | 'multiline'
  | 'fullWidth'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputType'
  | 'inputTypeSearch';

export const InputKey = 'Input';

export default interface InputVisual extends Visual<Input> {
    type: typeof InputKey;
}
