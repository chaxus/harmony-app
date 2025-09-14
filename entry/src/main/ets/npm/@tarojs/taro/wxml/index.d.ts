// @ts-nocheck
import { IntersectionObserver } from './IntersectionObserver';
import { SelectorQuery } from './selectorQuery';
import type Taro from '../types';
export declare const createSelectorQuery: () => SelectorQuery;
export declare const createIntersectionObserver: typeof Taro.createIntersectionObserver;
export declare const createMediaQueryObserver: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
export { IntersectionObserver };
