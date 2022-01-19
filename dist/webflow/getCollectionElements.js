import { CMS_CSS_CLASSES } from '.';
const { wrapper, list, paginationWrapper, paginationNext, paginationPrevious, emptyState, pageCount } = CMS_CSS_CLASSES;
export function getCollectionElements(reference, target, page = document) {
    const referenceElement = typeof reference === 'string' ? page.querySelector(reference) : reference;
    if (!referenceElement)
        return;
    const collectionListWrapper = referenceElement.closest(`.${wrapper}`);
    if (!collectionListWrapper)
        return;
    const collectionList = collectionListWrapper.querySelector(`.${list}`);
    if (target === 'wrapper')
        return collectionListWrapper;
    if (target === 'list')
        return collectionList;
    if (target === 'items')
        return [...(collectionList?.children || [])];
    if (target === 'pageCount')
        return collectionListWrapper.querySelector(`.${pageCount}`);
    if (target === 'empty') {
        return collectionListWrapper.querySelector(`:scope > .${emptyState}`);
    }
    if (target === 'pagination') {
        return collectionListWrapper.querySelector(`.${paginationWrapper}`);
    }
    return collectionListWrapper.querySelector(`.${target === 'next' ? paginationNext : paginationPrevious}`);
}
