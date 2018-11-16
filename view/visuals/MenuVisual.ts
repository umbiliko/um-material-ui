import { PopoverVisual } from './PopoverVisual';
import { MenuListVisual } from './MenuListVisual';
import { PaperVisual } from './PaperVisual';

import { TransitionHandler, Transition } from '../primitives/Transition';
import { Component, Visual } from '../primitives/index';

export interface MenuVisual
  extends Component<PopoverVisual & Partial<TransitionHandler>, MenuClassKey> {
  disableAutoFocusItem?: boolean;
  MenuListProps?: Partial<MenuListVisual>;
  PaperProps?: Partial<PaperVisual>;
  PopoverClasses?: PopoverVisual['classes'];
  transitionDuration?: Transition['timeout'] | 'auto';
}

export type MenuClassKey = 'paper';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}