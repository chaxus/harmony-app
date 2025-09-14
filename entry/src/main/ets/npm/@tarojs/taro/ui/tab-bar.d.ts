// @ts-nocheck
import type Taro from '../types';
export declare const showTabBar: (option?: Taro.showTabBar.Option | undefined) => Promise<TaroGeneral.CallbackResult>;
export declare const hideTabBar: (option?: Taro.hideTabBar.Option | undefined) => Promise<TaroGeneral.CallbackResult>;
export declare const setTabBarStyle: typeof Taro.setTabBarStyle;
export declare const setTabBarItem: typeof Taro.setTabBarItem;
export declare function showTabBarRedDot(options: any): Promise<unknown>;
export declare function hideTabBarRedDot(options: any): Promise<unknown>;
export declare function setTabBarBadge(options: any): Promise<unknown>;
export declare function removeTabBarBadge(options: any): Promise<unknown>;
