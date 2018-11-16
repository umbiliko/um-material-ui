import { ButtonBase } from '../primitives/index';
import { IconButtonVisual } from './IconButtonVisual';
import { Component, Node, Visual } from '../primitives/index';

export interface ExpansionPanelSummary
    extends Component<ButtonBase, ExpansionPanelSummaryClassKey> {
    disabled?: boolean;
    expanded?: boolean;
    expandIcon?: Node;
    IconButtonProps?: Partial<IconButtonVisual>;
    onChange?: React.ReactEventHandler<{}>;
}

export type ExpansionPanelSummaryClassKey =
  | 'root'
  | 'expanded'
  | 'focused'
  | 'disabled'
  | 'content'
  | 'expandIcon';

export const ExpansionPanelSummaryKey = 'ExpansionPanelSummary';

export default interface ExpansionPanelSummaryVisual extends Visual<ExpansionPanelSummary> {
    type: typeof ExpansionPanelSummaryKey;
}