import { ReactElement, ReactInstance } from 'react';
import { Component, Visual } from '../primitives/index';

export interface PortalVisual {
  children: ReactElement<any>;
  container?: ReactInstance | (() => ReactInstance) | null;
  disablePortal?: boolean;
  onRendered?: () => void;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}