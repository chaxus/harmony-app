// @ts-nocheck
import { TaroComment } from './comment';
import { TaroElement } from './element/element';
import { TaroNode, TaroTextNode } from './node';
import type { Window } from '../bom/window';
declare class TaroDocument extends TaroNode {
    documentElement: TaroElement;
    head: TaroElement;
    body: TaroElement;
    cookie: string;
    private _win;
    constructor(window: Window);
    get defaultView(): Window;
    createElement(tagName: string): TaroElement;
    createTextNode(value: string): TaroTextNode;
    createComment(data: string): TaroComment;
    getElementById<T extends TaroElement>(id: string | undefined | null): T | null;
    querySelector(selectors: string): TaroElement | null;
    querySelectorAll(selectors: string): TaroElement[];
}
export { TaroDocument };
