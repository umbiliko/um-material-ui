import { Component, Visual } from '../primitives/index';

export interface ListItemAvatar extends Component<{}, ListItemAvatarClassKey> {}

export type ListItemAvatarClassKey = 'root' | 'icon';

export const ListItemAvatarKey = 'ListItemAvatar';

export default interface ListItemAvatarVisual extends Visual<ListItemAvatar> {
    type: typeof ListItemAvatarKey;
}
