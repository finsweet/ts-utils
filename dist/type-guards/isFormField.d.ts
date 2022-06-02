import type { FormField } from '../types/FormField';
/**
 * Checks if an element is a form field element
 * @param element
 */
export declare const isFormField: (element: Element | EventTarget | null) => element is FormField;
