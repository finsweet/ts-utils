import { noop } from './noop';

/**
 * Adds an event listener to an element.
 * @returns A callback to remove the event listener from the element.
 *
 * @param target
 * @param type
 * @param listener
 * @param options
 */
export function addListener<
  TargetInterface extends EventTarget,
  Type extends TargetInterface extends Window
    ? keyof WindowEventMap | string
    : TargetInterface extends Document
    ? keyof DocumentEventMap | string
    : TargetInterface extends HTMLElement
    ? keyof HTMLElementEventMap | string
    : keyof ElementEventMap | string,
  Listener extends Type extends keyof WindowEventMap
    ? (this: Document, ev: WindowEventMap[Type]) => unknown
    : Type extends keyof DocumentEventMap
    ? (this: Document, ev: DocumentEventMap[Type]) => unknown
    : Type extends keyof HTMLElementEventMap
    ? (this: HTMLElement, ev: HTMLElementEventMap[Type]) => unknown
    : Type extends keyof ElementEventMap
    ? (this: Element, ev: ElementEventMap[Type]) => unknown
    : EventListenerOrEventListenerObject
>(
  target: TargetInterface | null | undefined,
  type: Type,
  listener: Listener,
  options?: boolean | AddEventListenerOptions
): () => void {
  if (!target) return noop;

  target.addEventListener(type, listener, options);

  return () => target.removeEventListener(type, listener, options);
}
