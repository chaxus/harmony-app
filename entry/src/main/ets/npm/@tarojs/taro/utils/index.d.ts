// @ts-nocheck
import { ICallbackResult, MethodHandler } from './handler';
import type { FunctionType, IAsyncParams } from './types';
export * from './validate';
export { MethodHandler };
export { noop } from '../../shared';
export declare function requestPermissions(permissions: string[]): Promise<void>;
export declare function object2String(obj: any): string;
export declare function temporarilyNotSupport(name: string, recommended?: string): (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
export declare function permanentlyNotSupport(name?: string): (option?: {}, ...args: any[]) => Promise<ICallbackResult & Record<string, unknown>>;
/** @deprecated */
export declare function callCallbackSuccess<T extends FunctionType>(res: any, options?: IAsyncParams<T>): void;
/** @deprecated */
export declare function callCallbackFail<T extends FunctionType>(res: any, options?: IAsyncParams<T>): void;
/** @deprecated */
export declare function callAsyncSuccess<T extends FunctionType>(resolve: any, res: any, options?: IAsyncParams<T>): void;
/** @deprecated */
export declare function callAsyncFail<T extends FunctionType>(reject: any, res: any, options?: IAsyncParams<T>): void;
