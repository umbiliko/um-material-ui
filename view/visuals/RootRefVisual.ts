
import { Component, Visual } from '../primitives/index';

export interface RootRefVisual<T = any> {
  rootRef?: ((instance: T | null) => void) | React.RefObject<T>;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}