// @ts-nocheck
import type Taro from '../../types';
export declare const createVideoContext: typeof Taro.createVideoContext;
export declare const chooseVideo: typeof Taro.chooseVideo;
export declare const compressVideo: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const getVideoInfo: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const openVideoEditor: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const saveVideoToPhotosAlbum: typeof Taro.saveVideoToPhotosAlbum;
