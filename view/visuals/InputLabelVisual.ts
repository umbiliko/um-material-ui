import { FormLabel } from './FormLabelVisual';
import { Component, Visual } from '../primitives/index';

export interface InputLabel extends Component<FormLabel, InputLabelClassKey> {
    disableAnimation?: boolean;
    disabled?: boolean;
    error?: boolean;
    FormLabelClasses?: FormLabel['classes'];
    focused?: boolean;
    required?: boolean;
    shrink?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
}

export type InputLabelClassKey =
    | 'root'
    | 'focused'
    | 'disabled'
    | 'error'
    | 'required'
    | 'formControl'
    | 'marginDense'
    | 'shrink'
    | 'animated'
    | 'filled'
    | 'outlined';

export const InputLabelKey = 'InputLabel';

export default interface InputLabelVisual extends Visual<InputLabel> {
    type: typeof InputLabelKey;
}
