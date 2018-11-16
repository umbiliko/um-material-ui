
import { Color } from '../domains/index';

import { Component, Visual } from '../primitives/index';

export interface SvgIconVisual
  extends Component<React.SVGProps<SVGSVGElement>, SvgIconClassKey> {
  color?: Color | 'action' | 'disabled' | 'error';
  component?: VisualType<SvgIconVisual>;
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
  nativeColor?: string;
  shapeRendering?: string;
  titleAccess?: string;
  viewBox?: string;
}

export type SvgIconClassKey =
  | 'root'
  | 'colorSecondary'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  | 'fontSizeInherit'
  | 'fontSizeSmall'
  | 'fontSizeLarge';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
