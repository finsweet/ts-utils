import type { CollectionListWrapperElement } from '..';
/**
 * Queries `Collection List Wrapper` elements and makes sure they are unique.
 * @param selectors The selectors used for the query. If an empty array is provided, all `Collection List Wrapper` elements will be returned.
 * @param page The document where to perform the query.
 * @returns A unique list of `Collection List Wrapper` elements.
 */
export declare const getCollectionListWrappers: (selectors: Array<string | null | undefined>, page?: Document) => CollectionListWrapperElement[];
