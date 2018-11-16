import { Paper } from './PaperVisual';
import { Component, Visual } from '../primitives/index';

export interface Card extends Component<Paper, CardClassKey> {
    raised?: boolean;
}

export type CardClassKey = 'root';

export const CardKey = 'Card';

export default interface CardVisual extends Visual<Card> {
    type: typeof CardKey;
}

