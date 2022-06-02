/**
 * Check if an element is scrollable
 * @param element
 * @returns True or false
 */
export const isScrollable = (element) => {
    const { overflow } = getComputedStyle(element);
    return overflow === 'auto' || overflow === 'scroll';
};
