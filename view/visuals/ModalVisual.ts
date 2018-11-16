import ModalManager from './ModalManager';
import BackdropVisual, { Backdrop } from './BackdropVisual';
import { PortalVisual } from './PortalVisual';
import { Component, Visual } from '../primitives/index';

export interface Modal
  extends Component<React.HtmlHTMLAttributes<HTMLDivElement>, ModalClassKey> {
  BackdropComponent?: BackdropVisual['type'];
  BackdropProps?: Partial<Backdrop>;
  container?: 'div' | PortalVisual['container'];
  disableAutoFocus?: boolean;
  disableBackdropClick?: boolean;
  disableEnforceFocus?: boolean;
  disableEscapeKeyDown?: boolean;
  disablePortal?: PortalVisual['disablePortal'];
  disableRestoreFocus?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
  manager?: ModalManager;
  onBackdropClick?: React.ReactEventHandler<{}>;
  onClose?: React.ReactEventHandler<{}>;
  onEscapeKeyDown?: React.ReactEventHandler<{}>;
  onRendered?: PortalVisual['onRendered'];
  open: boolean;
}

export type ModalClassKey = 'root' | 'hidden';

export const ModalKey = 'Modal';

export default interface Visual extends Visual<Modal> {
    type: typeof ModalKey;
}
