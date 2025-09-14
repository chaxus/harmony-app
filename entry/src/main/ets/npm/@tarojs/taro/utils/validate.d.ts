// @ts-nocheck
type NormalParamSchema = string[];
type ObjectParamSchema = Record<string, string>;
type Schema = NormalParamSchema | ObjectParamSchema;
interface ValidateParams {
    <T>(name: string, params: any, schema: Schema): asserts params is T;
}
export declare function shouldBeObject(target: unknown): {
    flag: boolean;
    msg?: undefined;
} | {
    flag: boolean;
    msg: string;
};
interface IParameterErrorParam {
    name?: string;
    para?: string;
    correct?: string;
    wrong?: unknown;
    level?: 'warn' | 'error' | 'log' | 'info' | 'debug';
}
export declare function getParameterError({ name, para, correct, wrong, level }: IParameterErrorParam): string;
export declare function upperCaseFirstLetter(string: string): string;
export declare function assertType(target: any, type: string, methodName: string, paramName?: string): void;
/**
 * 用于校验方法的参数类型
 * @param name 方法名称
 * @param params [array|object] 当前参数
 * @param schema [array|object] 参数类型规范
 * @example
 * ```js
 * // 例子一：
 * validateParams(methodA, [key], [string])
 * // 例子二：
 * validateParams(methodB, { key: 123 }, { key: number })
 * ```
 * @todo 校验可选参数
 */
export declare const validateParams: ValidateParams;
export {};
