import { Component, Visual } from '../primitives/index';
import { FadeVisual } from './FadeVisual';
import { Transition } from '../primitives/Transition';
import { HTMLDivElement } from './native/HtmlElementVisual';
import { MouseEventHandler } from '../handlers/index';

export interface Backdrop
  extends Component<HTMLDivElement & Partial<FadeVisual>, BackdropClassKey> {
  invisible?: boolean;
  open: boolean;
  transitionDuration?: Transition['timeout'];
}

export type BackdropClassKey = 'root' | 'invisible';

export interface BackdropEffects {
    onClick?: MouseEventHandler;
}

export type BackdropKey = 'Backdrop';

export default interface BackdropVisual extends Visual<Backdrop> {
    type: typeof BackdropKey;
}