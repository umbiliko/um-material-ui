
import { DrawerVisual } from './DrawerVisual';
import { Component, Visual } from '../primitives/index';

export interface SwipeableDrawerVisual extends Omit<DrawerVisual, 'onClose' | 'open'> {
  disableBackdropTransition?: boolean;
  disableDiscovery?: boolean;
  disableSwipeToOpen?: boolean;
  hysteresis?: number;
  minFlingVelocity?: number;
  onClose: React.ReactEventHandler<{}>;
  onOpen: React.ReactEventHandler<{}>;
  open: boolean;
  swipeAreaWidth?: number;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
