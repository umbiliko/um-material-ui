
import { Component, Visual } from '../primitives/index';

export interface MergeWithListContextProps {
  dense?: boolean;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}