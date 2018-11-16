

import { FormGroupVisual, FormGroupClassKey } from './FormGroupVisual';
import { Component, Visual } from '../primitives/index';

export interface RadioGroupVisual
  extends Component<FormGroupVisual, RadioGroupClassKey, 'onChange'> {
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  value?: string;
}

export type RadioGroupClassKey = FormGroupClassKey;

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}