import type { CollectionEmptyElement, CollectionItemElement, CollectionListElement, CollectionListWrapperElement, PageCountElement, PaginationButtonElement, PaginationWrapperElement } from '..';
export declare function getCollectionElements(reference: string | Element, target: 'pageCount', page?: Document): PageCountElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'next' | 'previous', page?: Document): PaginationButtonElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'pagination', page?: Document): PaginationWrapperElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'empty', page?: Document): CollectionEmptyElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'items', page?: Document): CollectionItemElement[];
export declare function getCollectionElements(reference: string | Element, target: 'list', page?: Document): CollectionListElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'wrapper', page?: Document): CollectionListWrapperElement | null | undefined;
