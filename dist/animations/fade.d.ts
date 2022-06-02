/**
 * Fade in an element
 * @param element
 * @param display Display property, flex by default
 * @returns An awaitable promise
 */
export declare const fadeIn: (element: HTMLElement, display?: string) => Promise<void>;
/**
 * Fade out an element
 * @param element
 * @returns An awaitable promise
 */
export declare const fadeOut: (element: HTMLElement) => Promise<void>;
