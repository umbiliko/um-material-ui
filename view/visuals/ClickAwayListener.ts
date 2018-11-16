import { Node } from '../primitives/index';

export interface ClickAwayListener {
    children: Node;
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;
    onClickAway: (event: React.ChangeEvent<{}>) => void;
    touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;
}
