import TransitionEvent from '../events/TransitionEvent';
import EventHandler from '../primitives/EventHandler';

type TransitionHandler = EventHandler<TransitionEvent>;

export default TransitionHandler;