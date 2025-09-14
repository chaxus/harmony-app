// @ts-nocheck
import { NodesRef } from './nodesRef';
import type Taro from '../types';
interface ISelectorQueryQueue {
    component: any;
    selector: string;
    single: boolean;
    fields: any;
}
type TSelectorQueryQueueCallback = (res: ISelectorQueryQueue) => void;
export declare class SelectorQuery implements Taro.SelectorQuery {
    _queue: ISelectorQueryQueue[];
    _queueCb: (TSelectorQueryQueueCallback | null)[];
    _component?: any;
    constructor();
    /**
     * 设置选择器的选取范围
     * @param component 指定组件
     * @return selectQuery 返回查询对象
     */
    in: (_: any) => this;
    /**
     * 在当前页面下选择第一个匹配选择器selector的节点
     * @param selector
     * @return nodesRef 返回一个NodesRef 对象实例，可以用于获取节点信息
     */
    select(selector: string): NodesRef;
    /**
     * 在当前页面下选择匹配选择器selector的所有节点
     * @param selector
     */
    selectAll(selector: string): NodesRef;
    /**
     * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息
     */
    selectViewport(): NodesRef;
    exec(cb?: (...args: any[]) => any): any;
    _push(selector: any, component: any, single: any, fields: any, callback?: Taro.NodesRef.FieldsCallback | null): void;
}
export {};
