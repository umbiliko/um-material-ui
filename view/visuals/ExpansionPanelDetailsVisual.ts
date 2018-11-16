import { HTMLDivElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface ExpansionPanelDetails
  extends Component<HTMLDivElement, ExpansionPanelDetailsClassKey> {}

export type ExpansionPanelDetailsClassKey = 'root';

export const ExpansionPanelDetailsKey = 'ExpansionPanelDetails';

export default interface ExpansionPanelDetailsVisual extends Visual<ExpansionPanelDetails> {
    type: typeof ExpansionPanelDetailsKey;
}