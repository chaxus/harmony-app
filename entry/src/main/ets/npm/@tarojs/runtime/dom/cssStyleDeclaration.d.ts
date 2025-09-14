// @ts-nocheck
import { TaroElement } from './element/element';
declare class CSSStyleDeclaration {
    el: TaroElement;
    constructor(el: TaroElement);
    get _st(): import("./stylesheet").default;
    get cssText(): string;
    set cssText(value: string);
    setProperty(prop: string, value: any): void;
    getPropertyValue(prop: string): string | number;
    removeProperty(prop: string): string | number;
}
type ICSSStyleDeclaration = CSSStyleDeclaration & Record<string, any>;
declare function createCSSStyleDeclaration(node: TaroElement): CSSStyleDeclaration;
export { createCSSStyleDeclaration, CSSStyleDeclaration, ICSSStyleDeclaration };
