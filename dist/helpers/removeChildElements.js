export const removeChildElements = (element, selector) => {
    const childElements = element.querySelectorAll(selector || '*');
    childElements.forEach((childElement) => childElement.remove());
};
