
import { ButtonBaseVisual } from './ButtonBase/ButtonBase';
import { Component, Visual } from '../primitives/index';

export interface TabScrollButtonProps
  extends Component<ButtonBaseVisual, TabScrollButtonClassKey> {
  direction?: 'left' | 'right';
  visible?: boolean;
}

export type TabScrollButtonClassKey = 'root';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
