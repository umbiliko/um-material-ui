export interface ZIndex {
    mobileStepper: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
}

export type ZIndexOptions = Partial<ZIndex>;
