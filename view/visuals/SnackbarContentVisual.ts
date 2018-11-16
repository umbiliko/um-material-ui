

import { PaperVisual } from './Paper';
import { Component, Visual } from '../primitives/index';

export interface SnackbarContentVisual extends Component<PaperVisual, SnackbarContentClassKey> {
  action?: Node;
  message?: Node;
}

export type SnackbarContentClassKey = 'root' | 'message' | 'action';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
