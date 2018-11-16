import Event from './Event';

type EventHandler<E extends Event = Event> = (e: E) => void;

export default EventHandler;