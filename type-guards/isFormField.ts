import type { FormField } from '../types/FormField';

/**
 * Checks if an element is a form field element
 * @param element
 */
// prettier-ignore
export const isFormField = (element: Element | EventTarget | null): element is FormField => element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
