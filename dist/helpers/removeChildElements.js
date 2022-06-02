/**
 * Remove all child elements from a parent element
 * @param element Parent element
 * @param selector Optional: only remove the elements that match this selector
 */
export const removeChildElements = (element, selector) => {
    const childElements = element.querySelectorAll(selector || '*');
    childElements.forEach((childElement) => childElement.remove());
};
