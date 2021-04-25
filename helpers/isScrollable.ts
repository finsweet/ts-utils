/**
 * Check if an element is scrollable
 * @param element
 * @returns True or false
 */
const isScrollable = (element: Element): boolean => {
  const { overflow } = getComputedStyle(element);
  return overflow === 'auto' || overflow === 'scroll';
};

export default isScrollable;
