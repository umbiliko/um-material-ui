

import { PaperVisual } from './Paper';
import { ButtonVisual } from './Button';
import { LinearProgressVisual } from './LinearProgress';
import { Component, Visual } from '../primitives/index';

export interface MobileStepperVisual extends Component<PaperVisual, MobileStepperClassKey> {
  activeStep?: number;
  backButton: React.ReactElement<any>;
  LinearProgressProps?: Partial<LinearProgressProps>;
  nextButton: React.ReactElement<any>;
  position?: 'bottom' | 'top' | 'static';
  steps: number;
  variant?: 'text' | 'dots' | 'progress';
}

export type MobileStepperClassKey =
  | 'root'
  | 'positionBottom'
  | 'positionTop'
  | 'positionStatic'
  | 'dots'
  | 'dot'
  | 'dotActive'
  | 'progress';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
