// @ts-nocheck
import type Taro from '../../types';
interface IAnimationAttr {
    duration: number;
    delay: number;
    timingFunction: string;
    transformOrigin: string;
}
type TStep = {
    delay: number;
    duration: number;
    timingFunction: string;
    transformOrigin: string;
    rule: TRule;
};
type TRule = Record<string, any>;
export declare class Animation implements Taro.Animation {
    unit: string;
    DEFAULT: IAnimationAttr;
    steps: TStep[];
    rule: TRule;
    constructor({ duration, delay, timingFunction, transformOrigin, unit }?: Taro.createAnimation.Option);
    setDefault(duration: any, delay: any, timingFunction: any, transformOrigin: any): void;
    export(): {
        actions: any[];
    };
    step(arg?: Partial<IAnimationAttr>): Taro.Animation;
    matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Taro.Animation;
    matrix3d(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number): Taro.Animation;
    rotate(angle: number): Taro.Animation;
    rotate3d(x: number, y?: number | undefined, z?: number | undefined, angle?: number | undefined): Taro.Animation;
    rotateX(angle: number): Taro.Animation;
    rotateY(angle: number): Taro.Animation;
    rotateZ(angle: number): Taro.Animation;
    scale(sx: number, sy?: number | undefined): Taro.Animation;
    scale3d(sx: number, sy: number, sz: number): Taro.Animation;
    scaleX(scale: number): Taro.Animation;
    scaleY(scale: number): Taro.Animation;
    scaleZ(scale: number): Taro.Animation;
    skew(ax: number, ay: number): Taro.Animation;
    skewX(angle: number): Taro.Animation;
    skewY(angle: number): Taro.Animation;
    translate(tx?: number | undefined, ty?: number | undefined): Taro.Animation;
    translate3d(tx?: number | undefined, ty?: number | undefined, tz?: number | undefined): Taro.Animation;
    translateX(translation: number): Taro.Animation;
    translateY(translation: number): Taro.Animation;
    translateZ(translation: number): Taro.Animation;
    opacity(value: number): Taro.Animation;
    backgroundColor(value: string): Taro.Animation;
    width(value: string | number): Taro.Animation;
    height(value: string | number): Taro.Animation;
    left(value: string | number): Taro.Animation;
    right(value: string | number): Taro.Animation;
    top(value: string | number): Taro.Animation;
    bottom(value: string | number): Taro.Animation;
}
export {};
