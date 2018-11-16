

import { InputVisual } from './InputVisual';
import { NativeSelectInputVisual } from './NativeSelectInputVisual';
import { Component, Visual } from '../primitives/index';

export interface NativeSelectVisual
  extends Component<InputVisual, NativeSelectClassKey, 'value' | 'onChange'>,
    Pick<NativeSelectInputVisual, 'onChange'> {
  IconComponent?: VisualType;
  input?: Node;
  value?: string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type NativeSelectClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  | 'filled'
  | 'outlined';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
