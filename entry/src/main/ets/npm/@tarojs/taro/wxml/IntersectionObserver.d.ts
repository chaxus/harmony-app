// @ts-nocheck
import type Taro from '../types';
export declare class IntersectionObserver implements Taro.IntersectionObserver {
    private _component;
    private _observerNodes;
    private _options;
    constructor(component: any, options?: Taro.createIntersectionObserver.Option);
    disconnect(): void;
    observe(targetSelector: string, callback: Taro.IntersectionObserver.ObserveCallback): void;
    relativeTo(): Taro.IntersectionObserver;
    relativeToViewport(): Taro.IntersectionObserver;
    private handleResult;
}
