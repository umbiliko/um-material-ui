
import { StandardVisual, PropTypes } from '..';
import { InputBaseVisual } from '../primitives/InputBase';
import { Component, Visual } from '../primitives/index';

export interface OutlinedInputVisual extends StandardVisual<InputBaseVisual, OutlinedInputClassKey> {
  notched?: boolean;
  labelWidth: number;
}

export type OutlinedInputClassKey =
  | 'root'
  | 'focused'
  | 'disabled'
  | 'adornedStart'
  | 'adornedEnd'
  | 'error'
  | 'multiline'
  | 'notchedOutline'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputAdornedStart'
  | 'inputAdornedEnd';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}