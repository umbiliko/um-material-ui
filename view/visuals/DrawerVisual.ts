import { Modal } from './ModalVisual';
import { Slide } from './SlideVisual';
import { Paper } from './PaperVisual';
import { Theme } from './Theme';
import { TransitionHandler, Transition } from '../primitives/Transition';
import { Component, Node, Visual } from '../primitives/index';

export interface Drawer
    extends Component<Modal & Partial<TransitionHandler>, DrawerClassKey, 'open' | 'children'> {
    anchor?: 'left' | 'top' | 'right' | 'bottom';
    children?: Node;
    elevation?: number;
    ModalProps?: Partial<Modal>;
    open?: boolean;
    PaperProps?: Partial<Paper>;
    SlideProps?: Partial<Slide>;
    theme?: Theme;
    transitionDuration?: Transition['timeout'];
    variant?: 'permanent' | 'persistent' | 'temporary';
}

export type DrawerClassKey =
  | 'docked'
  | 'paper'
  | 'paperAnchorLeft'
  | 'paperAnchorRight'
  | 'paperAnchorTop'
  | 'paperAnchorBottom'
  | 'paperAnchorDockedLeft'
  | 'paperAnchorDockedTop'
  | 'paperAnchorDockedRight'
  | 'paperAnchorDockedBottom'
  | 'modal';

export const DrawerKey = 'Drawer';

export default interface DrawerVisual extends Visual<Drawer> {
    type: typeof DrawerKey;
}