// @ts-nocheck
import type Taro from '../../types';
export declare const getImageInfo: typeof Taro.getImageInfo;
export declare const compressImage: typeof Taro.compressImage;
export declare const chooseImage: typeof Taro.chooseImage;
export declare const previewImage: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const saveImageToPhotosAlbum: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
