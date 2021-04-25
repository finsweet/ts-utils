/**
 * Checks if an element is visible
 * @param element
 */
// prettier-ignore
const isVisible = (element: HTMLElement): boolean => !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);

export default isVisible;
