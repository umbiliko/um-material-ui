import { Alignment, Color } from '../domains/index';
import { CSSProperties } from '../material-ui/withStyles';
import { Component, Visual } from '../primitives/index';

type ThemeStyle =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'display4' // deprecated
    | 'display3'
    | 'display2'
    | 'display1'
    | 'headline'
    | 'title'
    | 'subheading';

type Style = ThemeStyle | 'srOnly';

export interface FontStyle
    extends Required<{
        fontFamily: CSSProperties['fontFamily'];
        fontSize: number;
        fontWeightLight: CSSProperties['fontWeight'];
        fontWeightRegular: CSSProperties['fontWeight'];
        fontWeightMedium: CSSProperties['fontWeight'];
    }> {}

export interface FontStyleOptions extends Partial<FontStyle> {
    htmlFontSize?: number;
    allVariants?: CSSProperties;
    useNextVariants?: boolean;
}

export type TypographyStyle = Required<Pick<CSSProperties, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color'>> &
    Partial<Pick<CSSProperties, 'letterSpacing' | 'lineHeight' | 'textTransform'>>;

export interface Typography
    extends Component<React.HTMLAttributes<HTMLElement>, TypographyClassKey> {
    align?: Alignment;
    color?: Color | 'textPrimary' | 'textSecondary' | 'error';
    component?: 'b' | 'center' | 'div' | 'i' | 'p';
    gutterBottom?: boolean;
    headlineMapping?: { [type in Style]: string };
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: Style | 'inherit';
}

export type TypographyClassKey =
    | 'root'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'alignLeft'
    | 'alignCenter'
    | 'alignRight'
    | 'alignJustify'
    | 'noWrap'
    | 'gutterBottom'
    | 'paragraph'
    | 'colorInherit'
    | 'colorSecondary'
    | 'colorTextSecondary'
    | 'display4' // deprecated
    | 'display3'
    | 'display2'
    | 'display1'
    | 'headline'
    | 'title'
    | 'subheading';

export const TypographyKey = 'Typography';

export default interface TypographyVisual extends Visual<Typography> {
    type: typeof TypographyKey;
}
