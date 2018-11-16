import { CSSProperties } from 'react';
import { StyledVisual } from '../visuals/StyledVisual';
import { HTMLElement } from '../visuals/native/HtmlElementVisual';

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type Component<C extends (HTMLElement | Component<HTMLElement, ClassKey>), ClassKey extends string, Removals extends keyof C = never> = Omit<
    C,
    'classes' | Removals
    > &
    StyledVisual<ClassKey> & {
    className?: string;
    style?: CSSProperties;
};