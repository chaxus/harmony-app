// @ts-nocheck
export declare const ENV_TYPE: {
    WEAPP: string;
    SWAN: string;
    ALIPAY: string;
    TT: string;
    QQ: string;
    JD: string;
    WEB: string;
    RN: string;
    HARMONY: string;
    QUICKAPP: string;
};
export declare function getEnv(): string;
export declare const getCurrentPages: () => never[];
export { Current, getCurrentInstance } from '../../runtime';
export declare const requirePlugin: (option?: {}, ...args: any[]) => Promise<Partial<import("../utils/handler").ICallbackResult> & Record<string, unknown> & import("../utils/handler").ICallbackResult>;
export { eventCenter, Events, History } from '../../runtime';
