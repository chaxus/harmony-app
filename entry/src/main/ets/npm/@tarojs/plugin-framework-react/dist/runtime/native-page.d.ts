// @ts-nocheck
import type * as React from '../../../../react';
declare let ReactDOM: any;
export declare function setPageById(inst: any, id: string): void;
export declare function getPageById(id: string): any;
export declare function removePageById(id: string): void;
export declare function createNativePageConfig(Component: any, pageName: string, react: typeof React, reactDOM: typeof ReactDOM, pageConfig: any): Record<string, any>;
export declare function createNativeComponentConfig(Component: any, react: typeof React, reactDOM: any, componentConfig: any): Record<string, any>;
export {};
