import { simulateEvent } from '.';

import type { FormField } from '..';

/**
 * Sets a value to a FormField element and emits `click`, `input` and `change` Events.
 *
 * @param element The FormField to update.
 * @param value `boolean` for Checkboxes and Radios, `string` for the rest.
 */
export const setFormFieldValue = (element: FormField, value: string | boolean): void => {
  const { type } = element;

  if (typeof value === 'boolean') {
    if (
      !(element instanceof HTMLInputElement) ||
      (type !== 'radio' && type !== 'checkbox') ||
      (type === 'checkbox' && value === false) ||
      value === element.checked
    )
      return;

    element.checked = value;
  } else {
    if (type === 'radio' || type === 'checkbox' || element.value === value) return;

    element.value = value;
  }

  // Emit DOM events
  simulateEvent(element, ['click', 'input', 'change']);
};
