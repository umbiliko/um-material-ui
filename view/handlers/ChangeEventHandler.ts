import ChangeEvent from '../events/ChangeEvent';

type ChangeEventHandler<V = any> = (e: ChangeEvent, value: V) => void;

export default ChangeEventHandler;