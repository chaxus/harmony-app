// @ts-nocheck
import type { TaroElement } from '../dom/element/element';
export declare const AREA_CHANGE_EVENT_NAME = "areaChange";
export declare const VISIBLE_CHANGE_EVENT_NAME = "visibleChange";
export declare function createEventOnName(eventName: string): string;
export declare function createEventTapName(eventName: string): string;
export declare const disconnectEvent: (node: TaroElement, eventName: string) => null | undefined;
export declare function getComponentEventCallback(node: TaroElement, eventName: string, callback?: (data: any) => void): ((...eventResult: any[]) => void) | null;
export declare function setNodeEventCallbackAndTriggerComponentUpdate(node: TaroElement, eventName: string, callback: Function, isAsync?: boolean): Promise<void>;
export declare function bindAttributesCallback(node: TaroElement, _: string, callback: Function): void;
export declare function triggerAttributesCallback(node: any, attributeName: any): void;
export declare function initComponentNodeInfo(node: TaroElement): void;
