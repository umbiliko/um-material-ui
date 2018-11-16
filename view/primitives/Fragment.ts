import Node from './Node';

interface NodeArray extends Array<Node> {}

type Fragment = {} | NodeArray;

export default Fragment;