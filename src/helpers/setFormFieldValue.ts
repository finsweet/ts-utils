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

  const isRadio = type === 'radio';
  const isCheckbox = type === 'checkbox';

  if (isRadio || isCheckbox) {
    if (
      !(element instanceof HTMLInputElement) ||
      typeof value !== 'boolean' ||
      value === element.checked ||
      (isRadio && value === false)
    ) {
      return;
    }

    element.checked = value;
  } else {
    if (element.value === value) return;

    element.value = value.toString();
  }

  // Emit DOM events
  simulateEvent(element, ['click', 'input', 'change']);
};
