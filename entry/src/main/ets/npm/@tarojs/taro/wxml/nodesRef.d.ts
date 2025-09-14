// @ts-nocheck
import { SelectorQuery } from './selectorQuery';
import type Taro from '../types';
export declare class NodesRef implements Taro.NodesRef {
    _component?: any;
    _selector: string;
    _selectorQuery: SelectorQuery;
    _single: boolean;
    constructor(selector: string, querySelectorQuery: SelectorQuery, single: boolean);
    context(cb: any): SelectorQuery;
    node(cb?: Taro.NodesRef.NodeCallback): SelectorQuery;
    boundingClientRect(cb?: Taro.NodesRef.BoundingClientRectCallback): SelectorQuery;
    scrollOffset(cb: any): SelectorQuery;
    fields(fields: Taro.NodesRef.Fields, cb?: Taro.NodesRef.FieldsCallback): SelectorQuery;
}
