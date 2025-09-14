// @ts-nocheck
import type { ReactElement } from '../../../react';
export type NestingStyle = {
    node: ReactElement;
    selectors: string[];
    declaration: Record<string, any>;
}[];
export declare function __combine_nesting_style__(react_tree: ReactElement, styles?: NestingStyle | null): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
