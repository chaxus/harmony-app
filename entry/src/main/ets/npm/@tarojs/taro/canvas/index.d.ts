// @ts-nocheck
/** 创建离屏 canvas 实例 */
export declare const createOffscreenCanvas: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/** 创建 canvas 的绘图上下文 CanvasContext 对象 */
export declare const createCanvasContext: (canvasId: string) => any;
/** 把当前画布指定区域的内容导出生成指定大小的图片 */
export declare const canvasToTempFilePath: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/** 将像素数据绘制到画布 */
export declare const canvasPutImageData: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/** 获取 canvas 区域隐含的像素数据 */
export declare const canvasGetImageData: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
