import { Component, Visual } from '../primitives/index';

export interface ListItemSecondaryAction
  extends Component<{}, ListItemSecondaryActionClassKey> {}

export type ListItemSecondaryActionClassKey = 'root';

export const ListItemSecondaryActionKey = 'ListItemSecondaryAction';

export default interface ListItemSecondaryActionVisual extends Visual<ListItemSecondaryAction> {
    type: typeof ListItemSecondaryActionKey;
}
