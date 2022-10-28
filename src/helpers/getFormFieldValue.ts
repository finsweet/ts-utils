import { isHTMLInputElement } from '../type-guards';
import type { FormField } from '../types/FormField';

/**
 * Gets the value of a given input element.
 * @param {FormField} input
 */
export const getFormFieldValue = (input: FormField): string => {
  let { value } = input;

  // Perform actions depending on input type
  if (input.type === 'checkbox') value = (<HTMLInputElement>input).checked.toString();
  if (input.type === 'radio') {
    // Get the checked radio
    const checkedOption = input.closest('form')?.querySelector(`input[name="${input.name}"]:checked`);

    // If exists, set its value
    value = isHTMLInputElement(checkedOption) ? checkedOption.value : '';
  }

  return value.toString();
};
