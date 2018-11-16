
import { ReferenceObject } from 'PopperVisual.js';
import { PortalVisual } from './Portal';
import { Transition } from '../primitives/Transition';
import { Component, Visual } from '../primitives/index';

export type PopperPlacementType =
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

export interface PopperVisual extends React.HTMLAttributes<HTMLDivElement> {
  transition?: boolean;
  anchorEl?: null | HTMLElement | ReferenceObject | ((element: HTMLElement) => HTMLElement);
  children:
    | Node
    | ((
        props: {
          placement: PopperPlacementType;
          TransitionProps?: TransitionProps;
        },
      ) => Node);
  container?: PortalProps['container'];
  disablePortal?: PortalProps['disablePortal'];
  keepMounted?: boolean;
  modifiers?: object;
  open: boolean;
  placement?: PopperPlacementType;
  popperOptions?: object;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}

