import { CSSProperties } from 'react';
import Element from './Element';
import HtmlElementTag from './HtmlElementTag';
import { Alignment } from '../../domains/index';

export interface Document { }
export interface DataTransfer { }
export interface StyleMedia { }

export interface HTMLElement extends Element {
    style: CSSProperties;
}

export interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    type?: string;
}

export interface HTMLAreaElement extends HTMLElement { }
export interface HTMLAudioElement extends HTMLElement { }
export interface HTMLBaseElement extends HTMLElement { href: string; target: string; }
export interface HTMLBodyElement extends HTMLElement { }

export interface HTMLBRElement extends HTMLElement {
    align: Alignment;
    color: string;
    noshade: boolean;
    size: string;
    width: string;
}

export interface HTMLButtonElement extends HTMLElement {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: string;
    value?: string | string[] | number;
}

export interface HTMLCanvasElement extends HTMLElement { }
export interface HTMLDataListElement extends HTMLElement { }
export interface HTMLDetailsElement extends HTMLElement { }
export interface HTMLDialogElement extends HTMLElement { }

export interface HTMLDivElement extends HTMLElement {
    title: string;
}

export interface HTMLDListElement extends HTMLElement { }
export interface HTMLEmbedElement extends HTMLElement { }
export interface HTMLFieldSetElement extends HTMLElement { }
export interface HTMLFormElement extends HTMLElement { }
export interface HTMLHeadingElement extends HTMLElement { align: Alignment }
export interface HTMLHeadElement extends HTMLElement { }
export interface HTMLHRElement extends HTMLElement { }
export interface HTMLHtmlElement extends HTMLElement { }
export interface HTMLHyperlinkElementUtils { }
export interface HTMLIFrameElement extends HTMLElement { }
export interface HTMLImageElement extends HTMLElement { }
export interface HTMLInputElement extends HTMLElement { }

export interface HTMLLabelElement extends HTMLElement {
    form?: string;
    htmlFor?: string;
}

export interface HTMLLegendElement extends HTMLElement { }

export interface HTMLLIElement extends HTMLElement {
    value?: string | string[] | number;
}

export interface HTMLLinkElement extends HTMLElement { }
export interface HTMLMapElement extends HTMLElement { }
export interface HTMLMetaElement extends HTMLElement { }
export interface HTMLObjectElement extends HTMLElement { }
export interface HTMLOListElement extends HTMLElement { }
export interface HTMLOptGroupElement extends HTMLElement { }
export interface HTMLOptionElement extends HTMLElement { }
export interface HTMLParagraphElement extends HTMLElement { }
export interface HTMLParamElement extends HTMLElement { }
export interface HTMLPictureElement extends HTMLElement { }
export interface HTMLPreElement extends HTMLElement { }
export interface HTMLProgressElement extends HTMLElement { }
export interface HTMLQuoteElement extends HTMLElement { }
export interface HTMLScriptElement extends HTMLElement { }
export interface HTMLSelectElement extends HTMLElement { }
export interface HTMLSourceElement extends HTMLElement { }
export interface HTMLSpanElement extends HTMLElement { }
export interface HTMLStyleElement extends HTMLElement { }
export interface HTMLTableElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTableDataCellElement extends HTMLElement { }
export interface HTMLTextAreaElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTableHeaderCellElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTitleElement extends HTMLElement { }
export interface HTMLTableRowElement extends HTMLElement { }
export interface HTMLTrackElement extends HTMLElement { }
export interface HTMLUListElement extends HTMLElement { }
export interface HTMLVideoElement extends HTMLElement { }
export interface HTMLTableColElement extends HTMLElement { }
export interface HTMLHtmlElement extends HTMLElement { }
export interface HTMLIFrameElement extends HTMLElement { }
export interface HTMLImageElement extends HTMLElement { }
export interface HTMLInputElement extends HTMLElement { }
export interface HTMLLabelElement extends HTMLElement { }
export interface HTMLLegendElement extends HTMLElement { }
export interface HTMLLIElement extends HTMLElement { }
export interface HTMLLinkElement extends HTMLElement { }
export interface HTMLMapElement extends HTMLElement { }
export interface HTMLMetaElement extends HTMLElement { }
export interface HTMLMeterElement extends HTMLElement { }
export interface HTMLModElement extends HTMLElement { }
export interface HTMLObjectElement extends HTMLElement { }
export interface HTMLOListElement extends HTMLElement { }
export interface HTMLOptGroupElement extends HTMLElement { }
export interface HTMLOptionElement extends HTMLElement { }
export interface HTMLParagraphElement extends HTMLElement { }
export interface HTMLParamElement extends HTMLElement { }
export interface HTMLPreElement extends HTMLElement { }
export interface HTMLProgressElement extends HTMLElement { }
export interface HTMLQuoteElement extends HTMLElement { }
export interface HTMLScriptElement extends HTMLElement { }
export interface HTMLSelectElement extends HTMLElement { }
export interface HTMLSourceElement extends HTMLElement { }
export interface HTMLSpanElement extends HTMLElement { }
export interface HTMLStyleElement extends HTMLElement { }
export interface HTMLTableElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTableDataCellElement extends HTMLElement { }
export interface HTMLTextAreaElement extends HTMLElement { }
export interface HTMLTableColElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTableHeaderCellElement extends HTMLElement { }
export interface HTMLTableSectionElement extends HTMLElement { }
export interface HTMLTitleElement extends HTMLElement { }
export interface HTMLTableRowElement extends HTMLElement { }
export interface HTMLTimeElement extends  HTMLElement { dateTime: Date; }
export interface HTMLTrackElement extends HTMLElement { }
export interface HTMLUListElement extends HTMLElement { }
export interface HTMLVideoElement extends HTMLElement { }
export interface HTMLWebViewElement extends HTMLElement { }

export interface Text { }
export interface TouchList { }
export interface WebGLRenderingContext { }

export default interface HtmlElementVisual {
    a: HTMLAnchorElement & { type: typeof HtmlElementTag.a; };
    abbr: HTMLElement & { type: typeof HtmlElementTag.abbr; };
    acronym: HTMLElement & { type: typeof HtmlElementTag.acronym; };
    address: HTMLElement & { type: typeof HtmlElementTag.address; };
    applet: HTMLElement & { type: typeof HtmlElementTag.applet; };
    area: HTMLAreaElement & { type: typeof HtmlElementTag.area; };
    article: HTMLElement & { type: typeof HtmlElementTag.article; };
    aside: HTMLElement & { type: typeof HtmlElementTag.aside; };
    audio: HTMLAudioElement & { type: typeof HtmlElementTag.audio; };
    b: HTMLElement & { type: typeof HtmlElementTag.b; };
    base: HTMLElement & { type: typeof HtmlElementTag.base; };
    basefont: HTMLElement & { type: typeof HtmlElementTag.basefont; };
    bdi: HTMLElement & { type: typeof HtmlElementTag.bdi; };
    bdo: HTMLElement & { type: typeof HtmlElementTag.bdo; };
    big: HTMLElement & { type: typeof HtmlElementTag.big; };
    blockquote: HTMLElement & { type: typeof HtmlElementTag.blockquote; };
    body: HTMLBodyElement & { type: typeof HtmlElementTag.body; };
    br: HTMLBRElement & { type: typeof HtmlElementTag.br; };
    button: HTMLButtonElement & { type: typeof HtmlElementTag.button; };
    canvas: HTMLCanvasElement & { type: typeof HtmlElementTag.canvas; };
    caption: HTMLElement & { type: typeof HtmlElementTag.caption; };
    center: HTMLElement & { type: typeof HtmlElementTag.center; };
    cite: HTMLElement & { type: typeof HtmlElementTag.cite; };
    code: HTMLElement & { type: typeof HtmlElementTag.code; };
    col: HTMLTableColElement & { type: typeof HtmlElementTag.col; };
    colgroup: HTMLTableSectionElement & { type: typeof HtmlElementTag.colgroup; };
    data: HTMLElement & { type: typeof HtmlElementTag.data; };
    datalist: HTMLDataListElement & { type: typeof HtmlElementTag.datalist; };
    dd: HTMLElement & { type: typeof HtmlElementTag.dd; };
    del: HTMLModElement & { type: typeof HtmlElementTag.del; };
    details: HTMLDetailsElement & { type: typeof HtmlElementTag.details; };
    dfn: HTMLElement & { type: typeof HtmlElementTag.dfn; };
    dialog: HTMLDialogElement & { type: typeof HtmlElementTag.dialog; };
    // dir: HTMLElement & { type: typeof HtmlElementTag.dir; };
    div: HTMLDivElement & { type: typeof HtmlElementTag.div; };
    dl: HTMLDListElement & { type: typeof HtmlElementTag.dl; };
    dt: HTMLElement & { type: typeof HtmlElementTag.dt; };
    em: HTMLElement & { type: typeof HtmlElementTag.em; };
    embed: HTMLEmbedElement & { type: typeof HtmlElementTag.embed; };
    fieldset: HTMLFieldSetElement & { type: typeof HtmlElementTag.fieldset; };
    figcaption: HTMLElement & { type: typeof HtmlElementTag.figcaption; };
    figure: HTMLElement & { type: typeof HtmlElementTag.figure; };
    // font: HTMLElement & { type: typeof HtmlElementTag.font; };
    footer: HTMLElement & { type: typeof HtmlElementTag.footer; };
    form: HTMLFormElement & { type: typeof HtmlElementTag.form; };
    frame: HTMLElement & { type: typeof HtmlElementTag.frame; };
    // frameset: HTMLElement & { type: typeof HtmlElementTag.frameset; };
    h1: HTMLHeadingElement & { type: typeof HtmlElementTag.h1; };
    h2: HTMLHeadingElement & { type: typeof HtmlElementTag.h2; };
    h3: HTMLHeadingElement & { type: typeof HtmlElementTag.h3; };
    h4: HTMLHeadingElement & { type: typeof HtmlElementTag.h4; };
    h5: HTMLHeadingElement & { type: typeof HtmlElementTag.h5; };
    h6: HTMLHeadingElement & { type: typeof HtmlElementTag.h6; };
    head: HTMLHeadElement & { type: typeof HtmlElementTag.head; };
    header: HTMLElement & { type: typeof HtmlElementTag.header; };
    hr: HTMLHRElement & { type: typeof HtmlElementTag.hr; };
    html: HTMLHtmlElement & { type: typeof HtmlElementTag.html; };
    i: HTMLElement & { type: typeof HtmlElementTag.i; };
    iframe: HTMLIFrameElement & { type: typeof HtmlElementTag.iframe; };
    img: HTMLImageElement & { type: typeof HtmlElementTag.img; };
    input: HTMLInputElement & { type: typeof HtmlElementTag.input; };
    ins: HTMLModElement & { type: typeof HtmlElementTag.ins; };
    kbd: HTMLElement & { type: typeof HtmlElementTag.kbd; };
    label: HTMLLabelElement & { type: typeof HtmlElementTag.label; };
    legend: HTMLLegendElement & { type: typeof HtmlElementTag.legend; };
    li: HTMLLIElement & { type: typeof HtmlElementTag.li; };
    link: HTMLLinkElement & { type: typeof HtmlElementTag.link; };
    main: HTMLDivElement & { type: typeof HtmlElementTag.main; };
    map: HTMLMapElement & { type: typeof HtmlElementTag.map; };
    mark: HTMLElement & { type: typeof HtmlElementTag.mark; };
    meta: HTMLMetaElement & { type: typeof HtmlElementTag.meta; };
    meter: HTMLMeterElement & { type: typeof HtmlElementTag.meter; };
    nav: HTMLElement & { type: typeof HtmlElementTag.nav; };
    // noframes: HTMLElement & { type: typeof HtmlElementTag.noframes; };
    noscript:HTMLElement &  { type: typeof HtmlElementTag.noscript; };
    object: HTMLObjectElement & { type: typeof HtmlElementTag.object; };
    ol: HTMLOListElement & { type: typeof HtmlElementTag.ol; };
    optgroup: HTMLOptGroupElement & { type: typeof HtmlElementTag.optgroup; };
    option: HTMLOptionElement & { type: typeof HtmlElementTag.option; };
    output: HTMLElement & { type: typeof HtmlElementTag.output; };
    p: HTMLParagraphElement & { type: typeof HtmlElementTag.p; };
    param: HTMLParamElement & { type: typeof HtmlElementTag.param; };
    picture: HTMLPictureElement & { type: typeof HtmlElementTag.picture; };
    pre: HTMLPreElement & { type: typeof HtmlElementTag.pre; };
    progress: HTMLProgressElement & { type: typeof HtmlElementTag.progress; };
    q: HTMLQuoteElement & { type: typeof HtmlElementTag.q; };
    rp : HTMLElement & { type: typeof HtmlElementTag.rp; };
    rt : HTMLElement & { type: typeof HtmlElementTag.rt; };
    ruby : HTMLElement & { type: typeof HtmlElementTag.ruby; };
    s: HTMLElement & { type: typeof HtmlElementTag.s; };
    samp: HTMLElement & { type: typeof HtmlElementTag.samp; };
    script: HTMLScriptElement & { type: typeof HtmlElementTag.script; };
    section: HTMLDivElement & { type: typeof HtmlElementTag.section; };
    select: HTMLSelectElement & { type: typeof HtmlElementTag.select; };
    small: HTMLElement & { type: typeof HtmlElementTag.small; };
    source: HTMLSourceElement & { type: typeof HtmlElementTag.source; };
    span: HTMLSpanElement & { type: typeof HtmlElementTag.span; };
    strike: HTMLElement & { type: typeof HtmlElementTag.strike; };
    strong: HTMLElement & { type: typeof HtmlElementTag.strong; };
    style: HTMLStyleElement & { type: typeof HtmlElementTag.style; };
    sub: HTMLElement & { type: typeof HtmlElementTag.sub; };
    summary: HTMLElement & { type: typeof HtmlElementTag.summary; };
    sup: HTMLElement & { type: typeof HtmlElementTag.sup; };
    // svg: HTMLElement & { type: typeof HtmlElementTag.svg; };
    table: HTMLTableElement & { type: typeof HtmlElementTag.table; };
    tbody: HTMLTableSectionElement & { type: typeof HtmlElementTag.tbody; };
    td: HTMLTableDataCellElement & { type: typeof HtmlElementTag.td; };
    template: HTMLElement & { type: typeof HtmlElementTag.template; };
    textarea: HTMLTextAreaElement & { type: typeof HtmlElementTag.textarea; };
    tfoot: HTMLTableSectionElement & { type: typeof HtmlElementTag.tfoot; };
    th: HTMLTableHeaderCellElement & { type: typeof HtmlElementTag.th; };
    thead: HTMLTableSectionElement & { type: typeof HtmlElementTag.thead; };
    time: HTMLTimeElement & { type: typeof HtmlElementTag.time; };
    title: HTMLTitleElement & { type: typeof HtmlElementTag.title; };
    tr: HTMLTableRowElement & { type: typeof HtmlElementTag.tr; };
    track: HTMLTrackElement & { type: typeof HtmlElementTag.track; };
    // tt: HTMLElement & { type: typeof HtmlElementTag.tt; };
    u: HTMLElement & { type: typeof HtmlElementTag.u; };
    ul: HTMLUListElement & { type: typeof HtmlElementTag.ul; };
    var: HTMLElement & { type: typeof HtmlElementTag.var; };
    video: HTMLVideoElement & { type: typeof HtmlElementTag.video; };
    wbr: HTMLElement & { type: typeof HtmlElementTag.wbr };
}
