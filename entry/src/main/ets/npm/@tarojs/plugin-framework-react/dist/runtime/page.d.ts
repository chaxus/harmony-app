// @ts-nocheck
import type { PageConfig } from '../../../taro';
export declare function injectPageInstance(inst: any, id: string): void;
export declare function getPageInstance(id: string): any;
export declare function removePageInstance(id: string): void;
export declare function safeExecute(path: string, lifecycle: string, ...args: unknown[]): any;
export declare function stringify(obj?: Record<string, unknown>): string;
export declare function getPath(id: string, options?: Record<string, unknown>): string;
export declare function getOnReadyEventKey(path: string): string;
export declare function getOnShowEventKey(path: string): string;
export declare function getOnHideEventKey(path: string): string;
export declare function createPageConfig(component: any, pageName?: string, pageConfig?: PageConfig): {
    [x: string]: (options?: Readonly<Record<string, unknown>>, cb?: (...args: any[]) => any) => void;
};
