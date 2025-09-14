// @ts-nocheck
import web_webview from '@ohos.web.webview';
import { TaroElement } from './element';
import type { WebViewProps } from '../../../components/types';
export declare class TaroInnerHtmlElement extends TaroElement {
    constructor();
}
export declare class TaroWebViewElement extends TaroElement<WebViewProps> {
    ports: web_webview.WebMessagePort[];
    nativePort: web_webview.WebMessagePort | null;
    message: web_webview.WebMessageExt;
    controller: web_webview.WebviewController;
    constructor();
    postMessage(value: string): void;
    handleMessageFromWeb(result: web_webview.WebMessageExt): any;
}
