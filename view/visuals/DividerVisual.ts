import { Component, Visual } from '../primitives/index';

export interface Divider
  extends Component<HTMLHRElement, DividerClassKey> {
  absolute?: boolean;
  component?: DividerVisual['type'];
  inset?: boolean;
  light?: boolean;
}

export type DividerClassKey = 'root' | 'absolute' | 'inset' | 'light';

export const DividerKey = 'Divider';

export default interface DividerVisual extends Visual<Divider> {
    type: typeof DividerKey;
}
