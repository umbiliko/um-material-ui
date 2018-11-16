

import { Component, Visual } from '../primitives/index';

export interface TabIndicatorVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, TabIndicatorClassKey> {
  color: 'secondary' | 'primary' | string;
  style: { left: number; width: number };
}

export type TabIndicatorClassKey = 'root' | 'colorSecondary' | 'colorPrimary';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
