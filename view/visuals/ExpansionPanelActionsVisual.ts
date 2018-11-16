import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface ExpansionPanelActions
  extends Component<HTMLDivElement, ExpansionPanelActionsClassKey> {}

export type ExpansionPanelActionsClassKey = 'root' | 'action';

export const ExpansionPanelActionsKey = 'ExpansionPanelActions';

export default interface ExpansionPanelActionsVisual extends Visual<ExpansionPanelActions> {
    type: typeof ExpansionPanelActionsKey;
}
