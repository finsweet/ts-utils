/**
 * Checks if an element is visible
 * @param element
 */
// prettier-ignore
export const isVisible = (element) => !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
