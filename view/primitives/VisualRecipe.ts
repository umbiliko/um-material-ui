import Visual from './Visual';

interface SimpleObject {
    [key: string]: any;
}

// configuration: items
// store: children <- context

export default interface VisualRecipe<
        P extends SimpleObject = SimpleObject,
        S extends SimpleObject = SimpleObject,
        C extends SimpleObject = SimpleObject,
        A extends SimpleObject = SimpleObject
    > extends Visual<Omit<P, S & C>> {
    context: {
        [key: string]: keyof C;
    };
    state: {
        [key: string]: keyof S;
    };
    visuals: {

    }
}