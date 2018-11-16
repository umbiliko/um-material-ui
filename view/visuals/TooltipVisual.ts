

import { Transition } from '../primitives/Transition';
import { Component, Visual } from '../primitives/index';

export interface TooltipVisual
  extends Component<React.HTMLAttributes<HTMLDivElement>, TooltipClassKey, 'title'> {
  children: React.ReactElement<any>;
  disableFocusListener?: boolean;
  disableHoverListener?: boolean;
  disableTouchListener?: boolean;
  enterDelay?: number;
  enterTouchDelay?: number;
  id?: string;
  interactive?: boolean;
  leaveDelay?: number;
  leaveTouchDelay?: number;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  PopperProps?: object;
  title: Node;
  TransitionComponent?: VisualType;
  TransitionProps?: Transition;
}

export type TooltipClassKey =
  | 'popper'
  | 'tooltip'
  | 'touch'
  | 'tooltipPlacementLeft'
  | 'tooltipPlacementRight'
  | 'tooltipPlacementTop'
  | 'tooltipPlacementBottom';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}