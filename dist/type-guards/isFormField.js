/**
 * Checks if an element is a form field element
 * @param element
 */
// prettier-ignore
export const isFormField = (element) => element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
