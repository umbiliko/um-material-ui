import HtmlElementVisual from './HtmlElementVisual';
import SvgVisual from './SvgVisual';

type HtmlVisual = HtmlElementVisual & SvgVisual;

export default HtmlVisual;

export { HtmlElementTagKeys } from './HtmlElementTag';
export { SvgTagKeys } from './SvgTag';