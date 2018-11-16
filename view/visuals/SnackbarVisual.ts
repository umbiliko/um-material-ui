

import { SnackbarContentVisual } from './SnackbarContentVisual';
import { TransitionHandler, Transition } from '../primitives/Transition';
import { ClickAwayListenerVisual } from './ClickAwayListener';
import { Component, Visual } from '../primitives/index';

export interface SnackbarOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'bottom';
}

export interface SnackbarVisual
  extends Component<
      React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandler>,
      SnackbarClassKey
    > {
  action?: SnackbarContentVisual['action'];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  ClickAwayListenerProps?: Partial<ClickAwayListenerVisual>;
  ContentProps?: Partial<SnackbarContentVisual>;
  disableWindowBlurListener?: boolean;
  message?: SnackbarContentVisual['message'];
  onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  open: boolean;
  resumeHideDuration?: number;
  TransitionComponent?: VisualType;
  transitionDuration?: Transition['timeout'];
  TransitionProps?: Transition;
}

export type SnackbarClassKey =
  | 'root'
  | 'anchorOriginTopCenter'
  | 'anchorOriginBottomCenter'
  | 'anchorOriginTopRight'
  | 'anchorOriginBottomRight'
  | 'anchorOriginTopLeft'
  | 'anchorOriginBottomLeft';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}