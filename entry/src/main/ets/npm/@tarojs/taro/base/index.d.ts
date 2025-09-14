// @ts-nocheck
export declare const canIUse: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
export declare const arrayBufferToBase64: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
export declare const base64ToArrayBuffer: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
export * from './crypto';
export * from './debug';
export * from './performance';
export * from './system';
export * from './update';
export * from './weapp/app-event';
export * from './weapp/life-cycle';
