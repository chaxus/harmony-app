// @ts-nocheck
import { TaroElement } from './element/element';
import type { EventOptions } from '../interface';
export declare class TaroEvent<T = any> {
    type: string;
    bubbles: boolean;
    cancelable: boolean;
    _stop: boolean;
    _end: boolean;
    defaultPrevented: boolean;
    target: TaroElement;
    currentTarget: TaroElement;
    /** 额外的信息 */
    detail: T;
    button: number;
    timeStamp: number;
    mpEvent: TaroEvent | undefined;
    constructor(type: string, opts: EventOptions, event?: TaroEvent);
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
}
export declare function createEvent(event: TaroEvent | string, type?: string, node?: TaroElement): TaroEvent<any> | undefined;
export declare function eventHandler(event: any, type: string, node: TaroElement): void;
export declare function createTaroEvent(type: string, opts?: Partial<EventOptions>, node?: TaroElement): TaroEvent<any>;
