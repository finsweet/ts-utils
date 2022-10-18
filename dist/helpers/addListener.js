/**
 * Adds an event listener to an element.
 * @returns A callback to remove the event listener from the element.
 *
 * @param element
 * @param type
 * @param listener
 * @param options
 */
export function addListener(element, type, listener, options) {
    element.addEventListener(type, listener, options);
    return () => element.removeEventListener(type, listener, options);
}
