// @ts-nocheck
import * as apis from './apis';
declare const taro: typeof apis;
export declare function initNativeApi(taro: any): void;
export declare function getApp(): import("@tarojs/runtime").AppInstance;
export declare function initPxTransform({ designWidth, deviceRatio, baseFontSize, unitPrecision, targetUnit }: {
    designWidth?: number | undefined;
    deviceRatio?: Record<string | number, number> | undefined;
    baseFontSize?: number | undefined;
    unitPrecision?: number | undefined;
    targetUnit?: string | undefined;
}): void;
export declare function pxTransformHelper(size: number, unit?: string, isNumber?: boolean): number | string;
export declare function pxTransform(size: number): number | string;
export declare function canIUseWebp(): boolean;
export declare function getAppInfo(): {
    platform: string;
    taroVersion: string;
    designWidth: any;
};
export * from './apis';
export default taro;
