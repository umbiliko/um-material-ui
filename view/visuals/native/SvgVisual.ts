import Element from './Element';
import SvgTag from './SvgTag';

interface SVGElement extends Element { }
interface SVGSVGElement extends SVGElement { }
interface SVGCircleElement extends SVGElement { }
interface SVGClipPathElement extends SVGElement { }
interface SVGDefsElement extends SVGElement { }
interface SVGDescElement extends SVGElement { }
interface SVGEllipseElement extends SVGElement { }
interface SVGFEBlendElement extends SVGElement { }
interface SVGFEColorMatrixElement extends SVGElement { }
interface SVGFEComponentTransferElement extends SVGElement { }
interface SVGFECompositeElement extends SVGElement { }
interface SVGFEConvolveMatrixElement extends SVGElement { }
interface SVGFEDiffuseLightingElement extends SVGElement { }
interface SVGFEDisplacementMapElement extends SVGElement { }
interface SVGFEDistantLightElement extends SVGElement { }
interface SVGFEFloodElement extends SVGElement { }
interface SVGFEFuncAElement extends SVGElement { }
interface SVGFEFuncBElement extends SVGElement { }
interface SVGFEFuncGElement extends SVGElement { }
interface SVGFEFuncRElement extends SVGElement { }
interface SVGFEGaussianBlurElement extends SVGElement { }
interface SVGFEImageElement extends SVGElement { }
interface SVGFEMergeElement extends SVGElement { }
interface SVGFEMergeNodeElement extends SVGElement { }
interface SVGFEMorphologyElement extends SVGElement { }
interface SVGFEOffsetElement extends SVGElement { }
interface SVGFEPointLightElement extends SVGElement { }
interface SVGFESpecularLightingElement extends SVGElement { }
interface SVGFESpotLightElement extends SVGElement { }
interface SVGFETileElement extends SVGElement { }
interface SVGFETurbulenceElement extends SVGElement { }
interface SVGFilterElement extends SVGElement { }
interface SVGForeignObjectElement extends SVGElement { }
interface SVGGElement extends SVGElement { }
interface SVGImageElement extends SVGElement { }
interface SVGLineElement extends SVGElement { }
interface SVGLinearGradientElement extends SVGElement { }
interface SVGMarkerElement extends SVGElement { }
interface SVGMaskElement extends SVGElement { }
interface SVGMetadataElement extends SVGElement { }
interface SVGPathElement extends SVGElement { }
interface SVGPatternElement extends SVGElement { }
interface SVGPolygonElement extends SVGElement { }
interface SVGPolylineElement extends SVGElement { }
interface SVGRadialGradientElement extends SVGElement { }
interface SVGRectElement extends SVGElement { }
interface SVGStopElement extends SVGElement { }
interface SVGSwitchElement extends SVGElement { }
interface SVGSymbolElement extends SVGElement { }
interface SVGTextElement extends SVGElement { }
interface SVGTextPathElement extends SVGElement { }
interface SVGTSpanElement extends SVGElement { }
interface SVGUseElement extends SVGElement { }
interface SVGViewElement extends SVGElement { }

export default interface SvgVisual {
    svg: SVGElement & { type: typeof SvgTag.svg; };
}