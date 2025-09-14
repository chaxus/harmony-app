// @ts-nocheck
import TaroDataSourceElement from './dataSource';
import type { StandardProps } from '../../components/types';
import type { TaroAny } from '../interface';
import type { TaroDocument } from './document';
import type { TaroElement } from './element/element';
export declare enum NodeType {
    ELEMENT_NODE = 1,
    ATTRIBUTE_NODE = 2,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    ENTITY_REFERENCE_NODE = 5,
    PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE = 8,
    DOCUMENT_NODE = 9,
    DOCUMENT_TYPE_NODE = 10,
    DOCUMENT_FRAGMENT_NODE = 11
}
export declare class TaroNode extends TaroDataSourceElement {
    readonly nodeName: string;
    readonly nodeType: NodeType;
    childNodes: TaroNode[];
    parentNode: TaroNode | null;
    _nid: number;
    _doc: TaroDocument | null;
    _instance?: TaroAny;
    private _textContent;
    _updateTrigger: number;
    _isCompileMode: boolean;
    _isDynamicNode: boolean;
    _nativeUpdateTrigger: number;
    constructor(nodeName: string, nodeType?: NodeType);
    totalCount(): number;
    getData(index: number): TaroElement<StandardProps>;
    getStrNid(): string;
    getNumNid(id: any): number;
    findIndex(refChild?: TaroNode): number;
    updateTextNode(): void;
    updateComponent(): void;
    get uid(): string;
    get firstChild(): TaroNode | null;
    get lastChild(): TaroNode | null;
    get nextSibling(): TaroNode | null;
    get previousSibling(): TaroNode | null;
    get parentElement(): TaroElement | null;
    get textContent(): string;
    set textContent(value: string);
    get nodeValue(): string | null;
    set nodeValue(value: string | null);
    get ownerDocument(): TaroDocument | null;
    hasChildNodes(): boolean;
    connectParentNode(child: TaroNode): void;
    appendChild(child: TaroNode): TaroNode;
    insertBefore(newNode: TaroNode, referenceNode?: TaroNode): TaroNode;
    replaceChild(newChild: TaroNode, oldChild: TaroNode): TaroNode;
    removeChild(child: TaroNode): TaroNode;
    dispose(): void;
}
export declare class TaroTextNode extends TaroNode {
    constructor(value?: string, nodeName?: string, nodeType?: NodeType);
    get data(): string;
    set data(value: string);
}
