// @ts-nocheck
export declare function showToast(options: any): Promise<unknown>;
export declare function showModal(options: any): Promise<unknown>;
export declare function showActionSheet(options: any): Promise<unknown>;
export declare const hideToast: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const showLoading: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const hideLoading: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const enableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
export declare const disableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<import("../../utils/handler").ICallbackResult> & Record<string, unknown> & import("../../utils/handler").ICallbackResult>;
