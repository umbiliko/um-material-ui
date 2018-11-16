

import { PaperVisual } from './Paper';
import { Component, Visual } from '../primitives/index';

export type Orientation = 'horizontal' | 'vertical';

export interface StepperVisual extends Component<PaperVisual, StepperClasskey> {
  activeStep?: number;
  alternativeLabel?: boolean;
  children: Node;
  connector?: React.ReactElement<any> | Node;
  nonLinear?: boolean;
  orientation?: Orientation;
}

export type StepperClasskey = 'root' | 'horizontal' | 'vertical' | 'alternativeLabel';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}