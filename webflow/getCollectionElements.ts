import { CMS_CSS_CLASSES } from '.';

const { wrapper, list, item, paginationNext, paginationPrevious } = CMS_CSS_CLASSES;

/**
 * This helper is intended to allow users setting the selectors to either the `Collection List Wrapper` or the `Collection List` elements.
 * This way there will never be any misunderstanding about the setup.
 * @param reference The element or selector of the element.
 * @param target The requested element/elements. It can be either the `Collection List Wrapper`, the `Collection List` or all the `Collection Item` elements.
 * @param page The page document.
 * @returns The specified collection element/elements.
 */
export function getCollectionElements(reference: string | Element, target: 'items', page?: Document): HTMLDivElement[];
export function getCollectionElements(
  reference: string | Element,
  target: 'next' | 'previous',
  page?: Document
): HTMLAnchorElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'wrapper' | 'list',
  page?: Document
): HTMLDivElement | null | undefined;
export function getCollectionElements(
  reference: string | Element,
  target: 'wrapper' | 'list' | 'items' | 'next' | 'previous',
  page: Document = document
): HTMLDivElement | HTMLDivElement[] | HTMLAnchorElement | null | undefined {
  const referenceElement = typeof reference === 'string' ? page.querySelector<HTMLDivElement>(reference) : reference;
  if (!referenceElement) return;

  if (target === 'wrapper') return referenceElement.closest<HTMLDivElement>(`.${wrapper}`);

  if (target === 'items') return [...referenceElement.querySelectorAll<HTMLDivElement>(`.${item}`)];

  if (target === 'next') return referenceElement.querySelector<HTMLAnchorElement>(`.${paginationNext}`);
  if (target === 'previous') return referenceElement.querySelector<HTMLAnchorElement>(`.${paginationPrevious}`);

  return (
    referenceElement.querySelector<HTMLDivElement>(`.${list}`) || referenceElement.closest<HTMLDivElement>(`.${list}`)
  );
}
