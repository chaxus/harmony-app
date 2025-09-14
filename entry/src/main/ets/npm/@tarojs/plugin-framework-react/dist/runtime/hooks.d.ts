// @ts-nocheck
import type { TFunc } from '../../../runtime';
/** LifeCycle */
export declare const useDidHide: (fn: TFunc) => void;
export declare const useDidShow: (fn: TFunc) => void;
/** App */
export declare const useError: (fn: TFunc) => void;
export declare const useUnhandledRejection: (fn: TFunc) => void;
export declare const useLaunch: (fn: TFunc) => void;
export declare const usePageNotFound: (fn: TFunc) => void;
/** Page */
export declare const useLoad: (fn: TFunc) => void;
export declare const usePageScroll: (fn: TFunc) => void;
export declare const usePullDownRefresh: (fn: TFunc) => void;
export declare const usePullIntercept: (fn: TFunc) => void;
export declare const useReachBottom: (fn: TFunc) => void;
export declare const useResize: (fn: TFunc) => void;
export declare const useUnload: (fn: TFunc) => void;
/** Mini-Program */
export declare const useAddToFavorites: (fn: TFunc) => void;
export declare const useOptionMenuClick: (fn: TFunc) => void;
export declare const useSaveExitState: (fn: TFunc) => void;
export declare const useShareAppMessage: (fn: TFunc) => void;
export declare const useShareTimeline: (fn: TFunc) => void;
export declare const useTitleClick: (fn: TFunc) => void;
/** Router */
export declare const useReady: (fn: TFunc) => void;
export declare const useRouter: (dynamic?: boolean) => import("@tarojs/runtime/dist/current").Router | null;
export declare const useTabItemTap: (fn: TFunc) => void;
export declare const useScope: () => undefined;
