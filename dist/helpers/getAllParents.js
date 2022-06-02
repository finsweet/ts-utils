/**
 * Returns a list of all parents of an element, excepting the `<body>` and `<html>` tags.
 * @param element
 */
export const getAllParents = (element) => {
    const parents = [];
    const storeParents = ({ parentElement }) => {
        if (parentElement && !parentElement.isEqualNode(document.body)) {
            parents.push(parentElement);
            storeParents(parentElement);
        }
    };
    storeParents(element);
    return parents;
};
