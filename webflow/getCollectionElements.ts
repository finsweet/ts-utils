import { CMS_CSS_CLASSES } from '.';

import type {
  CollectionItemElement,
  CollectionListElement,
  CollectionListWrapperElement,
  PaginationButtonElement,
} from '..';

const { wrapper, list, paginationNext, paginationPrevious } = CMS_CSS_CLASSES;

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
  target: 'wrapper' | 'list',
  page?: Document
): CollectionListWrapperElement | CollectionListElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'wrapper' | 'list' | 'items' | 'next' | 'previous',
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

  if (target === 'wrapper') return referenceElement.closest<CollectionListWrapperElement>(`.${wrapper}`);
  if (target === 'next') return referenceElement.querySelector<PaginationButtonElement>(`.${paginationNext}`);
  if (target === 'previous') return referenceElement.querySelector<PaginationButtonElement>(`.${paginationPrevious}`);

  const collectionList =
    referenceElement.querySelector<CollectionListElement>(`.${list}`) ||
    referenceElement.closest<CollectionListElement>(`.${list}`);
  if (!collectionList) return;

  if (target === 'items') return [...collectionList.children] as CollectionItemElement[];
  if (target === 'list') return collectionList;
}
