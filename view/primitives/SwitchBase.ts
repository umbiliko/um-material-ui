import { ChangeEvent, InputHTMLAttributes } from 'react';
import { IconButtonVisual } from '../visuals/IconButtonVisual';
import { Component, Node, Ref } from './index';

export interface SwitchBase
    extends Component<IconButtonVisual, SwitchBaseClassKey, 'onChange' | 'value'> {
    autoFocus?: boolean;
    checked?: boolean | string;
    checkedIcon: Node;
    defaultChecked?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    icon: Node;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    inputRef?: Ref;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    value?: string | number | boolean;
}

export type SwitchBaseClassKey = 'root' | 'checked' | 'disabled' | 'input';
