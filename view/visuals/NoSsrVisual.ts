
import { Component, Visual } from '../primitives/index';

export interface NoSsrVisual {
  children: Node;
  fallback?: Node;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
