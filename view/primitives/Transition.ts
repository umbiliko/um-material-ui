import { CSSProperties } from 'react';
import { Node } from './index';

export type EndHandler = (node: HTMLElement, done: () => void) => void;
export type EnterHandler = (node: HTMLElement, isAppearing: boolean) => void;
export type ExitHandler = (node: HTMLElement) => void;

export const UNMOUNTED = 'unmounted';
export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

export interface TransitionActions {
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
}

export type TransitionStatus =
    typeof ENTERING |
    typeof ENTERED |
    typeof EXITING |
    typeof EXITED |
    typeof UNMOUNTED;

export type TransitionChildren = Node | ((status: TransitionStatus) => Node);

export interface Transition extends TransitionActions {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    timeout: number | { enter?: number, exit?: number };
    [prop: string]: any;
    children?: TransitionChildren;
}

export interface TransitionEffects {
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
}

export type TransitionHandlerKeys =
    | 'onEnter'
    | 'onEntering'
    | 'onEntered'
    | 'onExit'
    | 'onExiting'
    | 'onExited';

export type TransitionHandler = Pick<Transition, TransitionHandlerKeys>;

export type TransitionKeys =
    | 'in'
    | 'mountOnEnter'
    | 'unmountOnExit'
    | 'timeout'
    | 'addEndListener'
    | TransitionHandlerKeys;

export interface Transition extends TransitionActions, Partial<Pick<Transition, TransitionKeys>> {
    style?: CSSProperties;
}
