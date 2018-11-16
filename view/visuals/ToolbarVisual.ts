

import { Component, Visual } from '../primitives/index';

export interface ToolbarVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, ToolbarClassKey> {
  variant?: 'regular' | 'dense';
  disableGutters?: boolean;
}

export type ToolbarClassKey = 'root' | 'gutters' | 'regular' | 'dense';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}