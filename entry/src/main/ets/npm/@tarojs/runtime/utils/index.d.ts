// @ts-nocheck
import type { CSSProperties } from '../../../react';
import type { TaroElement } from '../dom/element/element';
import type { TaroNode } from '../dom/node';
export declare function isElement(node: TaroNode): node is TaroElement;
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
export declare function isParentBinded(node: TaroElement | null, type: string): boolean;
export declare function convertNumber2PX(value: number): string | number;
export declare function convertNumber2VP(value: number, unit?: string): string | number;
export declare function parseClasses(classNames?: string): string[];
export declare function calcStaticStyle(styleSheet: Record<string, CSSProperties>, classNames?: string): CSSProperties;
export declare function calcDynamicStyle(style: CSSProperties): CSSProperties;
export declare function __env__(safeAreaType: string, fallback?: string | number): string | number | undefined;
export declare function getPageScrollerOrNode(scrollerOrNode: any, page: any): any;
export declare function ObjectKeys(obj: object): string[];
export declare function ObjectAssign(...objects: any[]): any;
export declare function callFn(fn: any, ctx: any, ...args: any): any;
export declare function bindFn(fn: any, ctx: any, ...args: any): any;
export declare function findChildNodeWithDFS<T extends TaroElement = TaroElement>(node: TaroElement, selector: string | ((ele: T) => boolean), selectAll: true): T[] | null;
export declare function findChildNodeWithDFS<T extends TaroElement = TaroElement>(node: TaroElement, selector: string | ((ele: T) => boolean), selectAll?: false): T | null;
export declare function findChildNodeWithDFS<T extends TaroElement = TaroElement>(node: TaroElement, selector: string | ((ele: T) => boolean), selectAll: boolean): T[] | T | null;
export * from './info';
export * from './router';
