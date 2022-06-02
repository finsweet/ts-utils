import type { CollectionEmptyElement, CollectionItemElement, CollectionListElement, CollectionListWrapperElement, PageCountElement, PaginationButtonElement, PaginationWrapperElement } from '..';
/**
 * This helper is intended to allow users setting the selectors to either the `Collection List Wrapper` or the `Collection List` elements.
 * This way there will never be any misunderstanding about the setup.
 * @param reference The element or selector of the element.
 * @param target The requested element/elements. It can be either the `Collection List Wrapper`, the `Collection List` or all the `Collection Item` elements.
 * @param page The page document.
 * @returns The specified collection element/elements.
 */
export declare function getCollectionElements(reference: string | Element, target: 'pageCount', page?: Document): PageCountElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'next' | 'previous', page?: Document): PaginationButtonElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'pagination', page?: Document): PaginationWrapperElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'empty', page?: Document): CollectionEmptyElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'items', page?: Document): CollectionItemElement[];
export declare function getCollectionElements(reference: string | Element, target: 'list', page?: Document): CollectionListElement | null | undefined;
export declare function getCollectionElements(reference: string | Element, target: 'wrapper', page?: Document): CollectionListWrapperElement | null | undefined;
