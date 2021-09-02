import { simulateEvent } from './simulateEvent';

/**
 * Selects a custom radio or checkbox element
 * @param element Element to select
 * @param select - Defaults to true. If set to false, the input element will be unselected.
 * @returns The value of the element: Boolean for checkboxes and string for radios
 */
export const selectInputElement = (element: HTMLInputElement, select = true): string | boolean => {
  if (select !== element.checked) {
    // Set the new checked value
    element.checked = select;

    // Emit DOM events
    (['click', 'input', 'change'] as const).forEach((event) => simulateEvent(element, event));
  }

  return element.type === 'checkbox' ? element.checked : element.value;
};
