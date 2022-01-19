import { CMS_CSS_CLASSES, getCollectionElements } from '.';
export const getCollectionListWrappers = (selectors, page = document) => {
    selectors = selectors.filter((selector) => selector);
    const selector = selectors.join(', ') || `.${CMS_CSS_CLASSES.wrapper}`;
    const referenceElements = [...page.querySelectorAll(selector)];
    const collectionListWrappers = referenceElements.reduce((wrappers, referenceElement) => {
        if (!referenceElement)
            return wrappers;
        const collectionListWrapper = getCollectionElements(referenceElement, 'wrapper');
        if (!collectionListWrapper || wrappers.includes(collectionListWrapper))
            return wrappers;
        wrappers.push(collectionListWrapper);
        return wrappers;
    }, []);
    return collectionListWrappers;
};
