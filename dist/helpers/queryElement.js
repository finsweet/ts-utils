export const queryElement = (selector, instance, scope = document) => {
    const element = scope.querySelector(selector);
    if (element instanceof instance)
        return element;
};
