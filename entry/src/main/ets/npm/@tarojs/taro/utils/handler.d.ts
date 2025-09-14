// @ts-nocheck
import type { TFunc } from '../../runtime';
export interface ICallbackResult {
    /** 错误信息 */
    errMsg: string;
}
type TCallback<T = Partial<ICallbackResult>> = (res: T) => Promise<void> | void;
interface IMethodParam<T = Partial<ICallbackResult>> {
    name: string;
    success?: TCallback<T & ICallbackResult>;
    fail?: TCallback;
    complete?: TCallback<T | ICallbackResult>;
}
interface IMockPromise {
    resolve?: typeof Promise.resolve | TFunc;
    reject?: typeof Promise.reject | TFunc;
}
export declare class MethodHandler<T = Partial<ICallbackResult>> {
    methodName: string;
    protected __success?: TCallback<T>;
    protected __fail?: TCallback;
    protected __complete?: TCallback<T | ICallbackResult>;
    protected isHandlerError: boolean;
    constructor({ name, success, fail, complete }: IMethodParam<T>);
    success<U = Record<string, unknown>>(res?: Partial<T> & Partial<ICallbackResult>, promise?: IMockPromise): Promise<T & U & ICallbackResult>;
    fail<U = Record<string, unknown>>(res?: Partial<T> & Partial<ICallbackResult>, promise?: IMockPromise): Promise<T & U & ICallbackResult>;
}
type TCallbackManagerFunc<T extends unknown[] = unknown[]> = (...arr: T) => void;
interface ICallbackManagerOption<T extends unknown[] = unknown[]> {
    callback?: TCallbackManagerFunc<T>;
    ctx?: any;
    [key: string]: unknown;
}
type TCallbackManagerUnit<T extends unknown[] = unknown[]> = (TCallbackManagerFunc<T> | ICallbackManagerOption<T>);
export declare class CallbackManager<T extends unknown[] = unknown[]> {
    callbacks: TCallbackManagerUnit<T>[];
    /** 添加回调 */
    add: (opt?: TCallbackManagerUnit<T>) => void;
    /** 移除回调 */
    remove: (opt?: TCallbackManagerUnit<T>) => void;
    /** 获取回调函数数量 */
    count: () => number;
    /** 触发回调 */
    trigger: (...args: T) => void;
}
export {};
