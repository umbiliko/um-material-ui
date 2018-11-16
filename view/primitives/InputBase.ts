import { Component, Node, Ref } from '../visuals/primitives';
import { ChangeEventHandler, KeyboardEventHandler } from '../handlers/index'

export interface InputBase
    extends Component<HTMLDivElement, InputBaseClassKey, 'onChange' | 'onKeyUp' | 'onKeyDown' | 'defaultValue'> {
    autoComplete?: string;
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    disableUnderline?: boolean;
    endAdornment?: Node;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    inputComponent?: 'input' | 'textarea';
    inputProps?: Input;
    inputRef?: Ref;
    margin?: 'dense' | 'none';
    multiline?: boolean;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    renderPrefix?: (
        state: {
            disabled?: boolean;
            error?: boolean;
            filled?: boolean;
            focused?: boolean;
            margin?: 'dense' | 'none' | 'normal';
            required?: boolean;
            startAdornment?: Node;
        },
    ) => Node;
    rows?: string | number;
    rowsMax?: string | number;
    startAdornment?: Node;
    type?: string;
    value?: Array<string | number | boolean> | string | number | boolean;
    onFilled?: () => void;
    /**
     * `onChange`, `onKeyUp` + `onKeyDown` are applied to the inner `InputComponent`,
     * which by default is an input or textarea. Since these handlers differ from the
     * ones inherited by `React.HTMLAttributes<HTMLDivElement>` we need to omit them.
     *
     * Note that  `blur` and `focus` event handler are applied to the outter `<div>`.
     * So these can just be inherited from the native `<div>`.
     */
    onChange?: ChangeEventHandler;
    onKeyDown?: KeyboardEventHandler;
    onKeyUp?: KeyboardEventHandler;
}

export interface Input extends InputBase {
    // Accommodate arbitrary additional domains coming from the `inputProps` prop
    [arbitrary: string]: any;
}

export type InputBaseClassKey =
  | 'root'
  | 'formControl'
  | 'focused'
  | 'disabled'
  | 'error'
  | 'multiline'
  | 'fullWidth'
  | 'input'
  | 'inputMarginDense'
  | 'inputDisabled'
  | 'inputMultiline'
  | 'inputType'
  | 'inputTypeSearch';
