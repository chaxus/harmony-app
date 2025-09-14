// @ts-nocheck
import type Taro from '../types';
export declare const navigateTo: (option: Taro.navigateTo.Option) => Promise<TaroGeneral.CallbackResult>;
export declare const redirectTo: (option: Taro.navigateTo.Option) => Promise<TaroGeneral.CallbackResult>;
export declare function navigateBack(options: Taro.navigateBack.Option & {
    url?: string;
}): Promise<any>;
export declare const reLaunch: typeof Taro.reLaunch;
export declare const switchTab: typeof Taro.switchTab;
export declare const getLength: () => any;
export declare const getState: () => any;
