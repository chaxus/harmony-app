// @ts-nocheck
/**
 * 停止监听罗盘数据
 */
export declare const stopCompass: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/**
 * 开始监听罗盘数据
 */
export declare const startCompass: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 */
export declare const onCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
/**
 * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
 */
export declare const offCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
