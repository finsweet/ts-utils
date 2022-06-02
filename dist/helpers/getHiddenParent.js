import { isVisible } from '.';
/**
 * @returns The first hidden parent element, or the element itself (if hidden).
 * If the element is already visible, the function returns `undefined`.
 *
 * @param element The reference element.
 */
export const getHiddenParent = (element) => {
    if (isVisible(element))
        return;
    let previousElement = element;
    const checkParent = ({ parentElement }) => {
        if (!parentElement)
            return;
        if (isVisible(parentElement))
            return;
        previousElement = parentElement;
        checkParent(parentElement);
    };
    checkParent(element);
    return previousElement;
};
