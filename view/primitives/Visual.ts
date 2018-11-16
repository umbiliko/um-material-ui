import Key from './Key';

export default interface Visual<P> {
    key?: Key;
    props: P;
    type: string;
}

