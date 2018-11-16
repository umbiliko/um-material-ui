import Child from './Child';
import Fragment from './Fragment';
import Portal from './Portal';

type Node = Child | Fragment | Portal | boolean | null | undefined;

export default Node;