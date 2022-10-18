/**
 * Adds an event listener to an element.
 * @returns A callback to remove the event listener from the element.
 *
 * @param element
 * @param type
 * @param listener
 * @param options
 */
export declare function addListener<ElementInterface extends Element, Type extends ElementInterface extends HTMLElement ? keyof HTMLElementEventMap : keyof ElementEventMap | string, Listener extends Type extends keyof HTMLElementEventMap ? (this: HTMLElement, ev: HTMLElementEventMap[Type]) => unknown : Type extends keyof ElementEventMap ? (this: Element, ev: ElementEventMap[Type]) => unknown : EventListenerOrEventListenerObject>(element: ElementInterface, type: Type, listener: Listener, options?: boolean | AddEventListenerOptions): () => void;
