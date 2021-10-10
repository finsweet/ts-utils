import { CMS_CSS_CLASSES } from '.';

import type {
  CollectionEmptyElement,
  CollectionItemElement,
  CollectionListElement,
  CollectionListWrapperElement,
  PaginationButtonElement,
} from '..';

const { wrapper, list, paginationNext, paginationPrevious, emptyState } = CMS_CSS_CLASSES;

/**
 * This helper is intended to allow users setting the selectors to either the `Collection List Wrapper` or the `Collection List` elements.
 * This way there will never be any misunderstanding about the setup.
 * @param reference The element or selector of the element.
 * @param target The requested element/elements. It can be either the `Collection List Wrapper`, the `Collection List` or all the `Collection Item` elements.
 * @param page The page document.
 * @returns The specified collection element/elements.
 */
export function getCollectionElements(
  reference: string | Element,
  target: 'items',
  page?: Document
): CollectionItemElement[];
export function getCollectionElements(
  reference: string | Element,
  target: 'next' | 'previous',
  page?: Document
): PaginationButtonElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'empty',
  page?: Document
): CollectionEmptyElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'list',
  page?: Document
): CollectionListElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'wrapper',
  page?: Document
): CollectionListWrapperElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'wrapper' | 'list' | 'empty' | 'items' | 'next' | 'previous',
  page: Document = document
):
  | CollectionListWrapperElement
  | CollectionListElement
  | CollectionItemElement[]
  | PaginationButtonElement
  | null
  | undefined {
  const referenceElement = typeof reference === 'string' ? page.querySelector(reference) : reference;
  if (!referenceElement) return;

  const collectionListWrapper = referenceElement.closest<CollectionListWrapperElement>(`.${wrapper}`);
  if (!collectionListWrapper) return;

  const collectionList = collectionListWrapper.querySelector<CollectionListElement>(`.${list}`);

  if (target === 'wrapper') return collectionListWrapper;
  if (target === 'list') return collectionList;
  if (target === 'items') return [...(collectionList?.children || [])] as CollectionItemElement[];
  if (target === 'empty') return collectionListWrapper.querySelector<CollectionListWrapperElement>(`.${emptyState}`);
  if (target === 'next') return collectionListWrapper.querySelector<PaginationButtonElement>(`.${paginationNext}`);
  if (target === 'previous')
    return collectionListWrapper.querySelector<PaginationButtonElement>(`.${paginationPrevious}`);
}
