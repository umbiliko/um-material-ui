import { Breakpoint } from './Breakpoints';
import HiddenCss from './HiddenCss';

export default interface HiddenJs extends HiddenCss{
    initialWidth?: Breakpoint;
}