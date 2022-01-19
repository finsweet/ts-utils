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
