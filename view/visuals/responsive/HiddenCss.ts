import { Breakpoint } from './Breakpoints';

export default interface HiddenCss {
    lgDown?: boolean;
    lgUp?: boolean;
    mdDown?: boolean;
    mdUp?: boolean;
    only?: Breakpoint | Breakpoint[];
    smDown?: boolean;
    smUp?: boolean;
    xlDown?: boolean;
    xlUp?: boolean;
    xsDown?: boolean;
    xsUp?: boolean;
}

