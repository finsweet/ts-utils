import { isVisible } from '.';
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
