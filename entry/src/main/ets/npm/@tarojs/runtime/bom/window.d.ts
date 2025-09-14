// @ts-nocheck
import { TaroEventTarget } from '../dom/eventTarget';
import { getComputedStyle } from './getComputedStyle';
import type { TaroDocument } from '../dom/document';
export declare class Window extends TaroEventTarget {
    _doc: TaroDocument;
    __taroAppConfig: any;
    __ohos: any;
    location: any;
    history: any;
    navigator: Navigator;
    getComputedStyle: typeof getComputedStyle;
    constructor();
    get document(): TaroDocument;
    get devicePixelRatio(): number;
    setTimeout(...args: Parameters<typeof setTimeout>): void;
    clearTimeout(...args: Parameters<typeof clearTimeout>): void;
}
export declare const window: Window;
export declare const location: any;
export declare const history: any;
