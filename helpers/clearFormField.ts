import { FORM_CSS_CLASSES } from '../webflow/css';
import { simulateEvent } from './simulateEvent';

import type { FormField } from '../types';

const {
  radioInput: radioInputCSSClass,
  checkboxOrRadioFocus: focusCSSClass,
  checkboxOrRadioChecked: checkedCSSClass,
} = FORM_CSS_CLASSES;

/**
 * Clears the form field's value and emits an input and changed event.
 * If the field is a checkbox or a radio, it will unselect it.
 * @param field
 */
export const clearFormField = (field: FormField): void => {
  const { type } = field;

  if (field instanceof HTMLInputElement && ['checkbox', 'radio'].includes(type)) {
    if (!field.checked) return;

    // Reset the field's value
    field.checked = false;

    // Emit DOM events
    simulateEvent(field, ['click', 'input', 'change']);

    if (type === 'checkbox') return;

    // Clear custom radio button classes
    const { parentElement } = field;
    if (!parentElement) return;

    const radioInput = parentElement.querySelector(`.${radioInputCSSClass}`);
    if (!radioInput) return;

    radioInput.classList.remove(focusCSSClass, checkedCSSClass);

    return;
  }

  // Reset the field's value
  field.value = '';

  // Emit DOM events
  simulateEvent(field, ['input', 'change']);
};
