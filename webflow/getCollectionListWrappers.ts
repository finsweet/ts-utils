import { CMS_CSS_CLASSES, getCollectionElements } from '.';

import type { CollectionListWrapperElement } from '..';

/**
 * Queries `Collection List Wrapper` elements and makes sure they are unique.
 * @param selectors The selectors used for the query. If an empty array is provided, all `Collection List Wrapper` elements will be returned.
 * @param page The document where to perform the query.
 * @returns A unique list of `Collection List Wrapper` elements.
 */
export const getCollectionListWrappers = (
  selectors: Array<string | null | undefined>,
  page = document
): CollectionListWrapperElement[] => {
  // Make sure the selectors are valid.
  selectors = selectors.filter((selector) => selector);

  const selector = selectors.join(', ') || `.${CMS_CSS_CLASSES.wrapper}`;

  const referenceElements = [...page.querySelectorAll<HTMLElement>(selector)];

  const collectionListWrappers = referenceElements.reduce<CollectionListWrapperElement[]>(
    (wrappers, referenceElement) => {
      if (!referenceElement) return wrappers;

      const collectionListWrapper = getCollectionElements(referenceElement, 'wrapper');
      if (!collectionListWrapper || wrappers.includes(collectionListWrapper)) return wrappers;

      wrappers.push(collectionListWrapper);

      return wrappers;
    },
    []
  );

  return collectionListWrappers;
};
