import Visual from './Visual';
import Key from './Key';
import Node from './Node';

export default interface Portal extends Visual<any> {
    key: Key | null;
    children: Node;
}