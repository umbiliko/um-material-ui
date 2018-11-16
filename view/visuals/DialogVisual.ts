import { Paper } from './PaperVisual';
import { Modal } from './ModalVisual';
import { TransitionHandler, Transition } from '../primitives/Transition';
import { Component, Node, Visual } from '../primitives/index';

export interface Dialog
    extends Component<Modal & Partial<TransitionHandler>, DialogClassKey, 'children'> {
    children?: Node;
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | false;
    PaperProps?: Partial<Paper>;
    scroll?: 'body' | 'paper';
    TransitionComponent?: Component<any, any>;
    transitionDuration?: Transition['timeout'];
    TransitionProps?: Transition;
}

export type DialogClassKey =
  | 'root'
  | 'scrollPaper'
  | 'scrollBody'
  | 'paper'
  | 'paperScrollPaper'
  | 'paperScrollBody'
  | 'paperWidthXs'
  | 'paperWidthSm'
  | 'paperWidthMd'
  | 'paperFullWidth'
  | 'paperFullScreen';

export const DialogKey = 'Dialog';

export default interface DialogVisual extends Visual<Dialog> {
    type: typeof DialogKey;
}
