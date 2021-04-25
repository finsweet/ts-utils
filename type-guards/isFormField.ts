import FormField from '../types/FormField';

/**
 * Checks if an element is a form field element
 * @param element
 */
// prettier-ignore
const isFormField = (element: Element | EventTarget | null): element is FormField => element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;

export default isFormField;
