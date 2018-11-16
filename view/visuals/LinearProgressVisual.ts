import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface LinearProgress
    extends Component<HTMLDivElement, LinearProgressClassKey> {
    color?: 'primary' | 'secondary';
    value?: number;
    valueBuffer?: number;
    variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}

export type LinearProgressClassKey =
    | 'root'
    | 'colorPrimary'
    | 'colorSecondary'
    | 'buffer'
    | 'query'
    | 'dashed'
    | 'dashedColorPrimary'
    | 'dashedColorSecondary'
    | 'bar'
    | 'barColorPrimary'
    | 'barColorSecondary'
    | 'bar1Indeterminate'
    | 'bar2Indeterminate'
    | 'bar1Determinate'
    | 'bar1Buffer'
    | 'bar2Buffer';

export const LinearProgressKey = 'LinearProgress';

export default interface LinearProgressVisual extends Visual<LinearProgress> {
    type: typeof LinearProgressKey;
}
