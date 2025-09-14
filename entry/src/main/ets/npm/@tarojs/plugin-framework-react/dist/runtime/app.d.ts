// @ts-nocheck
import type { AppInstance } from '../../../runtime';
import type React from '../../../../react';
interface IReactMeta {
    PageContext: React.Context<string>;
    R: typeof React;
    Container: any;
}
export declare const ReactMeta: IReactMeta;
export declare function connectReactPage(R: typeof React, id: string, getCtx: () => any): (Page: any) => React.ComponentClass<any>;
export declare function createReactApp(App: any, react: any, dom: any, config?: any): AppInstance;
export {};
