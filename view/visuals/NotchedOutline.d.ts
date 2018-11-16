
import { StandardVisual, PropTypes } from '..';
import { Component, Visual } from '../primitives/index';

export interface NotchedOutlineProps
  extends StandardVisual<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, NotchedOutlineClassKey> {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  labelWidth: number;
  notched: boolean;
}

export type NotchedOutlineClassKey = 'root' | 'legend' | 'focused' | 'error' | 'disabled';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
