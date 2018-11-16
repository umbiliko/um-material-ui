import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface CircularProgress
  extends Component<HTMLDivElement, CircularProgressClassKey> {
  color?: 'primary' | 'secondary' | 'inherit';
  disableShrink?: boolean;
  size?: number | string;
  thickness?: number;
  value?: number;
  variant?: 'determinate' | 'indeterminate' | 'static';
}

export type CircularProgressClassKey =
  | 'root'
  | 'static'
  | 'indeterminate'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'svg'
  | 'circle'
  | 'circleStatic'
  | 'circleIndeterminate'
  | 'circleDisableShrink';

export const CircularProgressKey = 'CircularProgress';

export default interface CircularProgressVisual extends Visual<CircularProgress> {
    type: typeof CircularProgressKey;
}
