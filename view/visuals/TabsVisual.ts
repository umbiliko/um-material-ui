

import { ButtonBase } from '../primitives/ButtonBase';
import { TabIndicatorVisual } from './TabIndicatorVisual';
import { Component, Visual } from '../primitives/index';

export interface TabsVisual
  extends Component<ButtonBase, TabsClassKey, 'onChange' | 'action' | 'component'> {
  action?: (actions: TabsActions) => void;
  centered?: boolean;
  children?: Node;
  component?: VisualType<TabsVisual>;
  fullWidth?: boolean;
  indicatorColor?: 'secondary' | 'primary' | string;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  scrollable?: boolean;
  ScrollButtonComponent?: VisualType;
  scrollButtons?: 'auto' | 'on' | 'off';
  TabIndicatorProps?: Partial<TabIndicatorVisual>;
  textColor?: 'secondary' | 'primary' | 'inherit' | string;
  value: any;
  width?: string;
}

export type TabsClassKey =
  | 'root'
  | 'flexContainer'
  | 'scroller'
  | 'fixed'
  | 'scrollable'
  | 'centered'
  | 'scrollButtons'
  | 'scrollButtonsAuto'
  | 'indicator';

export interface TabsActions {
  updateIndicator(): void;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
