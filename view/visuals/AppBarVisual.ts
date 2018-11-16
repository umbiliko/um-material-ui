import { Color } from '../domains/index';
import { Component, Visual } from '../primitives/index';
import { Paper } from './PaperVisual';

export interface AppBar extends Component<Paper, AppBarClassKey> {
    color?: Color;
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

export type AppBarClassKey =
    | 'root'
    | 'positionFixed'
    | 'positionAbsolute'
    | 'positionSticky'
    | 'positionStatic'
    | 'positionRelative'
    | 'colorDefault'
    | 'colorPrimary'
    | 'colorSecondary';

export const AppBarKey = 'AppBarVisual';

export default interface AppBarVisual extends Visual<AppBar> {
    type: typeof AppBarKey;
}
