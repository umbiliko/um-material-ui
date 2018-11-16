

import { PaperVisual } from './PaperVisual';
import { ModalVisual } from './ModalVisual';
import { TransitionHandler, Transition } from '../primitives/Transition';
import { Component, Visual } from '../primitives/index';

export interface PopoverOrigin {
  horizontal: 'left' | 'center' | 'right' | number;
  vertical: 'top' | 'center' | 'bottom' | number;
}

export interface PopoverPosition {
  top: number;
  left: number;
}

export type PopoverReference = 'anchorEl' | 'anchorPosition' | 'none';

export interface PopoverVisual
  extends Component<ModalVisual & Partial<TransitionHandler>, PopoverClassKey, 'children'> {
  action?: (actions: PopoverActions) => void;
  anchorEl?: null | HTMLElement | ((element: HTMLElement) => HTMLElement);
  anchorOrigin?: PopoverOrigin;
  anchorPosition?: PopoverPosition;
  anchorReference?: PopoverReference;
  children?: Node;
  elevation?: number;
  getContentAnchorEl?: null | ((element: HTMLElement) => HTMLElement);
  marginThreshold?: number;
  modal?: boolean;
  ModalClasses?: ModalVisual['classes'];
  PaperProps?: Partial<PaperVisual>;
  role?: string;
  transformOrigin?: PopoverOrigin;
  TransitionComponent?: VisualType;
  transitionDuration?: Transition['timeout'] | 'auto';
  TransitionProps?: Transition;
}

export type PopoverClassKey = 'paper';

export interface PopoverActions {
  updatePosition(): void;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}