// @ts-nocheck
import { Events } from '../emitter/emitter';
import { TaroEvent } from './event';
import type { EventHandler } from '../interface';
interface IOptions {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}
type fn = (...args: any[]) => any;
declare class TaroEventTarget extends Events {
    __listeners: Record<string, EventHandler[]>;
    addEventListener(type: string, listener: fn, options?: IOptions): void;
    removeEventListener(type: string, listener: fn): void;
    dispatchEvent(event: TaroEvent): boolean;
    private _stopPropagation;
}
export { TaroEventTarget };
