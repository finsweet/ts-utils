import type { FormField } from '../types/FormField';
import { isHTMLInputElement, isHTMLSelectElement, isHTMLTextAreaElement } from './instances';

/**
 * Checks if an element is a form field element
 * @param element
 */
// prettier-ignore
export const isFormField = (element: Element | EventTarget | null): element is FormField => isHTMLInputElement(element) || isHTMLSelectElement(element) || isHTMLTextAreaElement(element);
