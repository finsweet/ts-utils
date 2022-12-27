/**
 * @returns `true` if the target is an instance of File type.
 * @param target
 */
export const isFile = (target: unknown): target is File => target instanceof File;

/**
 * @returns `true` if the target is an instance of Node type.
 * @param target
 */
export const isNode = (target: unknown): target is Node => target instanceof Node;

/**
 * @returns `true` if the target is an instance of Element type.
 * @param target
 */
export const isElement = (target: unknown): target is Element => target instanceof Element;

/**
 * @returns `true` if the target is an instance of HTMLElement type.
 * @param target
 */
export const isHTMLElement = (target: unknown): target is HTMLElement => target instanceof HTMLElement;

/**
 * @returns `true` if the target is an instance of HTMLInputElement type.
 * @param target
 */
export const isHTMLInputElement = (target: unknown): target is HTMLInputElement => target instanceof HTMLInputElement;

/**
 * @returns `true` if the target is an instance of HTMLSelectElement type.
 * @param target
 */
export const isHTMLSelectElement = (target: unknown): target is HTMLSelectElement =>
  target instanceof HTMLSelectElement;

/**
 * @returns `true` if the target is an instance of HTMLTextAreaElement type.
 * @param target
 */  
export const isHTMLTextAreaElement = (target: unknown): target is HTMLTextAreaElement =>
  target instanceof HTMLTextAreaElement;

/**
 * @returns `true` if the target is an instance of HTMLVideoElement type.
 * @param target
 */  
export const isHTMLVideoElement = (target: unknown): target is HTMLVideoElement => target instanceof HTMLVideoElement;

/**
 * @returns `true` if the target is an instance of HTMLAnchorElement type.
 * @param target
 */
export const isHTMLAnchorElement = (target: unknown): target is HTMLAnchorElement =>
  target instanceof HTMLAnchorElement;

/**
 * @returns `true` if the target is an instance of HTMLImageElement type.
 * @param target
 */  
export const isHTMLImageElement = (target: unknown): target is HTMLImageElement => target instanceof HTMLImageElement;

/**
 * @returns `true` if the target is an instance of HTMLOptionElement type.
 * @param target
 */
export const isHTMLOptionElement = (target: unknown): target is HTMLOptionElement =>
  target instanceof HTMLOptionElement;

/**
 * @returns `true` if the target is an instance of HTMLButtonElement type.
 * @param target
 */  
export const isHTMLButtonElement = (target: unknown): target is HTMLButtonElement =>
  target instanceof HTMLButtonElement;
