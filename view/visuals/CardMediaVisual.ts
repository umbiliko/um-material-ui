import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface CardMedia
    extends Component<HTMLDivElement, CardMediaClassKey> {
    component?: CardMediaVisual['type'];
    image?: string;
    src?: string;
}

export type CardMediaClassKey = 'root' | 'media';

export const CardMediaKey = 'CardMedia';

export default interface CardMediaVisual extends Visual<CardMedia> {
    type: typeof CardMediaKey;
}
