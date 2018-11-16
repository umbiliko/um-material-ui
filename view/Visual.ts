import { ReactInstance } from 'react';

export const AppBar = 'AppBar';
export const Controls = 'Controls';


export interface Visual extends SimpleObject {
    AppBar: {
        key: KeyType | KeyArray;
        type: typeof AppBar;
    },
    Controls: {
        key: KeyType | KeyArray;
        type: typeof Controls;
    }
}

export type Visualizer = (visual: Visual[keyof Visual]) => ReactInstance; // React.ComponentType<AppBarProps>

export type Presenter = (schema: {}, events: {}, root: Visual[keyof Visual]) => ReactInstance;