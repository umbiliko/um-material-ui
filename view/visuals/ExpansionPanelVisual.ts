import { Collapse } from './CollapseVisual';
import { Paper } from './PaperVisual';
import { Component, Visual } from '../primitives/index';

export interface ExpansionPanel
    extends Component<Paper, ExpansionPanelClassKey, 'onChange'> {
    CollapseProps?: Partial<Collapse>;
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}

export type ExpansionPanelClassKey = 'root' | 'expanded' | 'disabled';

export const ExpansionPanelKey = 'ExpansionPanel';

export default interface ExpansionPanelVisual extends Visual<ExpansionPanel> {
    type: typeof ExpansionPanelKey;
}
