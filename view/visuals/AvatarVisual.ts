import { Component, Visual } from '../primitives/index';
import { HTMLImageElement, HTMLDivElement } from './native/HtmlElementVisual';

export interface Avatar extends Component<HTMLDivElement, AvatarClassKey> {
  alt?: string;
  childrenClassName?: string;
  component?: AvatarVisual['type'];
  imgProps?: HTMLImageElement;
  sizes?: string;
  src?: string;
  srcSet?: string;
}

export type AvatarClassKey = 'root' | 'colorDefault' | 'img';

export const AvatarKey = 'Avatar';

export default interface AvatarVisual extends Visual<Avatar> {
    type: typeof AvatarKey;
}
