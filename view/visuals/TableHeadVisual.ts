
import HtmlElementTag from './native/HtmlElementTag';
import { HTMLTableSectionElement } from './native/HtmlElementVisual';
import { Component, Visual } from '../primitives/index';

export interface TableHeadVisual extends Component<HTMLTableSectionElement, TableHeadClassKey> {
    component?: typeof HtmlElementTag.thead;
}

export type TableHeadClassKey = 'root';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
